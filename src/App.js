import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/newsCards';
import useStyles from './styles';
import logo from './askaway-logo.svg';
import wordsToNumbers from 'words-to-numbers';
const alanKey = '93f993411fc9315da213096f4fae63972e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const [newsArticles, setnewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles, number}) => {
        if(command === 'NewsHeadlines') {
          setnewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle)=> prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number;
          const article = articles[parsedNumber - 1];
          if(parsedNumber > articles.length) {
            alanBtn().playText('Please try that again.')
          } else {
            window.open(article.url);
            alanBtn().playText(`Opening Article number ${parsedNumber}`)
          }
        }
      }
    })
  }, [])
  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
