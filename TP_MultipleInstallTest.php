<html>
<head>
<title>TimePicker Multiple Install Test</title>
<link href="TimePicker/TimePicker.css" rel="stylesheet">
<script src="TimePicker/TimePickerMultiTest.js"></script>
</head>
<style>
.timepickerBox{
	float: left;
	padding: 100px;
	border: 2px solid #00ff00;
}
</style>
<body>
<div class="mainDiv">
   <div class="timepickerBox">
	   <div   class="timeBox" onClick="displayPicker()"></div>  
	   <?php include('TimePicker/TimePickerMultiTest.php'); ?>
   </div>
  <div class="timepickerBox">
	   <div   class="timeBox" onClick="displayPicker()"></div>  
	   <?php include('TimePicker/TimePickerMultiTest.php'); ?>
   </div>
   <div style="clear:both;"></div>
   <div class="timepickerBox">
	   <div   class="timeBox" onClick="displayPicker()"></div>  
	   <?php include('TimePicker/TimePickerMultiTest.php'); ?>
   </div>
   <div class="timepickerBox">
	   <div   class="timeBox" onClick="displayPicker()"></div>  
	   <?php include('TimePicker/TimePickerMultiTest.php'); ?>
   </div>
   <div style="clear:both;"></div>
</div>
<script>
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
</script>
</body>
</html>