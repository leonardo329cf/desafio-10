# Movieflix
Esse aplicativo permite ver o catálogo de filmes e postar comentários nos mesmos.

O projeto foi feito em Java e Springboot, e Typescript e React como parte do [Bootcamp Spring React](https://devsuperior.com.br).

---
### Navegando na Aplicação
Na tela inicial logue com um dos seguintes usuário:
- Bob: Visitante
  - Email: bob@gmail.com
  - Password: 123456

- Ana: Membro
  - Email: ana@gmail.com
  - Password: 123456

![Página de Login](/images/log.png)

Na página de catálogo:
- Selecionar o gênero dos filmes no seletor acima da lista de filmes.
- Navegar na lista de filmes através da paginação abaixo da lista de filmes.
- Ver detalhes dos filmes clicando neles.

![Página de Catálogo](/images/catalogo.png)

Na página de detalhes dos filmes:
- Ver informações do filme
- Ver avaliações deixadas por membros.
- Adicionar avaliação se o usuário é membro.

![Página de Detalhes](/images/filme.png)

Em todas as páginas é possivel deslogar através do botão "sair" no canto superior direito.

---
## Back-End
Foi seguido o padrão MVC.

### Autenticação
A autenticação foi feito utilizando o spring security, utilizando oAuth2 e token JWT.

### Autorização
Exitem dois Grupos de Permissões(Roles):
- ROLE_VISITOR: pode acessar o catalogo de filmes, ver detalhes dos filmes e ver as avaliações dos filmes. Usuário Bob é Visitante.
- ROLE_MEMBER: pode acessar o catalogo de filmes, ver detalhes dos filmes e ver e criar as avaliações dos filmes. Usuário Ana é Membro.

### Testes
O projeto foi testado com testes de integração utilizando as ferramentas de teste do spring e JUnit. Os testes foram feitos pelo professor e o resto do projeto por mim em metodologia de Desenvolvimento Orientado a Testes(TDD).
  - Executando os testes de integração:
    - No Eclipse IDE > Run > Run COnfiguration > JUnit.
      - Selecione a segunda opção("Run all tests in the selected project, package or source folder").
      - Clique em Search e selecione backend > src/test/java e clique em ok.
      - Clique em Apply e depois em Run.

### Dependencias e Build
O Maven foi utilizado para manejar as dependecias e fazer o build do projeto.
- Para rodar o projeto utilizando o maven execute: ./mvnw spring-boot:run
- Executando o projeto com o Eclipse IDE:
  - Instale a extensão Spring Tools:
    - Eclipse IDE > Help > Eclipse Marketplace.
    - Procure por Spring e selecione o Spring Tools 4.
    - Selecione, instale e reinicie após o fim da instalação.
  - Eclipse IDE > Run > Run Configuration > Spring Boot App.
    - Selecione o projeto backend.
    - Selecione o main type como "com.devsuperior.movieflix.MovieflixApplication".
    - Clique em Apply e Run.

---
## Front-End
O applicativo foi criado com React 17, Typescript e Bootstrap 5

### Instalando o ambiente
Será necessário Node 14 para executar o projeto.
- Opções de instalação: 
  - Diretamente: https://nodejs.dev/download/.
  - Utilizando o NVM(Node Version Manager): https://github.com/nvm-sh/nvm.
    - executando "nvm install 14".
- Após a instalação do Node, e consequentemente do NPMm instale o Yarn:
  - npm install --global yarn.

### Executando a Apĺicação
Dentro da pasta frontweb execute:
- "yarn install".
- "yarn start".
O site está disponível em localhost:3000. Não esqueça de executar o backend antes.
