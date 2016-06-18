
function setHour(hour){
   var hourChar0 = hour.charAt(0);
   var hourChar1 = hour.charAt(1);
   // adjustments to remove leading zero from one-digit hour times
   if( hourChar0 === '0'){
       document.getElementById('displayHr').style.paddingLeft = '19px';
	   document.getElementById('displayTens').style.marginLeft = '3px';
	   hour = hourChar1;
   }
   else{
       document.getElementById('displayHr').style.paddingLeft = '6px';
	   document.getElementById('displayTens').style.marginLeft = '2px';
   }
   document.getElementById('displayHr').innerHTML = hour;
}

function setTens(ten){
   document.getElementById('displayTens').innerHTML = ten; 
}

function setOnes(one){
   document.getElementById('displayOnes').innerHTML = one; 
}

function setAMPM(half){
   document.getElementById('displayAMPM').innerHTML = half; 
}

function clearAll(){
   document.getElementById('displayHr').innerHTML = "00";
   document.getElementById('displayTens').innerHTML = "0";
   document.getElementById('displayOnes').innerHTML = "0"; 
   // these two lines undo the adjustments made to display single hours properly
   document.getElementById('displayHr').style.paddingLeft = '6px';
   document.getElementById('displayTens').style.marginLeft = '2px';
}
function setTime(){
    var hr = document.getElementById('displayHr').innerHTML;	
    var ten = document.getElementById('displayTens').innerHTML;
	var one = document.getElementById('displayOnes').innerHTML;
	var half = document.getElementById('displayAMPM').innerHTML;
	var time = hr + ":" + ten + one + " " + half;
	document.getElementById('timeBox').innerHTML = time; 
	document.getElementById('timepickerMainView').style.display = 'none';
}
function displayPicker(){
	/*  Edge detection must take place before the timepicker is displayed on the
	    screen so it is not possible to use the timepicker's position.  The position  
		of the input box is used instead.  Position limits measured in advance during 
		testing are used to determine if there is enough space.
	*/
	var MINIMUM_ALLOWABLE_VERTICAL_DIFF = 205;
	var MINIMUM_ALLOWABLE_HORIZONTAL_DIFF = 331;
	var VERTICAL_ADJUSTMENT = -190;
	var HORIZONTAL_ADJUSTMENT = -180;
	
	var timeBoxPos = timeBox.getBoundingClientRect();
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	var vertDiff = h - timeBoxPos.top;
	if(vertDiff < MINIMUM_ALLOWABLE_VERTICAL_DIFF){
	     document.getElementById('timepickerMainView').style.marginTop = VERTICAL_ADJUSTMENT;
	}
	else{
		document.getElementById('timepickerMainView').style.marginTop = '0';
	}
	
	var horizDiff = w - timeBoxPos.left;
	if(horizDiff < MINIMUM_ALLOWABLE_HORIZONTAL_DIFF){
	    document.getElementById('timepickerMainView').style.marginLeft = HORIZONTAL_ADJUSTMENT;
	}
	else{
		document.getElementById('timepickerMainView').style.marginLeft = '0';
	}
	
    document.getElementById('timepickerMainView').style.display = 'inline-block';
}

