ig.module(
    'game.entities.chocobo'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityChocobo = ig.Entity.extend({
        animSheet: new ig.AnimationSheet( 'media/chocobo.png', 40, 40 ),
        size: {x: 40, y:40},
        offset: {x: 0, y: 0},
        flip: false,
        init: function( x, y, settings ) {
            this.parent( x, y, settings );
            this.addAnim( 'idle',  1, [0] );
            this.addAnim( 'down', .3, [0,  6, 12] );
            this.addAnim( 'up',   .3, [3,  9, 15] );
            this.addAnim( 'left', .3, [4, 10, 16] );
            this.addAnim( 'right',.3, [5, 11, 17] );
        },
        update: function() {
            this.vel.x = 0;
            this.vel.y = 0;
            if (ig.input.state('mouse1')) {
                var mx = (ig.input.mouse.x + ig.game.screen.x); //Figures out the x coord of the mouse in the entire world
                var my = (ig.input.mouse.y + ig.game.screen.y); //Figures out the y coord of the mouse in the entire world
                var r = Math.atan2(my-this.pos.y, mx-this.pos.x); //Gives angle in radians from chocobo's location to the mouse location, assuming directly right is 0
                if (r > Math.PI * 3 / 4 || r < Math.PI * -3 * 4) {
                    this.vel.x = -40;
                    this.currentAnim = this.anims.left;
                } else if (r > Math.PI / 4) {
                    this.vel.y = 40;
                    this.currentAnim = this.anims.down;
                } else if (r < - Math.PI / 4) {
                    this.vel.y = -40;
                    this.currentAnim = this.anims.up;
                } else {
                    this.vel.x = 40;
                    this.currentAnim = this.anims.right;
                }
            } else if( ig.input.state('left') ) {
                this.vel.x = -40;
                this.currentAnim = this.anims.left;
            } else if( ig.input.state('right') ) {
                this.vel.x = 40;
                this.currentAnim = this.anims.right;
            } else if( ig.input.state('up') ) {
                this.vel.y = -40;
                this.currentAnim = this.anims.up;
            } else if( ig.input.state('down') ) {
                this.vel.y = 40;
                this.currentAnim = this.anims.down;
            }
            if (this.vel.x == 0 && this.vel.y == 0) {
                this.currentAnim = this.anims.idle;
            }
            // move!
            this.parent();
        },
    })
});