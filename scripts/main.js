(function () {
    var level = 1;
    var speed = 400; 
    var slot = []; 
    var results = []; 
    var checkStop = [0, 0, 0]; 

    document.getElementById('start').onclick = function () {
        startSlot();
    }


    document.getElementById('stop0').onclick = function () {
        stopSlot(0);
    }

 
    document.getElementById('stop1').onclick = function () {
        stopSlot(1);
    }

    document.getElementById('stop2').onclick = function () {
        stopSlot(2);
    }


    function startSlot() {

        checkStop = [0, 0, 0]; 
        slot = []; 
        results = []; 

        document.getElementById('slot0').textContent = 1;
        document.getElementById('slot1').textContent = 3;
        document.getElementById('slot2').textContent = 6;

        runSlot(0);
        runSlot(1);
        runSlot(2);
    }

    function runSlot(num) {

        var slotValue = document.getElementById('slot' + num);

        if (slotValue.textContent < 7) {
            slotValue.textContent++;
        } else {
            slotValue.textContent = 0;
        }

        slot[num] = setTimeout(function () {
            runSlot(num);
        }, speed);
    }

    function stopSlot(num) {

        clearTimeout(slot[num]);

        results[num] = document.getElementById('slot' + num).textContent;

        checkStop[num] = 1;

        if (checkStop[0] * checkStop[1] * checkStop[2] == 1) {
            checkResult();
        }
    }

    function checkResult() {
        if (results[0] == results[1] && results[0] == results[2]) {
            if(level==6||level==7){
                alert('クリア!next level!あなたは達人！');
            }else if(level==10||level==11){
                alert('クリア!next level!あなたは天才！');
            }else if(level==12||level==13){
                alert('GOD');
            }else{
            alert('クリア!next level!startを押してね!');
            }

            if(results[0]==7){
            level += 2;
            speed *=0.81;
        }else{
            level+=1;
            speed *= 0.9; 
        }
            addLevel();
        } else {
            gameOver();
        }
    }

    function addLevel() {
        document.getElementById('level').textContent = level;
    }

    function gameOver() {
        alert('Game Over! RETRYボタンでやり直し!');
    }



    document.getElementById('reset').onclick = function () {
        clearTimeout(slot[0]);
        clearTimeout(slot[1]);
        clearTimeout(slot[2]);
        document.getElementById('level').textContent = 1;
        level = 1;
        speed = 400;
        slot = [];
        results = [];
        checkStop = [0, 0, 0];
        document.getElementById('slot0').textContent = 1;
        document.getElementById('slot1').textContent = 3;
        document.getElementById('slot2').textContent = 6;
    }
})();
