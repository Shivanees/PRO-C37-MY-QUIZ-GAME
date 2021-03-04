class Question {
    constructor(){
    this.tittle = createElement('h1')
    this.input1 = createInput("Enter Your Name Here")
    this.input2 = createInput("Enter The Correct Option")
    this.button = createButton("Submit")
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')
    }

    hide(){
        this.tittle.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }

    display(){
        this.tittle.html("MyQuiz Game ");
        this.tittle.position(350,0);

        this.question.html(" Question : Who is th founder of coding? ");
        this.question.position(150,80);
        
        this.option1.html(" 1: Ada Lovelace ");
        this.option1.position(150,120);

        this.option2.html(" 2: Douglas Crockford ");
        this.option2.position(150,150);

        this.option3.html(" 3: Thomos Alva Edison ");
        this.option3.position(150,175);

        this.option4.html(" 4: Brendan Eich ");
        this.option4.position(150,200);

        this.input1.position(150,250);
        this.input2.position(350,250);
        this.button.position(310,280);


    this.button.mousePressed(()=>{
        this.tittle.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
        contestant.name=this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount!=1;
        contestant.index=contestantCount;
        contestantCount.update();            
        contestant.updateCount(contestantCount);
        });
    }
}