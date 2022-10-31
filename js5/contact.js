
/* --------------------------------------------------------------Contact us---------------------------------------   */

const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const age = document.getElementById("age")
const password = document.getElementById("password")
const rePassword = document.getElementById("re-password")


form.addEventListener('submit',(e) =>
{
    e.preventDefault();
    checkInput();
})


function checkInput()
{
    //get values from input

    let userNameValue = username.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let ageValue = age.value.trim();
    let passwordValue = password.value.trim();
    let rePasswordValue = rePassword.value.trim();

    if(userNameValue === '')
    {
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank')
    }
    else if (!userNameValid(userNameValue)) {
		setErrorFor(username, 'Not a valid User name');
	}
    
    else
    {
        //add succesful class
        setSuccessFor(username)
    }

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
    if(phoneValue === '')
    {
        //show error
        //add error class
        setErrorFor(phone, 'phone cannot be blank')
    }
    else if (!userPhoneValid(phoneValue)) {
		setErrorFor(phone, 'Not a valid phone');
	}
    else
    {
        //add succesful class
        setSuccessFor(phone)
    }
    if(ageValue === '')
    {
        //show error
        //add error class
        setErrorFor(age, 'phone cannot be blank')
    }
    else if (!userAgeValid(ageValue)) {
		setErrorFor(age, 'Not a valid age');
	}
    else
    {
        //add succesful class
        setSuccessFor(age)
    }

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
    }
	else if (!passwordValueValid(passwordValue)) {
		setErrorFor(password, 'Enter valid password *Minimum eight characters, at least one letter and one number:*');
	}
     else {
		setSuccessFor(password);
	}

    if(rePasswordValue === '') {
		setErrorFor(rePassword, 'rePassword cannot be blank');
	} else if(passwordValue !== rePasswordValue) {
		setErrorFor(rePassword, 'Passwords does not match');
	} 
	 else{
		setSuccessFor(rePassword);
	}



function setErrorFor(input , message)
{
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class

    formControl.className = 'form-group error'
}

function setSuccessFor(input)
{
    const formControl = input.parentElement; // .form-control
    formControl.className = 'form-group success'
}


function userNameValid(userName) {
    return /^[a-zA-Z ]+$/.test(userName)
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passwordValueValid(password) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
}

function userPhoneValid(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)
}

function userAgeValid(age) {
    return /^[1-9][0-9]?$|^100$/.test(age)
}

}