document.addEventListener('DOMContentLoaded', () => {
    // Definir colores en formato RGB
    const successColor = "rgb(40, 167, 69)"; // verde para éxito
    const errorColor = "rgb(255, 0, 0)";       // rojo para error

    const form = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordStrengthFeedback = document.getElementById('passwordStrength');
    const confirmMessageFeedback = document.getElementById('confirmMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validatePassword();
    });

    function validatePassword() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Regex para evaluar la fortaleza de la contraseña:
        // Al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un símbolo.
        const strengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Evaluar fortaleza de la contraseña y mostrar el mensaje justo debajo del campo.
        if (strengthRegex.test(password)) {
            passwordStrengthFeedback.textContent = 'Fuerte';
            passwordStrengthFeedback.style.color = successColor;
        } else {
            passwordStrengthFeedback.textContent = 'Débil: Debe tener mínimo 8 caracteres, una mayúscula, un número y un símbolo';
            passwordStrengthFeedback.style.color = errorColor;
        }

        // Comparar contraseñas y mostrar el resultado debajo del campo de verificación.
        if (password === confirmPassword) {
            confirmMessageFeedback.textContent = 'Las contraseñas coinciden';
            confirmMessageFeedback.style.color = successColor;
        } else {
            confirmMessageFeedback.textContent = 'Las contraseñas no coinciden';
            confirmMessageFeedback.style.color = errorColor;
        }
    }
});
