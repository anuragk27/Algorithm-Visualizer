import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from '@material-ui/core/CardHeader';
import "./style.css";
// import "./images/graph.png";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 350,
        maxWidth:350,
        minHeight:200,
        borderRadius: 5,
        '&:hover': {
            boxShadow: `0 6px 12px 0 #000000
                .rotate(-12)
                .darken(0.2)
                .fade(0.5)}`
                ,
        },
    },
    media: {
        height: 100
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    actionArea: {
        padding:15,
        transition: '0.2s',
        '&:hover': {
            transform: 'scale(1.1)',

        },
    },
}));

export default function ImgMediaCard2(props) {
    const classes = useStyles();
    return (
        <CardActionArea className={classes.actionArea} m={20}>
            <Link to={props.card.route}>
            <Card
                className={classes.card}
                >
             
                   <CardMedia
                       component="img"
                       alt={props.card.title}
                       height="150"
                       src={props.card.img}
                   />
              
                <CardHeader
                    title={props.card.title}
                    style={{backgroundColor:"whitesmoke"}}
                    
                />
            </Card>
            </Link>
        </CardActionArea>
    );
}
