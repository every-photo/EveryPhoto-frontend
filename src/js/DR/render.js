/**
 * Created by petnakanojo on 31/07/2017.
 */
export default function(element,index) {
    const targetNode = $("#render-picture");
    const div = document.createElement("div");
    div.className += " pic-container ";
    div.setAttribute("data-id",index);
    //language=HTML
    div.innerHTML = `
        <div class="img-containers">
            <div class="img-container">
                <img src= ${element.smallURL} alt="">
            </div>
        </div>
        <p class="pic-path">${element.largePATH}</p>
    `
    targetNode.append(div);
}