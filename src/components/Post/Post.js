import React from 'react';
import {Col} from 'react-bootstrap';

import './Post.css';

const post = (props) => (
    <Col>
        <article className="Post" onClick={props.clicked}>
            <h4>{props.title}</h4>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    </Col>
);

export default post;