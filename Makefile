APPLICATION_NAME=bff

unit-test:
	./ci/jobs/npm-launcher run test:unit

mutation:
	./ci/jobs/npm-launcher test:mutation

security:
	./ci/jobs/npm-launcher security

push-image:
	./ci/jobs/image-builder

run:
	./ci/jobs/npm-launcher start

dev:
	./ci/jobs/npm-dev-launcher start
