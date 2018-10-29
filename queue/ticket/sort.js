/*sort queue*/

var Sort = function() {
    this.arr = [];                                  //seat array
    this.seatQueue;                                 //sorted seat queue

    this.isSuit = function(quantity) {              //judge seat count is suitable
        var demand = false;

        if(quantity % 6 == 0) {
            demand = true;
        }
        else {
            demand = false;
        }
        return demand;
    }

    this.sortSeat = function(quantity) {            //sort seat

        var queue = new Queue();                    //create queue object

        if(this.isSuit(quantity)) {
    
            var supper = quantity / 6;
            var medium = quantity * 2 / 6;
            var general = quantity * 3 / 6;


            for(var i = 0; i < quantity; i++) {
                var seatObj = new SeatObj("0", "0", "0");            //create personal seat object and initialize it  
                this.arr.push(seatObj);                         //push personal seat into seat arry
            }
            
           

            var supperCount = 0;                                //supper seat count
            var mediumCount = 0;                                //medium seat count


            while(supperCount < supper) {                       //create supper seat
                random = Math.floor(Math.random() * quantity);

                if(this.arr[random].on != "on") {

                    this.arr[random].price = 320;
                    this.arr[random].priority = 1;
                    this.arr[random].on = "on";
                    supperCount++;
                    
                }

                if(supperCount >= supper) {
                    break;
                }
            }

            while(mediumCount < medium) {
                random = Math.floor(Math.random() * quantity);        //create medium seat

                if(this.arr[random].on != "on") {

                    this.arr[random].price = 250;
                    this.arr[random].priority = 2;
                    this.arr[random].on = "on";
                    mediumCount++;
                }

                if(mediumCount >= medium) {
                    break;
                }
            }
            

            for(var i = 0; i < quantity; i++) {                 //create general seat
                if(this.arr[i].on != "on") {
                    this.arr[i].price = 180;
                    this.arr[i].priority = 3;
                    this.arr[i].on = "on";
                    
                }
            }
            

            for(var i = 0; i < quantity; i++) {                 //sort seat
                queue.enqueue(this.arr[i].price);
            }

        }
       
        this.seatQueue = queue.print();                         //seat queue is sorted
    }
}

var SeatObj = function(price, priority, on) {           //personal seat object
    this.price = price;
    this.priority = priority;
    this.on = on;
}