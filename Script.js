document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("9Y0-cdx40yJ3Qt4Jw");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        emailjs.sendForm("service_hr64j0r", "template_wvxg69c", form)
            .then(function () {
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje enviado!',
                    confirmButtonColor: '#006494'
                });
                form.reset();
            }, function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.',
                    confirmButtonColor: '#006494'
                });
                console.error("Error al enviar:", error);
            });
    });
});
