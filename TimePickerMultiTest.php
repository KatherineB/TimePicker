<div class="timepickerMainView" id="timepickerMainView">
       <div class="upperSection">
	       <div class="hourPanel">
		      <div class="pickBtn pickBtnHr1" onClick="setHour('01')">1</div>
			  <div class="pickBtn pickBtnHr2" onClick="setHour('02')">2</div>
			  <div class="pickBtn pickBtnHr3" onClick="setHour('03')">3</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn pickBtnHr4" onClick="setHour('04')">4</div>
			  <div class="pickBtn pickBtnHr5" onClick="setHour('05')">5</div>
			  <div class="pickBtn pickBtnHr6" onClick="setHour('06')">6</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn pickBtnHr7" onClick="setHour('07')">7</div>
			  <div class="pickBtn pickBtnHr8" onClick="setHour('08')">8</div>
			  <div class="pickBtn pickBtnHr9" onClick="setHour('09')">9</div>
			  <div style="clear:both;"></div>
			  <div class="pickBtn pickBtnHr10" onClick="setHour('10')">10</div>
			  <div class="pickBtn pickBtnHr11" onClick="setHour('11')">11</div>
			  <div class="pickBtn pickBtnHr12" onClick="setHour('12')">12</div>
			  <div style="clear:both;"></div>
		   </div>
		   <div class="rightPanel">
		       <div class="tens">
			      <div class="pickBtn pickBtnTens0" onClick="setTens('0')">0</div>
			      <div class="pickBtn pickBtnTens1" onClick="setTens('1')">1</div>
				  <div class="pickBtn pickBtnTens2" onClick="setTens('2')">2</div>
				  <div class="pickBtn pickBtnTens3" onClick="setTens('3')">3</div>
				  <div class="pickBtn pickBtnTens4" onClick="setTens('4')">4</div>
				  <div class="pickBtn pickBtnTens5" onClick="setTens('5')">5</div>
				  <div style="clear:both;"></div>
			   </div>
			   <div class="ones">
			      <div class="pickBtn pickBtnOnes0" >0</div>
			      <div class="pickBtn pickBtnOnes1" onClick="setOnes('1')">1</div>
				  <div class="pickBtn pickBtnOnes2" onClick="setOnes('2')">2</div>
				  <div class="pickBtn pickBtnOnes3" onClick="setOnes('3')">3</div>
				  <div class="pickBtn pickBtnOnes4" onClick="setOnes('4')">4</div>
				  <div style="clear:both;"></div>
				  <div class="pickBtn pickBtnOnes5" onClick="setOnes('5')">5</div>
				  <div class="pickBtn pickBtnOnes6" onClick="setOnes('6')">6</div>
				  <div class="pickBtn pickBtnOnes7" onClick="setOnes('7')">7</div>
				  <div class="pickBtn pickBtnOnes8" onClick="setOnes('8')">8</div>
				  <div class="pickBtn pickBtnOnes9" onClick="setOnes('9')">9</div>
				  <div style="clear:both;"></div>
			   </div>
			   <div class="ampm">
			      <div class="pickBtnL pickBtnLam" onClick="setAMPM('AM')">AM</div>
			      <div class="pickBtnL pickBtnLpm" onClick="setAMPM('PM')">PM</div>
				  <div style="clear:both;"></div>
			   </div>
		   </div>
		   <div style="clear:both;"></div>
	   </div>
	   <div class="lowerSection">
	     <div class="clearBtn" onClick="clearAll()">Clear</div>
		 <div class="timeDisplayBox">
		     <div class="display displayHr" id="displayHr">00</div>
			 <div class="display displayColon">:</div>
			 <div class="display displayTens" id="displayTens">0</div>
			 <div class="display displayOnes" id="displayOnes">0</div>
			 <div class="display displayAMPM" id="displayAMPM">AM</div>
		 </div>
		 <div class="setBtn" onClick="setTime()">Set</div>
		 <div style="clear:both;"></div>
	   </div>
   </div>  