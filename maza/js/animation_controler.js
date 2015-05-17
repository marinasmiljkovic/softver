function AnimationControler(){};

AnimationControler.prototype.i = 0;
AnimationControler.prototype.arrayOfParams = [];
AnimationControler.prototype.pauseActive = 0;
AnimationControler.prototype.numberElements = 0;

AnimationControler.prototype.setTimeForMove = function(time){
	setTimeout(this.movePointerToNextPostion.bind(this), time);
};
AnimationControler.prototype.movePointerToNextPostion = function(){
	$('.pokazivac').css({'top': this.arrayOfParams[this.i][1] + 'px', 'left': this.arrayOfParams[this.i][2] + 'px'});
	this.runAnimationFromObject();
};

AnimationControler.prototype.runAnimationFromObject = function(){
	 this.numberElements = this.arrayOfParams.length;
		if( this.i < this.numberElements - 1 ){
		this.i += 1;
		this.setTimeForMove(this.arrayOfParams[this.i][0]);
		}
};


function SolMi(){}

SolMi.prototype = new AnimationControler();
SolMi.prototype.runSongPointer = function(){

	this.i = 0;
	this.arrayOfParams = [ [ 3000, 200, 100], [2200, 68,101],[ 300, 86,131], [500, 79, 173], [800, 69, 245], [300, 86, 274], [500, 79, 314], [800, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516], [400, 87, 600], [400, 104, 631], [300, 97, 678], 
	[700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286], [400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564], [300, 258, 596], [400, 258, 683],
	 [1100, 68, 101],[ 300, 86, 131], [500, 79, 173], [800, 69, 245], [300, 86, 274], [500, 79, 314], [800, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516], [400, 87, 600], [400, 104, 631], [300, 97, 678], 
	 [700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286], [400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564], [300, 258, 596], [400, 258, 683],
	 [1200, 68, 101],[ 300, 86, 131], [500, 79, 173], [600, 69, 245], [300, 86, 274], [300, 79, 314], [600, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516], [400, 87, 600], [400, 104, 631], [300, 97, 678], 
	 [700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286], [400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564], [300, 258, 596], [400, 258, 683]];
	this.runAnimationFromObject();
};


function Fa(){}

Fa.prototype = new AnimationControler();
Fa.prototype.runSongPointer = function(){

	this.i = 0;
	this.arrayOfParams = [ [] ];

	this.runAnimationFromObject();
};


function Re(){}

Re.prototype = new AnimationControler();
Re.prototype.runSongPointer = function(){

	this.i = 0;
	this.arrayOfParams = [ [1000, 212, 222], [1100, 112, 118], [800, 92, 178] ];

	this.runAnimationFromObject();
};


function Do(){}

Do.prototype = new AnimationControler();
Do.prototype.runSongPointer = function(){

	this.i = 0;
	this.arrayOfParams = [ [1000, 112, 113], [1000, 112, 113], [900, 112, 146] ];

	this.runAnimationFromObject();
};