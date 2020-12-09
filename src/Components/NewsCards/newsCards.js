import React from 'react';
import NewsCard from '../NewsCard/newsCard';
import {Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './styles';

const infoCards = [
    {color: '#00838f', title: 'Latest News', text: 'Give me the latest news'},
    {color: '#1565c0', title: 'News by Categories', info: 'Buisness, Entertainment, Genreral, Health, Science, Sports, Technology', text:'Give me the lastest Technology news'},
    {color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, Playstation 5, Smartphones, Donald Trump', text:'Whats up with Playstation 5'},
    {color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News', text:'Give me the news from CNN'},
    {color: '#66ff00', title: 'About Weather', text:'What is the weather in Pakistan'},
    {color: '#ff7420', title: 'You can make small', text:'How are you'},
];

export default function NewsCards ({ articles, activeArticle}) {
    const classes = useStyles();

    if(!articles.length) {
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard)=> (
                        <Grid item xs={12} md={6} lg={4} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? (<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}:</strong><br />{infoCard.info}</Typography>) : null}
                    <Typography variant="h6">Try Saying: <br /> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article,i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                    <NewsCard index={i} article={article} activeArticle={activeArticle}/>
                </Grid>
            ))}
            </Grid>
        </Grow>
    )
}
