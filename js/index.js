/**
 * Created by weimin on 16-6-29.
 */
FastClick.attach(document.body);

~function(){
    var winW=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=winW/750*100+"px";
}();

var swiper = new Swiper('.swiper-container',{
    loop:true,
    direction:"vertical",
    onSlideChangeEnd:changeId
});
function changeId(swiper){
    var n=swiper.activeIndex;
    var slideAry = swiper.slides;
    [].forEach.call(slideAry,function(cur,index){
        if (index==n){
            switch(n){
                case 0:
                    cur.id="page5";
                    break;
                case 6:
                    cur.id="page1";
                    break;
                default:
                    cur.id="page"+n;
            }
          return;
        }
        cur.id='';
    })
}

var music=document.getElementById('music');
var audioMusic=document.getElementById('audioMusic');
    audioMusic.volume=.4;
window.setTimeout(function(){
    audioMusic.play();
    audioMusic.oncanplay = function(){
        music.style.display="block";
        music.className="music move";
    };
},1000);
music.onclick=function(){
    if(audioMusic.paused){
        audioMusic.play();
        music.className="music move";
        return;
    }
    audioMusic.pause();
    music.className="music";
}