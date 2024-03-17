import { Processor } from 'tripitaka';

const sumoLogicProcessor = (): Processor => {
    return ({ level, message, record }) => {
        const clone = Object.assign({}, record);
        delete clone.message;
        return `[${level.name}] - ${message} ${JSON.stringify(clone, null, 2)}`;
    };
};

export { sumoLogicProcessor };
