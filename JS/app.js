//DOM Elements:
let colorDisplay = document.querySelector('#color-holder');
let message = document.querySelector('#msg');
let resetBtn = document.querySelector('#reset');
let mainHeader = document.querySelector('#main-header');
let easyBtn = document.querySelector('#easy-btn');
let hardBtn = document.querySelector('#hard-btn');
let squares = document.querySelectorAll('.square');

//CREATE Colors Array:
let colors = generateRandomColors(6);
//Assign Main Color:
let pickedColor = pickColor();


easyBtn.addEventListener('click', function(){
easyBtn.classList.add('selected')
hardBtn.classList.remove('selected')
colors = generateRandomColors(3);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++)
{
    if(colors[i]){
        squares[i].style.background = colors[i];
    }else{
        squares[i].style.display = 'none';
    }
}

});

hardBtn.addEventListener('click', function(){
    hardBtn.classList.add('selected')
    easyBtn.classList.remove('selected')
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++)
    {
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block';
    }
        });


resetBtn.addEventListener('click', function(){
    resetGame();
})

    colorDisplay.textContent = pickedColor;

    for(let i = 0; i < squares.length; i++)
    {   //COLORING Squares:
        squares[i].style.background = colors[i];
        //EVENT Listeners for Squares:
        squares[i].addEventListener('click', function(){
        //Grab color of picked square:
        let clickedColor = this.style.background;
        //Compare color of picked square into current value of "colorHolder":
        if(clickedColor === pickedColor)
        {
            message.textContent = 'Correct';
            resetBtn.textContent = 'Play Again';
            changeColors(clickedColor);
            mainHeader.style.background = clickedColor;
        }else{
            this.style.background = '#232323';
            message.textContent = 'Try Again!';
        
        }   
                                                        });
}

function changeColors (color)
{
       for(let i = 0; i < squares.length; i++)
    {   //COLORING Squares:
        squares[i].style.background = color;
    
                                                    
    } 
};

//PICK Main Color:
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//Make Base Squares' Colors:
function generateRandomColors(num){
    //Create Array:
    let arr = [];
    //ADD num random colors to array
    for (let index = 0; index < num; index++)
    {
       
       arr.push(randomColor());
        
    }
    //return that Array filled  with random colors
 return arr;
}

//GENERATE A Random Color:
function randomColor(){
    let redR =Math.floor(Math.random() * 256);
    let greenG =Math.floor(Math.random() * 256);
    let blueB =Math.floor(Math.random() * 256);
    return `rgb(${redR}, ${greenG}, ${blueB})`;
}

//RESET Game:
function resetGame(){
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    mainHeader.style.background = 'steelblue';
    message.textContent = '';
    resetBtn.textContent = 'New Colors';
    for(let i = 0; i < squares.length; i++)
    {
        squares[i].style.background = colors[i];
    }
}