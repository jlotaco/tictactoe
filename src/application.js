var playerturn = 1;

function showBack() {
    dizmo.showBack();
}

function checkWinner(sign){
	var won = false;

	if (jQuery('#ff').text() === sign){
		if (jQuery('#fs').text() === sign){
			if (jQuery('#ft').text() === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not ", sign);
	}

	if (jQuery('#sf').text() === sign){
		if (jQuery('#ss').text() === sign){
			if (jQuery('#st').text() === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}	

	if (jQuery('#tf').text() === sign){
		if (jQuery('#ts').text() === sign){
			if (jQuery('#tt').text() === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}	


	if (jQuery('#ff').text() === sign){
		if (jQuery('#sf').text() === sign){
			if (jQuery('#tf').text() === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}	

	if (jQuery('#fs').text() === sign){
		if (jQuery('#ss').text() === sign){
			if (jQuery('#ts').text() === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}
	
	if (jQuery('#ft').text() === sign){
		if (jQuery('#st').text() === sign){
			if (jQuery('#tt').text() === sign){
				won = true
			}	
		}
	}
	if (jQuery('#ff').text() === sign){
		if (jQuery('#ss').text() === sign){
			if (jQuery('#tt').text() === sign){
				won = true
			}	
		}
	}
	if (jQuery('#ft').text() === sign){
		if (jQuery('#ss').text() === sign){
			if (jQuery('#tf').text() === sign){
				won = true
			}	
		}
	}


	else {
		console.log("not", sign);
	}

	return won;
}

// As soon as the dom is loaded, and the dizmo is ready, instantiate the main class
window.document.addEventListener('dizmoready', function() {
    // Your code should be in here so that it is secured that the dizmo is fully loaded
    document.getElementById('doneBtn').onclick = function() {
        dizmo.showFront();
        dizmo.setWidth(190);
    };

    jQuery('.tile').click(function (){
    	
    	if (jQuery('#' + jQuery(this).attr('id')).text() === "" & playerturn != 0){

    		if(playerturn === 1) {
    			jQuery('#' + jQuery(this).attr('id')).text("X");
    			
    			if (checkWinner("X")){
    				console.log("won: "+ playerturn);
    				playerturn = 0;
    			}
    			
    			else {

    				playerturn = 2;
    			}
    		}

    		else {
    			jQuery('#' + jQuery(this).attr('id')).text("O");
    			 if (checkWinner("O")){
    				console.log("won: "+ playerturn);
    				playerturn = 0;
    			}
    			
    			else {

    				playerturn = 1;
    			}
    		}
    	}

	});
});