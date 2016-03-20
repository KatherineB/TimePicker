<div class="timepickerMainView" id="timepickerMainView">
       <div class="upperSection">
	       <div class="hourPanel">
		      <div class="pickBtn" onClick="setHour('01')">1</div>
			  <div class="pickBtn" onClick="setHour('02')">2</div>
			  <div class="pickBtn" onClick="setHour('03')">3</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn" onClick="setHour('04')">4</div>
			  <div class="pickBtn" onClick="setHour('05')">5</div>
			  <div class="pickBtn" onClick="setHour('06')">6</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn" onClick="setHour('07')">7</div>
			  <div class="pickBtn" onClick="setHour('08')">8</div>
			  <div class="pickBtn" onClick="setHour('09')">9</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn" onClick="setHour('10')">10</div>
			  <div class="pickBtn" onClick="setHour('11')">11</div>
			  <div class="pickBtn" onClick="setHour('12')">12</div>
			  <div style="clear:both;"></div>
		   </div>
		   <div class="rightPanel">
		       <div class="tens">
			      <div class="pickBtn" onClick="setTens('0')">0</div>
			      <div class="pickBtn" onClick="setTens('1')">1</div>
				  <div class="pickBtn" onClick="setTens('2')">2</div>
				  <div class="pickBtn" onClick="setTens('3')">3</div>
				  <div class="pickBtn" onClick="setTens('4')">4</div>
				  <div class="pickBtn" onClick="setTens('5')">5</div>
				  <div style="clear:both;"></div>
			   </div>
			   <div class="ones">
			      <div class="pickBtn" onClick="setOnes('0')">0</div>
			      <div class="pickBtn" onClick="setOnes('1')">1</div>
				  <div class="pickBtn" onClick="setOnes('2')">2</div>
				  <div class="pickBtn" onClick="setOnes('3')">3</div>
				  <div class="pickBtn" onClick="setOnes('4')">4</div>
				  <div style="clear:both;"></div>
				  <div class="pickBtn" onClick="setOnes('5')">5</div>
				  <div class="pickBtn" onClick="setOnes('6')">6</div>
				  <div class="pickBtn" onClick="setOnes('7')">7</div>
				  <div class="pickBtn" onClick="setOnes('8')">8</div>
				  <div class="pickBtn" onClick="setOnes('9')">9</div>
				  <div style="clear:both;"></div>
			   </div>
			   <div class="ampm">
			      <div class="pickBtnL" onClick="setAMPM('AM')">AM</div>
			      <div class="pickBtnL" onClick="setAMPM('PM')">PM</div>
				  <div style="clear:both;"></div>
			   </div>
		   </div>
		   <div style="clear:both;"></div>
	   </div>
	   <div class="lowerSection">
	     <div class="controlBtn" onClick="clearAll()">Clear</div>
		 <div class="timeDisplayBox">
		     <div class="display displayHr" id="displayHr">00</div>
			 <div class="display displayColon">:</div>
			 <div class="display displayTens" id="displayTens">0</div>
			 <div class="display displayOnes" id="displayOnes">0</div>
			 <div class="display displayAMPM" id="displayAMPM">AM</div>
		 </div>
		 <div class="controlBtn" onClick="setTime()">Set</div>
		 <div style="clear:both;"></div>
	   </div>
   </div>  