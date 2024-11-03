import express from 'express';

const app = express();
const porta = 3000;
const host = '0.0.0.0';

function cadastroCinePrime(req, resp){
    resp.send(`
            <html>
                <heah>
                    <title>Criar Conta no CinePrime</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </heah>
                <body>
                    <div class="container">
                        <h1>Cadastre-se no CinePrime</h1>
                        <form class="border p-3 row g-3" novalidate> 
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
                                <label for="telefone" class="form-label">Número de Telefone</label>
                                <input type="tel" class="form-control" id="telefone" name="telefone" placeholder="(00) 00000-0000" required>
                            </div>
                            <div class="col-md-4">
                                <label for="email" class="form-label">E-mail</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="meuemail@exemplo.com" required>
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
                            <div class="col-md-4">
                                <label for="senha" class="form-label">Senha</label>
                                <input type="password" class="form-control" id="senha" name="senha" placeholder="Digite a senha" required>
                            </div>
                            <div class="col-md-4">
                                <label for="confirmeSenha" class="form-label">Confirme a Senha</label>
                                <input type="password" class="form-control" id="confirmeSenha" name="confirmeSenha" placeholder="Confirme a senha" required>
                            </div>
                            <div class="col-md-6">
                                <label for="endereco" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="endereco" name="endereco" placeholder="Rua, 123, bairro, cidade, estado, pais" required>
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

app.get('/cadastro', cadastroCinePrime);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado e em execução no endereço http://${host}:${porta}`)
});