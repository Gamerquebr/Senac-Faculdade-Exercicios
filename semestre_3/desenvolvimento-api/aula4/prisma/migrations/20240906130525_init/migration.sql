-- CreateTable
CREATE TABLE `viagens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destino` VARCHAR(255) NOT NULL,
    `transporte` ENUM('TERRESTRE', 'MARITIMO', 'AEREO') NOT NULL,
    `dataSaida` DATETIME(3) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `duracao` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
