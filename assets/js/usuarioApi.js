const BASE_URL = 'http://localhost:4000';

//Função para criar usuário (POST)

async function criarUsuario(nome, email, senha) {
   const response = await fetch(`${BASE_URL}/usuarios`, {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({ nome, email, senha })
   });
   return response.json();
}

//Função para listar todos usuários (GET)

async function listarUsuarios() {
    const response = await fetch(`${BASE_URL}/usuarios`);
    return response.json();
}


//Funçao para buscar usuario por email (GET)

async function buscarUsuarioPorEmail(email) {
    console.log(`Buscando usuário com email: ${email}`);
    const response = await fetch(`${BASE_URL}/usuarios/${encodeURIComponent(email)}`);
    return response.json();
}

//Função para atualizar usuário por email (PUT)

async function atualizarUsuario(email, nome, senha) {
    const response = await fetch(`${BASE_URL}/usuario/${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ nome, senha })
    });
    return response.json();
}

//Funçao para deletar usuário por ID (DELETE)

async function deletarUsuario(id) {
    const response = await fetch(`${BASE_URL}/usuarios/${id}`, {
        method: 'DELETE'});
        return response.status === 204;
    
}

export { criarUsuario, listarUsuarios, buscarUsuarioPorEmail, atualizarUsuario, deletarUsuario };