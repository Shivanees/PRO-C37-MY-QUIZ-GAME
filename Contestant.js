class  Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
        });
    }

    updateCount(count){
        datbase.ref('/').update({
            contestantCount : count
        });
    }

    update(){
         var contestantIndex = "contestants/contestant" + this.index;
         database.ref(contestantIndex).set({
         name : this.name,
         answer : this.answer
         });
      } 

      static getPlayerInfo(){
         var contestantInfoRef = database.ref('contestants');
         contestantInfoRef.on("value",(data)=>{
         allContestants = data.val();
          });
      }

    display(){
        this.button.mousePressed(()=>{
            this.tittle.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name=this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestantCount.update();
            contestant.updateCount(contestantCount);
          });
    }
}
