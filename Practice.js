// at first take all the images into an array 
let images = ["pic.jpg","my.jpg","log.png"];
// select the image tag with query selector 
let dom = document.querySelector("img");
let count = 0;
// this function use for next button
function next()
{
    count++;
    if(count==3)
    {
        count = 0;
    }
    dom.src = images[count];
}
// this function use for previous button
function previous()
{
    count--;
    if(count==-1)
    {
        count = 2;
    }
    dom.src = images[count];
}