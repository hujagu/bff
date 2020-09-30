import winston from 'winston';
import os from 'os';
import Config from 'core/config';

const config = new Config();
const levels = { fatal: 0, error: 0, warning: 1, info: 2, trace: 3, debug: 4 };
const timestamp = () => new Date().toJSON().replace(/T/, ' ').replace(/Z/, '');

export default class Logger {
    constructor(headers = {}) {
        this.headers = headers;
        return this.logging();
    }

    logging() {
        const self = this;
        return new (winston.Logger)({
            levels,
            transports: [
                new (winston.transports.Console)({
                    timestamp,
                    formatter: self.formatter.bind(self),
                    level: config.app.logLevel // Max level to log
                })
            ]
        });
    }

    formatter(options) {
        return `${options.timestamp()} level=${options.level.toUpperCase()}, cid=${os.hostname()}` +
        `${this.headers !== {} ? this.formatHeaders() : ''}` +
        `${(undefined !== options.message ? `, ${options.message}` : '')}`;
    }

    formatHeaders() {
        const headers = Object.keys(this.headers);
        let result = '';
        if (headers.length > 0) {
            result = headers.map(key => `, ${key}=${this.headers[key]}`).join('');
        }
        return result;
    }
}
