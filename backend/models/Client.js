import sequelize from "../sequelize.js";

import { DataTypes } from "sequelize";

export const Client = sequelize.define('cliente', {
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    estado_civil: DataTypes.STRING,

}, {
    timestamps: false,
    tableName: 'cliente'
})