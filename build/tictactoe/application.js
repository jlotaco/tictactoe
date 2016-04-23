var playerturn = 1;

function showBack() {
    dizmo.showBack();
}

function checkWinner(sign){
	var won = false;

	if (jQuery('#ff').attr('clicked') === sign){
		if (jQuery('#fs').attr('clicked') === sign){
			if (jQuery('#ft').attr('clicked') === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not ", sign);
	}

	if (jQuery('#sf').attr('clicked') === sign){
		if (jQuery('#ss').attr('clicked') === sign){
			if (jQuery('#st').attr('clicked') === sign){
				won = true
			}	
		}
	}

	else {
		console.log("not", sign);
	}	

	if (jQuery('#tf').attr('clicked') === sign){
		if (jQuery('#ts').attr('clicked') === sign){
			if (jQuery('#tt').attr('clicked') === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}	


	if (jQuery('#ff').attr('clicked') === sign){
		if (jQuery('#sf').attr('clicked') === sign){
			if (jQuery('#tf').attr('clicked') === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}	

	if (jQuery('#fs').attr('clicked') === sign){
		if (jQuery('#ss').attr('clicked') === sign){
			if (jQuery('#ts').attr('clicked') === sign){
				won = true
			}	
		}
	}
	else {
		console.log("not", sign);
	}
	
	if (jQuery('#ft').attr('clicked') === sign){
		if (jQuery('#st').attr('clicked') === sign){
			if (jQuery('#tt').attr('clicked') === sign){
				won = true
			}	
		}
	}
	if (jQuery('#ff').attr('clicked') === sign){
		if (jQuery('#ss').attr('clicked') === sign){
			if (jQuery('#tt').attr('clicked') === sign){
				won = true
			}	
		}
	}
	if (jQuery('#ft').attr('clicked') === sign){
		if (jQuery('#ss').attr('clicked') === sign){
			if (jQuery('#tf').attr('clicked') === sign){
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
    	dizmo.setWidth(190);

    document.getElementById('doneBtn').onclick = function() {
        dizmo.showFront();
        dizmo.setWidth(190);
    };

    jQuery('.tile').click(function (){
    	
    	if (jQuery('#' + jQuery(this).attr('id')).attr('clicked') === "" & playerturn != 0){

    		if(playerturn === 1) {
    			jQuery('#' + jQuery(this).attr('id')).attr('clicked', 'X');
    			// jQuery('#' + jQuery(this).attr('id')).text('X');

				jQuery('#' + jQuery(this).attr('id') + ' .xoro').text('X');
    			

    			if (checkWinner("X")){
    				console.log("won: "+ playerturn);
    				$('#winner').text('Player ' + playerturn + ' won!');
    				playerturn = 0;
    			}
    			
    			else {
    				playerturn = 2;
    			}
    		}

    		else {
    			jQuery('#' + jQuery(this).attr('id')).attr('clicked', 'O');
				jQuery('#' + jQuery(this).attr('id') + ' .xoro').text('O');

    			 if (checkWinner("O")){
    				console.log("won: "+ playerturn);
    				$('#winner').text('Player ' + playerturn + ' won!');
    				layerturn = 0;
    			}
    			
    			else {

    				playerturn = 1;
    			}
    		}
    	}

	});
});