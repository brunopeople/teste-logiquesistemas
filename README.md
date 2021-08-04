* Encurtador de URL

Aplicação Web desenvolvido Pelo Framework Typescript React.js, Node.js no Backend, Wampserve para o Servidor Local e MySQL WorkBench
EncurtadorURL

![EncurtadorURL](https://user-images.githubusercontent.com/24817323/128225456-873cd112-12bf-486d-8422-9c693adeed50.PNG)

** Como Utiliza-lo?

Configurando as variáveis de ambiente.
No projeto existe um arquivo chamando .env tanto no Front-end quanto no Backend, nele estará as informações para configurar o servidor local e e para que as aplicações se comunicassem entre si. Ao Testar a aplicação configure o nome do banco de dados, o user do banco, a senha e a base url de front-end.

![Capturar1](https://user-images.githubusercontent.com/24817323/128225519-25fdbf5e-ce02-48af-ad1b-e5c5c2391b6b.PNG)


antes de rodar a aplicação, vá no arquivo connection.js, e na linha 5 coloque o endereço ip do seu servidor do local host.

$host: 'localhost',

** A instalação

No prompt da aplicação do github digite o comando para clonar o repositório
https://github.com/brunopeople/teste-logiquesistemas.git

em seguida no prompt Node.js vá para o diretório da aplicação e primeiramente rode o comando

npm install
em seguida rode o comando

npm start
Que rodará a aplicação do front-end.

**Rodando o Backend
 *Ao baixar a aplicação, vá para a pasta do diretório e rode o comando no promp do Node.js
  
  node src/index.js
