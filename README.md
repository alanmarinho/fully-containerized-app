# fully containerized application

## Objetivo 

-  Deploy de um app completo em docker

1. Back Adonis
2. Front React 
3. Banco PostgreSQL

## Requisitos

- Docker >= v27.3.1

## Como executar

- Criar arquivo .env em /api/ usando o arquivo .env.example como exemplo
- Execute ```docker-compose up -d``` na raiz do projeto

## Features

- Front executa em localhost:8080 com as rotas:
  - / => Listagem de users cadastrados
  - /create => Criar novo usuário
  - /update/:id => editar o usuário id
  
- Back executa em localhost:3333 com as rotas:
  - GET /users => Listar todos os users
  - POST /users => adiciona um novo user - body ```{"name":"Name","email":"email@email.io","password":"123"}```
  - PUT /users/:id => Edita o user id - body ```{"name":"Name2","email":"email2@email.io","password":"321"}```
  - DELETE /users/:id => Deleta o user id

- Banco executa em localhost:5432


// end