"use strict";window.onload=function(){$(".working").on("click",function(){return alert("施工中..."),!1}),function(){for(var e=document.querySelectorAll(".umBox1"),n=(document.querySelectorAll(".staTics1"),document.querySelectorAll(".movings1")),o=0;o<e.length;o++)n[o].timer=null,e[o].index=o,e[o].onmouseenter=function(){n[this.index].style.display="block"},e[o].onmouseleave=function(){n[this.index].style.display="none"}}()};