var knife,fruit;
var knifeImage , guavaImg, appleImg ,bananaImg,orangeImg, monsterImage, gameOverImage,cutting_sound,gameOver_sound,backGroundImage,restartImg;

var choppedScore = 0;
var gameOver;
var speedScore = 0;
var startButton;

//Game 
var PLAY = 0;
var END =  1 ;
var gameState = PLAY;


function preload()
{
  knifeImage = loadImage("knife.png");
  smileyBallImage = loadAnimation("alien1.png","alien2.png");
  guavaImg = loadImage("fruit3.png");
  appleImg = loadImage("fruit2.png");
  bananaImg = loadImage("fruit4.png");
  orangeImg = loadImage("fruit1.png");
  gameOverImage = loadImage("gameover.png");
  cutting_sound = loadSound("knifeSwoosh.mp3");
  gameOver_sound = loadSound("gameover.mp3");
  backGroundImage = loadImage("background0.png");
  restartImg = loadImage("restart.png")
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
  

  
  //creating knife as a sprite
  knife = createSprite(width/2,height/2,20,20);
  //code to add image to the knife
  knife.addImage("knife",knifeImage);
  
  //code to assign size to the knife
  knife.scale=0.7
  
  //code to make the sensor of the knife to the size of the knife
  knife.setCollider("rectangle",0,0,40,40);
  
  //code to make the sensor of the knife invisible
  knife.debug = false;
  
  //creating game over as a sprite to display when the game is over
  gameOver = createSprite(width/2,height/2 - 70);
  
  //code to add image to the game over
  gameOver.addImage(gameOverImage);
  
  //code to assign size to the game over
  gameOver.scale = 2;
  
  //code to make the game over invisible
  gameOver.visible = false;
  
  restart12 = createSprite(width/2,height/2);
  restart12.scale = 0.3;
  restart12.addImage(restartImg);
  restart12.visible = false;

  
  //creating groups to add sprites in it
  smileyBallsGroup1 = new Group();
  smileyBallsGroup2 = new Group();
  smileyBallsGroup3 = new Group();
  smileyBallsGroup4 = new Group();
  
  guavasGroup1 = new Group();
  guavasGroup2 = new Group();
  guavasGroup3 = new Group();
  guavasGroup4 = new Group();
  
  applesGroup1 = new Group();
  applesGroup2 = new Group();
  applesGroup3 = new Group();
  applesGroup4 = new Group();

  bananasGroup1 = new Group();
  bananasGroup2 = new Group();
  bananasGroup3 = new Group();
  bananasGroup4 = new Group();
  
  orangesGroup1 = new Group();
  orangesGroup2 = new Group();
  orangesGroup3 = new Group();
  orangesGroup4 = new Group();
}

