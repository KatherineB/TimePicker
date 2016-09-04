 /* This code is for determining how many timepickers are installed on the page,
    creating arrays for them and giving them unique ids for later individual 
    referencing.
*/	
    var timeBox_list = document.getElementsByClassName("timeBox");
    var timePickerMV_list = document.getElementsByClassName("timepickerMainView");
    var timePickerIds_list = []; 

	for (var i=0; i<timeBox_list.length; i++){
		timeBox_list[i].setAttribute("id", "timeBox" + i);	
		timeBox_list[i].setAttribute("onClick", "displayPicker("+i+")");
		timePickerMV_list[i].setAttribute("id", "timePickerMV" + i);
		timePickerIds_list[i] = "timePickerMV" + i;
	}

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

    var mainViewTP = timePickerIds_list[id_num];

	var timeBoxPos = timeBox_list[id_num].getBoundingClientRect();
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
	
	
	/* All buttons must be given unique ids in case more than one timepicker is
	   installed on the page
	*/
	var pickBtnHr1_list = document.getElementsByClassName("pickBtnHr1");
	var pickBtnHr2_list = document.getElementsByClassName("pickBtnHr2");
	var pickBtnHr3_list = document.getElementsByClassName("pickBtnHr3");
	var pickBtnHr4_list = document.getElementsByClassName("pickBtnHr4");
	var pickBtnHr5_list = document.getElementsByClassName("pickBtnHr5");
    var pickBtnHr6_list = document.getElementsByClassName("pickBtnHr6");
	var pickBtnHr7_list = document.getElementsByClassName("pickBtnHr7");
	var pickBtnHr8_list = document.getElementsByClassName("pickBtnHr8");
	var pickBtnHr9_list = document.getElementsByClassName("pickBtnHr9");
	var pickBtnHr10_list = document.getElementsByClassName("pickBtnHr10");
	var pickBtnHr11_list = document.getElementsByClassName("pickBtnHr11");
    var pickBtnHr12_list = document.getElementsByClassName("pickBtnHr12");
	var pickBtnTens0_list = document.getElementsByClassName("pickBtnTens0");
	var pickBtnTens1_list = document.getElementsByClassName("pickBtnTens1");
	var pickBtnTens2_list = document.getElementsByClassName("pickBtnTens2");
	var pickBtnTens3_list = document.getElementsByClassName("pickBtnTens3");
	var pickBtnTens4_list = document.getElementsByClassName("pickBtnTens4");
	var pickBtnTens5_list = document.getElementsByClassName("pickBtnTens5");
	var pickBtnOnes0_list = document.getElementsByClassName("pickBtnOnes0");
	var pickBtnOnes1_list = document.getElementsByClassName("pickBtnOnes1");
	var pickBtnOnes2_list = document.getElementsByClassName("pickBtnOnes2");
	var pickBtnOnes3_list = document.getElementsByClassName("pickBtnOnes3");
	var pickBtnOnes4_list = document.getElementsByClassName("pickBtnOnes4");
	var pickBtnOnes5_list = document.getElementsByClassName("pickBtnOnes5");
	var pickBtnOnes6_list = document.getElementsByClassName("pickBtnOnes6");
	var pickBtnOnes7_list = document.getElementsByClassName("pickBtnOnes7");
	var pickBtnOnes8_list = document.getElementsByClassName("pickBtnOnes8");
	var pickBtnOnes9_list = document.getElementsByClassName("pickBtnOnes9");
	
	var BTNam_list = document.getElementsByClassName("pickBtnLam");
	var BTNpm_list = document.getElementsByClassName("pickBtnLpm");
	
	var displayHr_list = document.getElementsByClassName("displayHr");
	var displayTens_list = document.getElementsByClassName("displayTens");
	var displayOnes_list = document.getElementsByClassName("displayOnes");
	var displayAMPM_list = document.getElementsByClassName("displayAMPM");
	var setTime_list = document.getElementsByClassName("setBtn");
	var clear_list = document.getElementsByClassName("clearBtn");
	
	for (var i=0; i<BTNam_list.length; i++){
		pickBtnHr1_list[i].setAttribute("id", "Hr1pickBtn" + i);	
		pickBtnHr1_list[i].setAttribute("onClick", "setHour('01'," + i + ")");
		pickBtnHr2_list[i].setAttribute("id", "Hr2pickBtn" + i);	
		pickBtnHr2_list[i].setAttribute("onClick", "setHour('02'," + i + ")");
		pickBtnHr3_list[i].setAttribute("id", "Hr3pickBtn" + i);	
		pickBtnHr3_list[i].setAttribute("onClick", "setHour('03'," + i + ")");
		pickBtnHr4_list[i].setAttribute("id", "Hr4pickBtn" + i);	
		pickBtnHr4_list[i].setAttribute("onClick", "setHour('04'," + i + ")");
		pickBtnHr5_list[i].setAttribute("id", "Hr5pickBtn" + i);	
		pickBtnHr5_list[i].setAttribute("onClick", "setHour('05'," + i + ")");
		pickBtnHr6_list[i].setAttribute("id", "Hr6pickBtn" + i);	
		pickBtnHr6_list[i].setAttribute("onClick", "setHour('06'," + i + ")");
		pickBtnHr7_list[i].setAttribute("id", "Hr7pickBtn" + i);	
		pickBtnHr7_list[i].setAttribute("onClick", "setHour('07'," + i + ")");
		pickBtnHr8_list[i].setAttribute("id", "Hr8pickBtn" + i);	
		pickBtnHr8_list[i].setAttribute("onClick", "setHour('08'," + i + ")");
		pickBtnHr9_list[i].setAttribute("id", "Hr9pickBtn" + i);	
		pickBtnHr9_list[i].setAttribute("onClick", "setHour('09'," + i + ")");
		pickBtnHr10_list[i].setAttribute("id", "Hr10pickBtn" + i);	
		pickBtnHr10_list[i].setAttribute("onClick", "setHour('10'," + i + ")");
		pickBtnHr11_list[i].setAttribute("id", "Hr11pickBtn" + i);	
		pickBtnHr11_list[i].setAttribute("onClick", "setHour('11'," + i + ")");
		pickBtnHr12_list[i].setAttribute("id", "Hr12pickBtn" + i);	
		pickBtnHr12_list[i].setAttribute("onClick", "setHour('12'," + i + ")");
		
		pickBtnTens0_list[i].setAttribute("id", "pickBtnTens0" + i);	
		pickBtnTens0_list[i].setAttribute("onClick", "setTens('0'," + i + ")");
		pickBtnTens1_list[i].setAttribute("id", "pickBtnTens1" + i);	
		pickBtnTens1_list[i].setAttribute("onClick", "setTens('1'," + i + ")");
		pickBtnTens2_list[i].setAttribute("id", "pickBtnTens2" + i);	
		pickBtnTens2_list[i].setAttribute("onClick", "setTens('2'," + i + ")");
		pickBtnTens3_list[i].setAttribute("id", "pickBtnTens3" + i);	
		pickBtnTens3_list[i].setAttribute("onClick", "setTens('3'," + i + ")");
		pickBtnTens4_list[i].setAttribute("id", "pickBtnTens4" + i);	
		pickBtnTens4_list[i].setAttribute("onClick", "setTens('4'," + i + ")");
		pickBtnTens5_list[i].setAttribute("id", "pickBtnTens5" + i);	
		pickBtnTens5_list[i].setAttribute("onClick", "setTens('5'," + i + ")");		
		
		pickBtnOnes0_list[i].setAttribute("id", "pickBtnOnes0" + i);	
		pickBtnOnes0_list[i].setAttribute("onClick", "setOnes('0'," + i + ")");
		pickBtnOnes1_list[i].setAttribute("id", "pickBtnOnes1" + i);	
		pickBtnOnes1_list[i].setAttribute("onClick", "setOnes('1'," + i + ")");
		pickBtnOnes2_list[i].setAttribute("id", "pickBtnOnes2" + i);	
		pickBtnOnes2_list[i].setAttribute("onClick", "setOnes('2'," + i + ")");
		pickBtnOnes3_list[i].setAttribute("id", "pickBtnOnes3" + i);	
		pickBtnOnes3_list[i].setAttribute("onClick", "setOnes('3'," + i + ")");
		pickBtnOnes4_list[i].setAttribute("id", "pickBtnOnes4" + i);	
		pickBtnOnes4_list[i].setAttribute("onClick", "setOnes('4'," + i + ")");
		pickBtnOnes5_list[i].setAttribute("id", "pickBtnOnes5" + i);	
		pickBtnOnes5_list[i].setAttribute("onClick", "setOnes('5'," + i + ")");	
		pickBtnOnes6_list[i].setAttribute("id", "pickBtnOnes6" + i);	
		pickBtnOnes6_list[i].setAttribute("onClick", "setOnes('6'," + i + ")");
		pickBtnOnes7_list[i].setAttribute("id", "pickBtnOnes7" + i);	
		pickBtnOnes7_list[i].setAttribute("onClick", "setOnes('7'," + i + ")");
		pickBtnOnes8_list[i].setAttribute("id", "pickBtnOnes8" + i);	
		pickBtnOnes8_list[i].setAttribute("onClick", "setOnes('8'," + i + ")");
		pickBtnOnes9_list[i].setAttribute("id", "pickBtnOnes9" + i);	
		pickBtnOnes9_list[i].setAttribute("onClick", "setOnes('9'," + i + ")");	
		
		BTNam_list[i].setAttribute("id", "btn_am" + i);	
		BTNam_list[i].setAttribute("onClick", "setAMPM('AM'," + i + ")");
		BTNpm_list[i].setAttribute("id", "btn_pm" + i);	
		BTNpm_list[i].setAttribute("onClick", "setAMPM('PM'," + i + ")");
		
		displayHr_list[i].setAttribute("id", "displayHr" + i);
		displayTens_list[i].setAttribute("id", "displayTens" + i);
		displayOnes_list[i].setAttribute("id", "displayOnes" + i);
		displayAMPM_list[i].setAttribute("id", "displayAMPM" + i);
		
		setTime_list[i].setAttribute("id", "setTime" + i);	
		setTime_list[i].setAttribute("onClick", "setTime(" + i + ")");
		
		clear_list[i].setAttribute("id", "clear" + i);	
		clear_list[i].setAttribute("onClick", "clearAll(" + i + ")");
	}
}

