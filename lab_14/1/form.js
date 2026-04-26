function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;


    if (!name || !email || !pass) {
        alert("Помилка: всі поля мають бути заповнені!");
        return;
    }

    if (pass.length < 6) {
        alert("Помилка: пароль має бути не менше 6 символів!");
        return;
    }

    alert(name + ", вітаємо! Ви успішно зареєстровані!");
    window.close();
}