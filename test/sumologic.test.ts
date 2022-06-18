import { SumoLoggerOptions } from 'sumo-logger';
import { Level, Logger, transports } from 'tripitaka';
import { v4 } from 'uuid';
import { sumoLogicTransport } from '../src/transports/sumologic-transport';
import { sumoLogicProcessor } from '../src/processors/sumologic-processor';
import dotenv from 'dotenv';
dotenv.config();

const SUMO_LOGIC_ENDPOINT = process.env.SUMO_LOGIC_ENDPOINT ?? '';
const sourceName = 'tripitaka';
const clientUrl = 'http://tripitaka';

const options: SumoLoggerOptions = {
    endpoint: SUMO_LOGIC_ENDPOINT,
    sourceName: sourceName,
    sessionKey: v4(),
    clientUrl: clientUrl,
    onError: () => {
        // eslint-disable-next-line no-console
        console.log('Sumo Error!');
    },
};

describe('Transport Sumologic', () => {
    it('Smoke test', () => {
        const logger = new Logger({
            processors: [sumoLogicProcessor()],
            transports: [sumoLogicTransport(options, { threshold: Level.ERROR }), transports.stream()],
        });
        const book = {
            title: 'Monkey',
            author: "Wu Ch'eng-en",
            ISBN10: '9780140441116',
        };
        logger.info('(INFO) Retrieved book', { book });
        logger.warn('(WARN) Retrieved book', { book });
        logger.error('(ERROR) Retrieved book', { book });
    });
});
