import React from 'react';
import {Col} from 'react-bootstrap';

import './Post.css';

const post = (props) => (
    <div class="col">
        <article className="Post" onClick={props.clicked}>
            <h4>{props.title}</h4>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    </div>
);

export default post;