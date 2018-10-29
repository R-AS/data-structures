function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if(this.isEmpty()) {
            items.push(queueElement);

        } else {
            var added = false;

            for(var i = 0; i < items.length; i++) {
                if(queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }

            if(!added) {
                items.push(queueElement);
            }
        }
    }

    this.print = function() {
        for(var i = 0; i < items.length; i++) {
            console.log(items[i].element);
     
        }

    }
}

var queue = new PriorityQueue();

queue.enqueue('AS', 2);

queue.enqueue('John', 1);

queue.enqueue('Jacket', 3);

queue.print();