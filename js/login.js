const botao = document.getElementById("btnEntrar");

const mensagem = document.getElementById("mensagem");


botao.addEventListener("click", async function () {

    const email =
        document.getElementById("email").value.trim();

    const senha =
        document.getElementById("senha").value;


    // Verifica os campos

    if (email === "" || senha === "") {

        mensagem.textContent =
            "Preencha o e-mail e a senha.";

        return;
    }


    mensagem.textContent =
        "Entrando...";


    try {

        // Login no Firebase

        const resultado =
            await auth.signInWithEmailAndPassword(
                email,
                senha
            );


        console.log(
            "Usuário entrou:",
            resultado.user.uid
        );


        // Verifica se é administrador

        const admin =
            await db
                .collection("admins")
                .doc(resultado.user.uid)
                .get();


        if (!admin.exists) {

            await auth.signOut();

            mensagem.textContent =
                "Este usuário não é administrador.";

            return;
        }


        // Tudo certo

        mensagem.textContent =
            "Login realizado! Entrando...";


        setTimeout(function () {

            window.location.href =
                "admin.html";

        }, 500);


    } catch (erro) {

        console.error(
            "Erro completo:",
            erro
        );


        mensagem.textContent =
            "Erro: " + erro.message;
    }

});