# tripitaka-sumologic

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