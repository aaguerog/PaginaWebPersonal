document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("9Y0-cdx40yJ3Qt4Jw");

    const form = document.getElementById("formulario");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("service_hr64j0r", "template_wvxg69c", form)
            .then(function () {
                Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarme. Te responderé pronto.',
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
            });
    });
});
