 // form validation
$k = jQuery.noConflict();
$k(function(){
$k("#formID").validate({
	rules: {
		email:{
			required: true,
			email: true
		},
    name:{
        required: true,
    },
    message:{
        required: true,
		minlength: 20
    },
    mobile_without_isd:{
        required: true,
        intlTelNumber: true,
    },
    co_name:{
        required: true,
    },
    pincode:{
        required: true,
    },
    city_id_input:{
        required: true,
    },
    checkbox1:{
        required: true,
    }
	},
	messages: {
		inputMob: {
			required: "Enter the contact number"
		},
		email: {
			required: "Enter the email id",
			email:"Enter the valid email id"
        },	
        name: {
			required: "Enter your name"
        },
        message:{
            required: "Enter your description",
			minlength: "Please provide more description"
        },
        mobile_without_isd:{
            required: "Enter your mobile",
        },
        co_name:{
            required: "Enter company name",
        },
        pincode:{
            required: "Enter your pincode",
        }
		
	}
	});
});

// flag start

$k.validator.addMethod("intlTelNumber", function(value, element) {
    return this.optional(element) || $k(element).intlTelInput("isValidNumber");
	}, "Please enter a valid Number");

var telInput = $k("#mobile"),
errorMsg = $k("#error-msg"),
validMsg = $k("#valid-msg");
// initialise plugin
telInput.intlTelInput({
utilsScript: "https://st.tistatic.com/ver7982/js/tradeindia/design2017/utils.js",
separateDialCode:true,
autoPlaceholder: true,
autoHideDialCode: false,
preferredCountries: ['in', 'us', 'gb'],
hiddenInput: "mobile",
onSelectFlag:null,
customPlaceholder: function(selectedCountryPlaceholder) {
  return "Mobile Number e.g. " + selectedCountryPlaceholder;
}
});

// flag  end

// show address

$k(function(){
  $k('.moreDetails').click(function(){
    var str = document.getElementById("moreInfo").innerHTML; 
    if(str === '+'){
        document.getElementById("moreInfo").innerHTML = '-';
    }else{
        document.getElementById("moreInfo").innerHTML = '+';
    }
    $k('.addressDetails').slideToggle();
  });
});


