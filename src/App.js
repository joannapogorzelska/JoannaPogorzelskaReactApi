import React, { useState} from 'react';

import ArticlesList from './ArticlesList';
import Button from './Button';
import ShowHistory from './ShowHistory';
import './index.css';

function App() {
    const [searchTerm, setSearchTerm] = useState([]);
    const [articles, setArticles] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const [historyVisible, setHistoryVisible] = useState(false);
    const [error, setError] = useState(null);
  
    const handleHistoryButton = () => {
    setHistoryVisible(!historyVisible)
      }

    const handleSearch = async e => {
      e.preventDefault();
      setError(null);

      try {
         const response = await fetch(`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${searchTerm}&limit=20`);
      if (searchTerm === '') return
      if (!response.ok) {
      throw Error();
      } 
        const data = await response.json();

        const articles = data.pages.map((articleData) => {
            return {
                id: articleData.id,
                title: articleData.title,
                description: articleData.description,
                url: `https://en.wikipedia.org/wiki/${articleData.key}`,
                code: articleData.code
             };
        });

        setArticles(articles);
        setSearchHistory(prev => [ searchTerm, ...prev]);
        setSearchTerm('');
      } catch (error) {
        setError('error')
      };

     
  }
  return (
      <React.Fragment>
          <header>
                <h1> Wiki Search</h1>
                <form className="search" onSubmit={handleSearch}>
                    <input
                        type="searchInput"
                        placeholder="Looking for....."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </form>
      </header>
      <section>
        {error && <h2>{"Sorry it's a lunch time..."}</h2>}
        {articles.length > 0 &&
          (<div><Button className="showHistory"
                  click={handleHistoryButton}
                  active={!historyVisible}/>
          <div>{historyVisible && (<ShowHistory searchHistory={searchHistory}/>)}</div></div>
          )
        }

      </section>
      <ArticlesList articles={articles}/>
      </React.Fragment>
    );
}

export default App;
