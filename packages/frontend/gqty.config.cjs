/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
 * @type {import("@gqty/cli").GQtyConfig}
 */
const config = {
  scalarTypes: { DateTime: 'timestamp' },
  introspection: {
    endpoint: path.join(__dirname, '../backend/src/schema.gql'),
    headers: {},
  },
  destination: './src/shared/gqty/index.ts',
  subscriptions: false,
  javascriptOutput: false,
  enumsAsConst: false,
};

module.exports = config;
