<html>
<head>
<title>TimePicker Multiple Install Test</title>
<link href="TimePicker/TimePicker.css" rel="stylesheet">

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
	   <div class="timeBox" ></div>  
	   <?php include('TimePicker/TimePicker.php'); ?>
   </div>
  <div class="timepickerBox">
	   <div class="timeBox"></div>  
	   <?php include('TimePicker/TimePicker.php'); ?>
   </div>
   <div style="clear:both;"></div>
   <div class="timepickerBox">
	   <div class="timeBox"></div>  
	   <?php include('TimePicker/TimePicker.php'); ?>
   </div>
   <div class="timepickerBox">
	   <div class="timeBox"></div>  
	   <?php include('TimePicker/TimePicker.php'); ?>
   </div>
   <div style="clear:both;"></div>
</div>
<script src="TimePicker/TimePicker.js"></script>
</body>
</html>