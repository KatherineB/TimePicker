<html>
<head>
<title>TimePicker Edge Detect Development</title>
<link href="TimePicker/TimePicker.css" rel="stylesheet">
<script src="TimePicker/TimePicker.js"></script>
</head>
<style>
.mainDiv{
	
}	
	
.timePickerHolder{
	border: 2px solid #00ffff;
	height: 400px;
	width: 400px;
	padding-left: 400px;
	padding-top: 400px;
}
</style>

<body>
<div class="mainDiv">
   <div class="timePickerHolder">
	   <div  id="timeBox" class="timeBox" onClick="displayPicker()"></div> 
       <?php include('TimePicker/TimePicker.php'); ?>	
  </div>
  
</div>
<script>
var rect = timeBox.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h);
var vertDiff = h - rect.top;
console.log(vertDiff); // 205
if(vertDiff < 205){
document.getElementById('timepickerMainView').style.marginTop = '-190';
}
var horDiff = w - rect.left;
console.log(horDiff); // 331
if(horDiff < 331){
document.getElementById('timepickerMainView').style.marginLeft = '-180';
}
</script>
</body>
</html>