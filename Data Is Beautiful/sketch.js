let pokemon
let palette
let menu = 0

function preload(){
  pokemon = loadJSON('pokemon.json')
  palette = loadJSON('palette.json')
}

function setup() {
  createCanvas(600, 350);
}

function draw() {
  console.log(mouseX, mouseY)
  background(220);
  rectMode(CENTER)
  noStroke()

  fill('#83CDC2')
  ellipse(75, 100, 120, 120) //column 1 row 1
  fill('#FFA724')
  ellipse(75, 250, 120, 120) //column 1 row 2
  fill('#00BFFF')
  ellipse(225, 100, 120, 120) //column 2 row 1
  fill('#FEDB00')
  ellipse(225, 250, 120, 120) //column 2 row 2
  fill('#7E3E82')
  ellipse(375, 100, 120, 120) //column 3 row 1
  fill('#8C6B4D')
  ellipse(375, 250, 120, 120) //column 3 row 2
  fill('#A970FF')
  ellipse(525, 100, 120, 120) //column 4 row 3
  fill('#F7D02C')
  ellipse(525, 250, 120, 120) //column 3 row 3

  fill(0)
  textSize(15)
  text(pokemon.pokemon[0].name, 42, 103)
  text(pokemon.pokemon[1].name, 34, 253)
  text(pokemon.pokemon[2].name, 200, 103)
  text(pokemon.pokemon[3].name, 200, 253)
  text(pokemon.pokemon[4].name, 350, 103)
  text(pokemon.pokemon[5].name, 346, 253)
  text(pokemon.pokemon[6].name, 504, 103)
  text(pokemon.pokemon[7].name, 500, 253)

  console.log(menu)
  if (menu == 1){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[0].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[0].species, 320, 70)
    text('Height: ' + pokemon.pokemon[0].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[0].weight, 320, 110)
    fill(palette.palettes[0][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[0][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[0][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[0][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[0][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 2){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[1].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[1].species, 340, 70)
    text('Height: ' + pokemon.pokemon[1].height, 340, 90)
    text('Weight: ' + pokemon.pokemon[1].weight, 340, 110)
    fill(palette.palettes[1][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[1][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[1][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[1][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[1][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 3){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[2].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[2].species, 320, 70)
    text('Height: ' + pokemon.pokemon[2].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[2].weight, 320, 110)
    fill(palette.palettes[2][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[2][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[2][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[2][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[2][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 4){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[3].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[3].species, 320, 70)
    text('Height: ' + pokemon.pokemon[3].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[3].weight, 320, 110)
    fill(palette.palettes[3][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[3][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[3][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[3][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[3][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 5){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[4].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[4].species, 320, 70)
    text('Height: ' + pokemon.pokemon[4].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[4].weight, 320, 110)
    fill(palette.palettes[4][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[4][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[4][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[4][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[4][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 6){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[5].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[5].species, 320, 70)
    text('Height: ' + pokemon.pokemon[5].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[5].weight, 320, 110)
    fill(palette.palettes[5][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[5][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[5][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[5][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[5][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 7){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[6].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[6].species, 320, 70)
    text('Height: ' + pokemon.pokemon[6].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[6].weight, 320, 110)
    fill(palette.palettes[6][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[6][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[6][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[6][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[6][4])
    rect(540, 230, 120, 120)
  }

  if (menu == 8){
    background('#F8F9F9')
    textSize(50)
    text(pokemon.pokemon[7].name, 50, 100)
    textSize(15)
    text('Species: ' + pokemon.pokemon[7].species, 320, 70)
    text('Height: ' + pokemon.pokemon[7].height, 320, 90)
    text('Weight: ' + pokemon.pokemon[7].weight, 320, 110)
    fill(palette.palettes[7][0])
    rect(60, 230, 120, 120)
    fill(palette.palettes[7][1])
    rect(180, 230, 120, 120)
    fill(palette.palettes[7][2])
    rect(300, 230, 120, 120)
    fill(palette.palettes[7][3])
    rect(420, 230, 120, 120)
    fill(palette.palettes[7][4])
    rect(540, 230, 120, 120)
  }

}

function mouseClicked(){
  if (menu == 0){
    if (mouseX < 135 && mouseX > 15){
      if (mouseY < 160 && mouseY > 40){
        menu = 1
      }
      if (mouseY < 310 && mouseY > 190){
        menu = 2
      }
    }

    if (mouseX < 285 && mouseX > 165){
      if (mouseY < 160 && mouseY > 40){
        menu = 3
      }
      if (mouseY < 310 && mouseY > 190){
        menu = 4
      }
    }

    if (mouseX < 435 && mouseX > 315){
      if (mouseY < 160 && mouseY > 40){
        menu = 5
      }
      if (mouseY < 310 && mouseY > 190){
        menu = 6
      }
    }

    if (mouseX < 585 && mouseX > 465){
      if (mouseY < 160 && mouseY > 40){
        menu = 7
      }
      if (mouseY < 310 && mouseY > 190){
        menu = 8
      }
    }

  }
}
