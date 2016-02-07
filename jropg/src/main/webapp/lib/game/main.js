ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'game.levels.chocobostable'
)
.defines(function(){

MyGame = ig.Game.extend({
	

	init: function() {
        var width = ig.global.innerWidth;
        var height  = ig.global.innerHeight;
        //var scale = Math.floor( Math.max( Math.min( width / 320, height / 240), 1 ) );
        ig.system.resize( width /  ig.system.scale, height / ig.system.scale);
        console.log("Scale: " + ig.system.scale);

        ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
        ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
        ig.input.bind( ig.KEY.UP_ARROW, 'up' );
        ig.input.bind( ig.KEY.DOWN_ARROW, 'down' );
        ig.input.bind( ig.KEY.MOUSE1, 'mouse1' );

        this.loadLevel( LevelChocobostable );
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();

        // screen follows the chocobo
        var chocobo = this.getEntitiesByType( EntityChocobo )[0];
        if( chocobo ) {
            this.screen.x = chocobo.pos.x - ig.system.width/2 + 12;
            this.screen.y = chocobo.pos.y - ig.system.height/2 + 16;
        }
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
