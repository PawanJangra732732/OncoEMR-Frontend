import { Sequelize } from "sequelize";

const username = encodeURIComponent(process.env.PG_USERNAME);
const password = encodeURIComponent(process.env.PG_PASSWORD);
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;

const sequelize = new Sequelize(
  `postgresql://${username}:${password}@${host}:${port}/${database}`,
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // You might need this if you encounter SSL issues
      },
    },
  }
);

export default sequelize;
