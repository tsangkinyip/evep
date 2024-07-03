// JavaScript source code

var i = 0; //loop count


// cal time
var t = new Date();
var min = t.getMinutes() < 10 ? '0' : '';
var ampm = t.getHours() >= 12 ? 'pm' : 'am';
var hour = t.getHours();
if (t.getHours() > 12) {
     hour -= 12;} 
var d = hour + ":" + min + t.getMinutes() + " " + ampm;
var maxCount = myObj.dialog.length;
var pling = new Audio("media/Pling.mp3");     
var playing = false;
function startcourse() {
    document.getElementById("startButton").style.visibility = "hidden";
    var time = myObj.dialog[0].time * 1000;
    //Update
    var update = setInterval(playcourse, 3000);
    // check status
    function playcourse() {

        if (i < maxCount) {
            var msg = myObj.dialog[i].rolemsg;
            var src = myObj.dialog[i].sndfile;
            var role = myObj.dialog[i].role;

            if (role == "student") {
                addR(msg);
            }
            if (role == "pc") {
                addL(msg);
            }
            if (role == "pcR") {
                addLSound(src);
                clearInterval(update);
            }
            if (role == "studentR") {
                addRSound(src);
                clearInterval(update);
            }
            pling.play();
            i++;
           
        }
    }

    //add the text dialog box.-----------------------------------------
    function addL(word) {
        var t = document.createTextNode(word);
        var l = document.createElement("LU");
        var pre = document.createElement("pre");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        l.appendChild(t);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("L");
        p.appendChild(l);
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scrollTo(0, document.getElementById("dialog").scrollHeight);
        
    }

    function addR(word) {
        var t = document.createTextNode(word);
        var l = document.createElement("LU");
        var pre = document.createElement("pre");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        l.appendChild(t);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("R");
        p.appendChild(l);
        p.style.textAlign = "right";
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scrollTo(0, document.getElementById("dialog").scrollHeight);

    }

    function addRSound(src) {
        var current = i+1;
        var audio = new Audio(src);
        var iPhoto = document.createElement("img"); //photo icon
        iPhoto.src = "st_pic.png";
        var iPlay = document.createElement("img"); //play icon
        iPlay.src = "playIcon.png";
        iPlay.onclick = function () {
            if (!playing) {
                audio.play();
                playing = true;
            };
        };

        audio.onended = function () {
            playing = false;
            if (current == i) {
                update = setInterval(playcourse, 3000);
            }
        };

        var iBar = document.createElement("img"); //bar icon
        iBar.src = "playIcon2.png";
        iBar.classList.add("playerBar");
        var l = document.createElement("LU");
        var pre = document.createElement("p");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        p.style.textAlign = "right";
        l.append(iPhoto);
        l.appendChild(iPlay);
        l.appendChild(iBar);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("R");
        p.appendChild(l);
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scrollTo(0, document.getElementById("dialog").scrollHeight);
    }

    function addLSound(src) {
        var current = i + 1;
        var audio = new Audio(src);
        var iPhoto = document.createElement("img"); //photo icon
        iPhoto.src = "my_pic.png";
        var iPlay = document.createElement("img"); //play icon
        iPlay.src = "playIcon.png";
        iPlay.onclick = function () {
            if (!playing) {
                audio.play();
                playing = true;
            };
        };

        audio.onended = function () {
            playing = false;
            if (current == i) {
                update = setInterval(playcourse, 3000);
            }
        };
        var iBar = document.createElement("img"); //bar icon
        iBar.src = "playIcon2.png";
        iBar.classList.add("playerBar");
        var l = document.createElement("LU");
        var pre = document.createElement("p");
        var timelu = document.createElement("LU");
        var timetext = document.createTextNode(d);
        var p = document.createElement("P");
        p.style.textAlign = "left";
        l.appendChild(iPlay);
        l.appendChild(iBar);
        l.append(iPhoto);
        l.appendChild(timelu);
        timelu.appendChild(timetext);
        timelu.classList.add("time");
        l.classList.add("L");
        p.appendChild(l);
        p.id = "line" + i;
        pre.appendChild(p);
        document.getElementById("dialog").appendChild(pre);
        document.getElementById("dialog").scrollTo(0, document.getElementById("dialog").scrollHeight);
    }

    function playAudio(src) {
        var audio = new Audio(src);
        if (!playing) {
            playing = true;
            iPlay.onclick = function () { audio.play(); };

            audio.onended = function () {
                playing = false;
                update = setInterval(playcourse, 3000);
            };
        }
    }
}

    function inputText() {
        var text = document.getElementById("typemessage").textContent;
        if (text != "") {
            //console.log(text);
            //text info
            var t = document.createTextNode(text);
            var l = document.createElement("LU");
            var timelu = document.createElement("LU");
            var timetext = document.createTextNode(d);
            var p = document.createElement("P");
            l.appendChild(t);
            l.appendChild(timelu);
            timelu.appendChild(timetext);
            timelu.classList.add("time");
            l.classList.add("R");
            p.appendChild(l);
            p.style.textAlign = "right";
            document.getElementById("dialog").appendChild(p);
            window.scrollTo(0, document.body.scrollHeight);
            document.getElementById("typemessage").contentEditable = false;
            document.getElementById("typemessage").innerHTML = "";  
            answers = true;        
        }

    } //not use

    function hints(word) {
        word.toString();
        document.getElementById("hints").innerHTML = word;
        i++;
        document.getElementById("typemessage").contentEditable = true;
    } //not use

