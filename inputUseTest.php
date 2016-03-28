<html>
<head>
<title>Data Use Test for TimePicker</title>
<link href="TimePicker.css" rel="stylesheet">
<script src="TimePicker.js"></script>
<style>
.displayBtn{
	margin: 40px;
	height: 40px;
	width: 120px;
}
</style>
<script>
function displayData(){

	var time = document.getElementById('timeBox').innerHTML;

	/* if to deal with times where hour is just one character long */
	if(time.length == 7){
		var hour = time.substr(0, 1);
		var min = time.substr(2, 2);
		var half = time.substr(5, 2);
	}
	else{
		var hour = time.substr(0, 2);
		var min = time.substr(3, 2);
		var half = time.substr(6, 2);
	}
	
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('min').innerHTML = min;
	document.getElementById('half').innerHTML = half;
}
</script>
</head>
<body>
<div class="mainDiv">
   <div  id="timeBox" class="timeBox" onClick="displayPicker()"></div>  
   <?php include('TimePicker.php'); ?>
   <div>
   <button class="displayBtn" value="Display Data" OnClick="displayData()">Display Data
  </button>
   </div>
   <div>Hour: <span id="hour"></span></div>
   <div>Minutes: <span id="min"></span></div>
   <div>Day Half: <span id="half"></span></div>
</div>
</body>
</html>