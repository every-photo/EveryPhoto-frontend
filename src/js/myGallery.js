console.log("This is myGallery.js");
console.log("dd");
require('../styles/common/common.css');
require('../styles/common/nav-container.css');
require('../styles/MG/inputInfo.css');
import {libData} from './MG/libData';
import renderLIB from './MG/renderLIB';
import clear from './clear';
export let searchPath;
searchPath = "";
//searchPath = "/Users/petnakanojo/Documents/img";    //这是一个假数据
//localStorage.setItem("searchPathArray","[]");
let searchPathArray = JSON.parse(localStorage.getItem("searchPathArray"));
searchPath = JSON.parse(localStorage.getItem("searchPath"));

const targetNode = $("#gallery-container");
let storedLIBData;
let divContainer = document.createElement("div");
divContainer.setAttribute("id","addNewBar-container");
divContainer.className += "ga-bar";
divContainer.innerHTML = `
        <p>添加新图库</p>
        <div id="addNewBar">
        <p>+</p>
        </div>
    `;


storedLIBData = JSON.parse(localStorage.getItem("LIB"));
if (storedLIBData.length > 0) {
    clear(targetNode);
    storedLIBData.forEach(renderLIB);
}
targetNode.append(divContainer);


$("#addNewBar").live("click", function() {
    console.log("ddd");
    $(".ga-bar").addClass("blur-display");
    $("#inputInfo").fadeIn(200);
});

/*这是一个没用的监听事件
let searchBar = $("#pathValue");
searchBar.bind("keyup",function(event) {    //监听回车事件
    let pathVal = $("#pathValue").val();
    var searchInfo = searchBar.val();
    var event = event || window.event;
    if (event.keyCode === 13) {
        if (searchInfo.length !== 0) {
            if(pathVal.length > 0) {
                localStorage["LIB"].forEach(renderLIB);
            }
            $("#inputInfo").fadeOut(200,function() {
                $(".ga-bar").removeClass("blur-display");
                $("#pathValue").val("");
                $("#nameValue").val("");
            });
        } else {
        }
    }
},false);
*/

//使用localstorage
$(".choose-path").live("click",function() {
    if ((JSON.parse(localStorage.getItem("searchPathArray"))).indexOf(parseInt($(this).parent(".ga-bar").attr("data-id"))) < 0)  {
        console.log($(this).parent(".ga-bar").attr("data-id"));
        console.log("ddd"+JSON.parse(localStorage.getItem("searchPathArray")));
        console.log((JSON.parse(localStorage.getItem("searchPathArray"))).indexOf($(this).parent(".ga-bar").attr("data-id")));
        console.log("kkk");
        $(this).parent(".ga-bar").attr("chooseornot","yes");
        $(this).addClass("choose");

        searchPathArray.push(parseInt($(this).parent(".ga-bar").attr("data-id")));
        localStorage.setItem("searchPathArray",JSON.stringify(searchPathArray));

        console.log(localStorage.getItem("searchPathArray"));
        console.log(searchPathArray);
        console.log($(this).parent().children(".lib-path").html());

        searchPath = searchPath.concat(" ",$(this).parent().children(".lib-path").html()," ");
        localStorage.setItem("searchPath",JSON.stringify(searchPath));

        console.log("afterAdd" + searchPath);
    } else {
        $(this).parent(".ga-bar").attr("chooseornot","");
        $(this).removeClass("choose");
        let index = searchPathArray.indexOf($(this).parent(".ga-bar").attr("data-id"));
        console.log("searchPathArray"+searchPathArray);
        searchPathArray.splice(index,1);
        let pathlength = $(this).parent().children(".lib-path").html().length;
        let pathindex = searchPath.indexOf($(this).parent().children(".lib-path").html());
        console.log(typeof(searchPath));
        console.log(searchPath);
        searchPath = searchPath.replace($(this).parent().children(".lib-path").html(), "");
        console.log("afterReplace" + searchPath);
        localStorage.setItem("searchPath",JSON.stringify(searchPath));


        localStorage.setItem("searchPathArray",JSON.stringify(searchPathArray));
        console.log(JSON.parse(localStorage.getItem("searchPathArray")));
        console.log(searchPathArray);
    }

});

$("#btn-addNewInfo").click(function() {
   let newLIB = {};
   newLIB.name = $("#nameValue").val();
   newLIB.path = $("#pathValue").val();

   if(newLIB.path.length > 0) {
       clear(targetNode);

       storedLIBData = JSON.parse(localStorage.getItem("LIB"));
       storedLIBData.push(newLIB);
       localStorage.setItem("LIB",JSON.stringify(storedLIBData));
       storedLIBData = JSON.parse(localStorage.getItem("LIB"));

       storedLIBData.forEach(renderLIB);
       targetNode.append(divContainer);

       $("#inputInfo").fadeOut(200,function() {
           $(".ga-bar").removeClass("blur-display");
           $("#pathValue").val("");
       });
   }
    alert("ok");
});

$("#btn-cancel").click(function() {
    $("#inputInfo").fadeOut(200,function() {
        $(".ga-bar").removeClass("blur-display");
        $("#pathValue").val("");
    });
});