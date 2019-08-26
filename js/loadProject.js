let filter="";

window.onload = () => {
    loadTable();

}

function loadTable() {
    let projectDiv = document.getElementById("project");
    projectDiv.innerHTML = "";
    for (let i = 0; i < data.length; ++i) {
        if(filter == "" || filter == data[i].type){      
        let columnDiv = document.createElement("div");
        columnDiv.setAttribute("class", "col-md-3 m-1 "+data[i].image.class);
        columnDiv.setAttribute("style", "background-color: grey;");
        projectDiv.appendChild(columnDiv);
        let image = document.createElement("img");
        image.setAttribute("id", i);
        image.setAttribute("src", data[i].image.src);
        image.setAttribute("alt", data[i].image.alt);
        image.setAttribute("style", data[i].image.style);
        image.onclick = function () { clickTodo(this.id); };
        columnDiv.appendChild(image);
        let myModal = document.createElement("div");
        myModal.setAttribute("id", "myModal" + i);
        myModal.setAttribute("class", "modal");
        columnDiv.appendChild(myModal);
        let close = document.createElement("span");
        close.setAttribute("class", "close" + i);
        myModal.appendChild(close);
        let times = document.createTextNode('\u02DF');
        close.appendChild(times);
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        myModal.appendChild(row);
        let modalContent = document.createElement("div");
        modalContent.setAttribute("class", "col-md-6 modal-content");
        modalContent.setAttribute("id", "modalContentImage"+i);
        row.appendChild(modalContent);
        let lightBoxImage = document.createElement("img");
        lightBoxImage.setAttribute("class", "modal-content");
        lightBoxImage.setAttribute("id", "img01" + i);
        modalContent.appendChild(lightBoxImage);
        let modalContentDescription = document.createElement("div");
        modalContentDescription.setAttribute("class", "col-md-6 modal-content");
        modalContentDescription.setAttribute("id", "modalContentDescription"+i);
        row.appendChild(modalContentDescription);
        let modalContentP = document.createElement("p");
        let modalContentText = document.createTextNode("Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.");
        modalContentP.appendChild(modalContentText);
        modalContentDescription.appendChild(modalContentP);
        let caption = document.createElement("div");
        caption.setAttribute("id", "caption" + i);
        }
    }
}
function filterJS(){
    filter = "javascript";
    loadTable();
} 
function filterGraphic(){
    filter = "graphic";
    loadTable();
}
function filterhtml(){
    filter="html"; 
    loadTable();
}
function filterCode(){
    filter = "code";
    loadTable();
}
function filterMobile(){
    filter="mobile";
    loadTable();
}
function filterAll(){
    filter="";   
    loadTable();
}