-- 1 - Criação da Tabela

CREATE TABLE test_indexing(id SERIAL, name TEXT);

-- 2 - Injestão de Dados na Tabela 
INSERT INTO test_indexing(name) SELECT 'Bob' from generate_series(1,250000);

INSERT INTO test_indexing(name) SELECT 'Alise' from generate_series(1,250000);

-- 3 - Consulta com o EXPLAIN sem o index

EXPLAIN ANALYZE 
SELECT * 
  FROM test_indexing 
 WHERE id = 2;
 
-- 4 - Criação dos Indexes 

CREATE INDEX idx_test_ebac ON test_indexing(id);

-- 5 - Consulta com o EXPLAIN com index

EXPLAIN ANALYZE 
SELECT * 
  FROM test_indexing 
 WHERE id = 2;