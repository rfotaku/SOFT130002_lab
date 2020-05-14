const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
const containers = document.getElementsByClassName("flex-container justify");
const container = containers[0];
let picBox = [];
for(let i = 0;i<works.length;i++){
    let back = document.createElement("div");
    back.className = "item";
    let title = document.createElement("h4");
    let titletext = document.createTextNode("Genre : "+works[i].tips);
    title.appendChild(titletext);
    back.appendChild(title);
    let box1 = document.createElement("div");
    box1.className = "inner-box";
    let name = document.createElement("h3");
    let nametext = document.createTextNode(works[i].author);
    name.appendChild(nametext);
    let lifetime = document.createElement("h5");
    lifetime.style.marginLeft = "1em";
    let lifetimetext = document.createTextNode("lifetime:"+works[i].lifetime);
    lifetime.appendChild(lifetimetext);
    name.style.display = "inline";
    lifetime.style.display = "inline";
    box1.appendChild(name);
    box1.appendChild(lifetime);
    back.appendChild(box1);
    let box2 = document.createElement("div");
    box2.className = "inner-box";
    let picTitle = document.createElement("h3");
    let picTitletext = document.createTextNode("Popular Photos");
    picTitle.appendChild(picTitletext);
    box2.appendChild(picTitle);
    picBox[i] = document.createElement("div");
    for(let k = 0;k<works[i].photos.length;k++){
        let pic = document.createElement("img");
        pic.className = "photo";
        pic.src = works[i].photos[k];
        picBox[i].appendChild(pic);
    }
    box2.appendChild(picBox[i]);
    back.appendChild(box2);
    let btm = document.createElement("button");
    let btmtext = document.createTextNode("Visit");
    btm.appendChild(btmtext);
    back.appendChild(btm);
    container.appendChild(back);
}