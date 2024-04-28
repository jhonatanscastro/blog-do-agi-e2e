# Projeto testes automatizados Blog do Agi

Esse projeto tem como objetivo, realizar testes na camada E2E, com objetivo de cobertura das principais funcionalidades

## Setup
### Pré-requisitos:

- Instalar o NodeJS
- Instalar um editor de texto, como o Visual Studio Code
- Instalar o Git (caso queira trabalhar com projeto em sua máquina)

### Execução

Para executar os testes em sua máquina, você pode baixar esse projeto usando o Github e seguir os passos abaixo:

1. Instalar as dependências configuradas do `package.json`, usando o comando: `npm install`
2. Abrir o Cypress `npm run cypress:open` e selecionar o `arquivo .cy` que você quer executar
3. Se deseja executar os testes no modo headless basta executar o comando: `npx cypress run`

### Execução com o Docker

Foi utilizado Cypress-Docker para construir uma imagem com camada base do Cypress/Browsers

1. Execute o comando `docker pull cypress/browsers`
2. Após a construção da imagem, execute `docker-compose up`
3. Execute os cenarios com o comando: `docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.8.1`

### Projeto

O projeto segue boas praticas, utilizando sua sub-divisão entre:

1. Funcionalidades

2. Page Objects (page)
3. Testes (tests)

4. Custom Commands (não utilizados para o projeto devido aos cenarios não exigirem mas caso necessario, estaria em support/commands.js)

