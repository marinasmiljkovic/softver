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
	this.arrayOfParams = [ [ 3000, 200, 100], [5000, 200,300],[ 6000, 500,500]];
	this.runAnimationFromObject();
};