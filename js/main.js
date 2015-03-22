
var doc = document,
    intervalSecond = 0,
    act = 0,
    img = doc.getElementById("footer").getElementsByTagName("img"),
    pop = doc.getElementsByClassName("pop-up")[0],
    test = function(a,b){
        return a+b;
        return b;
    },
    fcShowImg = function () {
        pop.style.display = "block";
        pop.getElementsByTagName("img")[0].setAttribute("src", this.getAttribute("src"));
        pop.getElementsByTagName("img")[0].setAttribute("height", "10%");
    },
    fcHideImg = function (intervalSecond) { 
        pop.style.display = "none";
        pop.getElementsByTagName("img")[0].setAttribute("src", "");
        intervalSecond = 0;
    },
    fcAnimate = function(newImg){
        if (newImg.getAttribute("src")!==""){
            if (intervalSecond < 100) {
                intervalSecond = intervalSecond + 3;
            };
            newImg.setAttribute("height", intervalSecond + "%");
        }else{
            intervalSecond = 0;
        };
    };


for ( var i = 0; i<img.length-1; i++ ) {
    img[i].addEventListener("click", fcShowImg, false);
};

pop.addEventListener("click", fcHideImg, false);

setInterval(function(){fcAnimate(pop.getElementsByTagName("img")[0])},20);


