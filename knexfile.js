module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sandwormdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
