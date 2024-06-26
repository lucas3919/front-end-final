import sequelize from "../sequelize.js";
import {Service} from './Service.js'
import {PaymentMethod} from './PaymentMethod.js'

import { DataTypes } from "sequelize";

export const ServicosPaymentMethods = sequelize.define('servicos_payment_methods', {
    id_servico: DataTypes.INTEGER,
    id_payment_method: DataTypes.INTEGER,
}, {
    timestamps: false,
    tableName: 'servicos_payment_methods'
})

ServicosPaymentMethods.belongsTo(Service, { foreignKey: 'id_servico' });
ServicosPaymentMethods.belongsTo(PaymentMethod, { foreignKey: 'id_payment_method' });