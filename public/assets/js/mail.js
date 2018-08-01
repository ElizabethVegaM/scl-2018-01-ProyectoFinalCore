(function() {
  emailjs.init('user_ef1rlb3A7ij2cRlx3N1MY');
})();

window.onload = function() {
  document.getElementById('registerVisitor').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('contact_service', 'notification_template', this);
    console.log('Correo enviado');
  });
};