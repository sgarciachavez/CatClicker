//Create 2 arrays of cat names & with their corresponding src location
let catnames = ["Aspen", "Caleb", "Dallas", "Finley", "Hayden", "Keelan"];
let catimages = ["calico0.jpg", "calico1.jpg","calico2.jpg", "calico3.jpg","calico4.jpg", "calico5.jpg"];
//The empty array will hold the cat objects
let cats = [];

class Cat{
  constructor(name, id){
    this.name = name;
    this.id = id;
    this.counter = 0;
  }
  increaseCounter(){
    this.counter = this.counter + 1;
  }

  getName(){
    return this.name;
  }
  getCounter(){
    return this.counter;
  }
}


let tabcontainer = document.getElementById("tab-container");
let container = document.getElementById("cat-container");

for(let i = 0; i < catnames.length; i++){
  let button = document.createElement("button");
  button.id = i.toString();
  button.appendChild(document.createTextNode(catnames[i]));
  tabcontainer.appendChild(button);

  let div = document.createElement("div");
  div.id=`catinfo${i}`;
  div.classList.add("tabcontent", "hide");  //need to add hide here!

  let nameholder = document.createElement("h3");
  nameholder.appendChild(document.createTextNode(catnames[i]));
  div.appendChild(nameholder);

  let counter = document.createElement("p");
  counter.appendChild(document.createTextNode("Click me! ... Meow! "));
  let span = document.createElement("span");
  span.id = `cat${i}-counter`;
  counter.appendChild(span);
  div.appendChild(counter);

  let image = document.createElement("img");
  image.id = `cat${i}`;
  image.classList.add("cat-image");
  image.setAttribute("src", `images/${catimages[i]}`);//images/calico1.jpg
  //console.log(catimages[i]);
  image.setAttribute("alt", `Picture of cat named ${catnames[i]}`);
  div.appendChild(image);
  container.appendChild(div);

  let cat = new Cat(catnames[i],`cat${i}` );
  cats.push(cat);
}

container.addEventListener('click', function(evt){
  for(let i in cats){
    cat = cats[i];

    if(cat.id === evt.target.id){
      cat.increaseCounter();
      let id = `${cat.id}-counter`;
      let el = document.getElementById(id);
      el.textContent = cat.getCounter();
    }
  }

}, false);

tabcontainer.addEventListener('click', function(evt){

  let buttons = document.getElementsByTagName("button");
  //Deactivate all buttons/tabs
  for(let i = 0; i< buttons.length; i++){
    buttons[i].classList.toggle("active", false);
  }
  //Hide all tabcontent/pictures
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.toggle("hide", true);
  }

  //Activate Active button!
  let active = document.getElementById(evt.target.id);
  active.classList.toggle("active", true);

  //show the picture!!
  let id = "catinfo".concat(evt.target.id);
  let div = document.getElementById(id);
  div.classList.toggle("hide", false);

}, false);
