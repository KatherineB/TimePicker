
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
   document.getElementById('timepickerMainView').style.display = 'inline-block';
}

