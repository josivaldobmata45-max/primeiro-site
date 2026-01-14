function enviarContato() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Simulação de envio para o Java
    console.log("=== DADOS ENVIADOS AO SISTEMA JAVA ===");
    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Mensagem: " + mensagem);

    alert("Contato enviado com sucesso!\n(Recebido pelo sistema Java)");

    // Limpa o formulário
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";
}
