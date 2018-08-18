var expect = require('chai').expect;

describe('checkForShip',function(){
  var checkForShip = require('../game_logic/ship_methods').checkForShip;
  
  it('Should correctly report no ship at a given players coordinate', function (){
    
   player = {
      ships:[
        {
          locations: [[0, 0]]
        }
      ]
   };
    expect(checkForShip(player, [9, 9])).to.be.false;
  
  });
  
    
  it('Should correctly report a ship at the given players coordinate', function (){
    
   player = {
      ships:[
        {
          locations: [[0, 0]]
        }
      ]
   };
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });
  
    it('Should handle  ship located at more than one coordinate', function (){
    
   player = {
      ships:[
        {
          locations: [[0, 0],[0,1]]
        }
      ]
   };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
  
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  
    expect(checkForShip(player, [9, 9])).to.be.false;
  });
  
      it('Should handle checking multiple ships ', function (){
    
   player = {
      ships:[
        {
          locations: [[0, 0],[0,1]]
        },
         {
          locations: [[1, 0],[1,1]]
        },
         {
          locations: [[2, 0],[2, 1],[2, 2], [2,3]]
        }
      ]
   };
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]); 
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);    
    expect(checkForShip(player, [9, 9])).to.be.false;
  });

});



describe('damageShip', function (){
  var damageShip = require('../game_logic/ship_methods').damageShip;
  
  it('should register damage on a given ship at a given location', function (){
  
    var ship = {
      locations: [[0,0]],
      damage: []    
    };
    damageShip(ship, [0, 0]);
    
    expect(ship.damage).to.not.be.empty;
     expect(ship.damage[0]).to.deep.equal([0, 0]);   
  
  
  
  });

});


describe('fire', function (){
  var fire = require('../game_logic/ship_methods').fire;
  
  if('should record damage on the given players ship at a given coordinate', function () {
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      
      ]   
    
    };
    
    fire(player, [0,0]);
    
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  
  });
  
    if('should not record damage if no ship at a given coordinate', function () {
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: []
        }
      
      ]   
    
    };
    
    fire(player, [9,9]);
    
    expect(player.ships[0].damage).to.be.empty;
  
  });

});
  
  
  
  
  
  
  
  
  
  
  
  
  