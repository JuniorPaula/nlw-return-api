# NLW RETURN

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

Aplicação desenvolvida durante o evento da **Rockeseat NLW Return**
Esta é a parte do backend, API para envio de feadback e disparo de email.

### Instruções para rodar o projeto

Os requisitos necessários são:

- Node
- npm

Faça o clone do projeto e rode o comando `npm install` para instalar as dependências.

~~~javascript
npm install
~~~

Subir o servidor atravéz do comando `npm run dev`

~~~javascript
npm run dev
~~~

Configurar a base de dados criando um arquivo `.env` na raiz do projeto, e seguindo o examplo das variaveis de ambiente que estão no arquivo `.env.example`.

### Endpoints da aplicação

### Rotas criar um feadback


~~~javascript
[POST] /feadback
~~~

**Atributos obrigatórios:**
Atributos | Tipo | descrição
--------- | ------ | -------
type | string | **Tipo de feadback**
comment | string | **Descrição do feadback**
screenshot | string | **Screenshot da tela pode ser enviado em anexo (obs: opcional)**

## **Request body**
~~~javascript
{
	"type": "BUG",
	"comment": "Está buagado!",
	"screenshot": ""
}
~~~

## **Response**
![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
{
  OK
}
~~~

## Rodar os testes

~~~javascript
npm test
~~~

#### Tecnologias utilizadas

- NodeJS
- Typescript
- Prisma
- Jest
- StandardJS
- Express
