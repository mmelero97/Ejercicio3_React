import React from 'react';
import axios from 'axios';

import './FullPost.css';
import { Row, Col } from 'react-bootstrap';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.idb !== this.props.id) {
                //axios.get('/posts.json?orderBy="id"&equalTo="' + this.props.id + '"')
                axios.get('https://marta-bbdd.firebaseio.com/libros.json?orderBy="$key"&equalTo="' + this.props.id + '"')
                    .then(response => {
                        console.log(response);
                        const posts = [];
                        for (let key in response.data) {
                            posts.push({
                                ...response.data[key],
                                idb: key
                            });
                        }
                        console.log(posts);
                        this.setState({ loadedPost: posts[0] });
                    });
            }
        }

    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div class="row" className="FullPost">
                    <h4>{this.state.loadedPost.title}</h4>
                    <p>{this.state.loadedPost.body}</p>
                    <img src={this.state.loadedPost.image} alt="Imagen"></img>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;