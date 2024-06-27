import express from "express";
import cors from "cors"
import sequelize from "./sequelize.js";
import { DataTypes } from "sequelize";

import {Client} from './models/Client.js'
import {Service} from './models/Service.js'
import {PaymentMethod} from './models/PaymentMethod.js' 
import { ServicosPaymentMethods } from "./models/ServicosPaymentMethods.js";

const app = express();
app.use(cors())

app.use(express.json());

Service.belongsToMany(PaymentMethod, { through: ServicosPaymentMethods, foreignKey: 'id_servico', as: 'paymentMethods' });
PaymentMethod.belongsToMany(Service, { through: ServicosPaymentMethods, foreignKey: 'id_payment_method', as: 'services' });


app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    const client = await Client.findOne({ where: { email, senha } });
    if (client) {
        res.send({ message: "Login successful", client: client });
    } else {
        res.status(404).send({ message: "Client or password incorrect" });
    }
})

app.post('/forgot-password', async (req, res) => {
    const { email, senha } = req.body;
    const client = await Client.findOne({ where: { email } });
    if (client) {
        client.senha = senha;
        await client.save();
        res.send({ message: "Password changed successfuly", client: client });
    } else {
        res.status(404).send({ message: "Client not found" });
    }
})

app.get('/clients', async (req, res) => {
    const clients = await Client.findAll();
    res.send(clients);
})

app.get('/services', async (req, res) => {
    let services = await Service.findAll({
        include: {
            model: PaymentMethod,
            as: 'paymentMethods'
        }
    });

    
    services = services.map((service) => {
        return {
            id: service.id,
            titulo: service.titulo,
            valor: service.valor,
            descricao: service.descricao,
            id_cliente: service.id_cliente,
            paymentMethod: service.paymentMethods.map((paymentMethod) => paymentMethod.nome)
        }
    
    })
    res.send(services);
})

app.get('/payments', async (req, res) => {
    const payments = await PaymentMethod.findAll();
    res.send(payments);
})

app.post('/clients', async (req, res) => {
    const { nome, senha, cpf, email, nascimento, estado_civil } = req.body;
    const client = await Client.create({ nome, senha, cpf, email, nascimento, estado_civil });
    res.send(client);
})

app.post('/services', async (req, res) => {
    const { titulo, valor, descricao, id_cliente } = req.body;
    console.log({ titulo, valor, descricao, id_cliente })
    const service = await Service.create({ titulo, valor, descricao, id_cliente });
    for(let i = 0; i < req.body.paymentMethod.length; i++) {
        const paymentMethod = req.body.paymentMethod[i];
        await ServicosPaymentMethods.create({ id_servico: service.id, id_payment_method: paymentMethod });
    }
    
    res.send(service);
});

app.get('/services/client/:id', async (req, res) => {
    const { id } = req.params;
    let services = await Service.findAll({where: {id_cliente: id}, include: {model: PaymentMethod, as: 'paymentMethods'}});
    services = services.map((service) => {
        return {
            id: service.id,
            titulo: service.titulo,
            valor: service.valor,
            descricao: service.descricao,
            id_cliente: service.id_cliente,
            paymentMethod: service.paymentMethods.map((paymentMethod) => paymentMethod.nome)
        }
    
    })
    res.send(services);
})

app.put('/services/:id', async (req, res) => {
    const service = await Service.findByPk(req.params.id);
    if(!service) {
        return res.status(404).send({message: "Service not found"})
    }
    console.log(req.body);

    const { titulo, valor, descricao, id_cliente, payment } = req.body;
    service.titulo = titulo;
    service.valor = valor;
    service.descricao = descricao;
    service.id_cliente = id_cliente;
    await service.save();
    
    res.send(service);
});

app.post('/payment', async (req, res) => {
    const { sigla, nome, valor_maximo, meio_eletronico } = req.body;
    console.log({ sigla, nome, valor_maximo, meio_eletronico })
    const payment = await PaymentMethod.create({ sigla, nome, valor_maximo, meio_eletronico });
    res.send(payment);
});

sequelize.sync(() => {
    console.log("Sequelize connected successfuly")
})

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));