function draw() 
{
  //set background colour
  background("lightblue");
  
  //code to make speed to increase the speed of the fruits and the smiley balls as the game goes to make the game challenging
  textSize(20);
  fill("gold");
  text("Speed:" + speedScore,-200,100);
    
  drawSprites();

  
  //code when the game state is in the play
  if(gameState == PLAY)
    {
      //code to make the knife visible when the game state when the game state is in the play
      knife.visible = true;
      
      
      
      //code to make to move the knife with the X position of the mouse
      knife.x=World.mouseX;
      
      //code to make to move the knife with the Y position of the mouse
      knife.y=World.mouseY;
  
      //code to display the chopped score
      textSize(30);
      fill("gold");
      text("Chopping Points:" + choppedScore,width/3,50);

      //code to make the chopped score increase by 5 when the knife is touching the guava1 and makes the guava1 disappear
      if(knife.isTouching(guavasGroup1))
        {
          choppedScore = choppedScore + 5;
          guavasGroup1.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 10 when the knife is touching the apple1 and makes the apple1 disappear
      if(knife.isTouching(applesGroup1))
        {
          choppedScore = choppedScore + 10;
          applesGroup1.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 15 when the knife is touching the banana1 and makes the banana1 disappear
      if(knife.isTouching(bananasGroup1))
        {
          choppedScore = choppedScore + 15;
          bananasGroup1.destroyEach();
          cutting_sound.play();
        } 
  
      //code to make the chopped score increase by 20 when the knife is touching the orange1 and makes the orange1 disappear
      if(knife.isTouching(orangesGroup1))
        {
          choppedScore = choppedScore + 20;
          orangesGroup1.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 5 when the knife is touching the guava2 and makes the guava2 disappear
      if(knife.isTouching(guavasGroup2))
        {
          choppedScore = choppedScore + 5;
          guavasGroup2.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 10 when the knife is touching the apple2 and makes the apple2 disappear
      if(knife.isTouching(applesGroup2))
        {
          choppedScore = choppedScore + 10;
          applesGroup2.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 15 when the knife is touching the banana2 and makes the banana2 disappear
      if(knife.isTouching(bananasGroup2))
        {
          choppedScore = choppedScore + 15;
          bananasGroup2.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 20 when the knife is touching the orange2 and makes the orange2 disappear
      if(knife.isTouching(orangesGroup2))
        {
          choppedScore = choppedScore + 20;
          orangesGroup2.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 5 when the knife is touching the guava3 and makes the guava3 disappear
      if(knife.isTouching(guavasGroup3))
        {
          choppedScore = choppedScore + 5;
          guavasGroup3.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 10 when the knife is touching the apple3 and makes the apple3 disappear
      if(knife.isTouching(applesGroup3))
        {
          choppedScore = choppedScore + 10;
          applesGroup3.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 15 when the knife is touching the banana3 and makes the banana3 disappear
      if(knife.isTouching(bananasGroup3))
        {
          choppedScore = choppedScore + 15;
          bananasGroup3.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 20 when the knife is touching the orange3 and makes the orange3 disappear
      if(knife.isTouching(orangesGroup3))
        {
          choppedScore = choppedScore + 20;
          orangesGroup3.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 5 when the knife is touching the guava4 and makes the guava4 disappear
      if(knife.isTouching(guavasGroup4))
        {
          choppedScore = choppedScore + 5;
          guavasGroup4.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 10 when the knife is touching the apple4 and makes the apple4 disappear
      if(knife.isTouching(applesGroup4))
        {
          choppedScore = choppedScore + 10;
          applesGroup4.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 15 when the knife is touching the banana4 and makes the banana4 disappear
      if(knife.isTouching(bananasGroup4))
        {
          choppedScore = choppedScore + 15;
          bananasGroup4.destroyEach();
          cutting_sound.play();
        }
  
      //code to make the chopped score increase by 20 when the knife is touching the orange4 and makes the orange4 disappear
      if(knife.isTouching(orangesGroup4))
        {
          choppedScore = choppedScore + 20;
          orangesGroup4.destroyEach();
          cutting_sound.play();
        }
        
      //this function is to create smiley ball1
      createSmileyBall1();
      
      //this function is to create smiley ball2
      createSmileyBall2();
      
      //this function is to create smiley ball3
      createSmileyBall3();
      
      //this function is to create smiley ball4
      createSmileyBall4();
      
      //this function is to create fruits1
      createFruits1();
      
      //this function is to create smiley fruits2
      createFruits2();
      
      //this function is to create fruits3
      createFruits3();
      
      //this function is to create fruits4
      createFruits4();
      
      //code to change the game state to the end when the knife is touching the smiley ball1
      if(knife.isTouching(smileyBallsGroup1))
        {
          gameState = END;
          gameOver_sound.play();
        }
      
      //code to change the game state to the end and bring a game over sound when the knife is touching the smiley ball2
      if(knife.isTouching(smileyBallsGroup2))
        {
          gameState = END;
          gameOver_sound.play();
        }
      
      //code to change the game state to the end and bring a game over sound when the knife is touching the smiley ball3
      if(knife.isTouching(smileyBallsGroup3))
        {
          gameState = END;
          gameOver_sound.play();
        }
      
      //code to change the game state to the end and bring a game over sound when the knife is touching the smiley ball4
      if(knife.isTouching(smileyBallsGroup4))
        {
          gameState = END;
          gameOver_sound.play();
        }
  }

  //code when the game state is in the end
  if(gameState == END)
    {
      restart12.visible = true;
      knife.visible = false;
      gameOver.visible = true;
      
      knife.x = width/2;
      knife.y = height/2;
     
      textSize(30);
      fill("gold");
      text("Chopping Points:" + choppedScore,width/3,50);
      //setting the velocity of each and every smiley ball1 in the background 0 when the game state is in the end
      smileyBallsGroup1.setVelocityYEach(0);
      
      //setting the velocity of each and every smiley ball2 in the background 0 when the game state is in the end
      smileyBallsGroup2.setVelocityYEach(0);
      
      //setting the velocity of each and every smiley ball3 in the background 0 when the game state is in the end
      smileyBallsGroup3.setVelocityXEach(0);
      
      //setting the velocity of each and every smiley ball4 in the background 0 when the game state is in the end
      smileyBallsGroup4.setVelocityXEach(0);
      
      //setting the velocity of each and every guava1 in the background 0 when the game state is in the end
      guavasGroup1.setVelocityYEach(0);
      
      //setting the velocity of each and every guava2 in the background 0 when the game state is in the end
      guavasGroup2.setVelocityYEach(0);
      
      //setting the velocity of each and every guava3 in the background 0 when the game state is in the end
      guavasGroup3.setVelocityXEach(0);
      
      //setting the velocity of each and every guava4 in the background 0 when the game state is in the end
      guavasGroup4.setVelocityXEach(0);
      
      //setting the velocity of each and every apple1 in the background 0 when the game state is in the end
      applesGroup1.setVelocityYEach(0);
      
      //setting the velocity of each and every apple2 in the background 0 when the game state is in the end
      applesGroup2.setVelocityYEach(0);
      
      //setting the velocity of each and every apple3 in the background 0 when the game state is in the end
      applesGroup3.setVelocityXEach(0);
      
      //setting the velocity of each and every apple4 in the background 0 when the game state is in the end
      applesGroup4.setVelocityXEach(0);
      
      //setting the velocity of each and every banana1 in the background 0 when the game state is in the end
      bananasGroup1.setVelocityYEach(0);
      
      //setting the velocity of each and every banana2 in the background 0 when the game state is in the end
      bananasGroup2.setVelocityYEach(0);
      
      //setting the velocity of each and every banana3 in the background 0 when the game state is in the end
      bananasGroup3.setVelocityXEach(0);
      
      //setting the velocity of each and every banana4 in the background 0 when the game state is in the end
      bananasGroup4.setVelocityXEach(0);
      
      //setting the velocity of each and every orange1 in the background 0 when the game state is in the end
      orangesGroup1.setVelocityYEach(0);
      
      //setting the velocity of each and every orange2 in the background 0 when the game state is in the end
      orangesGroup2.setVelocityYEach(0);
      
      //setting the velocity of each and every orange3 in the background 0 when the game state is in the end
      orangesGroup3.setVelocityXEach(0);
      
      //setting the velocity of each and every orange4 in the background 0 when the game state is in the end
      orangesGroup4.setVelocityXEach(0);
      
      //code to disappear each and every smiley ball1 in the background when the game state is in the end
      smileyBallsGroup1.destroyEach();
      
      //code to disappear each and every smiley ball2 in the background when the game state is in the end
      smileyBallsGroup2.destroyEach();
      
      //code to disappear each and every smiley ball3 in the background when the game state is in the end
      smileyBallsGroup3.destroyEach();
      
      //code to disappear each and every smiley ball4 in the background when the game state is in the end
      smileyBallsGroup4.destroyEach();
      
      //code to disappear each and every guava1 in the background when the game state is in the end
      guavasGroup1.destroyEach();
      
      //code to disappear each and every guava2 in the background when the game state is in the end
      guavasGroup2.destroyEach();
      
      //code to disappear each and every guava3 in the background when the game state is in the end
      guavasGroup3.destroyEach();
      
      //code to disappear each and every guava4 in the background when the game state is in the end
      guavasGroup4.destroyEach();
      
      //code to disappear each and every apple1 in the background when the game state is in the end
      applesGroup1.destroyEach();
      
      //code to disappear each and every apple2 in the background when the game state is in the end
      applesGroup2.destroyEach();
      
      //code to disappear each and every apple3 in the background when the game state is in the end
      applesGroup3.destroyEach();
      
      //code to disappear each and every apple4 in the background when the game state is in the end
      applesGroup4.destroyEach();
      
      //code to disappear each and every banana1 in the background when the game state is in the end
      bananasGroup1.destroyEach();
      
      //code to disappear each and every banana2 in the background when the game state is in the end
      bananasGroup2.destroyEach();
      
      //code to disappear each and every banana3 in the background when the game state is in the end
      bananasGroup3.destroyEach();
      
      //code to disappear each and every banana4 in the background when the game state is in the end
      bananasGroup4.destroyEach();
      
      //code to disappear each and every orange1 in the background when the game state is in the end
      orangesGroup1.destroyEach();
      
      //code to disappear each and every orange2 in the background when the game state is in the end
      orangesGroup2.destroyEach();
      
      //code to disappear each and every orange3 in the background when the game state is in the end
      orangesGroup3.destroyEach();
      
      //code to disappear each and every orange4 in the background when the game state is in the end
      orangesGroup4.destroyEach();
      //code to change the game state to instruction when the mouse is pressing on the restart button
      
      if(mousePressedOver(restart12))
         {
         restart1();
         }
      
  }
}

function createSmileyBall1()
{
  //code to make to come each and every smiley ball1 after every 120 frames
  if(frameCount%120 == 0)
    {
      //creating smiley ball1 as a varible and making the smiley ball1 to come at random X positions between 50 and 550
      var smileyBall1 = createSprite(random(50,width - 50),-100,20,20);
      
      //code to add animation to the smiley ball1
      smileyBall1.addAnimation("smileyBall1", smileyBallImage);
      
      //code to increase the velocity of the smiley ball1 after each and every speed score
      smileyBall1.velocityY = (4 + speedScore/16);
      
      //code to assign lifetime to the smiley ball1 so that it will destroy the smiley ball1 after sometime and it don't makes memroy leak
      smileyBall1.lifetime = 1000;
      
       //code to make the depth of the smiley ball1 and the depth of the knife equal and then increase the depth of the knife by 1 so that the smiley ball1 will come infront of the knife
      smileyBall1.depth = knife.depth;
      knife.depth = knife.depth + 1;
      
      //code to add smiley ball1 to the smiley balls group1
      smileyBallsGroup1.add(smileyBall1);
      
      //code to increase the speed score by 1 when the smiley ball1 is coming
      speedScore = speedScore + 1;
  }
}

function createSmileyBall2()
{
  //code to make to come each and every smiley ball2 after every 120 frames
  if(frameCount%120 == 0)
    {
      //creating smiley ball2 as a varible and making the smiley ball2 to come at random X positions between 50 and 550
      var smileyBall2 = createSprite(random(50,width - 50),height + 100,20,20);
      
      //code to add animation to the smiley ball2
      smileyBall2.addAnimation("smileyBall2", smileyBallImage);
      
      //code to increase the velocity of the smiley ball2 after each and every speed score
      smileyBall2.velocityY = -(4 + speedScore/16);
      
      //code to assign lifetime to the smiley ball2 so that it will destroy the smiley ball2 after sometime and it don't makes memroy leak
      smileyBall2.lifetime = 1000;
      
      //code to make the depth of the smiley ball2 and the depth of the knife equal and then increase the depth of the knife by 1 so that the smiley ball2 will come infront of the knife
      smileyBall2.depth = knife.depth;
      knife.depth = knife.depth + 1;
      
      //code to add smiley ball2 to the smiley balls group2
      smileyBallsGroup2.add(smileyBall2);
      
      //code to increase the speed score by 1 when the smiley ball2 is coming
      speedScore = speedScore + 1;
  }
}

function createSmileyBall3()
{
  //code to make to come each and every smiley ball3 after every 120 frames
  if(frameCount%120 == 0)
    {
      //creating smiley ball2 as a varible and making the smiley ball2 to come at random Y positions between 50 and 550
      var smileyBall3 = createSprite(width + 100,random(50,height - 50),20,20);
      
      //code to add animation to the smiley ball3
      smileyBall3.addAnimation("smileyBall3", smileyBallImage);
      
      //code to increase the velocity of the smiley ball3 after each and every speed score
      smileyBall3.velocityX = -(4 + speedScore/16);
      
      //code to assign lifetime to the smiley ball3 so that it will destroy the smiley ball3 after sometime and it don't makes memroy leak
      smileyBall3.lifetime = 1000;
      
      //code to make the depth of the smiley ball3 and the depth of the knife equal and then increase the depth of the knife by 1 so that the smiley ball3 will come infront of the knife
      smileyBall3.depth = knife.depth;
      knife.depth = knife.depth + 1;
      
      //code to add smiley ball3 to the smiley balls group3
      smileyBallsGroup3.add(smileyBall3);
      
      //code to increase the speed score by 1 when the smiley ball3 is coming
      speedScore = speedScore + 1;
  }
}

function createSmileyBall4()
{
  //code to make to come each and every smiley ball4 after every 120 frames
  if(frameCount%120 == 0)
    {
      //creating smiley ball4 as a varible and making the smiley ball4 to come at random Y positions between 50 and 550
      var smileyBall4 = createSprite(-100,random(50,height - 50),20,20);
      
      //code to add animation to the smiley ball4
      smileyBall4.addAnimation("smileyBall4", smileyBallImage);
      
      //code to increase the velocity of the smiley ball4 after each and every speed score
      smileyBall4.velocityX = (4+ speedScore/16);
      
      //code to assign lifetime to the smiley ball4 so that it will destroy the smiley ball4 after sometime and it don't makes memroy leak
      smileyBall4.lifetime = 1000;
      
      //code to make the depth of the smiley ball4 and the depth of the knife equal and then increase the depth of the knife by 1 so that the smiley ball4 will come infront of the knife
      smileyBall4.depth = knife.depth;
      knife.depth = knife.depth + 1;
      
      //code to add smiley ball4 to the smiley balls group4
      smileyBallsGroup4.add(smileyBall4);
      
      //code to increase the speed score by 1 when the smiley ball4 is coming
      speedScore = speedScore + 1;
  }
}

function createFruits1()
{
  //code to make a variable for selecting random fruits1
  var select_fruits1 = Math.round(random(1,4));
  
  //code to make to come each and every fruit1 after every 120 frames
  if(frameCount%120 == 0)
    {
      //code to make the guava1 to come if the random number is 1
      if(select_fruits1 == 1)
        {
          //this function is to create guavas1
          createGuavas1();
        }
      
      //code to make the apple1 to come if the random number is 2
      else if(select_fruits1 == 2)
        {
          //this function is to create apples1
          createApples1();
        }
      
      //code to make the banana1 to come if the random number is 3
      else if(select_fruits1 == 3)
        {
          //this function is to create bananas1
          createBananas1();
        }
      
      //code to make the orange1 to come if the random number is 4
      else if(select_fruits1 == 4)
        {
          //this function is to create oranges1
          createOranges1();
        }
      
      //code to increase the speed score by 1 when the fruit1 is coming
      speedScore = speedScore + 1;
  }
}

function createFruits2()
{
  //code to make a variable for selecting random fruits2
  var select_fruits2 = Math.round(random(1,4));
  
  //code to make to come each and every fruit2 after every 120 frames
  if(frameCount%120 == 0)
    {
      //code to make the guava2 to come if the random number is 1
      if(select_fruits2 == 1)
        {
          //this function is to create guavas2
          createGuavas2();
        }
      
      //code to make the apple2 to come if the random number is 2
      else if(select_fruits2 == 2)
        {
          //this function is to create apples2
          createApples2();
        }
      
      //code to make the banana2 to come if the random number is 3
      else if(select_fruits2 == 3)
        {
          //this function is to create bananas2
          createBananas2();
        }
      
      //code to make the orange2 to come if the random number is 4
      else if(select_fruits2 == 4)
        {
          //this function is to create oranges2
          createOranges2();
        }
      
      //code to increase the speed score by 1 when the fruit2 is coming
      speedScore = speedScore + 1;
  }
}

function createFruits3()
{
  //code to make a variable for selecting random fruits3
  var select_fruits3 = Math.round(random(1,4));
  
  //code to make to come each and every fruit3 after every 120 frames
  if(frameCount%120 == 0)
    {
      //code to make the guava3 to come if the random number is 1
      if(select_fruits3 == 1)
        {
          //this function is to create guavas3
          createGuavas3();
        }
      
      //code to make the apple3 to come if the random number is 2
      else if(select_fruits3 == 2)
        {
          //this function is to create apples3
          createApples3();
        }
      
      //code to make the banana3 to come if the random number is 3
      else if(select_fruits3 == 3)
        {
          //this function is to create bananas3
          createBananas3();
        }
      
      //code to make the orange3 to come if the random number is 4
      else if(select_fruits3 == 4)
        {
          //this function is to create oranges3
          createOranges3();
        }
      
      //code to increase the speed score by 1 when the fruit3 is coming
      speedScore = speedScore + 1;
    }
}

function createFruits4()
{
  //code to make a variable for selecting random fruits4
  var select_fruits4 = Math.round(random(1,4));
  
  //code to make to come each and every fruit4 after every 120 frames
  if(frameCount%120 == 0)
    {
      //code to make the guava4 to come if the random number is 1
      if(select_fruits4 == 1)
        {
          //this function is to create guavas4
          createGuavas4();
        }
      
      //code to make the apple4 to come if the random number is 2
      else if(select_fruits4 == 2)
        {
          //this function is to create apples4
          createApples4();
        }
      
      //code to make the banana4 to come if the random number is 3
      else if(select_fruits4 == 3)
        {
          //this function is to create bananas4
          createBananas4();
        }
      
      //code to make the orange4 to come if the random number is 4
      else if(select_fruits4 == 4)
        {
          //this function is to create oranges4
          createOranges4();
        }
      
      //code to increase the speed score by 1 when the fruit4 is coming
      speedScore = speedScore + 1;
  }
}

function createGuavas1()
{
  //creating guava1 as a sprite and making the guava1 to come at random X positions between 100 and 500
  var guava1 = createSprite(random(100,width - 100),-150,20,20);
  
  //code to increase the velocity of the guava1 after each and every speed score
  guava1.velocityY = (4 + speedScore/16);
  
  //code to add image to the guava1
  guava1.addImage("guava1",guavaImg);
  
  //code to assign size to the guava1
  guava1.scale = 0.2;
  
  //code to assign lifetime to the guava1 so that it will destroy the guava1 after sometime and it don't makes memory leak
  guava1.lifetime = 1000;
  
  //code to make the depth of the guava1 and the depth of the knife equal and then increase the depth of the knife by 1 so that the guava1 will come infront of the knife
  guava1.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add guava1 to the guavas group1
  guavasGroup1.add(guava1);
}

function createApples1()
{
  //creating apple1 as a sprite and making the apple1 to come at random X positions between 100 and 500
  var apple1 = createSprite(random(100,width - 100),-150,20,20);
  
  //code to increase the velocity of the apple1 after each and every speed score
  apple1.velocityY = (4 + speedScore/16);
  
  //code to add image to the apple1
  apple1.addImage("apple1",appleImg);
  
  //code to assign size to the apple1
  apple1.scale = 0.2;
  
  //code to assign lifetime to the apple1 so that it will destroy the apple1 after sometime and it don't makes memory leak
  apple1.lifetime = 1000;
  
  //code to make the depth of the apple1 and the depth of the knife equal and then increase the depth of the knife by 1 so that the apple1 will come infront of the knife
  apple1.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add apple1 to the apples group1
  applesGroup1.add(apple1);
}

function createBananas1()
{
  //creating banana1 as a sprite and making the banana1 to come at random X positions between 100 and 500
  var banana1 = createSprite(random(100,500),-150,20,20);
  
  //code to increase the velocity of the banana1 after each and every speed score
  banana1.velocityY = (4 + speedScore/16);
  
  //code to add image to the banana1
  banana1.addImage("banana1",bananaImg);
  
  //code to assign size to the banana1
  banana1.scale = 0.2;
  
  //code to assign lifetime to the banana1 so that it will destroy the banana1 after sometime and it don't makes memory leak
  banana1.lifetime = 1000;
  
  //code to make the depth of the banana1 and the depth of the knife equal and then increase the depth of the knife by 1 so that the banana1 will come infront of the knife
  banana1.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add banana1 to the bananas group1
  bananasGroup1.add(banana1);
}

function createOranges1()
{
  //creating orange1 as a sprite and making the orange1 to come at random X positions between 100 and 500
  var orange1 = createSprite(random(100,width - 100),-150,20,20);
  
  //code to increase the velocity of the orange1 after each and every speed score
  orange1.velocityY = (4 + speedScore/16);
  
  //code to add image to the orange1
  orange1.addImage("orange1",orangeImg);
  
  //code to assign size to the orange1
  orange1.scale = 0.2;
  
  //code to assign lifetime to the orange1 so that it will destroy the orange1 after sometime and it don't makes memory leak
  orange1.lifetime = 1000;
  
  //code to make the depth of the orange1 and the depth of the knife equal and then increase the depth of the knife by 1 so that the orange1 will come infront of the knife
  orange1.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add orange1 to the oranges group1
  orangesGroup1.add(orange1);
}

function createGuavas2()
{
  //creating guava2 as a sprite and making the guava2 to come at random X positions between 100 and 500
  var guava2 = createSprite(random(100,width - 100),height + 150,20,20);
  
  //code to increase the velocity of the guava2 after each and every speed score
  guava2.velocityY = -(4 + speedScore/16);
  
  //code to add image to the guava2
  guava2.addImage("guava2",guavaImg);
  
  //code to assign size to the guava2
  guava2.scale = 0.2;
  
  //code to assign lifetime to the guava2 so that it will destroy the guava2 after sometime and it don't makes memory leak
  guava2.lifetime = 1000;
  
  //code to make the depth of the guava2 and the depth of the knife equal and then increase the depth of the knife by 1 so that the guava2 will come infront of the knife
  guava2.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add guava2 to the guavas group2
  guavasGroup2.add(guava2);
}

function createApples2()
{
  //creating apple2 as a sprite and making the apple2 to come at random X positions between 100 and 500
  var apple2 = createSprite(random(100,width - 100),height + 150,20,20);
  
  //code to increase the velocity of the apple2 after each and every speed score
  apple2.velocityY = -(4 + speedScore/16);
  
  //code to add image to the apple2
  apple2.addImage("apple2",appleImg);
  
  //code to assign size to the apple2
  apple2.scale = 0.2
 
  //code to assign lifetime to the apple2 so that it will destroy the apple2 after sometime and it don't makes memory leak
  apple2.lifetime = 1000;
  
  //code to make the depth of the apple2 and the depth of the knife equal and then increase the depth of the knife by 1 so that the apple2 will come infront of the knife
  apple2.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add apple2 to the apples group2
  applesGroup2.add(apple2);
}

function createBananas2()
{
  //creating banana2 as a sprite and making the banana2 to come at random X positions between 100 and 500
  var banana2 = createSprite(random(100,width - 100),height + 150,20,20);
  
  //code to increase the velocity of the banana2 after each and every speed score
  banana2.velocityY = -(4 + speedScore/16);
  
  //code to add image to the banana2
  banana2.addImage("banana2",bananaImg);
  
  //code to assign size to the banana2
  banana2.scale = 0.2;
  
  //code to assign lifetime to the banana2 so that it will destroy the banana2 after sometime and it don't makes memory leak
  banana2.lifetime = 1000;
  
  //code to make the depth of the banana2 and the depth of the knife equal and then increase the depth of the knife by 1 so that the banana2 will come infront of the knife
  banana2.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add banana2 to the bananas group2
  bananasGroup2.add(banana2);
}

function createOranges2()
{
  //creating orange2 as a sprite and making the orange2 to come at random X positions between 100 and 500
  var orange2 = createSprite(random(100,width - 100),height + 150,20,20);
  
  //code to increase the velocity of the orange2 after each and every speed score
  orange2.velocityY = -(4 + speedScore/16);
  
  //code to add image to the orange2
  orange2.addImage("orange2",orangeImg);
  
  //code to assign size to the orange2
  orange2.scale = 0.2;
  
  //code to assign lifetime to the orange2 so that it will destroy the orange2 after sometime and it don't makes memory leak
  orange2.lifetime = 1000;
  
  //code to make the depth of the orange2 and the depth of the knife equal and then increase the depth of the knife by 1 so that the orange2 will come infront of the knife
  orange2.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add orange2 to the oranges group2
  orangesGroup2.add(orange2);
}

function createGuavas3()
{
  //creating guava3 as a sprite and making the guava3 to come at random Y positions between 100 and 500
  var guava3 = createSprite(-150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the guava3 after each and every speed score
  guava3.velocityX = (4 + speedScore/16);
  
  //code to add image to the guava3
  guava3.addImage("guava3",guavaImg);
  
  //code to assign size to the guava3
  guava3.scale = 0.2;
  
  //code to assign lifetime to the guava3 so that it will destroy the guava3 after sometime and it don't makes memory leak
  guava3.lifetime = 1000;
  
  //code to make the depth of the guava3 and the depth of the knife equal and then increase the depth of the knife by 1 so that the guava3 will come infront of the knife
  guava3.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add guava3 to the guavas group3
  guavasGroup3.add(guava3);
}

function createApples3()
{
  //creating apple3 as a sprite and making the apple3 to come at random Y positions between 100 and 500
  var apple3 = createSprite(-150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the apple3 after each and every speed score
  apple3.velocityX = (4 + speedScore/16);
  
  //code to add image to the apple3
  apple3.addImage("apple3",appleImg);
  
  //code to assign size to the apple3
  apple3.scale = 0.2;
  
  //code to assign lifetime to the apple3 so that it will destroy the apple3 after sometime and it don't makes memory leak
  apple3.lifetime = 1000;
  
  //code to make the depth of the apple3 and the depth of the knife equal and then increase the depth of the knife by 1 so that the apple3 will come infront of the knife
  apple3.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add apple3 to the apples group3
  applesGroup3.add(apple3);
}

function createBananas3()
{
  //creating banana3 as a sprite and making the banana3 to come at random Y positions between 100 and 500
  var banana3 = createSprite(-150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the banana3 after each and every speed score
  banana3.velocityX = (4 + speedScore/16);
  
  //code to add image to the banana3
  banana3.addImage("banana3",bananaImg);
  
  //code to assign size to the banana3
  banana3.scale = 0.2;
  
  //code to assign lifetime to the banana3 so that it will destroy the banana3 after sometime and it don't makes memory leak
  banana3.lifetime = 1000;
  
  //code to make the depth of the banana3 and the depth of the knife equal and then increase the depth of the knife by 1 so that the banana3 will come infront of the knife
  banana3.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add banana3 to the bananas group3
  bananasGroup3.add(banana3);
}

function createOranges3()
{
  //creating orange3 as a sprite and making the orange3 to come at random Y positions between 100 and 500
  var orange3 = createSprite(-150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the orange3 after each and every speed score
  orange3.velocityX = (4 + speedScore/16);
  
  //code to add image to the orange3
  orange3.addImage("orange3",orangeImg);
  
  //code to assign size to the orange3
  orange3.scale = 0.2;
  
  //code to assign lifetime to the orange3 so that it will destroy the orange3 after sometime and it don't makes memory leak
  orange3.lifetime = 1000;
  
  //code to make the depth of the orange3 and the depth of the knife equal and then increase the depth of the knife by 1 so that the orange3 will come infront of the knife
  orange3.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add orange3 to the oranges group3
  orangesGroup3.add(orange3);
}

function createGuavas4()
{
  //creating guava4 as a sprite and making the guava4 to come at random Y positions between 100 and 500
  var guava4 = createSprite(width + 150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the guava4 after each and every speed score
  guava4.velocityX = -(4 + speedScore/16);
  
  //code to add image to the guava4
  guava4.addImage("guava4",guavaImg);
  
  //code to assign size to the guava4
  guava4.scale = 0.2;
  
  //code to assign lifetime to the guava4 so that it will destroy the guava4 after sometime and it don't makes memory leak
  guava4.lifetime = 1000;
  
  //code to make the depth of the guava4 and the depth of the knife equal and then increase the depth of the knife by 1 so that the guava4 will come infront of the knife
  guava4.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add guava4 to the guavas group4
  guavasGroup4.add(guava4);
}

function createApples4()
{
  //creating apple4 as a sprite and making the apple4 to come at random Y positions between 100 and 500
  var apple4 = createSprite(width + 150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the apple4 after each and every speed score
  apple4.velocityX = -(4 + speedScore/16);
  
  //code to add image to the apple4
  apple4.addImage("apple4",appleImg);
  
  //code to assign size to the apple4
  apple4.scale = 0.2;
  
  //code to assign lifetime to the apple4 so that it will destroy the apple4 after sometime and it don't makes memory leak
  apple4.lifetime = 1000;
  
  //code to make the depth of the apple4 and the depth of the knife equal and then increase the depth of the knife by 1 so that the apple4 will come infront of the knife
  apple4.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add apple4 to the apples group4
  applesGroup4.add(apple4);
}

function createBananas4()
{
  //creating banana4 as a sprite and making the banana4 to come at random Y positions between 100 and 500
  var banana4 = createSprite(width + 150,random(100,height - 100),20,20);
  
  //code to increase the velocity of the banana4 after each and every speed score
  banana4.velocityX = -(4 + speedScore/16);
  
  //code to add image to the apple4
  banana4.addImage("banana4",bananaImg);
  
  //code to assign size to the banana4
  banana4.scale = 0.2;
  
  //code to assign lifetime to the banana4 so that it will destroy the banana4 after sometime and it don't makes memory leak
  banana4.lifetime = 1000;
  
  //code to make the depth of the banana4 and the depth of the knife equal and then increase the depth of the knife by 1 so that the banana4 will come infront of the knife
  banana4.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add banana4 to the bananas group4
  bananasGroup4.add(banana4);
}

function createOranges4()
{
  //creating orange4 as a sprite and making the orange4 to come at random Y positions between 100 and 500
  var orange4 = createSprite(width + 150,random(100,500),20,20);
  
  //code to increase the velocity of the orange4 after each and every speed score
  orange4.velocityX = -(4 + speedScore/16);
  
  //code to add image to the orange4
  orange4.addImage("orange4",orangeImg);
  //code to assign size to the orange4
  orange4.scale = 0.2;
  
  //code to assign lifetime to the orange4 so that it will destroy the orange4 after sometime and it don't makes memory leak
  orange4.lifetime = 1000;
  
  //code to make the depth of the orange4 and the depth of the knife equal and then increase the depth of the knife by 1 so that the orange4 will come infront of the knife
  orange4.depth = knife.depth;
  knife.depth = knife.depth + 1;
  
  //code to add orange4 to the oranges group4
  orangesGroup4.add(orange4);
}

function restart1()
{
  gameState = PLAY;
 gameOver.visible = false;
  restart12.visible = false;
  speedScore = 0;
  choppedScore = 0;
}








