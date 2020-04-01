// Modules
import React from 'react';
// CSS
import "./css/QuoteCard.css";

function QuoteCard({ quotes }){
   return(
      <figure className="QuoteCard">
         <img src={quotes.image} alt={quotes.character} />
         <figcaption>
            <blockquote><strong>{quotes.quote}</strong></blockquote>
            <p>
               <cite><small>{quotes.character}</small></cite>
            </p>
         </figcaption>
      </figure>
   );
}

export default QuoteCard;