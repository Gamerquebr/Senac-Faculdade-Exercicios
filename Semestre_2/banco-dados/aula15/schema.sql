DROP SCHEMA IF EXISTS aula15;
CREATE SCHEMA aula15;
USE aula15;

CREATE TABLE cidade (
    id INT NOT NULL,
    nome VARCHAR(100),

    PRIMARY KEY(id)
);

CREATE TABLE produto (
    codigo INT NOT NULL,
    descricao VARCHAR(50) NOT NULL,
    qtdEstoque DECIMAL (10, 2),
    precoVenda DECIMAL (10, 2),

    PRIMARY KEY(codigo)
);

CREATE TABLE cliente (
    codigo INT NOT NULL,
    cidade_id INT NOT NULL,
    nome VARCHAR(100),
    email VARCHAR(255),

    PRIMARY KEY(codigo),
    FOREIGN KEY(cidade_id) REFERENCES cidade(id)
);

CREATE TABLE pedido (
    numero INT NOT NULL,
    cliente_codigo INT NOT NULL,
    dataHora DATETIME,
    status CHAR(2),

    PRIMARY KEY(numero),
    FOREIGN KEY(cliente_codigo) REFERENCES cliente(codigo)
);

CREATE TABLE pedido_produto(
    pedido_numero INT NOT NULL,
    produto_codigo INT NOT NULL,
    quantidade DECIMAL(10, 2),
    precoVendido DECIMAL(10, 2),

    FOREIGN KEY(pedido_numero) REFERENCES pedido(numero),
    FOREIGN KEY(produto_codigo) REFERENCES produto(codigo)
);




INSERT INTO cidade (id, nome) VALUES
(1, 'Pelotas'),
(2, 'Arroio Grande'),
(3, 'Capão do Leão'),
(4, 'Herval'),
(5, 'Chuí'),
(6, 'Chuy'),
(7, 'Rio Grande'),
(8, 'Porto Alegre'),
(9, 'Morro Redondo'),
(10, 'Piratini'),
(11, 'Canguçu'),
(12, 'Arroio do Padre'),
(13, 'São Lourenço do Sul'),
(14, 'Pedro Osório'),
(15, 'Bagé'),
(16, 'Santa Maria');

INSERT INTO cliente (codigo, cidade_id, nome, email) VALUES
(101, 1, 'Carlos Silva', 'carlos.silva@email.com'),
(102, 2, 'Maria Santos', 'maria.santos@email.com'),
(103, 3, 'Pedro Gómez', 'pedro.gomez@email.com'),
(104, 4, 'Ana Hernández', 'ana.hernandez@email.com'),
(105, 5, 'Luis García', 'luis.garcia@email.com'),
(106, 6, 'Sofía López', 'sofia.lopez@email.com'),
(107, 7, 'Diego Rodríguez', 'diego.rodriguez@email.com'),
(108, 8, 'Valentina Martínez', 'valentina.martinez@email.com'),
(109, 9, 'Manuel Fernandes', 'manuel.fernandes@email.com'),
(110, 10, 'Elena Perez', 'elena.perez@email.com'),
(111, 11, 'Javier Rodriguez', 'javier.rodriguez@email.com'),
(112, 12, 'Sophia Brown', 'sophia.brown@email.com'),
(113, 13, 'Lucas Martin', 'lucas.martin@email.com'),
(114, 14, 'Martina Rossi', 'martina.rossi@email.com'),
(115, 15, 'Luca Fischer', 'luca.fischer@email.com'),
(116, 16, 'Mia Johnson', 'mia.johnson@email.com');

INSERT INTO produto (codigo, descricao, qtdEstoque, precoVenda) VALUES
(201, 'Camiseta Estampada', 100, 30.00),
(202, 'Calça Jeans Slim', 80, 90.00),
(203, 'Tênis Esportivo', 60, 150.00),
(204, 'Óculos de Sol Estiloso', 70, 70.00),
(205, 'Short Esportivo', 120, 40.00),
(206, 'Sapato Casual', 50, 120.00),
(207, 'Relógio de Pulso do Faustão', 90, 80.00),
(208, 'Bolsa Elegante', 40, 60.00),
(209, 'Boné de Abacaxi', 150, 15.00),
(210, 'Mochila Estampada', 70, 45.00),
(211, 'Camiseta Estampada', 100, 30.00),
(212, 'Calça Jeans Slim', 80, 90.00),
(213, 'Tênis Esportivo', 60, 150.00),
(214, 'Óculos de Sol Fashion', 70, 70.00),
(215, 'Bermuda de Praia', 120, 40.00),
(216, 'Sapato de corrida', 50, 120.00),
(217, 'Relógio Analógico', 90, 80.00),
(218, 'Bolsa Elegante', 40, 60.00),
(219, 'Boné de Verão', 150, 15.00),
(220, 'Mochila Esportiva', 70, 45.00);

INSERT INTO pedido (numero, cliente_codigo, dataHora, status) VALUES
(301, 101, '2024-06-05 10:30:00', 'AP'),
(302, 101, '2024-06-05 11:15:00', 'PC'),
(303, 103, '2024-06-05 12:00:00', 'EA'),
(304, 104, '2024-06-05 12:45:00', 'PE'),
(305, 101, '2024-06-06 09:30:00', 'EA'),
(306, 106, '2024-06-06 10:15:00', 'PE'),
(307, 107, '2024-06-06 11:00:00', 'AP'),
(308, 102, '2024-06-06 11:45:00', 'PC'),
(309, 101, '2024-06-05 10:30:00', 'AP'),
(310, 116, '2024-06-05 11:15:00', 'PC'),
(311, 103, '2024-06-05 12:00:00', 'EA'),
(312, 104, '2024-06-05 12:45:00', 'PE'),
(313, 105, '2024-06-06 09:30:00', 'EA'),
(314, 106, '2024-06-06 10:15:00', 'PE'),
(315, 107, '2024-06-06 11:00:00', 'AP'),
(316, 108, '2024-06-06 11:45:00', 'PC');

INSERT INTO pedido_produto (pedido_numero, produto_codigo, quantidade, precoVendido) VALUES
(301, 208, 2, 30.00),
(301, 202, 1, 90.00),
(302, 203, 1, 150.00),
(302, 204, 2, 70.00),
(302, 210, 3, 40.00),
(303, 206, 1, 120.00),
(303, 207, 2, 80.00),
(304, 208, 1, 60.00),
(305, 209, 4, 15.00),
(306, 210, 2, 45.00),
(307, 201, 2, 30.00),
(307, 202, 1, 90.00),
(307, 203, 1, 150.00),
(308, 204, 2, 70.00),
(309, 205, 3, 40.00),
(310, 206, 1, 120.00),
(311, 207, 2, 80.00),
(312, 208, 1, 60.00),
(313, 209, 4, 15.00),
(314, 208, 1, 60.00),
(315, 209, 4, 15.00),
(316, 210, 2, 45.00);

SELECT codigo, nome, numero, dataHora, status FROM cliente 
JOIN pedido ON codigo = cliente_codigo
WHERE status = "AP" OR status = "PC";


SELECT cliente.nome, cidade.nome AS cidade, pedido.status FROM cliente 
JOIN pedido ON cliente.codigo = pedido.cliente_codigo
JOIN cidade ON cliente.cidade_id = cidade.id
WHERE cidade.nome = "pelotas";