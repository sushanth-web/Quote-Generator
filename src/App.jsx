import { useState,useEffect } from "react"
import colorPallete from "./colors"

const body = document.querySelector("body")

export default function App(){
    
    const [textColor, setTextColor] = useState(colorPallete());
    const[quote,setQuote]=useState({
        text:"You have within you, right now, everything you need to deal with whatever the world can throw at you.",
        author:"Brain Tracy",
        color:colorPallete()
    })

    const[allQuotes,setAllQuotes]=useState([])

    const apiKey = import.meta.env.VITE_API_KEY;
    
    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: {
                'X-Api-Key': apiKey
            }
        })
        .then(response => response.json())
        .then(data => setAllQuotes(data))
        .catch(error => console.error("Error fetching quotes:", error));
    }, [allQuotes]);


    function getNewQuote(){
    const randomNum=Math.floor(Math.random() * allQuotes.length)
    const newQuoteText=allQuotes[randomNum].quote
    const newQuoteAuthor=allQuotes[randomNum].author
    setQuote(prev => ({
        ...prev,
        text:newQuoteText,
        author:newQuoteAuthor

    }))
    setTextColor(colorPallete());
    
}

body.style.backgroundColor=textColor
    

    return(
        <section id="quote-box">
            
      <h2 id="text" style={{ color: textColor }}>
        {quote.text}
      </h2>
      <p id="author" style={{ color: textColor }}>- {quote.author}</p>
      <div id="buttons">
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote" >
          <button style={{ backgroundColor: textColor }}>
            <i className="fab fa-twitter" ></i>
          </button>
        </a>
        <button id="new-quote" style={{ backgroundColor: textColor }} onClick={getNewQuote}>New quote</button>
      </div>
    </section>
    )
}