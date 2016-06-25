
function displayPicker(id_num){
	/*  Edge detection must take place before the timepicker is displayed on the
	    screen so it is not possible to use the timepicker's position.  The position  
		of the input box is used instead.  Position limits measured in advance during 
		testing are used to determine if there is enough space.
	*/
	var MINIMUM_ALLOWABLE_VERTICAL_DIFF = 205;
	var MINIMUM_ALLOWABLE_HORIZONTAL_DIFF = 331;
	var VERTICAL_ADJUSTMENT = "-190px";
	var HORIZONTAL_ADJUSTMENT = "-180px";

    var mainViewTP = TP_ids[id_num];

	var timeBoxPos = TPB_list[id_num].getBoundingClientRect();
	var w = window.innerWidth;
	var h = window.innerHeight;
	
	var vertDiff = h - timeBoxPos.top;
	if(vertDiff < MINIMUM_ALLOWABLE_VERTICAL_DIFF){
	     document.getElementById(mainViewTP).style.marginTop = VERTICAL_ADJUSTMENT;
	}
	else{
		document.getElementById(mainViewTP).style.marginTop = '0px';
	}
	
	var horizDiff = w - timeBoxPos.left;
	if(horizDiff < MINIMUM_ALLOWABLE_HORIZONTAL_DIFF){
	    document.getElementById(mainViewTP).style.marginLeft = HORIZONTAL_ADJUSTMENT;
	}
	else{
		document.getElementById(mainViewTP).style.marginLeft = '0px';
	}
	
    document.getElementById(mainViewTP).style.display = 'inline-block';
	
	var pickBtnHr1_list = document.getElementsByClassName("pickBtnHr1");
	var pickBtnHr2_list = document.getElementsByClassName("pickBtnHr2");
	var pickBtnHr3_list = document.getElementsByClassName("pickBtnHr3");
	var pickBtnHr4_list = document.getElementsByClassName("pickBtnHr4");
	var pickBtnHr5_list = document.getElementsByClassName("pickBtnHr5");
	var BTNam_list = document.getElementsByClassName("pickBtnLam");
	var BTNpm_list = document.getElementsByClassName("pickBtnLpm");
	var displayHr_list = document.getElementsByClassName("displayHr");
	var displayAMPM_list = document.getElementsByClassName("displayAMPM");
	
	for (var i=0; i<BTNam_list.length; i++){
		pickBtnHr1_list[i].setAttribute("id", "pickBtnHr1" + i);	
		pickBtnHr1_list[i].setAttribute("onClick", "setHour('01'," + i + ")");
		BTNam_list[i].setAttribute("id", "btn_am" + i);	
		BTNam_list[i].setAttribute("onClick", "setAMPM('AM'," + i + ")");
		BTNpm_list[i].setAttribute("id", "btn_pm" + i);	
		BTNpm_list[i].setAttribute("onClick", "setAMPM('PM'," + i + ")");
		
		displayHr_list[i].setAttribute("id", "displayHr" + i);
		displayAMPM_list[i].setAttribute("id", "displayAMPM" + i);
	}
}

function setHour(hour,num){
   hour = hour + num;
   showHr = "displayHr" + num;
   var hourChar0 = hour.charAt(0);
   var hourChar1 = hour.charAt(1);
   // adjustments to remove leading zero from one-digit hour times
  /* if( hourChar0 === '0'){   <-- temp removal during testing
       document.getElementById('displayHr').style.paddingLeft = '19px';
	   document.getElementById('displayTens').style.marginLeft = '3px';
	   hour = hourChar1;
   }
   else{
       document.getElementById('displayHr').style.paddingLeft = '6px';
	   document.getElementById('displayTens').style.marginLeft = '2px';
   } */
   document.getElementById(showHr).innerHTML = hour;
}

function setTens(ten){
   document.getElementById('displayTens').innerHTML = ten; 
}

function setOnes(one){
   document.getElementById('displayOnes').innerHTML = one; 
}

function setAMPM(half,num){
	var showAmPm = "displayAMPM" + num;
   document.getElementById(showAmPm).innerHTML = half; 
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

