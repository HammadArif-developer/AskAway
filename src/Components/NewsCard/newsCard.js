import React, {useState, useEffect, createRef} from 'react';
import {Card, CardActions, CardActionArea, CardContainer, CardMedia, Button, Typography, CardContent } from '@material-ui/core';
import useStyles from './styles';
import classNames from 'classnames';
export default function NewsCard ({article,index, activeArticle}) {
    const classes = useStyles();
    const [elRefs, setEfRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    useEffect(() => {
        setEfRefs((refs) => Array(20).fill().map((_,j) => refs[j] || createRef()));
    },[])
    useEffect(() => {
        if(index === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    },[index,activeArticle, elRefs]);
    return (
        <Card ref={elRefs[index]} className= {classNames(classes.card, activeArticle === index ? classes.activeCard : null)}>
            <CardActionArea href={article.url} target="_blank">
                <CardMedia className={classes.media} image={article.urlToImage || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vskills.in%2Fcertification%2Fblog%2Fstructure-of-a-news-report%2F&psig=AOvVaw2_iS4ud9SD8xoeWdRNzz-Y&ust=1607444146445000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODZ3ZyivO0CFQAAAAAdAAAAABAD'}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(article.publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{article.source.name}</Typography>
                </div>
                    <Typography className={classes.title} gutterBottom variant="h5">{article.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{article.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography varinat="h5" color="textSecondary">{index + 1}</Typography>
            </CardActions>
        </Card>
    )
}
