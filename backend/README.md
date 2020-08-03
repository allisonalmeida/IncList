# Anotações gerais
# Métodos HTTP

* Get: Busca/Listar uma informação do backend.
* Post: Cria uma informação no backend.
* Put: Altera uma informação no backend.
* Delete: Deleta uma informação no backend.

# Tipos de parâmentros

* Query params: Parâmentros nomeados, enviados na rota após o símbolo "?" - (filtors, paginação).
  - acesso: ( request.query) Ex: const params = req.query;
* Route params: Parâmentros utilizados para identificar recursos.
  - acesso: (request.params) Ex: const params = req.params;
* Resquest body: Corpo da requisição, utilizado para criar ou alterar recursos.
  - acesso: (request.body) Ex: const body = req.body;

# Entidades

* ong - user
* caso - incident

# Funcionalidades 

* Login de ONG / USER
* Logout de ONG / USER
* Cadastro de ONG / USER
* Registro de casos / incidents
* Listar (especifícos) dos casos / incidents ONG / USER
* Deletar casos / incidents

# Funcionalidades mobile

* Listar todos os casos / incidents das ONG / USER
* Entra em contato ONG / Coordenador

# Nome da migration

* create_ongs = create_user

# Migrations config

* comando para criar arquivo de migrations => npx knex migrate:make migration_name
  
  - exports.up => vai ser responsavél pela criação da tabela.
  - exports.down => deleta a tabela criada.

* comando de criação => npx knex migrate:latest
* comando para desfazer o último "migrate:latest" => npx knex migrate:rollback

# Coluna tabela  ong / user
  - name - string
  - email - string
  - whatsapp - string
  - city - string
  - uf - string (2)

# Colunas tabela  caso / incident
  - id - increments
  - number - string
  - title - string
  - description - string
  - date - datetime
  - ong_id = user_id - string
  - table.foreign('user_id').references('id').inTable('users');
