window.addEventListener("DOMContentLoaded", (event) => {
//  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        let name = document.getElementById('contact-name').value;
        let email = document.getElementById('contact-email').value;
        let phone = document.getElementById('contact-phone').value;
        let message = document.getElementById('contact-message').value;

        let to = 'jhtaung.work@gmail.com';
        let subject = 'Bleu Psychiatry Inquiry - ' + name;
        let newLine = '%0D%0A';
        let body = 'Name: ' + name + newLine + 'Email: ' + email + newLine +
          '\nPhone: ' + phone + newLine + newLine + 'Message: ' + newLine + message;
        let mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
        console.log(mailto);
        window.open(mailto);
      }
      form.classList.add('was-validated');
    }, false);
  });
}, false);