const app = require('./app');
const logger = require('./utils/logger');

const port = process.env.port || '3050';

app.listen(port);

logger.info(`Server listening on port ${port}`);