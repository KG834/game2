class Game {
    constructor() {

    }
    start() {
       form.title.hide(); 
       
        var C = createSprite(width/2-600, height/2, 100, 400);
        C.shapeColor = "grey";
       
        var D = createSprite(width/2-495, height/2, 100, 400);
        D.shapeColor = "grey";
      
        var E = createSprite(width/2-390, height/2, 100, 400)
        E.shapeColor = "grey";
        var F = createSprite(width/2-285, height/2, 100, 400)
        F.shapeColor = "grey";
        
        var G = createSprite(width/2-180, height/2, 100, 400)
        G.shapeColor = "grey";
        
        var A = createSprite(width/2-75, height/2, 100, 400)
        A.shapeColor = "grey";
        
        var B = createSprite(width/2+30, height/2, 100, 400)
        A.shapeColor = "grey";
        
        var Cs = createSprite(width/2-550, height/2-100, 50, 200);
        Cs.shapeColor = "black";
        var Ds = createSprite(width/2-445, height/2-100, 50, 200);
        Ds.shapeColor = "black";
        //var Es = createSprite(width/2-340, height/2-100, 50, 200);
       // Es.shapeColor = "black";
        var Gs = createSprite(width/2-235, height/2-100, 50, 200);
        Gs.shapeColor = "black";
        var As = createSprite(width/2-130, height/2-100, 50, 200);
        As.shapeColor = "black";
        var Bs = createSprite(width/2-25, height/2-100, 50, 200);
        Bs.shapeColor = "black";
        
       // var r1 = Math.round(random(0, arr.length))
       // console.log(r1)
       // console.log(arr[r1])
        setInterval(function() { var r1 = Math.round(random(0, arr.length))
        }, 5000)
        
    }
    getState() {
        database.ref("gameState").on("value", (data)=>{
            gamestate = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({
            gameState : state
        })
    }
}