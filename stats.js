function startCounting() {
  const counters = document.querySelectorAll(".number");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const speed = target / 100; // Adjust speed

    const updateCounter = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = Math.ceil(current + speed);
        setTimeout(updateCounter, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

window.onload = startCounting;


document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach(bar => {
      const percentage = bar.getAttribute("data-progress");
      bar.style.width = percentage + "%";
  });
});

function sendMail(){
  let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
  }

  emailjs.send("service_3t1j9j4","template_2z0qw6g",parms).then(alert("Email Send!!"))
}
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}