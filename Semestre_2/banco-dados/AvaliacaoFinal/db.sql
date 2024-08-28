

DROP DATABASE IF EXISTS av2;
CREATE DATABASE IF NOT EXISTS av2;
USE av2;

CREATE TABLE departamento (
  id   INT AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE funcionario (
  id              INT AUTO_INCREMENT,
  departamento_id INT NOT NULL,
  nome            VARCHAR(100) NOT NULL,
  salario         DECIMAL(10, 2),
  PRIMARY KEY (id),
  FOREIGN KEY (departamento_id) REFERENCES departamento(id)
);

CREATE TABLE projeto (
  id          INT AUTO_INCREMENT,
  nome        VARCHAR(100) NOT NULL,
  data_inicio DATE,
  data_fim    DATE,
  PRIMARY KEY (id)
);

CREATE TABLE participacao (
  funcionario_id INT NOT NULL,
  projeto_id     INT NOT NULL,
  horas_semanais INT,
  PRIMARY KEY (funcionario_id, projeto_id),
  FOREIGN KEY (funcionario_id) REFERENCES funcionario(id),
  FOREIGN KEY (projeto_id) REFERENCES projeto(id)
);

INSERT INTO departamento(nome) VALUES('TI');
INSERT INTO departamento(nome) VALUES('RH');
INSERT INTO departamento(nome) VALUES('Marketing');
INSERT INTO departamento(nome) VALUES('Financeiro');

INSERT INTO funcionario(departamento_id, nome, salario) VALUES(1, 'Ana Silva', 5000.00);
INSERT INTO funcionario(departamento_id, nome, salario) VALUES(2, 'Carlos Oliveira', 4500.00);
INSERT INTO funcionario(departamento_id, nome, salario) VALUES(3, 'Maria Santos', 5500.00);
INSERT INTO funcionario(departamento_id, nome, salario) VALUES(4, 'Pedro Almeida', 6000.00);

INSERT INTO projeto(nome, data_inicio, data_fim) VALUES('Projeto Hackabrains', '2023-01-01', '2023-06-30');
INSERT INTO projeto(nome, data_inicio, data_fim) VALUES('Projeto Tequila', '2023-02-15', '2023-08-31');
INSERT INTO projeto(nome, data_inicio, data_fim) VALUES('Projeto Entrecot', '2023-04-01', '2023-11-15');
INSERT INTO projeto(nome, data_inicio, data_fim) VALUES('Projeto Final de Ano', '2023-06-01', '2023-12-31');

INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(1, 1, 20);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(2, 1, 25);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(3, 2, 30);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(4, 3, 15);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(1, 4, 10);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(2, 4, 20);
INSERT INTO participacao(funcionario_id, projeto_id, horas_semanais) VALUES(3, 4, 15);

/* 1. Elabore uma consulta que retorne o nome do departamento ao lado do nome do funcionário. 
A listagem deve ser em ordem alfabética de departamento seguido pelo nome do funcionário.
+--------------+-----------------+
| departamento | funcionario     |
+--------------+-----------------+
| Financeiro   | Pedro Almeida   |
| Marketing    | Maria Santos    |
| RH           | Carlos Oliveira |
| TI           | Ana Silva       |
+--------------+-----------------+*/

SELECT departamento.nome AS funcionario, funcionario.nome AS departamento
FROM funcionario
JOIN departamento ON departamento.id = funcionario.departamento_id
ORDER BY funcionario.nome DESC;


/* 2. Escreva uma consulta que traga o somatório do salário de todos os funcionários.
+---------------+
| Salário Total |
+---------------+
|      21000.00 |
+---------------+*/

SELECT SUM(salario) AS "Salário Total"
FROM funcionario;

/* 3. Elabore uma consulta que retorne o nome do departamento, nome do funcionário e horas semanais de participação em projetos. 
A listagem deve ser em ordem alfabética de departamento seguido pelo nome do funcionário.
+--------------+-----------------+-------+
| Departamento | Funcionário     | Horas |
+--------------+-----------------+-------+
| Financeiro   | Pedro Almeida   |    15 |
| Marketing    | Maria Santos    |    45 |
| RH           | Carlos Oliveira |    45 |
| TI           | Ana Silva       |    30 |
+--------------+-----------------+-------+*/

SELECT departamento.nome AS funcionario, funcionario.nome AS departamento, SUM(participacao.horas_semanais) AS Horas
FROM funcionario
JOIN departamento ON departamento.id = funcionario.departamento_id
JOIN participacao ON participacao.funcionario_id = funcionario.id
GROUP BY departamento.nome, funcionario.nome
ORDER BY funcionario.nome DESC;

/* 4. Escreva uma consulta que retorne o nome do projeto ao lado do número de funcionários que participam dele. 
Os dados devem ser agrupados por projeto e em ordem alfabética de projeto.
+----------------------+------------------------+
| projeto              | Número de Funcionários |
+----------------------+------------------------+
| Projeto Entrecot     |                      1 |
| Projeto Final de Ano |                      3 |
| Projeto Hackabrains  |                      2 |
| Projeto Tequila      |                      1 |
+----------------------+------------------------+*/

SELECT projeto.nome AS projeto, COUNT(participacao.funcionario_id) AS "Número de Funcionários"
FROM projeto
JOIN participacao ON participacao.projeto_id = projeto.id
GROUP BY projeto.nome
ORDER BY projeto.nome;


/* 5. Usando (LIMIT 1 ou IN), escreva uma consulta que retorne o nome do funcionário, 
o salário e o número de horas semanais de participação em projetos do funcionário mais bem pago.
+---------------+---------+----------------+
| nome          | salario | horas_semanais |
+---------------+---------+----------------+
| Pedro Almeida | 6000.00 |             15 |
+---------------+---------+----------------+*/

SELECT funcionario.nome as nome, funcionario.salario as salario, participacao.horas_semanais as horas_semanais
FROM funcionario
JOIN participacao ON funcionario.id = participacao.funcionario_id
ORDER BY funcionario.salario DESC
LIMIT 1;
