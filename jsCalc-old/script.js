$(document).ready(function(){
	
$(".screen").val("Let's Go!");
	
	var keys = $('.calculator button');
	var operators = $(".operator");
	var decimal = false;
	var letters = '/[a-z]+/i';
	var input = $('.screen');
	var inputVal = input.val();
	var memory;
	var calc ="";
	var oppand;
	var newVal;
	var ans;

	$(keys).not(operators).click(function(){
		var btnVal = $(this).val();
		calc += btnVal;
		memory+=calc;
		input.val(calc);
		

	});
	
	//mot more than one decimal per 
	$("#decimal").click(function(){
	
	} );
	
	$(operators).not("#return, #clear, #allclear").click(function(){
		oppand = $(this).val();
		if(oppand == "-") {
			if(!calc) {
				calc += "-"
				newVal = calc;
			}
		} else {
		newVal = calc;
		calc = "";
		}
		
		input.val(newVal);
		
    });
	
	
	$("#clear, #allclear").click(function() {
		calc = "";
		input.val("0");
		if($(this).attr("id") === "allclear") {
			newVal = "";
			ans = "";
		}
	});
	


	
	$("#return").click(function() {
	
			if (oppand === "+"){
			calc = (parseFloat(calc, 10) + parseFloat(newVal,10));
		} else if (oppand === "-"){
			calc = (parseFloat(newVal, 10) - parseFloat(calc,10));
		} else if (oppand === "/"){
			calc = (parseFloat(newVal, 10) / parseFloat(calc,10));
		} else if (oppand === "*"){
			calc = (parseFloat(newVal, 10) * parseFloat(calc,10));
		} else if (oppand === "%") {
			calc = (parseFloat(newVal, 10) % parseFloat(calc,10));
		}
		ans=calc;
		pastVal = calc;
		input.val(calc);
		newVal = "";
    });
	
	$("#ans").click(function() {
		input.val(ans);
		calc = ans;
		
	});
	
	e.preventDefault();
});