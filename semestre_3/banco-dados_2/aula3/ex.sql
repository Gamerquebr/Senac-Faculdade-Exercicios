-- SLIDES AULA
DROP SCHEMA IF EXISTS aula04;
CREATE SCHEMA IF NOT EXISTS aula04;
USE aula04;
-- Criando a tabela produto
DROP TABLE IF EXISTS produto;
CREATE TABLE IF NOT EXISTS produto (
    codigo CHAR(3),
    descricao VARCHAR(50) NOT NULL,
    qtd_estoque INT(11) NOT NULL,
    CHECK (qtd_estoque > 0),
    PRIMARY KEY (codigo)
);
-- Inserindo na tabela produto
INSERT INTO produto (codigo, descricao, qtd_estoque) VALUES ('001', 'Feijão', 10);
INSERT INTO produto (codigo, descricao, qtd_estoque) VALUES ('002', 'Arroz', 5);
INSERT INTO produto (codigo, descricao, qtd_estoque) VALUES ('003', 'Farinha', 15);
SELECT * FROM produto ;
-- Criando a tabela itensVenda
DROP TABLE IF EXISTS itensVenda;
CREATE TABLE IF NOT EXISTS itensVenda (
    id INT,
    venda INT,
    produto_codigo CHAR(3) NOT NULL,
    qtd_vendida INT(11) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_itensVenda_produto
    FOREIGN KEY (produto_codigo) REFERENCES produto (codigo)
);

-- Criando trigger
DELIMITER $$
CREATE TRIGGER trg_itensvenda_AI AFTER INSERT
ON itensVenda
FOR EACH ROW
BEGIN
UPDATE produto SET produto.qtd_estoque = produto.qtd_estoque - NEW.qtd_vendida
    WHERE produto.codigo = NEW.produto_codigo;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trg_itensvenda_AD AFTER DELETE
ON itensVenda
FOR EACH ROW
BEGIN
UPDATE produto SET produto.qtd_estoque = produto.qtd_estoque + OLD.qtd_vendida
    WHERE produto.codigo = OLD.produto_codigo;
END$$
DELIMITER ;

/* 1 – Criar um gatilho/trigger para atualizar o campo qtd_estoque na
tabela produto sempre que for feita uma atualização/update na tabela
itensvenda. */


/* 2 – Criar uma tabela chamada log.
Esta tabela deve ter os campos: produto_cod, nomeAnterior, nomeNovo e
dataHora.
A tabela log deverá armazenar as alterações que forem feitas
no campo descricao da tabela produto. */

DROP TABLE if EXISTS log;
CREATE TABLE IF NOT EXISTS log (
    produto_cod CHAR(3),
    nomeAnterior VARCHAR(50),
    nomeNovo VARCHAR(50),
    dataHora DATETIME 
);

DELIMITER $$

CREATE TRIGGER trg_produto_BU AFTER UPDATE
ON produto
FOR EACH ROW
BEGIN
    INSERT INTO log VALUES(OLD.codigo, OLD.descricao, NEW.descricao);
END$$

DELIMITER ;