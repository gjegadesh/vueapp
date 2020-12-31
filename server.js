// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Server started and now listening on port 8080');
});
