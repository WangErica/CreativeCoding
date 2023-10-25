let pokemon
let palette

function preload(){
  pokemon = loadJSON('pokemon.json')
  palette = loadJSON('palette.json')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  console.log(palette)
  console.log(pokemon)
}
