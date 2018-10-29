var Queue = function() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function(element) {
        return items.shift();
    }

    this.front = function(element) {
        return items[0];
    }

    this.isEmpty = function() {
        return items.length == 0;
    }

    this.clear = function() {
        items = [];
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        console.log(items.toString());
    }
}