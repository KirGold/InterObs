/*let img = document.querySelector(".img")
let observer = new IntersectionObserver(items => {
    items.forEach(element =>{
        if(element.isIntersecting){
            img.classList.add("imgActive")
        }
        else{
            img.classList.remove("imgActive")
        }
    });
});
observer.observe(img);*/





/*let blocks = document.querySelectorAll(".fruits-list");
let obs = new IntersectionObserver(items => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.add("fruits-listActive");
        } else {
            item.target.classList.remove("fruits-listActive");
        }
    });
});
for (let i = 0; i < blocks.length; i++) {
    obs.observe(blocks[i]);
}*/



/*let blocks = document.querySelectorAll(".fruits-list li");

let obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let img = entry.target.querySelector(".fruit-img");
        let name = entry.target.querySelector(".fruit-name");

        if (entry.isIntersecting) {
            if (name.textContent === "Fruit 1") {
                img.src = "./img/fruit-2(4k).jpg";
            } else if (name.textContent === "Fruit 2") {
                img.src = "./img/fruit-2(4k).jpg";
            } else if (name.textContent === "Fruit 3") {
                img.src = "./img/fruit-2(4k).jpg";
            } else if (name.textContent === "Fruit 4") {
                img.src = "./img/fruit-2(4k).jpg";
            }
            name.style.color = "#0400ff";
        } else {
            if (name.textContent === "Fruit 1") {
                img.src = "./img/fruits(4k).jpg";
            } else if (name.textContent === "Fruit 2") {
                img.src = "./img/fruits(4k).jpg";
            } else if (name.textContent === "Fruit 3") {
                img.src = "./img/fruits(4k).jpg";
            } else if (name.textContent === "Fruit 4") {
                img.src = "./img/fruits(4k).jpg";
            }
            name.style.color = "#0400ff";
        }
    });
});

for (let i = 0; i < blocks.length; i++) {
    obs.observe(blocks[i]);
}*/









/*let images = document.querySelectorAll("img[data-src]")
let observerOptions = {
    root : null,
    rootMargin : "0px",
    threshold : 0.5,
}
let observeImg = new IntersectionObserver (items => {
    items.forEach(item => {
        if(item.isIntersecting){
            let image = item.target
            image.src = image.dataset.src
            image.style.opacity = 1
        }
    })
},observerOptions)


images.forEach(image =>{
    observeImg.observe(image)
})*/


let images = document.querySelectorAll("img[data-src]");
// Options for IntersectionObserver
let observerOptions = {
    root: null, 
    rootMargin: "0px",
    threshold: 0.5, 
}

let observeImg = new IntersectionObserver(items => {
    items.forEach(item => {
        if(item.isIntersecting) {  // If image is see
            let image = item.target
            image.src = image.dataset.src
              // Add 'load',that used after image is seen
            image.addEventListener('load', () => {
                image.classList.add('loaded')// Add classfor image
            })
        }
    })
}, observerOptions)

images.forEach(image => {
    observeImg.observe(image)
})