
-- criação da tabela salasdeaula
CREATE TABLE salasdeaula (
    id serial PRIMARY KEY,
    descricao character varying(255),
    localizacao character varying(255),
    capacidade integer,
    remoto boolean
);

-- inserções
INSERT INTO salasdeaula (descricao, localizacao, capacidade, removido) VALUES
('Sala de Aula 101', 'Prédio Principal, 1º andar', 30, false),
('Laboratório de Informática', 'Prédio de Tecnologias, 2º andar', 20, false),
('Sala de Reunião', 'Prédio Administrativo, Térreo', 15, false),
('Auditório Principal', 'Prédio Principal, Térreo', 100, false),
('Sala de Estudos', 'Prédio da Biblioteca, 1º andar', 25, true);
