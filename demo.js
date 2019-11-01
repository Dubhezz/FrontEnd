let titles = [
    '学习前端的一个开始',
    '确立目标坚持下去',
    '有个良好的开端非常重要',
    '坚持下去30天',
    '一定立杆见影'
]

let addText = function() {
    let index = Math.floor(Math.random() * titles.length + 0);
    let div = document.createElement("div");
    let textNode = document.createTextNode(titles[index]);
    div.appendChild(textNode);
    div.style.color = "#FE7235";
    div.style.lineHeight = 2;
    let contentDiv = document.getElementById('content');
    contentDiv.appendChild(div)
}