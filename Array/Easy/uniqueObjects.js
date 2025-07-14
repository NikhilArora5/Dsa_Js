/*
Write logic to get unique objects from below array ?
I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name:
"111111"}];
O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
*/

function getUniqueArr(array){
const uniqueArr = [];
const seen = {};
//Interview questions & Answers - Saikrishna Nangunuri 93
for(let i=0; i<=array.length-1;i++){
const currentItem = array[i].name;
if(!seen[currentItem]){
uniqueArr.push(array[i]);
seen[currentItem] = true;
}
}
return uniqueArr;
}
let arr = [{name: "sai"},{name:"Nang"},{name: "sai"},
{name:"Nang"},{name: "111111"}];