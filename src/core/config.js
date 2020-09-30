import path from 'path';
import env from 'dotenv';
import fs from 'fs';

let instance = null;

// Ensure enrivonment file exists and load
const environmentFileCheck = () => {
    const envPath = path.join(__dirname, '../../.env');
    if (fs.existsSync(envPath)) {
        env.config({
            path: envPath
        });
    }
};

class Config {
    constructor() {
        if (!instance) {
            // Check environment and load if exists
            environmentFileCheck();

            // Save singleton instance
            instance = this;

            // Define app configuration parameters
            this.app = {
                name: 'Bff',
                prefixURL: '/ws/bff/v1',
                port: process.env.NODE_PORT || '8080',
                logLevel: process.env.LOG_LEVEL || 'debug'
            };
        }

        return instance;
    }
}

export default Config;
