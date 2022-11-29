// form validation in contact me section
function validateForm() {
    var mail = document.getElementById('email').value;
    var user = document.getElementById('user').value;
    // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regey = /^[a-zA-Z ]{2,30}$/;

    if (!regey.test(user)) {
        document.getElementById("username-error").style.display = "block";
        document.getElementById('username-error').innerHTML = " *Please Enter the valid Name";
    }
    else {
        document.getElementById("username-error").style.display = "none";
    }
    if (!regex.test(mail)) {
        document.getElementById("email-error").style.display = "block";
        document.getElementById('email-error').innerHTML = " *Please Enter the valid Email";
    }
    else {
        document.getElementById("email-error").style.display = "none";
    }
    if (!regey.test(user) || !regex.test(mail)) {
        return false;
    }

    return true;
}





















// function clearErrors() {
//     errors = document.getElementsByClassName('formerror');
//     for (let item of errors) {
//         item.innerHTML = "";
//     }
// }
// function validateForm() {
//     clearErrors();
//     var mailerror = document.getElementById('email').value;
//     var usererror = document.getElementById('user').value;
//     // var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var regey = /^[a-zA-Z ]{2,30}$/;

//     if (!regey.test(usererror)) {
//         document.getElementById('username').innerHTML = " *Please Enter the valid Name";
//         return false;
//     }
//     if (!regex.test(mailerror)) {
//         document.getElementById('emailerror').innerHTML = " *Please Enter the valid Email";
//         return false;
//     }
// }







// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});
// });
