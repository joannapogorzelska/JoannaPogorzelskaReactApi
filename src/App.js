import React, { useState } from 'react';

import ArticlesList from './ArticlesList';
import './index.css';

function App() {
  const [search, setSearch] = useState([]);
  const [result, setResult] = useState([])
  const [history, setHistory]=useState([])

const handleSearch = async e => {
  e.preventDefault();
  
    const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${search}&limit=20`,
      {'Api-User-Agent': 'MediaWiki REST API docs examples/0.1 (https://www.mediawiki.org/wiki/API_talk:REST_API)'});
    if (search === '') return
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json()
   
  const searchArticles= data.pages.map((articleData) => {
      return {
        id: articleData.id,
        title: articleData.title,
        description: articleData.description,
        url: `https://en.wikipedia.org/wiki/${articleData.key}`,
      };
    });

  console.log(searchArticles);
  setSearch('')
  setResult('searchArticles')


  }
  const handleOnClickHistory = (prevState) => {
    setHistory(prevState => [...prevState, search])
    console.log('ok')
  }
  return (
    <React.Fragment>
      <header>
        <h1> Wiki Search</h1>
          <form className="search" onSubmit={handleSearch}>
            <input
             type="searchInput"
              placeholder="Looking for....."
              value={search}
              onChange={e=>setSearch(e.target.value)}
            />
          </form>
      </header>
      <section>
        <ArticlesList articles={result} />
        <button className="showHistory" onClick={handleOnClickHistory}>Show History</button>
              <div>
                {history.map((items, index) => {
                  return (
                    <div key={index}> {items} </div>)
                
              })}</div>
      </section>
    </React.Fragment>
  );
}

export default App;