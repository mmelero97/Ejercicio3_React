import React from 'react';

import './Comentario.css';
import { Row, Col } from 'react-bootstrap';

const post = (props) => (
    <div class="row py-3" className="Comentario">
        <div class="col">
            <article  onClick={props.clicked}>
                <div>{props.body}</div>
                <div className="Info">
                    <div className="Author">{props.author}</div>
                    <div className="Borrar">
                        <button onClick={props.borrar} className="Delete">Borrar comentario</button>
                    </div>
                </div>
            </article>
        </div>
    </div>

);

export default post;