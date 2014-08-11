$(document).ready(function(){
	
	$.validator.addMethod("login", function(value, element) 
	{ 
		return this.optional(element) || /^[a-z][a-z0-9]+$/.test(value); 
	}, "The first character must be a letter but the rest may be either letters <br /> or numbers. No UPPER CASE letters or punctuation is allowed.");

	$.validator.addMethod("password", function(value, element) 
	{ 
		return this.optional(element) || /^(?=.*\d)(?=.*([a-z]|[A-Z]))[A-Za-z0-9\$]+$/.test(value); 
	}, "It must have at least one letter and one number.");

	$.validator.addMethod("keyword", function(value, element) 
	{ 
		return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value); 
	}, "Please enter a valid e-mail address.");

	$.validator.addMethod("names", function(value, element) 
	{ 
		return this.optional(element) || /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value); 
	}, "Please enter both first and last name");
	
$("#vcnForm" ).validate({
	rules: {
	 names: {
		required: true,
		names: true
		},
	 phone1: {
		required: true,
		phoneUS: true
		},
	 login: {
	 
		required: true,
		minlength: 3,
		maxlength: 8,
		login: true
		},
	 password: {
		required: true,
		minlength: 6,
		maxlength: 8,
		password: true
		},
	 birth_contact: {
		required: true,
		date: true
		},
	 keyword: {
		required: true,
		email: true,
		keyword: true
		},
	 address1: {
		required: true
		},
	  city: {
		required: true
		},
	 province: {
		required: true
		},
	 postalcode: {
		required:true
		},
	 country: {
		required:true
		}
	}
});


});

