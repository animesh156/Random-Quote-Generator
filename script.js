var quotes = [
    " “Be yourself, everyone else is already taken”― Oscar Wilde. ",

    " “Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi ",

    " “It is never too late to be what you might have been.” ― George Eliot ",

    " “Life isn't about finding yourself. Life is about creating yourself.” ― George Bernard Shaw ",

    " “Do what you can, with what you have, where you are.” ― Theodore Roosevelt ",
    
   " “A room without books is like a body without a soul.”― Marcus Tullius Cicero ",
    
   " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
    
    " “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
    
    " “Be the change that you wish to see in the world.”― Mahatma Gandhi",
    
   " “If you tell the truth, you don't have to remember anything.”― Mark Twain",
    
   " “A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
    
  "  “To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde",
    
    "“Without music, life would be a mistake.”― Friedrich Nietzsche, Twilight of the Idols",
    
   " “I am so clever that sometimes I don't understand a single word of what I am saying.”― Oscar Wilde, The Happy Prince and Other Stories"









    

]

function myfun(){

    let randnum=Math.floor(Math.random()*14);
    
    document.getElementById("displayQuote").innerHTML=quotes[randnum];
}
