import React from 'react';

import './Comentario.css';
import { Row, Col } from 'react-bootstrap';

const post = (props) => (
    <div class="row" className="Comentario">
        <Col>
            <article  onClick={props.clicked}>
                <div>{props.body}</div>
                <div className="Info">
                    <div className="Author">{props.author}</div>
                    <div className="Borrar">
                        <button onClick={props.borrar} className="Delete">Borrar comentario</button>
                    </div>
                </div>
            </article>
        </Col>
    </div>

);

export default post;