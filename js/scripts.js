//Create 2 arrays of cat names & with their corresponding src location
let catnames = ["Calico Cate", "Calico Caleb"];
let catimages = ["calico1.jpg", "calico2.jpg"];
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

//grab the cat container and fill it up with cats! Meow!
let container = document.getElementById("cat-container");
for(i in catnames){
  // console.log(catnames[i]);
  // console.log(catimages[i]);
  let div = document.createElement("div");

  let nameholder = document.createElement("h2");
  let n = document.createTextNode(catnames[i]);
  nameholder.appendChild(n);

  let counter = document.createElement("p");
  counter.appendChild(document.createTextNode("Meow! "));
  let span = document.createElement("span");
  span.id = `cat${i}-counter`;
  //span.textContent = "0";
  counter.appendChild(span);

  let image = document.createElement("img");
  image.id = `cat${i}`;
  image.className = "cat-image";
  image.setAttribute("src", `images/${catimages[i]}`);//images/calico1.jpg
  console.log(catimages[i]);
  image.setAttribute("alt", `Picture of cat named ${catnames[i]}`);

  div.appendChild(nameholder);
  div.appendChild(counter);
  div.appendChild(image);

  container.appendChild(div);

  let cat = new Cat(catnames[i],`cat${i}` );
  cats.push(cat);
}

container.addEventListener('click', function(evt){
  //console.log(evt.target.id);
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
