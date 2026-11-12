document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const servico = document.getElementById('servico').value;
    const descricao = document.getElementById('descricao').value.trim();

    const textoMensagem = `Olá! Gostaria de solicitar um orçamento:%0A%0A*Serviço:* ${servico}%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Endereço:* ${endereco}, Bairro ${bairro}%0A*Descrição:* ${descricao}`;

    const numeroWhatsApp = "5531991100471";
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

    window.open(url, '_blank');
});
