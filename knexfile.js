// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString:
        "postgres://default:oKxBNMv20bdw@ep-fancy-pine-a1ckflya-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      connectionString:
        "postgres://default:oKxBNMv20bdw@ep-fancy-pine-a1ckflya-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString:
        "postgres://default:oKxBNMv20bdw@ep-fancy-pine-a1ckflya-pooler.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require",
    },
  },
};
