const accordion = document.getElementsByClassName('contentBx');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {

    this.classList.toggle('active');

    const content = this.querySelector('.content');

    if (this.classList.contains('active')) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
}


function saveEmail(event)  {


  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  localStorage.setItem("user_email", email);
  

  window.location.href = "child.html";
}

