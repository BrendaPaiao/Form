import express from 'express';

const app = express();

app.use(express.urlencoded({extend: true}));

const porta = 3000;
const host = '0.0.0.0';

var listaUsuarios = [];

function cadastrarCinePrime(req, resp){
    resp.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>CinePrime - Cadastro</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
                <style>
                    body {
                        background-color: #BFBFBF;
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        margin: 0;
                    }

                    .navbar {
                        background-color: #BFBFBF;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .navbar-brand, .nav-link {
                        font-family: 'Cinzel', serif;
                        font-weight: bold;
                        color: #0A8081 !important;
                    }

                    .navbar-brand:hover, .nav-link:hover {
                        color: #066666 !important;
                    }

                    .container-content {
                        max-width: 1000px;
                        width: 90%;
                        margin: 40px auto;
                        padding: 20px;
                        background-color: white;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                        border-radius: 10px;
                    }

                    h1 {
                        font-family: 'Cinzel', serif;
                        color: #0A8081;
                        text-align: center;
                    }

                    .btn-primary {
                        background-color: #0A8081;
                        border-color: #0A8081;
                    }

                    .footer {
                        background-color: #BFBFBF;
                        color: #fff;
                        font-size: 14px;
                        padding: 20px 0;
                        text-align: center;
                        margin-top: auto;
                    }

                    footer a {
                        text-decoration: none;
                        color: #fff;
                        transition: color 0.3s;
                    }

                    footer a:hover {
                        color: #066666;
                    }

                    footer .social-icons i {
                        font-size: 20px;
                        transition: transform 0.3s;
                    }

                    footer .social-icons i:hover {
                        transform: scale(1.1);
                    }

                    .form-label {
                        text-align: left;
                    }

                </style>
            </head>
            <body>

                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">
                            CINEPRIME
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Voltar ao Menu</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="container-content">
                    <h1>Cadastro de Usuário</h1>
                <form action="/cadastrar" method="POST">
                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label for="nome" class="form-label">Nome Completo</label>
                            <input type="text" class="form-control" id="nome" name="nome" placeholder="Digite seu nome completo" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="dataNascimento" class="form-label">Data de Nascimento</label>
                            <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="genero" class="form-label">Gênero</label>
                            <select class="form-control" id="genero" name="genero" required>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="seuemail@exemplo.com" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="telefone" class="form-label">Telefone</label>
                            <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(00)00000-0000" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="endereco" class="form-label">Endereço</label>
                            <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua, numero, bairro" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="localidade" class="form-label">Localidade</label>
                            <input type="text" class="form-control" id="localidade" name="localidade" placeholder="Cidade, estado, pais" required>
                        </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="senha" class="form-label">Senha</label>
                            <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite uma senha" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="confirmaSenha" class="form-label">Confirmar Senha</label>
                            <input type="password" class="form-control" id="confirmaSenha" name="confirmaSenha" placeholder="Confirme a senha" required>
                        </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="pagamento" class="form-label">Forma de Pagamento</label>
                            <select class="form-control" id="pagamento" name="pagamento" required>
                                <option value="pix">PIX</option>
                                <option value="cartaoCredito">Cartão de Crédito</option>
                                <option value="boleto">Boleto Bancário</option>
                                <option value="debito">Débito</option>
                            </select>
                        </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="direitosAutorais" name="direitosAutorais" required>
                                <label class="form-check-label" for="direitosAutorais">Concordo com os <a href="#">direitos autorais</a></label>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="receberEmail" name="receberEmail">
                            <label class="form-check-label" for="receberEmail">Desejo receber e-mails com novidades sobre filmes e séries</label>
                        </div>
                    </div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-primary w-50 mx-auto d-block">Cadastrar</button>
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
                    <meta charset="utf-8">
                    <title>CinePrime</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
                    <style>
                        body {
                            background-color: #BFBFBF;
                            font-family: Arial, sans-serif;
                            display: flex;
                            flex-direction: column;
                            min-height: 100vh;
                            margin: 0;
                        }

                        .navbar {
                            background-color: #BFBFBF;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                        }

                        .navbar-brand, .nav-link {
                            font-family: 'Cinzel', serif;
                            font-weight: bold;
                            color: #0A8081 !important;
                        }

                        .navbar-brand:hover, .nav-link:hover {
                            color: #066666 !important;
                        }

                        .container-content {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            max-width: 800px;
                            margin: 110px auto;
                            text-align: center;
                            padding: 20px;
                            background-color: white;
                            border-radius: 10px;
                            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                            flex-grow: 1;
                        }

                        h1 {
                            font-family: 'Cinzel', serif;
                            color: #0A8081;
                            font-size: 2.5rem;
                            font-weight: bold;
                            margin-bottom: 20px;
                        }

                        .btn-primary {
                            background-color: #0A8081;
                            border-color: #0A8081;
                        }

                        .footer {
                            background-color: #BFBFBF;
                            color: #fff;
                            font-size: 14px;
                            text-align: center;
                            padding: 20px 0;
                            margin-top: auto;
                        }
                        
                        footer a {
                            text-decoration: none;
                            color: #fff;
                            transition: color 0.3s;
                        }

                        footer a:hover {
                            color: #066666;
                        }

                        footer .social-icons i {
                            font-size: 20px;
                            transition: transform 0.3s;
                        }

                        footer .social-icons i:hover {
                            transform: scale(1.1);
                        }

                        .container-actions {
                            text-align: center;
                            margin-top: 30px;
                        }
                    </style>
                </head>
                <body>
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">CINEPRIME</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/cadastrar">Criar Conta</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="container-content" style="background-color: #e0e0e0;">
                        <h1>Bem-vindo ao CinePrime</h1>
                        <p>Assista aos seus filmes e séries favoritos em um só lugar. Crie sua conta e comece sua jornada cinematográfica!</p>
                        <a href="/cadastrar" class="btn btn-primary btn-lg mt-3">Criar Conta</a>
                    </div>

                    <div class="footer">
                        <p>&copy; 2024 CinePrime. Todos os direitos reservados.</p>
                    </div>

                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </body>
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
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
            <style>
                body {
                    background-color: #BFBFBF;
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }

                .navbar {
                    background-color: #BFBFBF;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
                }

                .navbar-brand, .nav-link {
                    font-family: 'Cinzel', serif;
                    font-weight: bold;
                    color: #0A8081 !important;
                }

                .navbar-brand:hover, .nav-link:hover {
                    color: #066666 !important;
                }

                .container {
                    max-width: 100%;
                    padding: 20px;
                }

                .table {
                    width: 100%;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                    margin-top: 10px;
                }

                .table th, .table td {
                    vertical-align: middle;
                }

                .btn-primary {
                    background-color: #0A8081;
                    border-color: #0A8081;
                }

                .container-actions {
                    text-align: center;
                    margin-top: 30px;
                }

            </style>
        </head>
        <body>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">CINEPRIME</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/cadastrar">Criar Conta</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container">
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
                        <div class="container-actions">
                            <a class="btn btn-primary" href="/cadastrar" role="button">Cadastrar Outro Usuário</a>
                            <a class="btn btn-primary" href="/" role="button">Voltar ao Menu</a>
                        </div>
                    </div>
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