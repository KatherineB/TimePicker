<html>
<head>
<title>TimePicker Multiple Install Test</title>
<link href="TimePicker/TimePickerM.css" rel="stylesheet">

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
  
</script>
<script src="TimePicker/TimePickerMultiTest.js"></script>
</body>
</html>