
let quotes = [
    { text: "Creativity takes courage.", author: "Henri Matisse" },
    { text: "Make today so awesome that yesterday gets jealous.", author: "Unknown" },
    { text: "Don't wait for opportunity. Create it.", author: "George Bernard Shaw" },
    { text: "Do what you love, love what you do.", author: "Ray Bradbury" },
    { text: "The secret of getting ahead is getting started.", author: "Mark Twain" }
  ];

 function RandomQuote(){

       
       let quoteText = document.getElementById("quote");
       let quoteAuthor = document.getElementById("author");
       let newQuoteBtn = document.getElementById("new-quote");
       
         let randomIndex = Math.floor(Math.random() * quotes.length);
         let quote = quotes[randomIndex];
         quoteText.textContent = `"${quote.text}"`;
         quoteAuthor.textContent = `— ${quote.author}`;
     
       
      
       
 }