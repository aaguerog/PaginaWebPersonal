document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("9Y0-cdx40yJ3Qt4Jw");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        emailjs.sendForm("service_hr64j0r", "template_wvxg69c", form)
            .then(function () {
                alert("¡Mensaje enviado con éxito!");
                form.reset(); 
            }, function (error) {
                console.error("Error al enviar:", error);
                alert("Ocurrió un error. Inténtalo de nuevo.");
            });
    });
});
