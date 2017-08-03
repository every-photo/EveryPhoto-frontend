
export default function(element,index) {
    const targetNode = $("#gallery-container");
    let div = document.createElement("div");
    div.setAttribute("data-id",index);
    div.className += ' ga-bar ';
    div.setAttribute("chooseornot","");

    let searchPathArray = JSON.parse(localStorage.getItem("searchPathArray"));
    if (searchPathArray.indexOf(parseInt(index)) >= 0) {
        console.log("YESSSSSSS!!");
        div.setAttribute("chooseornot","yes");
        div.innerHTML = `
        <div class="choose-path choose" >
            <p></p>
        </div>
        <p class="lib-name">${element.name}</p>
        <p class="lib-path">${element.path}</p>
    `;
    } else {
        div.innerHTML = `
        <div class="choose-path" >
            <p></p>
        </div>
        <p class="lib-name">${element.name}</p>
        <p class="lib-path">${element.path}</p>
    `;
    }
    targetNode.prepend(div);

}