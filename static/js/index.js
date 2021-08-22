let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;

let app = new PIXI.Application({
     width: x,
     height: y,
     antialias: true,
    transparent: false,
     resolution: window.devicePixelRatio
    
    
});

app.renderer.backgroundColor= 0x000000;
app.renderer.transparent= true;
app.renderer.view.style.display="block";
document.body.appendChild(app.view);
let screen= {
    'x' : 0,
    'y' : 0,
    'width' : x,
    'height' : y
}
let spritePath = "./assets/img/";
let step = x > y ? y * 0.1 : x * 0.1;

var buttonTexture = new PIXI.Texture.from(spritePath + "button_play.png");
var sprite = new PIXI.Sprite(buttonTexture);
sprite.x = x * 0.5;
sprite.y = y * 0.5;
sprite.width = 6 * step;
sprite.height = 2 * step;
sprite.anchor.set(0.5);
sprite.interactive = true;
sprite.buttonMode = true;
sprite.on('pointerdown', handler);
app.stage.addChild(sprite);

function handler(event){
    window.location.assign("./html/game.html");
}
    