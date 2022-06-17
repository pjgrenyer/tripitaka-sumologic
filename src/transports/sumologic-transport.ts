import { Level, Transport } from 'tripitaka';
import SumoLogger, { SumoLoggerOptions } from 'sumo-logger';

interface SumoLogicTransportParams {
    threshold?: Level;
}

const sumoLogicTransport = (options: SumoLoggerOptions, params: SumoLogicTransportParams = {}): Transport => {
    const { threshold = Level.TRACE } = params;
    const sumoLogger = new SumoLogger(options);

    return ({ level, record }) => {
        if (!level.satisfies(threshold)) return;
        sumoLogger.log(record);
        sumoLogger.flushLogs();
    };
};

export { sumoLogicTransport };
