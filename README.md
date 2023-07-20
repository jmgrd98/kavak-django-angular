# kavak-django-angular
Django + Angular App com Banco de Dados SQLite - Leia-me
Este arquivo de leitura (readme) irá guiá-lo através dos passos necessários para configurar e executar um aplicativo web Django + Angular utilizando o banco de dados SQLite embutido. O aplicativo consiste em um backend Django que funciona como uma API e um frontend Angular que consome essa API.

Pré-requisitos
Antes de prosseguir, certifique-se de ter o seguinte instalado em seu sistema:

Python (3.6 ou superior) - https://www.python.org/downloads/
Node.js (versão LTS) - https://nodejs.org/en/download/
Angular CLI - Você pode instalá-lo globalmente via npm: npm install -g @angular/cli
Passo 1: Clonar o Repositório
Comece clonando o repositório contendo o aplicativo Django + Angular:

bash
Copy code
git clone <url_do_repositorio>
cd <nome_do_repositorio>
Passo 2: Configurar o Backend Django
Crie um ambiente virtual (opcional, mas recomendado) para manter as dependências do projeto isoladas:

bash
Copy code
python -m venv venv
source venv/bin/activate  # No Windows, utilize: venv\Scripts\activate
Instale o Django e outros pacotes Python necessários:

bash
Copy code
pip install django
Aplique as migrações do banco de dados para configurar o SQLite:

bash
Copy code
python manage.py migrate
Crie um superusuário (admin) para acessar a interface de administração do Django (siga as instruções):

bash
Copy code
python manage.py createsuperuser
Inicie o servidor de desenvolvimento do Django:

bash
Copy code
python manage.py runserver
O backend Django deve estar em execução em http://localhost:8000/.

Passo 3: Configurar o Frontend Angular
Instale as dependências do projeto Angular:

bash
Copy code
cd frontend
npm install
Inicie o servidor de desenvolvimento do Angular:

bash
Copy code
ng serve
O frontend Angular deve estar em execução em http://localhost:4200/.

Passo 4: Acessando o Aplicativo
Acesse http://localhost:4200/ no seu navegador para acessar o frontend Angular. O frontend irá interagir com a API do backend Django em http://localhost:8000/api/.

Para acessar a interface de administração do Django, visite http://localhost:8000/admin/ e faça login com as credenciais de superusuário criadas no Passo 2.

Notas Adicionais
O backend Django está configurado para utilizar o banco de dados SQLite embutido por padrão. Caso necessário, você pode alterar as configurações do banco de dados em settings.py.

Lembre-se de que essa configuração é destinada apenas para fins de desenvolvimento. Para implantação em produção, são necessárias configurações adicionais e medidas de segurança.

Se você encontrar algum problema durante o processo de configuração, consulte a documentação do Django e do Angular ou procure ajuda nas respectivas comunidades.

Parabéns! Agora você tem um aplicativo Django + Angular em execução com um banco de dados SQLite. Feliz codificação!