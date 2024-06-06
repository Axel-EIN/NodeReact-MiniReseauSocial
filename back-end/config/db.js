import { Sequelize } from "sequelize";
import { ENV } from "./env.js";

const connection = new Sequelize(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASSWORD,
  {
      host: ENV.DB_HOST,
      dialect: ENV.DB_DIALECT
  }
);

try {
  await connection.authenticate();
  console.log('La connexion à la base de données a été établie !');
} catch (error) {
  console.error('Impossible de se connecter à la base de données :', error);
}

// await sequelizeConnection.sync(); // synchronise la base de données par rapport à nos modèles
await sequelizeConnection.sync( {alter:true} ); // force la modification des champs et la création des tables / champs, peut créer des problèmes sur les clés uniques

console.log('Synchronisation OK !');

export default connection;