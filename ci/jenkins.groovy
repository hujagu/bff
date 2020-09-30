import lan.*
import lan.utils.*

def repository = "${REPOSITORY}" // Nombre del repositorio (Desde Jenkins)
def branchName = "${BRANCH}" // Path del Branch (Desde Jenkins)
def branchPath = BasicConfig.cleanBranchNameGit(branchName) // Path del Branch (Desde Jenkins)

def email = "${NOTIFICATION_EMAIL}" // Lista de emails a notificar funcionamiento de jobs (Desde Jenkins)

def repoURL = "ssh://git@git.it.lan.com:2222/${PROJECT_KEY}/${repository}.git" // Armamos url del repo ingresado
def users = ['fmachuca','ggimenez','jacosta','jgarrido','jgraterol','jlenscak','mzilli','psosa'] // Lista de usuarios que tendrán permisos sobre los jobs

/* Variable */
def betaName = "" // Nombre del beta donde realizar el deploy (Sólo ingresar el beta si se desea realizar el deploy)
def pactRepository = "" // repositorio de pacto (Sólo ingresar si se necesitan pruebas de contrato)
def consumers = "" // Nombre del consumidor
def smokeURL = ""

def jobFactory = new JobFactory(this, repository, branchName, repoURL, email, users, pactRepository, betaName,
    consumers, smokeURL)

def unitTestJob = jobFactory.create(UnitTestJob)
unitTestJob.with {
    label('docker')
    steps {
        shell('make unit-test')
    }
}
def imageBuilder = jobFactory.partialCreate(ImageBuilderJob)
        .withShellCommand("make push-image")
        .createJob();

def rundeckOptions = [
    environment: 'int',
    instances: 3,
    memory: 512,
    cpu: 0.5,
    ports: ["8080/tcp=/ws/bff/v1/health"],
   env_vars: [],
    crane_version: '2',
    contact_email: 'javierrock7@gmail.com'

]

def phoenixDeployJob = jobFactory.partialCreate(DockerDeployJob)
    .withRundeckOptions(rundeckOptions)
    .createJob()

phoenixDeployJob.with {
    parameters {
        stringParam("SVN_REVISION", null, "Revision para hacer checkout")
    }
}
/* Job list for Dev Workflow */
def devJobList = [
    unitTestJob,
    imageBuilder,
    phoenixDeployJob
]

PrettyPrintUtil.prettyDisplayName('DockerDev', "${repository}-${branchName}-", devJobList)

/* Dev Workflow */
jobFactory.partialCreate(DockerDevWorkflowJob)
    .withJobList(devJobList)
    .withTimeout(60)
    .createJob()

jobFactory.partialCreate(MonitorView)
    .withFlowname('Dev')
    .withJobList(devJobList)
    .createJob()

/*Release*/
def releaseValidatorJob = jobFactory.partialCreate(ReleaseValidator)
    .createJob()
def jiraTicketCreatorJob = jobFactory.partialCreate(JiraTicketJob)
    .createJob()
def rundeckProdOptions = [
    environment: 'dal|wdc|cert',
    instances: 3,
    memory: 300,
    cpu: 0.2,
    ports: ['8080/tcp=/bff/v1/health'],
    env_vars: []

]
def phoenixProdDeployJob = jobFactory.partialCreate(DockerDeployJob)
    .withRundeckOptions(rundeckProdOptions)
    .createJob()

phoenixProdDeployJob.with {
    parameters {
        stringParam("SVN_REVISION", null, "Revision para hacer checkout")
    }
}

def ticketResolver = jobFactory.fabricar(TipoJob.JIRA_TICKET_RESOLVER)

def releaseJobList = [
    releaseValidatorJob,
    jiraTicketCreatorJob,
    phoenixProdDeployJob,
    ticketResolver
]
PrettyPrintUtil.prettyDisplayName('DockerProd', "${repository}-${branchName}-", releaseJobList)

jobFactory.partialCreate(DockerReleaseWorkflowJob)
    .withJobList(releaseJobList)
    .withTimeout(60)
    .createJob()

jobFactory.partialCreate(MonitorView)
    .withFlowname('DockerReleaseWorkflow')
    .withJobList(releaseJobList)
    .createJob()
