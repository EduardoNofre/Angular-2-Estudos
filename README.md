  <h1 align="center">
    Estudo Front-end Angular
   </h1>


<p align="center">
  <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/angular2.png?raw=true" alt="Sublime's custom image"/>  
</p>


# A base desde estudo foi o Angular 2.
URL do Curso.
 - https://loiane.training/continuar-curso/angular

## Preparando ambiente para o angular.

  1 - Fazer o download  nodejs e instalar.<br>
  2 - Instalar o Typescript para apos a instalação do nodejs executar o comando Prompt/Terminal *'npm install -g typescript'* <br>
  3 - Instalar o Angular para apos a instalação do Typescript executar o comando Prompt/Terminal *'npm install -g @angular/cli'* <br>
  4 - Para verificar se o ambiente esta ok execute o seguinte comando no Prompt/Terminal *'ng v'*  <br>
            Resultado deve ser algo parecido com o texto abaixo.<br>
            
            Package                      Version
            ------------------------------------------------------
            @angular-devkit/architect    0.1802.12 (cli-only)
            @angular-devkit/core         18.2.12 (cli-only)
            @angular-devkit/schematics   18.2.12 (cli-only)
            @schematics/angular          18.2.12 (cli-only)
  5 - Caso o comando 'ng v' não seja reconhecido configure as variaveis de ambientes PATH do windows.<br>
       - Variáveis de Ambiente.<p1><br>
       - Path.<br>
       - Editar.<br>
       - Editar variáveis de sistema.<br>
        C:\Users\SeuUsuario\AppData\Roaming\npm; <br>
        C:\Users\SeuUsuario\AppData\Roaming\npm\node_modules\@angular\cli\bin;<br>

   6 -  Como instalar o bootstrap no angular.<br>
        - Vá ate o site verifique se mudou algo na instalação e verifique a versão do bootstrap site:<br>
             url:https://getbootstrap.com.br/.<br>
             No site acima temos diversos exemplos da utilização dos componentes do  bootstrap.<br>
        - Instalando o bootstrap execute o seguinte comando:<br>
            npm install bootstrap.<br>
        - Apos a instalação algumas configurações e necessaria fazer.<br>
            No Vscode no projeto procure pelo seguinte diretorio '\nomeDoProjeto\node_modules'.<br>
            No diretorio procure o diretorio 'node_modules\bootstrap' .<br>
            No diretorio bootstrap procure pelo arquivo 'bootstrap.min.css'.<br>
              copie o caminho relativo do diretorio 'node_modules\bootstrap\dist\css\bootstrap.min.css'.<br>
                ### Observação:<br>
                Não esqueça de ajustar as barras do path para 'node_modules/bootstrap/dist/css/bootstrap.min.css'<br>
        - Procure pelo arquivo angular.json de deixe conforme a imagem abaixo.<br>
            - Inserir na tag styles o .css e na tag scripts .js .<br>
            <p align="center">
              <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/css_js.png?raw=true" alt="Sublime's custom image"/>  
            </p>

## Criando projeto com angular.

Para criar um projeto no angular é bem simples escolha um diretorio e execute o seguinte comando.<br>
Escolha um diretorio em seu computar e execute o Prompt/Terminal ng new nomeDoSeuporjeto <br>

### Observação:<br>
  No angular 17 não é gerado o arquivo app.module.ts para gerar esse arquivo execute o seguinte comando.<br>
  execute o Prompt/Terminal ng new nomeDoSeuporjeto --no-standalone<br>

## Criando componente para Criando.
  Para criar um componente no angular e bem simples  execute o comando ng g c nomeDoSeuComponente <br>
  
 ### Observação:<br> 
    No comando ng g c nomeDoSeuComponente podemos tbm informar o diretorio. 
      Exemplo:
        Prompt/Terminal ng g c ./diretorio/nomeDoSeuComponente

## Executar o projeto angular.
Para executar o projeto e preciso esta no direotrio do projeto e executar o seguinte comando: <br>
  No Prompt/Terminal execute ng s

