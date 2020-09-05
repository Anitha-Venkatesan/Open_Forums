import React, { useEffect, useState } from "react";
import { useForumContext } from "../../contexts/ForumContext";
import forumApi from "../../utils/forum.api";
import { Card, CardContent, Typography,Avatar } from "@material-ui/core";
import ReplyCard from "../Reply/Replies";
import NavBar from "../NavBar/NavBar";

const myStyle = {
    cardContainer: {
        textAlign: "center",
        width: "700px",
        margin: "0 auto",
        paddingTop: "90px"
    },
    cardIndividual: {
        margin: "20px"
    },
    titleCardBody: {
        textAlign: "left",
        fontWeight: 700,
        fontSize: "20px",
        fontFamily: 'Raleway'
    },
    descCardBody: {
        textAlign: "left",
        fontFamily: 'Raleway',
        fontSize: '18px',
        paddingBottom: 10
    }
};
export default function (props) {
    const [forum, setForum] = React.useState({});

    useEffect(() => {
        forumApi
            .getById(props.match.params.forumId)
            .then((res) => {
                setForum(res.data);
            })
            .catch((err) => console.log(err));

    }, [])
    return (
        
        <div style={myStyle.cardContainer}>
            
            <Card style={myStyle.cardIndividual}>
                <CardContent>
                    <Typography style={myStyle.titleCardBody} variant="body2" component="p">{forum.forum_title}</Typography>
                    <Typography style={myStyle.descCardBody} variant="body2" component="p">{forum.forum_description}</Typography>
                </CardContent>
            </Card>

            <ReplyCard forumId={props.match.params.forumId} />
        </div>
    );

}


