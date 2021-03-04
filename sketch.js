var canvas;
var gamestate = 0;
var contestantCount,quiz;
var question,contestant;
var answer;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gamestate === 1){
    clear();
    quiz.player();
  }

}
