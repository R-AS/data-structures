var seatNum = document.getElementById("seatNum");       //input seat number
var submit = document.getElementById("submit");         //submit button
var lineUp = document.getElementById("lineUp");        //line up button
var plane = document.getElementById("plane");           //plane seat area

var sorted = [];                                        //queue is sorted

//click to arrange seat
submit.onclick = function() {

    var seatCount = plane.children.length;              //last seat count

    if(seatCount != 0) {                                //clear last seat
        for(var i = 0; i < seatCount; i++) {
            plane.removeChild(plane.children[0]);
            
        }
    }
     

    var inputCount = seatNum.value;                     //input seat count you want
    
    var sort = new Sort();                              //create sort object
    sort.sortSeat(inputCount);                          //judge the count of seat is suitable and create ticket


    if(sort.isSuit(inputCount)) {                       //if seat count is suitable arrange seat

        var colCount = "";

        for(var i = 0; i < inputCount / 2; i++) {
            colCount += "auto ";
        }

        plane.style.gridTemplateColumns = colCount;

        for(var i = 0; i < inputCount; i++) {
            var seat = document.createElement("div");
            seat.setAttribute("class", "seat"); 
            seat.style.width = "100%";
            seat.textContent = sort.arr[i].price;

            plane.appendChild(seat);
    
        }

        sorted = sort;                                  //queue is sorted

    } else {
        alert("您设置的座位数不符合要求，座位数必须是6的倍数");
    }
    
}

//line up the queue
lineUp.onclick = function() {
    var inputCount = seatNum.value;                     //get seat count
    var seat = document.getElementsByClassName("seat");

    if(seat.length != 0) {                              //sort queue
      
        for(var i = 0; i < inputCount;i++) {
            seat[i].textContent = sorted.seatQueue[i].price;
            
        }
    } else {
        alert("没人排队");
    }
    
}