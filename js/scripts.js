let cat_image = document.getElementById("calico");
let counter = document.getElementById("counter");
let count = 0;

cat_image.addEventListener('click', function(){
  count++;
  counter.textContent = count;
}, false);
