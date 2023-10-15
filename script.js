var quotes = [
    {
       text: " Be yourself, everyone else is already taken. ",
       author: "Oscar Wilde"
    },
   
    {
        text: " Live as if you were to die tomorrow. Learn as if you were to live forever. ",
        author: "Mahatma Gandhi"
     },


     {
        text: " It is never too late to be what you might have been. ",
        author: "George Eliot"
     },


     {
        text: "Life isn't about finding yourself. Life is about creating yourself. ",
        author: "George Bernard Shaw"
     },


     {
        text: "Do what you can, with what you have, where you are. ",
        author: "Theodore Roosevelt"
     },


     
     {
        text: "A room without books is like a body without a soul. ",
        author: "Marcus Tullius Cicero"
     },

     
     {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ",
        author: "Bernard M. Baruch"
     },

     
     {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ",
        author: "Dr. Seuss"
     },

     
     {
        text: "Be the change that you wish to see in the world. ",
        author: "Mahatma Gandhi"
     },

     
     {
        text: "If you tell the truth, you don't have to remember anything.  ",
        author: "Mark Twain"
     },

     
     {
        text: "A friend is someone who knows all about you and still loves you.  ",
        author: "Elbert Hubbard"
     },

      
     {
        text: "To live is the rarest thing in the world. Most people exist, that is all.  ",
        author: "Oscar Wilde"
     },

      
     {
        text: "Without music, life would be a mistake. ",
        author: "Friedrich Nietzsche"
     },

 
     {
        text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        author: "Oscar Wilde "
     },

]

function getQuote(){

    let randnum=Math.floor(Math.random()*14);
    
    document.getElementById("quote").innerHTML=quotes[randnum].text;

    document.getElementById("author").innerHTML=quotes[randnum].author;
}

getQuote();
