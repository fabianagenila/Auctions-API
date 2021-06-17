# API Leilões de NFT:

## API de leilões de NFT
Uma galeria de [NFTs](https://gizmodo.uol.com.br/o-que-e-nft-non-fungile-tokens-tudo-sobre/) em que os usuários poderão adicionar suas obras para serem leiloadas sejam elas artes digitais, músicas, vídeos, etc.

-------------

Funcionalidades API:

➔ Cadastrar um novo leilão

➔ Criar um lance em um leilão

➔ Retornar todos os leilões

➔ Retornar um leilão individualmente

-----

![Badge](https://img.shields.io/badge/NPM-14.17.3-%237159c1?style=for-the-badge&logo=ghost)


## Tecnologias utilizadas
[MySQL](https://www.mysql.com/)

[Knex](http://knexjs.org/)

[UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)

[Express JS](https://expressjs.com/pt-br/)

[Typescript](https://www.typescriptlang.org/)

[Dotenv](https://www.npmjs.com/package/dotenv)

----

## Instruções (importante!)

### Instale as dependências do NodeJS

  - Recomendado que se utilize o [VSCode]('https://code.visualstudio.com') para visualizar o código. Utilizar o terminal do VSCode para executar os comandos necessários!

1. Execute o seguinte comando no terminal para instalar as dependências:
```bash
npm i
````
2. Execute o seguinte comando no terminal para que o servidor rode ininterrupdamente, a fim de testar os endpoints da API:
```bash
npm run dev
```
### Como usar o dotenv

Dotenv é um módulo de dependência zero que carrega variáveis ​​de ambiente de um arquivo .env para o process.env. O armazenamento da configuração no ambiente separado do código é baseado na metodologia The Twelve-Factor App.
Para que o seus dados sensíveis de acesso ao SQL não sejam mostrados no seu código, essas informações ficam armazenadas em um arquivo `.env`. Para que não seja visível no Github, basta ignorá-lo ao subir seu código via Git.

#### - Configurando o .env
Para que seja feita a conexão no seu banco de dados SQL, neste repositório, junto com o código, está incluído o arquivo `.env` com dados não preenchidos. Basta preenchê-los a seguir:

```bash
DB_HOST = o endereço da Data Base
DB_USER = seu usuário
DB_PASSWORD = sua password
DB_SCHEMA = o schema do banco de dados ao qual vai utilizar 
```
Exemplo:
```bash
DB_HOST = 127.0.0.1
DB_USER = user
DB_PASSWORD = password
DB_SCHEMA = db_schema
```

### Rode os endpoints
1. Os endpoints podem ser rodados no app Postman, importando a seguinte coleção:
 
- [Auction API.postman_collection.zip](https://github.com/fabianagenila/Auctions-API/files/6670745/Auction.API.postman_collection.zip)

2. Baixe a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) no seu VSCODE e utilize o arquivo `request.rest` dentro da aplicação.
   


## Obrigada! :wink: 
