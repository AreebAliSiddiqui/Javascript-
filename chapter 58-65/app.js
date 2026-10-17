// let box = document.getElementById("box");
// console.log(box.childNodes);
// console.log(box.childNodes.length);
// console.log(box.children); 
// console.log(box.nodeType);
// console.log(box.childNodes[0].nodeType);
// console.log(box.childNodes[1].nodeType);
// console.log(box.firstChild);
// console.log(box.firstElementChild);
// console.log(box.lastChild);
// console.log(box.lastElementChild);

// console.log(box.parentNode);


// function checkNodes() {
//     let container = document.getElementById("box");
//     let nodes = container.childNodes;


//     for(let i = 0; i < nodes.length; i++){
//         if (nodes[i].nodeType === 1){
//             console.log("Element Node:", nodes[i].nodeName);
//         }
//         else if (nodes[i].nodeType === 3){
//             console.log("Text Node:", nodes[i].nodeName);
//         }
//         else if (nodes[i].nodeType === 8){
//             console.log("Comment Node:", nodes[i].nodeType);
//         }
//     }
// }
// checkNodes()


let pic = document.getElementById("picture");
pic.addEventListener("mouseover",function(){ 
    pic.src="images/areeb1.jpg"
}) 

pic.addEventListener("mouseout",function(){
    pic.src="images/areeb.jpeg"
})