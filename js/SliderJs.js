  function setDefault() {
	  document.getElementById("leftButton").style.display = "none";
  }
	
	function leftMovement() {
	 var im = document.getElementById("first");
	 var imm = document.getElementById("second");
	  var right = document.getElementById("rightButton");
	 var left = document.getElementById("leftButton");
	  var immm = document.getElementById("third");
	  var immmm = document.getElementById("fourth");
	  var immmmm = document.getElementById("fifth");
	 var immmmmm = document.getElementById("sixth");
	 
		if(immmmmm.style.display=="block")
			{
			    immmmmm.style.display="none";
				immmmm.style.display="block";
				right.style.display="block";
			}
		else if(immmmm.style.display=="block")
		{
				immmmm.style.display="none";
				immmm.style.display="block";
		}
		 else if(immmm.style.display=="block")
			{
			    immmm.style.display="none";
				immm.style.display="block";
			}
	 else if(immm.style.display=="block")
			{
			    immm.style.display="none";
				imm.style.display="block";
			}
	   else if(imm.style.display=="block")
			{
			    imm.style.display="none";
				im.style.display="block";
				left.style.display="none";
			}
}

function rightMovement() {
	 var im = document.getElementById("first");
	 var imm = document.getElementById("second");
	  var right = document.getElementById("rightButton");
	 var left = document.getElementById("leftButton");
	  var immm = document.getElementById("third");
	  var immmm = document.getElementById("fourth");
	  var immmmm = document.getElementById("fifth");
	 var immmmmm = document.getElementById("sixth");
	 
		if(im.style.display=="block")
			{
			    im.style.display="none";
				imm.style.display="block";
				left.style.display="block";
			}
		else if(imm.style.display=="block")
		{
				imm.style.display="none";
				immm.style.display="block";
		}
		 else if(immm.style.display=="block")
			{
			    immm.style.display="none";
				immmm.style.display="block";
			}
	 else if(immmm.style.display=="block")
			{
			    immmm.style.display="none";
				immmmm.style.display="block";
			}
	   else if(immmmm.style.display=="block")
			{
			    immmmm.style.display="none";
				immmmmm.style.display="block";
				right.style.display="none";
			}
}
  
