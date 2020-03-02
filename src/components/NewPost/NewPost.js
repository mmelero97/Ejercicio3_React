import React from 'react';
import axios from 'axios';

import './NewPost.css';
import { Button } from 'react-bootstrap';

class NewPost extends React.Component {
    state = {
        content: '',
        author: ' '
    }

    postDataHandler = () => {
        const data = {
            body: this.state.content,
            author: this.state.author
        };
        axios.post('https://marta-bbdd.firebaseio.com/comentarios.json', data)
            .then(response => {
                alert('Saved order');
            });
    }

    render() {
        return (
            <div className="NewPost">
                <div class="row" className="Caja2">
                    <div class="col">
                        <h5>Añade un nuevo comentario</h5>
                    </div>
                </div>
                <div class="row">
                    <label>Comentario</label>
                </div>
                <div class="row">
                    <textarea rows="3" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                </div>
                <div class="row">
                    <label>Autor</label>
                </div>
                <div class="row">
                    <input type="text" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} />
                </div>

                <div class="row" className="areaBoton">

                    <Button onClick={this.postDataHandler}>Añadir comentario</Button>

                </div>
            </div>
        );
    }
}

export default NewPost;