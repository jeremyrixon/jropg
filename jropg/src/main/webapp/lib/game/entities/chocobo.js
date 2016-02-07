ig.module(
    'game.entities.chocobo'
)
.requires(
    'impact.entity'
)
.defines(function() {
    EntityChocobo = ig.Entity.extend({
        animSheet: new ig.AnimationSheet( 'media/creatures.png', 16, 16 ),
    })
});