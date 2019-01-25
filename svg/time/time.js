let displayData = document.getElementById('eat');
        function getDateDemo() {
            let myDate = new Date();
            let eatDate = new Date();
            if (myDate.getHours() < 12 || (myDate.getMinutes() < 30 && myDate.getHours() == 12)) {
                eatDate.setHours(12);
                eatDate.setMinutes(30);
            } else if (myDate.getHours() > 19) { 
                eatDate.setDate(myDate.getDate()+1);
            } else {
                eatDate.setHours(19);
                eatDate.setMinutes(0);
            }
            eatDate.setSeconds(0);
            eatDate.setMilliseconds(0);
            let mss = Date.parse(eatDate) - Date.parse(myDate)
            let hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = (mss % (1000 * 60)) / 1000;
            displayData.innerHTML = 'Time' + '  ' + hours + ':' + minutes + ':' + seconds;
        }
        window.setInterval("getDateDemo()",1000);
