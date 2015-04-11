// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      database: 'space_app',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      database: 'space_app',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host:     '127.0.0.1',
      database: 'space_app',
      user:     'root',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
  }
};
