import sequelize from "../sequelize.js";
import {Client} from './Client.js'

import { DataTypes } from "sequelize";

export const Service = sequelize.define('servicos', {
    titulo: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    descricao: DataTypes.STRING,
    id_cliente: DataTypes.INTEGER,

}, {
    timestamps: false
})

Service.belongsTo(Client, { foreignKey: 'id_cliente' });