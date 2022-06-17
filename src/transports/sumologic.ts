import { Transport } from 'tripitaka';
import SumoLogger, { SumoLoggerOptions } from 'sumo-logger';

const sumoLogic = (options: SumoLoggerOptions): Transport => {
    const sumoLogger = new SumoLogger(options);

    return ({ level, record }) => {
        sumoLogger.log(record);
        sumoLogger.flushLogs();
    };
};

export { sumoLogic };
