/**
 * Animation controller object
 * @constructor
 */
function AnimationControler() {
};

/**
 * Counter for current position of loop
 * @type {number}
 */
AnimationControler.prototype.i = 0;

/**
 * Array of params ( time, y pos, x pos )
 * @type {Array}
 */
AnimationControler.prototype.arrayOfParams = [];

/**
 * Indicator is pause active
 * @type {number}
 */
AnimationControler.prototype.pauseActive = 0;

/**
 * Number of elements in array of params
 * @type {number}
 */
AnimationControler.prototype.numberElements = 0;

/**
 * Delayed execution of move pointer function
 *
 * @param integer time ( in milliseconds )
 *
 * @fires this.movePointerToNextPosition
 *
 * @return void
 */
AnimationControler.prototype.setTimeForMove = function (time) {

	setTimeout(this.movePointerToNextPosition.bind(this), time);
};

/**
 * Move pointer to defined position
 *
 * @fires this.runAnimationFromObject
 *
 * @return void
 */
AnimationControler.prototype.movePointerToNextPosition = function () {

	$('.pokazivac').css({'top': this.arrayOfParams[this.i][1] + 'px', 'left': this.arrayOfParams[this.i][2] + 'px'});
	this.runAnimationFromObject();
};

/**
 * Run Animation cycle
 *
 * @fires this.setTimeForMove
 *
 * @return void
 */
AnimationControler.prototype.runAnimationFromObject = function () {

	this.numberElements = this.arrayOfParams.length;
	if (this.i < this.numberElements - 1) {
		this.i += 1;
		this.setTimeForMove(this.arrayOfParams[this.i][0]);
	}
};

/**
 * SolMi object
 * @constructor
 */
function SolMi() {
}

/**
 * Inherit methods and properties from parent object
 * @type {AnimationControler}
 */
SolMi.prototype = new AnimationControler();

/**
 * Set postions and times for notes in song
 *
 * @fires this.runAnimationFromObject
 *
 * @return void
 */
SolMi.prototype.runSongPointer = function () {

	this.i = 0;
	this.arrayOfParams = [[3000, 200, 100], [2200, 68, 101], [300, 86, 131], [500, 79, 173], [800, 69, 245],
												[300, 86, 274], [500, 79, 314], [800, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516],
												[400, 87, 600], [400, 104, 631], [300, 97, 678],
												[700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286],
												[400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564],
												[300, 258, 596], [400, 258, 683],
												[1100, 68, 101], [300, 86, 131], [500, 79, 173], [800, 69, 245], [300, 86, 274], [500, 79, 314],
												[800, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516], [400, 87, 600], [400, 104, 631],
												[300, 97, 678],
												[700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286],
												[400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564],
												[300, 258, 596], [400, 258, 683],
												[1200, 68, 101], [300, 86, 131], [500, 79, 173], [600, 69, 245], [300, 86, 274], [300, 79, 314],
												[600, 69, 398], [300, 86, 430], [300, 70, 485], [300, 97, 516], [400, 87, 600], [400, 104, 631],
												[300, 97, 678],
												[700, 248, 77], [300, 274, 106], [300, 257, 167], [200, 249, 203], [500, 240, 286],
												[400, 247, 322], [300, 258, 376], [300, 275, 462], [300, 249, 496], [300, 249, 564],
												[300, 258, 596], [400, 258, 683]];
	this.runAnimationFromObject();
};

/**
 * Fa object
 * @constructor
 */
function Fa() {};

/**
 * Inherit methods and properties from parent object
 * @type {AnimationControler}
 */
Fa.prototype = new AnimationControler();

/**
 * Setup notes for song
 *
 * @fires this.runAnimationFromObject
 *
 * @return void
 */
Fa.prototype.runSongPointer = function () {

	this.i = 0;
	this.arrayOfParams = [[]];

	this.runAnimationFromObject();
};

/**
 * Re object
 * @constructor
 */
function Re() {};

/**
 * Inherit properties from parent
 * @type {AnimationControler}
 */
Re.prototype = new AnimationControler();

/**
 * Run pointer for song notes
 *
 * @fires this.runAnimationFromObject
 *
 * @return void
 */
Re.prototype.runSongPointer = function () {

	this.i = 0;
	this.arrayOfParams = [[1000, 212, 222], [1100, 112, 118], [800, 92, 178]];

	this.runAnimationFromObject();
};

/**
 * Do object
 * @constructor
 */
function Do() {}

/**
 * Inherit methods and properties from parent object
 * @type {AnimationControler}
 */
Do.prototype = new AnimationControler();

/**
 * Run pointer for notes in song
 *
 * @fires this.runAnimationFromObject
 *
 * @return void
 */
Do.prototype.runSongPointer = function () {

	this.i = 0;
	this.arrayOfParams = [[1000, 112, 113], [1000, 112, 113], [900, 112, 146]];

	this.runAnimationFromObject();
};