import sequelize from "../sequelize.js";

import { DataTypes } from "sequelize";

export const PaymentMethod = sequelize.define('payment_methods', {
    sigla: DataTypes.STRING,
    nome: DataTypes.STRING,
    valor_maximo: DataTypes.INTEGER,
    meio_eletronico: DataTypes.BOOLEAN,
}, {
    timestamps: false,
    tableName: 'payment_methods'
})