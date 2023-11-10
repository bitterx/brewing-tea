window.onload = function(){
    $('.main-image').mouseover(newImage);
    $('.main-image').mouseout(switchBackImage);
}

function newImage(){
    let newSrc = $(this).attr('data-alt');
    $(this).attr('src', newSrc);
}

function switchBackImage(){
    let ogSrc = $(this).attr('data-og');
    $(this).attr('src', ogSrc);
}

window.onscroll = function(){
    var scrollAmount = window.pageYOffset;
    var drinkImage = document.querySelector(".drink-image");
    console.log(scrollAmount);
    if (scrollAmount > 715) {
        drinkImage.src = "images/drink-images/Untitled_Artwork-2.png";
    }
    
    if (scrollAmount > 735){
        drinkImage.src = "images/drink-images/Untitled_Artwork-3.png";
    }

    if (scrollAmount > 755){
        drinkImage.src = "images/drink-images/Untitled_Artwork-4.png";
    }

    if (scrollAmount > 775){
        drinkImage.src = "images/drink-images/Untitled_Artwork-5.png";
    }

    if (scrollAmount > 795){
        drinkImage.src = "images/drink-images/Untitled_Artwork-6.png";
    }

    if (scrollAmount > 815){
        drinkImage.src = "images/drink-images/Untitled_Artwork-7.png";
    }

    if (scrollAmount > 835){
        drinkImage.src = "images/drink-images/Untitled_Artwork-8.png";
    }

    if (scrollAmount > 855){
        drinkImage.src = "images/drink-images/Untitled_Artwork-9.png";
    }

    if (scrollAmount > 835){
        drinkImage.src = "images/drink-images/Untitled_Artwork-10.png";
    }
}