function setHour(hour,num){
   var showHr = "displayHr" + num;
   var showTens = "displayTens" + num;
   var hourChar0 = hour.charAt(0);
   var hourChar1 = hour.charAt(1);
   // adjustments to remove leading zero from one-digit hour times
   if( hourChar0 === '0'){  
       document.getElementById(showHr).style.paddingLeft = '19px';
	   document.getElementById(showTens).style.marginLeft = '3px';
	   hour = hourChar1;
   }
   else{
       document.getElementById(showHr).style.paddingLeft = '6px';
	   document.getElementById(showTens).style.marginLeft = '2px';
   } 
   document.getElementById(showHr).innerHTML = hour;
}

function setTens(ten,num){
	var showTens = "displayTens" + num;
    document.getElementById(showTens).innerHTML = ten; 
}

function setOnes(one,num){
	var showOnes = "displayOnes" + num;
   document.getElementById(showOnes).innerHTML = one; 
}

function setAMPM(half,num){
	var showAmPm = "displayAMPM" + num;
   document.getElementById(showAmPm).innerHTML = half; 
}

function clearAll(num){
   var showHr = "displayHr" + num;
   var showTens = "displayTens" + num;
   var showOnes = "displayOnes" + num;
   document.getElementById(showHr).innerHTML = "00";
   document.getElementById(showTens).innerHTML = "0";
   document.getElementById(showOnes).innerHTML = "0"; 
   // these two lines undo the adjustments made to display single hours properly
   document.getElementById(showHr).style.paddingLeft = '6px';
   document.getElementById(showTens).style.marginLeft = '2px';
}
function setTime(num){
	var showHr = "displayHr" + num;
	var showTens = "displayTens" + num;
	var showOnes = "displayOnes" + num;
	var showAmPm = "displayAMPM" + num;
	var showTimeBox = "timeBox" + num;
	var showTimePickerMV = "timePickerMV" + num;
    var hr = document.getElementById(showHr).innerHTML;	
    var ten = document.getElementById(showTens).innerHTML;
	var one = document.getElementById(showOnes).innerHTML;
	var half = document.getElementById(showAmPm).innerHTML;
	var time = hr + ":" + ten + one + " " + half;
	document.getElementById(showTimeBox).innerHTML = time; 
	document.getElementById(showTimePickerMV).style.display = 'none';
}