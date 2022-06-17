import { SumoLoggerOptions } from 'sumo-logger';
import { Logger } from 'tripitaka';
import { v4 } from 'uuid';
import { sumoLogic } from '../../src/transports/sumologic';
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
            transports: [sumoLogic(options)],
        });
        const book = {
            title: 'Monkey',
            author: "Wu Ch'eng-en",
            ISBN10: '9780140441116',
        };
        logger.info('Retrieved book', { book });
    });
});
