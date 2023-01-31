var quotes = [
    " “Be yourself, everyone else is already taken”― Oscar Wilde. ",

    " “Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi ",

    " “It is never too late to be what you might have been.” ― George Eliot ",

    " “Life isn't about finding yourself. Life is about creating yourself.” ― George Bernard Shaw ",

    " “Do what you can, with what you have, where you are.” ― Theodore Roosevelt "

]

function myfun(){

    let randnum=Math.floor(Math.random()*5);
    
    document.getElementById("displayQuote").innerHTML=quotes[randnum];
}