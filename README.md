<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/picinelli/projeto-drivenpass">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" alt="Logo" width="100">
  </a>

<h3 align="center">Projeto - DrivenPass (BACK-END)</h3>
  <h4 align="center"> 
	🚀 Concluído! 🚀
  </h4>
  <p align="center">
    DrivenPass, um gerenciador de senhas!
    <br />
    <a href="https://github.com/picinelli/projeto-drivenpass/tree/main/src"><strong>Código TS»</strong></a>
</div>

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Rotas](#rotas)
- [Tecnologias Utilizadas](#tecnologias)
- [Contato](#contato)

## Introdução

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. O que levanta a questão: como nos proteger?

Existem várias formas diferentes de se proteger. Tudo começa com o uso de senhas diferentes e seguras. Para uma senha ser segura, ela deve conter vários caracteres e números misturados, sem contar que o quanto mais longa ela for, melhor.

Esse projeto, portanto, tem a finalidade de gerenciar todas as suas senhas e segredos, lhe poupando o trabalho de lembrar senhas complexas.

## Instalação

```
git clone https://github.com/picinelli/projeto-drivenpass.git

change start script on package.json to: "start": "node src/index.js",

npm install

npm start

```

## Rotas

- **POST /create-account** </br>
  Esta não é uma rota autenticada. </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
    email: string,
    password: string,
  }
	```

- **POST /login** </br>
  Esta não é uma rota autenticada. </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
    email: string,
    password: string,
  }
	```
  Deve responder um token no formato de string:
    ```
  'f9bf78b9a18ce6d46a0cd2b0b86df9da'
	```

- **POST /create-card** </br>
  **Esta é uma rota autenticada.** </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
    title: string,
    number: string,
    name: string,
    securityCode: string,
    expirationDate: string,
    password: string,
    virtual: boolean,
    type: 'CREDITO' | 'DEBITO' | 'AMBOS',
  }
	```
	
- **GET /card/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  {
    id: number,
    title: string,
    number: string,
    name: string,
    securityCode: string,
    expirationDate: string,
    password: string,
    virtual: boolean,
    type: 'CREDITO' | 'DEBITO' | 'AMBOS',
    userId: number,
    createdAt: Date
  }
	```

- **GET /cards* </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  [
   {
     id: number,
     title: string,
     number: string,
     name: string,
     securityCode: string,
     expirationDate: string,
     password: string,
     virtual: boolean,
     type: 'CREDITO' | 'DEBITO' | 'AMBOS',
     userId: number,
     createdAt: Date
   },
   {...}
  ]
	```
	
- **DELETE /card/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve deletar o cartão, caso seja do usuário.
	```
	
- **POST /create-credencial* </br>
  **Esta é uma rota autenticada.** </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
    title: string,
    username: string,
    url: string,
    password: string,
  }
	```
	
- **GET /credencial/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  {
    id: number,
    title: string,
    username: string,
    url: string,
    password: string,
    userId: number,
    createdAt: Date,
  }
	```
	
- **GET /credencials* </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  [
   {
     id: number,
     title: string,
     username: string,
     url: string,
     password: string,
     userId: number,
     createdAt: Date,
   }
   {...}
  ]
	```
	
- **DELETE /credencial/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve deletar a credencial, caso seja do usuário.
	```
	
- **POST /create-document* </br>
  **Esta é uma rota autenticada.** </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
     type: 'RG' | 'CNH',
     name: string,
     issueDate: Date,
     expirationDate: Date,
     number: string,
     agency: string,
  }
	```
	
- **GET /document/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  {
     id: number,
     type: 'RG' | 'CNH',
     name: string,
     issueDate: Date,
     expirationDate: Date,
     number: string,
     agency: string,
     userId: number,
     createdAt: Date
  }
	```
	
- **GET /documents* </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  [
   {
     id: number,
     type: 'RG' | 'CNH',
     name: string,
     issueDate: Date,
     expirationDate: Date,
     number: string,
     agency: string,
     userId: number,
     createdAt: Date
   }
   {...}
  ]
	```
	
- **DELETE /document/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve deletar o documento, caso seja do usuário.
	
- **POST /create-note* </br>
  **Esta é uma rota autenticada.** </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
     title: string,
     description: string,
  }
	```
	
- **GET /note/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  {
     id: number,
     title: string,
     description: string,
     userId: number,
     createdAt: Date
  }
	```
	
- **GET /notes* </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  [
   {
     id: number,
     title: string,
     description: string,
     userId: number,
     createdAt: Date
   }
   {...}
  ]
	```
	
- **DELETE /note/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve deletar a nota, caso seja do usuário.
  
- **POST /create-wifi* </br>
  **Esta é uma rota autenticada.** </br>
  Deve receber um corpo (body) no formato: 
  ```
  {
     title: string,
     name: string,
     password: string,
  }
	```
	
- **GET /wifi/:id** </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  {
     id: number,
     title: string,
     name: Date,
     password: Date,
     userId: number,
     createdAt: Date
  }
	```
	
- **GET /wifis* </br>
  **Esta é uma rota autenticada.** </br>
  Deve responder um corpo (body) no formato: 
  ```
  [
   {
     id: number,
     title: string,
     name: Date,
     password: Date,
     userId: number,
     createdAt: Date
   }
   {...}
  ]
	```
	
- **DELETE /wifis** </br>
  **Esta é uma rota autenticada.** </br>
  Deve deletar o wifi, caso seja do usuário.


## Tecnologias

![Nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


## Contato

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Mail][mail-shield]][mail-url]

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/pedro-ivo-brum-cinelli//
[mail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[mail-url]: mailto:cinelli.dev@gmail.com
