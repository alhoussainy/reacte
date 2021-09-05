import React from 'react';
import axios from 'axios'
const Delete = ({ id }) => {

    const handleDelete = () => {

        axios.delete('http://localhost:3003/articles/' + id).then(() => {
            window.location.reload()
        })

    }

    return (

        <button onClick={() => {
            if (window.confirm("Voulez vous supprimer cet article?")) {
                handleDelete()
            }

        }}>delete</button>

    );
};

export default Delete;