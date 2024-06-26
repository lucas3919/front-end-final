import { Sequelize } from "sequelize"; // importar o sequelize// importar o dotenv para localizar as variáveis de ambiente

const dbName = "ramaccio_escola"; // passar os dados do .env para as constantes
const dbUser = "ramaccio_escola";
const dbHost = "br812.hostgator.com.br";
const dbPassword = "kr!zf3%dZaq*";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;