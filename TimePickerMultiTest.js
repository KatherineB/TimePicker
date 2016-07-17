 /* This code is for determining how many timepickers are installed on the page,
    creating arrays for them and giving them unique ids for later individual 
    referencing.
*/	
    var TPB_list = document.getElementsByClassName("timeBox");
    var TPMV_list = document.getElementsByClassName("timepickerMainView");
    var TP_ids = []; 

	for (var i=0; i<TPB_list.length; i++){
		TPB_list[i].setAttribute("id", "tpb" + i);	
		TPB_list[i].setAttribute("onClick", "displayPicker("+i+")");
		TPMV_list[i].setAttribute("id", "tpmv" + i);
		TP_ids[i] = "tpmv" + i;
	}
	alert(TP_ids[0]);

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
	
	var BTNam_list = document.getElementsByClassName("pickBtnLam");
	var BTNpm_list = document.getElementsByClassName("pickBtnLpm");
	
	var displayHr_list = document.getElementsByClassName("displayHr");
	var displayTens_list = document.getElementsByClassName("displayTens");
	var displayAMPM_list = document.getElementsByClassName("displayAMPM");
	
	for (var i=0; i<BTNam_list.length; i++){
		pickBtnHr1_list[i].setAttribute("id", "pickBtnHr1" + i);	
		pickBtnHr1_list[i].setAttribute("onClick", "setHour('01'," + i + ")");
		pickBtnHr2_list[i].setAttribute("id", "pickBtnHr2" + i);	
		pickBtnHr2_list[i].setAttribute("onClick", "setHour('02'," + i + ")");
		pickBtnHr3_list[i].setAttribute("id", "pickBtnHr3" + i);	
		pickBtnHr3_list[i].setAttribute("onClick", "setHour('03'," + i + ")");
		pickBtnHr4_list[i].setAttribute("id", "pickBtnHr4" + i);	
		pickBtnHr4_list[i].setAttribute("onClick", "setHour('04'," + i + ")");
		pickBtnHr5_list[i].setAttribute("id", "pickBtnHr5" + i);	
		pickBtnHr5_list[i].setAttribute("onClick", "setHour('05'," + i + ")");
		pickBtnHr6_list[i].setAttribute("id", "pickBtnHr6" + i);	
		pickBtnHr6_list[i].setAttribute("onClick", "setHour('06'," + i + ")");
		pickBtnHr7_list[i].setAttribute("id", "pickBtnHr7" + i);	
		pickBtnHr7_list[i].setAttribute("onClick", "setHour('07'," + i + ")");
		pickBtnHr8_list[i].setAttribute("id", "pickBtnHr8" + i);	
		pickBtnHr8_list[i].setAttribute("onClick", "setHour('08'," + i + ")");
		pickBtnHr9_list[i].setAttribute("id", "pickBtnHr9" + i);	
		pickBtnHr9_list[i].setAttribute("onClick", "setHour('09'," + i + ")");
		pickBtnHr10_list[i].setAttribute("id", "pickBtnHr10" + i);	
		pickBtnHr10_list[i].setAttribute("onClick", "setHour('10'," + i + ")");
		pickBtnHr11_list[i].setAttribute("id", "pickBtnHr11" + i);	
		pickBtnHr11_list[i].setAttribute("onClick", "setHour('11'," + i + ")");
		pickBtnHr12_list[i].setAttribute("id", "pickBtnHr12" + i);	
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
		
		BTNam_list[i].setAttribute("id", "btn_am" + i);	
		BTNam_list[i].setAttribute("onClick", "setAMPM('AM'," + i + ")");
		BTNpm_list[i].setAttribute("id", "btn_pm" + i);	
		BTNpm_list[i].setAttribute("onClick", "setAMPM('PM'," + i + ")");
		
		displayHr_list[i].setAttribute("id", "displayHr" + i);
		displayTens_list[i].setAttribute("id", "displayTens" + i);
		displayAMPM_list[i].setAttribute("id", "displayAMPM" + i);
	}
}

function setHour(hour,num){
   showHr = "displayHr" + num;
   showTens = "displayTens" + num;
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
	showTens = "displayTens" + num;
    document.getElementById(showTens).innerHTML = ten; 
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