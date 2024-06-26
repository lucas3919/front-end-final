CREATE TABLE `cliente` (
	`id` INT(20) AUTO_INCREMENT,
	`nome` VARCHAR(20) NOT NULL,
	`senha` VARCHAR(8) NOT NULL,
	`cpf` VARCHAR(20) NOT NULL,
	`email` VARCHAR(20) NOT NULL,
	`nascimento` DATE NOT NULL,
	`estado_civil` VARCHAR(20) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `servicos` (
	`id` INT(20) AUTO_INCREMENT,
	`titulo` TEXT NOT NULL,
	`valor` DECIMAL(8.2) NOT NULL,
	`descricao` TEXT NOT NULL,
	`id_cliente` INT(20) NOT NULL,
	FOREIGN KEY (`id_cliente`) REFERENCES `cliente`(`id`),
	PRIMARY KEY (`id`)
);