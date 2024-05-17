# Projeto_Fomulario
Introdução
Este projeto consiste em um formulário desenvolvido em Angular que permite ao usuário inserir informações pessoais, incluindo nome completo, data de nascimento, CPF, e-mail, telefone e CEP. Ao inserir o CEP, o sistema automaticamente preenche os campos de logradouro, bairro, cidade e estado.



Funcionalidades
Formulário de cadastro com validação de campos.
Busca automática de informações de endereço a partir do CEP inserido.
Validação de e-mail e CPF.
Feedback ao usuário sobre a validade do formulário.



Pré-requisitos
Node.js: É necessário ter o Node.js instalado na máquina. Você pode baixá-lo em nodejs.org.
Angular CLI: O projeto foi desenvolvido utilizando o Angular CLI. Certifique-se de tê-lo instalado globalmente com o comando npm install -g @angular/cli.
IDE: Recomenda-se utilizar uma IDE como Visual Studio Code para desenvolvimento. Você pode baixá-lo em code.visualstudio.com.
Navegador Web: Um navegador web compatível, como Google Chrome ou Mozilla Firefox.



Instalação
Clone o repositório do projeto em sua máquina local: 
git clone https:https://github.com/Mhathewsy/Projeto_Fomulario.git



Navegue até o diretório do projeto:
cd projeto-formulario-angular

Instale as dependências do projeto:
npm install



Executando o Projeto
Após instalar as dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

ng serve



Abra seu navegador e vá para o seguinte endereço:
http://localhost:4200/



Estrutura do Projeto
O projeto está estruturado da seguinte forma:

app.component.html: O template do componente principal, que contém o formulário.
app.component.ts: O código TypeScript do componente principal.
app.module.ts: O módulo principal da aplicação, onde são importados os módulos e declarados os componentes.
cep-service.service.ts: Serviço responsável por buscar informações de endereço a partir do CEP usando a API do ViaCEP.

Extensões e Bibliotecas
@angular/forms: Módulo do Angular que fornece suporte para construção e validação de formulários reativos.
@angular/common/http: Módulo do Angular para fazer requisições HTTP.
rxjs: Biblioteca para programação reativa em JavaScript.
Bootstrap: Framework CSS utilizado para estilização e layout do formulário.

Contribuindo
Se encontrar algum problema ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request no repositório do projeto.

Muito obrigado.
