import React, { useState } from 'react';
import axios from 'axios'
import Delete from './Delete';

const Article = (props) => {
    const { article } = props

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditContent] = useState("")

    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            seconde: "numeric"
        })
        return newDate;
    }

    const handleEdit = () => {
        axios.put(' http://localhost:3003/articles/' + article.id, {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date
        })
        setIsEditing(false);
    }
    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>posté le {
                    dateParser(article.date)}</em>
            </div>
            {isEditing ? (<textarea
                onChange={(e) => setEditContent(e.target.value)}
                autoFocus defaultValue={article.content}></textarea>)
                : (<p>{editedContent ? editedContent : article.content}</p>)}

            <div className="btn-container">
                {isEditing ? (<button onClick={handleEdit}>valider</button>) :
                    (<button onClick={() => setIsEditing(true)}>edit</button>)}
                <Delete id={article.id} />
            </div>
        </div>
    );
};

export default Article;