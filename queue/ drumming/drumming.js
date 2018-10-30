function Drumming(nameList, num) {
    this.winner;                        //winner
    this.eliminated = '';               //eliminated
    this.isStart;                       //isStart
    this.isEnd;                         //isEnd

    var timer;                          //timer
    var queue = new Queue();

    for(var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }

    this.playing = function() {
    
        if(this.isStart) {

            timer = setInterval(function() {

                for(var i = 0; i < num; i++) {
                    queue.enqueue(queue.dequeue());

                }

            }, 200);

        }
    }

    this.stop = function() {
        if(this.isStart) {
            clearInterval(timer);
        
            if(queue.size() > 1) {
                this.eliminated = queue.dequeue();
            }

            if(queue.size() == 1) {
                this.winner = queue.front();
                this.isEnd = true;

            }
        }
        
    }

}


