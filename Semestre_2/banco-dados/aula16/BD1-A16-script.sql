DROP SCHEMA IF EXISTS aula16;
CREATE SCHEMA aula16;
USE aula16;

-- Criação da tabela CLIENTE
CREATE TABLE cliente (
    id       INT AUTO_INCREMENT,
    nome     VARCHAR(50) NOT NULL,
    email    VARCHAR(100) NOT NULL,
    telefone VARCHAR(15),
    PRIMARY KEY (id)
);

-- Criação da tabela PRODUTO
CREATE TABLE produto (
    codigo     INT AUTO_INCREMENT,
    nome       VARCHAR(50) NOT NULL,
    descricao  TEXT,
    preco      DECIMAL(10, 2),
    qtdEstoque DECIMAL(10, 2),
    PRIMARY KEY (codigo)
);

-- Criação da tabela VENDA
CREATE TABLE venda (
    nr         INT AUTO_INCREMENT,
    cliente_id INT,
    data_venda DATE,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id),
    PRIMARY KEY (nr)
);

-- Criação da tabela ITEMVENDA para associar produtos às vendas
CREATE TABLE itemvenda (
    id             INT AUTO_INCREMENT,
    venda_nr       INT,
    produto_codigo INT,
    quantidade     INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (venda_nr) REFERENCES Venda(nr),
    FOREIGN KEY (produto_codigo) REFERENCES produto(codigo),
    PRIMARY KEY (id)
);

-- Inserção de dados na tabela CLIENTE
INSERT INTO cliente (nome, email, telefone) VALUES
('Ana Silva', 'ana@email.com', '987654321'),
('Pedro Oliveira', 'pedro@email.com', '123456789'),
('Mariana Santos', 'mariana@email.com', '111222333'),
('Lucas Pereira', 'lucas@email.com', '555444333');

-- Inserção de dados na tabela PRODUTO
INSERT INTO produto (nome, descricao, preco, qtdEstoque) VALUES
('Notebook Dell Inspiron', 'Notebook de alta performance', 3499.99, 50),
('Smartphone Samsung Galaxy S21', 'Smartphone com câmera de 108 MP', 1999.99, 30),
('Smart TV LG 55" 4K', 'TV 4K com tecnologia OLED', 2499.99, 20),
('Forno Elétrico Brastemp', 'Forno de embutir com 5 funções de assamento', 799.99, 15),
('Cadeira Gamer Redragon', 'Cadeira ergonômica para gamers', 499.99, 25);

-- Inserção de dados na tabela VENDA
INSERT INTO venda (cliente_id, data_venda) VALUES
(1, '2024-06-01'),
(2, '2024-06-02'),
(3, '2024-06-03'),
(4, '2024-06-04');

-- Inserção de dados na tabela ITEMVENDA
INSERT INTO itemvenda (venda_nr, produto_codigo, quantidade, preco_unitario) VALUES
(1, 1, 2, 3499.99),
(1, 2, 1, 1999.99),
(2, 3, 3, 2499.99),
(2, 4, 1, 799.99),
(3, 1, 1, 3499.99),
(3, 2, 2, 1999.99),
(3, 4, 1, 799.99),
(4, 3, 2, 2499.99),
(4, 5, 3, 499.99);

-- Exercícios

/* 00. Gere o diagrama Entidade RElacionamento do banco */

/* 01. Listar todos os clientes e seus e-mails */

SELECT nome, email 
FROM cliente;

/* 02. Encontrar o nome e a quantidade em estoque de todos os produtos */

SELECT nome, qtdEstoque 
FROM produto;

/* 03. Calcular o total gasto em cada venda */

SELECT venda_nr, SUM(preco_unitario)
FROM itemvenda
GROUP BY venda_nr;

/* 04. Encontrar os produtos que têm um preço superior a 1000 */
SELECT preco
FROM produto
WHERE preco > 1000;

/* 05. Listar todas as vendas e os produtos associados a cada venda */
SELECT venda.nr, produto.nome, itemvenda.quantidade
FROM venda
JOIN itemvenda ON venda.nr = itemvenda.venda_nr 
JOIN produto ON itemvenda.produto_codigo = produto.codigo;

/* 06. Liste o código e nome de todos os clientes, 
juntamente com a data e o número de cada venda realizada. 
Inclua apenas as vendas que têm clientes associados, 
mostrando o código do cliente, nome do cliente, data da venda e número da venda */
SELECT cliente.id, cliente.nome, venda.nr, venda.data_venda
FROM cliente
JOIN venda ON venda.cliente_id = cliente.id;


/* 07. Encontrar as vendas realizadas para um cliente específico (por exemplo, cliente com id 2) */
SELECT venda.nr, itemvenda.quantidade, cliente.nome
FROM venda
JOIN cliente ON venda.cliente_id = cliente.id
JOIN itemvenda ON venda.nr = itemvenda.venda_nr
WHERE cliente.id = 2;

/* 08. Listar os produtos em ordem decrescente de preço */
SELECT nome, preco
FROM produto 
ORDER BY preco DESC;

/* 09. Encontrar o cliente que mais gastou em compras */
select venda.nr, itemvenda.quantidade, cliente.nome, produto.nome, MAX(SUM(produto.preco))
from venda
join cliente on venda.cliente_id = cliente.id
join itemvenda on venda.nr = itemvenda.venda_nr
join produto on itemvenda.produto_codigo = produto.codigo;

/* 10. Atualizar para 2799.99 o preço da Smart TV LG 55" 4K (código 3): */

