let validate_data = () => {
	let user = document.getElementById('user')
let fullname = document.getElementById('fullname')
	let email = document.getElementById('email')
	let password = document.getElementById('password')
let confirm_pass = document.getElementById('confirmpass')
	let malegender = document.getElementById('malegender')
	let femalegender = document.getElementById('femalegender')
let age = document.getElementById('age')
	let terms = document.getElementById('terms')
	let errorMsg = []

	vUsername(user, errorMsg)
vFullname(fullname, errorMsg)
	vEmail(email, errorMsg)
	vPassword(password, errorMsg)
vConfirm_pass(confirm_pass, errorMsg)
	vGender(malegender, femalegender, errorMsg)
vAge(age, errorMsg)
	vTerms(terms, errorMsg)
console.log(errorMsg)

	if (errorMsg.length == 0) {
			alert('Registration success')
	}else {
			alert(errorMsg.join('\n\n'))
	}

}

let vUsername = (user, errorMsg) => {
	if (user.value == ""){
			errorMsg.push('Username must be filled!')
	} else if (user.value.length < 3 || user.value.length > 25) {
			errorMsg.push('Username must be more than 3 & less than 25 characters')
	}
}

let vFullname = (fullname, errorMsg) => {
if (fullname.value == ""){
	errorMsg.push('Fullname must be filled!')
} else if (fullname.value.length < 3 || fullname.value.length > 25) {
			errorMsg.push('Fullname must be more than 3 & less than 25 characters')
	}
}

let vEmail = (email, errorMsg) => {
	if (email.value == ""){
			errorMsg.push('Email must be filled!')
	} 
}

let vPassword = (password, errorMsg) => {
	if (password.value == ""){
			errorMsg.push('Password must be filled!')
	} else if (password.value.length < 6 || password.value.length > 15) {
			errorMsg.push('Password must be more than 6 & less than 15 characters')
	}
}

let vConfirm_pass = (confirm_pass, errorMsg) => {
if (confirm_pass.value == "") {
	errorMsg.push('Confirm Password must be filled!')
} else if (confirm_pass.value != password.value) {
	errorMsg.push('Password must be same!')
}
}

let vGender = (malegender, femalegender, errorMsg) => {
	if (!malegender.checked && !femalegender.checked) {
			errorMsg.push('Gender must be chosen!')
	}
}

let vAge = (age, errorMsg) => {
if (age.value == "") {
	errorMsg.push('Age must be filled!')
}
}

let vTerms = (terms, errorMsg) => {
	if(!terms.checked) {
			errorMsg.push('Terms must be checked!')
	}
}