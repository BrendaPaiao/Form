import express from 'express';

const app = express();

app.use(express.urlencoded({extend: true}));

const porta = 3000;
const host = '0.0.0.0';

var listaUsuarios = [];

function cadastrarCinePrime(req, resp){
    resp.send(`
            <html>
                <heah>
                    <title>Criar Conta no CinePrime</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </heah>
                <body>
                    <div class="container">
                        <h1 class="mb-5">Cadastre-se no CinePrime</h1>
                        <form method="POST" action="/cadastrar" class="border p-3 row g-3" novalidate> 
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome Completo</label>
                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Seu nome completo" required>
                            </div>
                            <div class="col-md-4">
                                <label for="dataNascimento" class="form-label">Data de Nascimento</label>
                                <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" required>
                            </div>
                            <div class="col-md-3">
                                <label for="genero" class="form-label">Gênero</label>
                                <select class="form-select" id="genero" name="genero" required>
                                    <option selected disabled value="">Selecione</option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <label for="email" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="meuemail@exemplo.com" required>
                            </div>
                            <div class="col-md-4">
                                <label for="telefone" class="form-label">Número de Telefone</label>
                                <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
                            </div>
                            <div class="col-md-6">
                                <label for="endereco" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua e número, bairro" required>
                            </div>
                            <div class="col-md-6">
                                <label for="localidade" class="form-label">Cidade, Estado e País</label>
                                <input type="text" class="form-control" id="localidade" name="localidade" placeholder="Cidade, Estado, País" required>
                            </div>
                            <div class="col-md-4">
                                <label for="senha" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite a senha" required>
                            </div>
                            <div class="col-md-4">
                                <label for="confirmaSenha" class="form-label">Confirme a Senha</label>
                                <input type="password" class="form-control" id="confirmaSenha" name="confirmaSenha" placeholder="Confirme a senha" required>
                            </div>
                            <div class="col-md-3">
                                <label for="pagamento" class="form-label">Opções de Pagamento</label>
                                <select class="form-select" id="pagamento" name="pagamento" required>
                                    <option selected disabled value="">Selecione</option>
                                    <option>Pix</option>
                                    <option>Cartão de Crédito</option>
                                    <option>Cartão de Débito</option>
                                    <option>Paypal</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label" for="invalidCheck">
                                        Confirmar os termos de Serviço e Política de Privacidade
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
                                    <label class="form-check-label" for="invalidCheck2">
                                        Autorização para Receber Comunicações (opcional)
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Criar Conta</button>
                            </div>
                    </form>
                    </div>
                </body>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </html>
        `);
}

function menu(req, resp){
    resp.send(`
            <html>
                <head>
                    <title>Criar Conta no CinePrime</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                                CINEPRIME
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/cadastrar">Criar Conta</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider"></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </html>
        `);

}

function cadastrarUsuario(req, resp){
    
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;
    const genero = req.body.genero;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const localidade = req.body.localidade;
    const confirmaSenha = req.body.confirmaSenha;
    const pagamento = req.body.pagamento;

    const usuario = {nome, dataNascimento, genero, email, telefone, endereco, localidade, confirmaSenha, pagamento}
    
    listaUsuarios.push(usuario);

    resp.write(`
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Lista de Usuarios</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </head>
                <body>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Data de Nascimento</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Endereço</th>
                                <th scope="col">Localidade</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Pagamento</th>
                            </tr>
                        </thead>
                        <tbody>`);

                        for(var i = 0; i < listaUsuarios.length; i++){
                            resp.write(`<tr>
                                            <td>${listaUsuarios[i].nome}</td>
                                            <td>${listaUsuarios[i].dataNascimento}</td>
                                            <td>${listaUsuarios[i].genero}</td>
                                            <td>${listaUsuarios[i].email}</td>
                                            <td>${listaUsuarios[i].telefone}</td>
                                            <td>${listaUsuarios[i].endereco}</td>
                                            <td>${listaUsuarios[i].localidade}</td>
                                            <td>${listaUsuarios[i].confirmaSenha}</td>
                                            <td>${listaUsuarios[i].pagamento}</td>
                                        </tr>
                                `);
                        }

    resp.write(`        </tbody>
                    </table>
                    <a class="btn btn-primary" href="/cadastrar" role="button">Cadastrar Outro Usuário</a>
                    <a class="btn btn-primary" href="/" role="button">Voltar ao Menu</a>
                </body>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </html>
        `);

    resp.end();
}

app.get('/', menu);
app.get('/cadastrar', cadastrarCinePrime);

app.post('/cadastrar', cadastrarUsuario);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`)
});