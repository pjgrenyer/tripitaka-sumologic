# Tripitaka Sumologic

[![NPM version](https://img.shields.io/npm/v/tripitaka-sumologic.svg?style=flat-square)](https://www.npmjs.com/package/tripitaka-sumologic)
[![NPM downloads](https://img.shields.io/npm/dm/tripitaka-sumologic.svg?style=flat-square)](https://www.npmjs.com/package/tripitaka-sumologic)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-brightgreen.svg)](https://github.com/prettier/prettier)

Tripitaka Sumologic provides a transport and processor for the [Tripitaka](https://www.npmjs.com/package/tripitaka) logger, which are suitable for publishing logs to [Sumologic](https://www.sumologic.com/).


## TL;DR

```js
const { Logger } = require("tripitaka");
const { sumoLogicProcessor, sumoLogicTransport } = require("tripitaka-sumologic");

const options = {
    endpoint: <sumo-endpoint>,
    sourceName: <source-name>,
    sessionKey: <session-key>,
    clientUrl: <client-url>,
    onError: () => {
        console.log('Sumo Error!');
    },
};

const logger = new Logger({
    processors: [sumoLogicProcessor()],
    transports: [sumoLogicTransport(options)]
});

const book = {
  title: "Monkey",
  author: "Wu Ch'eng-en",
  ISBN10: "9780140441116",
};

logger.info("Retrieved book", { book });
```