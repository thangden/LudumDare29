/*global Phaser*/
/*global game*/

/**
 * @author Steve Richey http://www.steverichey.com @stvr_tweets
 */

var playState = {
	init: function() {
		var leftButton;
		var rightButton;
		var bunny;
	},
	preload: function() {
		game.load.image('bunny', 'assets/bunny.png');
	},
	create: function(){
		// initialize physics
		game.physics.startSystem(Phaser.Physics.Arcade);
		
		game.stage.backgroundColor = '#333';
		
		// set up the player
		
		bunny = game.add.sprite(200, 200, 'bunny');
		game.physics.enable(bunny, Phaser.Physics.Arcade);
		
		leftButton = game.input.keyboard.addKey(Phaser.Keyboard.Left);
		rightButton = game.input.keyboard.addKey(Phaser.Keyboard.Right);
	},
	update: function() {
		if (leftButton.isDown) {
			bunny.body.acceleration.x = -10;
		}
		
		if (rightButton.isDown) {
			bunny.body.acceleration.x = 10;
		}
	}
};