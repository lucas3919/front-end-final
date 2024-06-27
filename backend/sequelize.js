import { Sequelize } from "sequelize"; // importar o sequelize// importar o dotenv para localizar as variáveis de ambiente

const dbName = "escola"; // passar os dados do .env para as constantes
const dbUser = "root";
const dbHost = "localhost";
const dbPassword = "";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;