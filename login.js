checkIfCorrect = (event) => {
   event.preventDefault();
   const username = document.getElementsByName('username')[0];
   const userField = document.getElementById('user-field');

   const password = document.getElementsByName('password')[0];
   const passField = document.getElementById('pass-field');

   const userWrong = document.getElementById('user-wrong');
   const passWrong = document.getElementById('pass-wrong');

   const times = document.querySelector('.times');
   const times1 = document.querySelector('.times1');

   const name = 'admin';
   const pass = 'admin1234'




   // Correct Input
   if (username.value === name && password.value === pass) {
      alert('You have successfully logged in!')
      window.location.href = '1 Migz motors homepage.html'
      // Wrong input
   } else {
      if (username.value !== name) {
         userWrong.innerHTML = 'Username does not exist';
         userWrong.style.color = 'white';
         userWrong.style.fontSize = '16px';
         userWrong.style.position = 'relative';
         userWrong.style.right = '67px';
         userField.classList.remove('shakeEffect');
         void userField.offsetWidth;
         userField.classList.add('shakeEffect');
         times.style.zIndex = 1;
         // If username is incorrect, password is also incorrect
         passWrong.innerHTML = 'Incorrect username!'
         passWrong.style.color = 'white';
         passWrong.style.fontSize = '16px';
         passWrong.style.position = 'relative';
         passWrong.style.right = '85px';
         passField.classList.remove('shakeEffect');
         void passField.offsetWidth;
         passField.classList.add('shakeEffect');
         times1.style.zIndex = 1;
      }
      if (username.value === name && password.value !== pass) {
         userWrong.innerHTML = '';
         userField.style.border = '2px solid green'
         times.style.zIndex = -1;
         passWrong.innerHTML = 'Wrong password!'
         passWrong.style.color = 'white';
         passWrong.style.fontSize = '16px';
         passField.classList.remove('shakeEffect');
         void passField.offsetWidth;
         passField.classList.add('shakeEffect');
         times1.style.zIndex = 1;
      }
      

      // Empty INPUT

      if (!username.value) {
         userWrong.innerHTML = 'Please enter your username'
         userWrong.style.color = 'white';
         userWrong.style.fontSize = '16px';
         userWrong.style.position = 'relative';
         userWrong.style.right = '56px';
         userField.classList.remove('shakeEffect');
         void userField.offsetWidth;
         userField.classList.add('shakeEffect');
      }

      if (!password.value) {
         passWrong.innerHTML = 'Please enter your password'
         passWrong.style.color = 'white';
         passWrong.style.fontSize = '16px';
         passWrong.style.position = 'relative';
         passWrong.style.right = '57px';
         passField.classList.remove('shakeEffect');
         void passField.offsetWidth;
         passField.classList.add('shakeEffect');
         times1.style.zIndex = 1;
      }

      console.log(username.value);
      console.log(password.value);
   }
}