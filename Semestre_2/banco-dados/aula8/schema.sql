DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas;
USE vendas;

CREATE TABLE produto (
    codigo INT AUTO_INCREMENT,
    descricao VARCHAR(45) NOT NULL,
    valor DECIMAL(10, 2),
    qtdEstoque INT,

    PRIMARY KEY (codigo)
);

CREATE TABLE venda (
    id INT AUTO_INCREMENT,
    dataVenda DATE NOT NULL,
    nrNF VARCHAR(45),

    PRIMARY KEY (id)
);

CREATE TABLE venda_itens (
    produto_codigo INT,
    venda_id INT,
    qtdVenda INT,

    PRIMARY KEY (produto_codigo, venda_id),

    FOREIGN KEY (produto_codigo) REFERENCES produto(codigo),
    FOREIGN KEY (venda_id) REFERENCES venda(id)
);

/* 02 - Cadastrar 18 produtos (sugestão no slide seguinte); */
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Camiseta Polo', 49.99, 100);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Calça Jeans', 89.99, 0);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Vestido Floral', 69.99, 60);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Moletom com Capuz', 79.99, 70);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Sapato Social', 149.99, 40);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Bolsa de Couro', 99.99, 90);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Óculos de Sol', 59.99, 110);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Jaqueta de Couro', 199.99, 30);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Saia Plissada', 39.99, 80);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Blusa de Tricô', 49.99, 70);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Calçado Infantil', 29.99, 120);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Blazer Feminino', 89.99, 50);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Calça Social', 79.99, 60);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Relógio de Pulso', 149.99, 40);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Bermuda Esportiva', 34.99, 0);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Meia Esportiva', 9.99, 150);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Chapéu de Praia', 19.99, 100);
INSERT INTO produto (descricao, valor, qtdEstoque) VALUES ('Carteira de Couro', 39.99, 80);

/* 03 - Cadastrar 3 Vendas (sugestão no slide seguinte); */
INSERT INTO venda (dataVenda, nrNF) VALUES("2024-05-20", "543B");
INSERT INTO venda (dataVenda, nrNF) VALUES("2024-05-20", "8567");
INSERT INTO venda (dataVenda, nrNF) VALUES("2024-05-21", "9823");

/* 04 - Cadastrar 10 itens de venda (sugestão no slide seguinte); */
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(4, 1, 10);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(1, 1, 5);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(3, 1, 6);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(2, 2, 9);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(4, 2, 10);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(1, 2, 5);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(3, 3, 6);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(2, 3, 9);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(1, 3, 6);
INSERT INTO venda_itens (produto_codigo, venda_id, qtdVenda) VALUES(9, 3, 9);

-- 05 - Listar todos os campos de todos os produtos em ordem alfabética (crescente) de descricao;

SELECT * FROM produto, venda, venda_itens ORDER BY produto.descricao ASC;

-- 06 - Listar descricao e qtdEstoque dos produtos com qtdEstoque menor do que 90;

SELECT descricao, qtdEstoque FROM produto WHERE qtdEstoque < 90;

-- 07 - Alterar para "Produto esgotado" o nome de todos os produtos com qtdEstoque menor ou igual a zero;

UPDATE produto SET "Produto esgotado" WHERE qtdEstoque <= 0;

-- 08 - Listar a dataVenda e nrNF de todas as vendas em ordem decrescente de dataVenda;
-- 09 - Alterar para "2024-04-22" a dataVenda de todas as vendas;
-- 10 - Listar todos os registros da tabela item, em ordem decrescente de qtdVenda.
-- 11 – Liste os produtos que a descrição comece com a letra “C”.
-- 12 – Liste os produtos que contenham “ de ” na descrição;
-- 13 – Liste o valor da maior quantidade em estoque;
-- 14 – Liste o valor médio da quantidade de produtos em estoque;
-- 15 – Liste a quantidade total vendida (soma das quantidades vendidas de todos os produtos);
-- 16 – Liste as diferentes quantidades em estoque;
-- 17 – Liste os diferentes valores de produto;
-- 18 – Liste o valor do produto mais caro;
-- 19 – Liste o valor do produto mais barato;
-- 20 – Liste produtos que NÃO comecem com a letra “C”.