import sequelize from "../sequelize.js";
import {Client} from './Client.js'

import { DataTypes } from "sequelize";
import { ServicosPaymentMethods } from "./ServicosPaymentMethods.js";
import { PaymentMethod } from "./PaymentMethod.js";

export const Service = sequelize.define('servicos', {
    titulo: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    descricao: DataTypes.STRING,
    id_cliente: DataTypes.INTEGER,

}, {
    timestamps: false
})