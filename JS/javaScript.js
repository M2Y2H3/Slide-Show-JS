let image = document.getElementById('slideShow')

let images = ['Images/image-1.jpg','Images/image-2.jpg','Images/image-3.jpg','Images/image-4.jpg']

let i = 0

function slideShow() {

    image.setAttribute('src', images[i]);

    if(i == images.length -1){
        i = 0;
    }else{
    i++;

    }
     setTimeout(function(){
        slideShow();
    }, 2000)
}

slideShow();