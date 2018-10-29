/*create queue*/

var Queue = function() {

    this.items = [];                            //queue array

    this.isEmpty = function() {                 //judge the queue is empty
        return this.items.length == 0;      
    }

    function QueueElement(price) {              //create queue element
        this.price = price;
        if(price == 320) {
            this.priority = 1;
        }
        else if(price == 250) {
            this.priority = 2;
        }
        else if(price == 180) {
            this.priority = 3;
        }
   
    }

    this.enqueue = function(price) {            //sort the queue
        var queueElement = new QueueElement(price);

        if(this.isEmpty()) {                    //if queue is empty push the first queue element
            this.items.push(queueElement);
        } else {        
            var added = false;                  

            for(var i = 0; i < this.items.length; i++) {
                if(queueElement.priority < this.items[i].priority) {        //if element's priority less than queue items' priority, put it before
                    this.items.splice(i ,0, queueElement);
                    added = true;
                    break;
                }
            }

            if(!added) {                        //if element's priority more than item's priority, push it
                this.items.push(queueElement);
            }
        }
    }

    this.print = function() {                   //print queue
        return this.items;
        
    }
}
