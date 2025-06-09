// server.js
require('dotenv').config();
const express = require('express');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 5000;


const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};


app.use(express.json());


async function withDb(handler) {
  let pool;
  try {
    pool = await sql.connect(dbConfig);
    return await handler(pool);
  } finally {
    if (pool) pool.close();
  }
}


app.get('/api/tables', async (req, res) => {
  try {
    const result = await withDb(pool =>
      pool.request()
          .query(`
            SELECT TABLE_SCHEMA, TABLE_NAME 
            FROM INFORMATION_SCHEMA.TABLES 
            WHERE TABLE_TYPE='BASE TABLE'
            ORDER BY TABLE_SCHEMA, TABLE_NAME;
          `)
    );
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});


app.get('/api/columns/:schema/:table', async (req, res) => {
  const { schema, table } = req.params;
  try {
    const result = await withDb(pool =>
      pool.request()
          .input('schema', sql.NVarChar, schema)
          .input('table', sql.NVarChar, table)
          .query(`
            SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_SCHEMA = @schema AND TABLE_NAME = @table
            ORDER BY ORDINAL_POSITION;
          `)
    );
    res.json(result.recordset);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB error' });
  }
});


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