Resultado deve ser algo parecido com o texto abaixo.<br><br>
Initial chunk files | Names         | Raw size  <br>
polyfills.js        | polyfills     | 90.20 kB |<br>
main.js             | main          |  2.45 kB |<br>
styles.css          | styles        | 95 bytes |<br>
                    | Initial total | 92.74 kB  <br>

Application bundle generation complete. [1.559 seconds]

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help

## Ide visual code.

Faça o download  do visual code e instale em seu pc. <br>

 ### Observação:<br> 
  Caso o terminal do vs code não reconheça os comando 'ng v'<br> 
  Faça o seguinte:<br> 
    - abra o shellscript e digite o comando baixo:<br> 
      Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser<br> 


## Versão utilizada netse projeto angular.

            @angular-devkit/architect    0.1802.12 (cli-only)
            @angular-devkit/core         18.2.12 (cli-only)
            @angular-devkit/schematics   18.2.12 (cli-only)
            @schematics/angular          18.2.12 (cli-only)


# Minhas anotaçoes importantes sobre o Estudo de angular.

 - ## Divisão de blocos de serviços no angular.<br>

 <p align="center">
  <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/blocos.png?raw=true" alt="Sublime's custom image"/>  
  </p>
  
   ### Explicando cada bloco:<br>
     - Componente encapsula:.<br>
          - Template.<br>
          - Metadata: processamento das classs.<br>
          - Dados a ser mostrado na tela.<br>
          - Comportamento da view.<br>

## Bloco componente:<br>
  ### Tudo em angular é um componente:<br>
   No angular tudo se basea em componentes.<br> 
   Os componentes pode interegir com o back-end.<br>
   
  <p align="center">
    <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/tudoecompoenente.png?raw=true" alt="Sublime's custom image"/>  
  </p>

  ### Exemplo de distribuição de componentes em uma pagina:<br>

  <p align="center">
    <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/paginaeseuscomponetes.png?raw=true" alt="Sublime's custom image"/>  
  </p>

## Bloco service:<br>
  ### Serviço(service) regras de negocio :<br>
   O serviço é onde fica as regras de negocio, por boa pratica a regra de negocio jamais deve fica no front.<br>
   Podemos tambem utilizar gestão de dependência. <br>

  <p align="center">
  <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/regra.png?raw=true" alt="Sublime's custom image"/>  
  </p>

## Bloco service:<br>
Em resumo seria ler as variaveis do componente e exibir a mesma no template ou ler da template e tratar no componente executar eventos.

 <p align="center">
  <img src="https://github.com/EduardoNofre/Angular-2-Estudos/blob/main/DataBinding.png?raw=true" alt="Sublime's custom image"/>  
  </p>

## Bloco Roteamento:<br>
  ### Router navegação:<br>
   O angula SPA Single Page aplication.<br>
   O roteamento é responsável pela navegação das paginas.<br>

## Bloco Diretivas:<br>
  ### Diretiva DOM:<br>
   Responsavel por modificar o DOM e o seu comportamento.<br>

# Principais comando do Angular:<br>
 - ### Criar projeto angular.<br>
   ng new .\path\nomeProjeto.<br>
  ### Observação:<br>
    No angular 17 não é gerado o arquivo app.module.ts para gerar esse arquivo execute o seguinte comando.<br>
    execute o Prompt/Terminal ng new nomeDoSeuporjeto --no-standalone<br>
   
- ### Criar modulo no angular.<br>
  ng g m .\path\nomeModulo.<br>
  um módulo é uma forma de organizar o código em blocos funcionais e independentes, que agrupam componentes, diretivas, pipes e serviços relacionados.<br>
  
- ### Criar componente no angular.<br>
  ng g c .\path\nomeComponente<br>
  Um componente é uma unidade autônoma e reutilizável que representa uma parte específica da interface do usuário de uma aplicação. Os componentes são formados por HTML, CSS e TypeScript.<br>

  
- ### Criar serviço no angular.<br>
  ng g c .\path\nomeServico<br>
  Service e responsavel por consumir um serviço ou conter as regas de negocio.

# Regras e convenções do angular.

  - nome de projeto?
  - nome de arquivo?
  - nome de classe?
  - nome de modulo?
  - nome de componenete?
  - nome de artefato?
  - versionamento do artefato?

