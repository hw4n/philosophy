import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { firstOfLocation } from '../helpers/parser';
import { isObjectId } from '../helpers/regex';
import Footer from './Footer';

function Display() {
  const location = useLocation();
  const possibleObjectId = firstOfLocation(location);

  const [quote, setQuote] = useState(null);

  const fetchData = async (objectId) => {
    let url = `/api/quote/${objectId}`;
    if (!objectId) {
      url = '/api/random/quote';
    }
    console.log(url);
    const response = await axios.get(url);
    setQuote(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    let objectId = possibleObjectId;
    if (!isObjectId(possibleObjectId)) {
      objectId = null;
    }
    fetchData(objectId);
  }, [possibleObjectId]);

  if (!quote) {
    return <></>;
  }

  return (
    <>
    <div className="display">
      <div class="main-display">
          <i class="fas fa-quote-left"></i>
          <div class="main-quote">
            {quote.text}
          </div>
          <i class="fas fa-quote-right"></i>
      </div>
    </div>
    <footer>
      <div className="said-by">
        - {quote.saidBy}
      </div>
    </footer>
    </>
  )
}

export default Display;
