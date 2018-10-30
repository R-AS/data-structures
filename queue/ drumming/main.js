var startBtn = document.getElementById("start");                //start button
var stopBtn = document.getElementById("stop");                  //stop button
var result = document.getElementById("result");                 //result 

var names = ['小明', '小红', '小律', '小白', '小夏'];               //players' name
var isStart = false;                                            //judge game is start
var end = false;                                                //judge game is end    

var drumming = new Drumming(names, 7);                          //create drumming obj

startBtn.onclick = function() {                                 //start game
    drumming.isStart = true;
    drumming.playing();

}

stopBtn.onclick = function() {                                  //stop game and show result

    if(drumming.isStart) {                                      //if haved pressed start button run it
        drumming.stop();

        if(end) {
            showResult("游戏已结束");
    
        } else if(drumming.isEnd) {
            
            if(drumming.winner != undefined) {
                showResult(drumming.eliminated + '在击鼓传花中被淘汰');
                showResult(drumming.winner + '取得最后的胜利')
        
            }
            end = true;
    
        } else {
            showResult(drumming.eliminated + '在击鼓传花中被淘汰');
            
        }
    } else {
        alert("游戏还没开始");
    }

    drumming.isStart = false;
}

function showResult(text) {                                    //show result         

    var resultSpan = document.createElement('span');
    resultSpan.setAttribute('class', 'result-span');

    resultSpan.textContent = text;

    result.appendChild(resultSpan);
}