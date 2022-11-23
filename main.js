const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>  //async function to fetch data from API
{
 
    var url="https://type.fit/api/quotes";        //api url for quotes

    
    const response=await fetch(url); // fetch the data from api url and store it in response variable & await function can only be used inside async function
    console.log(typeof response);
    
    const allQuotes = await response.json(); //convert response to json and store it in quotes array

    
    const i = Math.floor(Math.random()*allQuotes.length);

    
    const quote=allQuotes[i].text;

    
    const auth=allQuotes[i].author;

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    
}
document.getElementById("newquote").addEventListener("click",getNewQuote);