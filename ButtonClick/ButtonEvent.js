let colors = ["red","green","blue","gray","yellow"];
let fontsize = ["1rem","2rem","3rem","4rem"];
let sq = document.querySelector("p");
let countBackground=0;
let countFontColor=0;
let countFontSize=0;

// this function use for change background color with button click
function background()
{
    countBackground++;
    if(countBackground==5)
    {
        countBackground = 0;
    }
    sq.style.backgroundColor = colors[countBackground];
}

// this function use for change font color with button click
function fontColor()
{
    countFontColor++;
    if(countFontColor==5)
    {
        countFontColor = 0;
    }
    sq.style.color = colors[countFontColor];
}

// this function use for change font size with button click
function fontSize()
{
    countFontSize++;
    if(countFontSize==5)
    {
        countFontSize = 0;
    }
    sq.style.fontSize = fontsize[countFontSize];
}