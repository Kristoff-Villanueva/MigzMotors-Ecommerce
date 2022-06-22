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

   checkIfCorrect = (event) => {
      event.preventDefault();

      // Correct Input
      if (username.value === name && password.value === pass) {
         alert('You have successfully logged in!')
         window.location.href = '1 Migz motors homepage.html'
         // Wrong input
      } else {
         if (username.value !== name) {
            userWrong.innerHTML = 'Username does not exist';
            userWrong.classList.add('text-deco');
            userWrong.style.right = '67px';
            userField.classList.add('redBorder');
            userField.classList.remove('shakeEffect');
            void userField.offsetWidth;
            userField.classList.add('shakeEffect');
            times.style.zIndex = 1;
            // If username is incorrect, password is also incorrect
            passWrong.innerHTML = 'Incorrect username!'
            passWrong.classList.add('text-deco')
            passWrong.style.right = '85px';
            passField.classList.add('redBorder');
            passField.classList.remove('shakeEffect');
            void passField.offsetWidth;
            passField.classList.add('shakeEffect');
            times1.style.zIndex = 1;
         }
            // if username is correct but password is incorrect
         if (username.value === name && password.value !== pass) {
            userWrong.innerHTML = '';
            userField.style.border = '2px solid green'
            times.style.zIndex = -1;
            passWrong.innerHTML = 'Wrong password!'
            passWrong.classList.add('text-deco')
            passField.classList.add('redBorder');
            passField.classList.remove('shakeEffect');
            void passField.offsetWidth;
            passField.classList.add('shakeEffect');
            times1.style.zIndex = 1;
         }

         // Empty INPUT

         if (!username.value) {
            userWrong.innerHTML = 'Please enter your username'
            userWrong.classList.add('text-deco')
            userWrong.style.right = '56px';
            userField.classList.remove('shakeEffect');
            void userField.offsetWidth;
            userField.classList.add('shakeEffect');
         }

         if (!password.value) {
            passWrong.innerHTML = 'Please enter your password'
            passWrong.classList.add('text-deco')
            passWrong.style.right = '57px';
            passField.classList.add('redBorder');
            passField.classList.remove('shakeEffect');
            void passField.offsetWidth;
            passField.classList.add('shakeEffect');
            times1.style.zIndex = 1;
         }

         console.log(username.value);
         console.log(password.value);
      }
   }

   // Remove red border and text after entering new input
   removeBorder = (e) => {
      event.preventDefault();
      userWrong.innerHTML = '';
      userField.classList.remove('redBorder');
      userField.style.border= '';
      times.style.zIndex = -1;

      passWrong.innerHTML = '';
      passField.classList.remove('redBorder');
      times1.style.zIndex = -1;
   }
