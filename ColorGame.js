  var numSquare = 6; 
  var colors = getColors(numSquare);
  var squares = document.querySelectorAll(".square");
  var pickedColor = pickColor();
  var colorDisplay = document.getElementById("colorDisplay");
  var messageDisplay = document.querySelector("#message");
  var reset = document.querySelector("#reset");
  var h1 = document.querySelector("h1");
  var EsyBtn = document.querySelector("#EsyBtn");
  var HrdBtn = document.querySelector("#HrdBtn");
  
  EsyBtn.addEventListener("click",function(){
  	EsyBtn.classList.add("selected");
  	HrdBtn.classList.remove("selected");
  	numSquare = 3;
  	colors = getColors(numSquare);
  	pickedColor = pickColor();
  	colorDisplay.textContent = pickedColor;
  	for(var i=0 ;i<squares.length;i++){
  		if(colors[i]){
  			squares[i].style.backgroundColor = colors[i];
  		}
  		else{
  			squares[i].style.display = "none";
  		}
  	}
  	h1.style.backgroundColor="steelblue";
  });

  HrdBtn.addEventListener("click",function(){
  	EsyBtn.classList.remove("selected");
  	HrdBtn.classList.add("selected");
  	numSquare = 6;
  	colors = getColors(numSquare);
  	pickedColor = pickColor();
  	colorDisplay.textContent = pickedColor;
  	for(var i=0 ;i<squares.length;i++){
  		squares[i].style.backgroundColor = colors[i];
  		squares[i].style.display = "block";
  	}
  	h1.style.backgroundColor = "steelblue";
  });

  colorDisplay.textContent = pickedColor;

  reset.addEventListener("click",function(){

  	colors = getColors(numSquare);
  	pickedColor = pickColor();
  	colorDisplay.textContent = pickedColor;
  	for(var i=0; i<squares.length; i++){
  		squares[i].style.backgroundColor = colors[i];
  	}
  	h1.style.backgroundColor = "steelblue";
  	reset.textContent = "New colors";
  	messageDisplay.textContent="";
  });
 
  for(var i=0; i<squares.length; i++){
  	 squares[i].style.backgroundColor = colors[i];

  	 squares[i].addEventListener("click",function(){
  	 	var clickedColor = this.style.backgroundColor;
  	 	if(clickedColor === pickedColor){
  	 		message.textContent = "Correct!!!";
  	 		changeColor(clickedColor);
  	 		h1.style.backgroundColor = clickedColor;
  	 		reset.textContent = "Play Again?";
  	 	}
  	 	else{
  	 		this.style.backgroundColor = "#232323";
  	 		message.textContent = "Try Again!!!";
  	 	}
  	 });
  }

  function changeColor(color){
  	for(var i=0;i<squares.length;i++){
  		squares[i].style.backgroundColor = color;
  	}
  }

  function pickColor(){
  	var rand = Math.floor(Math.random() * colors.length);
  	return colors[rand];
  }

  function getColors(num){
  	var arr = [];

  	for(var i=0; i<num; i++){
  		arr.push(getrandomColors());
  	}

  	return arr;
  }

  function getrandomColors(){
  	r = Math.floor(Math.random() * 256);
  	b = Math.floor(Math.random() * 256);
  	g = Math.floor(Math.random() * 256);
  	return "rgb(" + r + ", " + g + ", " + b + ")";
  }


