import chai, { expect } from 'chai';
import chaiaspromised from 'chai-as-promised';

global.AssertionError = chai.AssertionError;
global.expect = expect;
global.should = chai.should();
global.ignore = ['src/middlewares/accessLogger.js', 'src/middlewares/responseHeaders.js'];
chai.use(chaiaspromised);
chai.config.includeStack = true;
