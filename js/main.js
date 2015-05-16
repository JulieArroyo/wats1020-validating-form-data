/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.


// Refer to the `index.html` file for the validation rules that must be enforced.
$(Document).on('ready' , function(){

	$('#form-group').validate({
		submitHandler: function (form){
			form.submit();
		},
		rules: {
			"your-name": {
				required: true,
				maxlength: 128
			},
			"your-address": {
				required: true,
				maxlength: 500
			},
			"your-city": {
				required: true
			},
			"your-state":{
				required: true,
				maxlength: 2
			},
			"your-zip":{
				required: true,
				maxlenght: 5,
				digits: true
			},
			"card-holder-name":{
				required: true,
				maxlenght:128
			},
			"card-number":{
				required: true,
				creditcard: true
			},
			"expiry-month": {
				required: true,
				digits: true
			},
			"cvv": {
				required: true,
				maxlenght: 3,
				digits: true
			},
			"shipping-method": {
				required: true
			},
			messages: {
				"your-name": {
					required: "Please enter your name",
					minlenght: "Must be at least 128 letters"
				},
				"your-address":{
					required:"PLease enter your address"
				},
				"your-city": {
					required:"Don't forget your city"
				},
				"your-state":{
					required: "Use 2 letter abbreviation"
				},
				"your-zip": {
					required:"Please enter 5 digit zip code"
				},
				"card-holder-name": {
					required: "Name printed on card"
				},
				"card-number":{
					required: "Please enter card number"
				},
				"expiry-month": {
					required: "Please enter expiration date"
				},
				"cvv": {
					required: "PLease enter 3 digit code"
				},
				"shipping-method":{
					required: "Please enter choice of shipping"
				}
			}
		}
	});


	
});
	$( "#form-group" ).submit(function( event ) {
  alert( "Handler for .submit() called." );
  event.preventDefault();
});