import React from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import Comentario from '../../components/Comentario/Comentario';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import { Row, Col } from 'react-bootstrap';

class Blog extends React.Component {
    state = {
        posts: [],
        comentarios: [],
        selectedPostId: null,
        selectedComentarioId: null,
        errorLibros: false,
        errorComentarios: false
    }

    componentDidMount() {
        //axios.get('https://firestore.googleapis.com/v1/projects/my-demoblog/databases/(default)/documents/posts/')
        axios.get('https://marta-bbdd.firebaseio.com/libros.json')
            .then(response => {
                let posts = [];
                for (let key in response.data) {
                    posts.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                posts = posts.slice(1, 4);
                console.log(posts);
                this.setState({ posts: posts });
            }).catch(error => {
                this.setState({ errorLibros: true });
            });

        axios.get('https://marta-bbdd.firebaseio.com/comentarios.json')
            .then(response => {
                let comentarios = [];
                for (let key in response.data) {
                    comentarios.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                
                console.log(comentarios);
                this.setState({ comentarios: comentarios });
            }).catch(error => {
                this.setState({ errorComentarios: true });
            });
    }

    postSelectedHandlerPost = (id) => {
        this.setState({ selectedPostId: id });
    }

    postSelectedHandlerComentario = (id) => {
        this.setState({ selectedComentarioId: id });
    }

    deleteUpdatePostHandler = () => {
        axios.put('https://marta-bbdd.firebaseio.com/comentarios/' + this.state.selectedComentarioId + '.json', {
            ...this.state.comentarioBorrar,
        })
            .then(response => {
                console.log(response);
                console.log("Quiero borrarlo");
                console.log(this.state.selectedComentarioId);
            });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.errorLibros) {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.idb}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandlerPost(post.idb)} />;
            });
        }
        let comentarios = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if (!this.state.errorComentarios) {
            comentarios = this.state.comentarios.map(comentarios => {
                return <Comentario
                    key={comentarios.idb}
                    author={comentarios.author}
                    body={comentarios.body}
                    borrar={this.deleteUpdatePostHandler}
                    clicked={() => this.postSelectedHandlerComentario(comentarios.idb)} />;
            });
        }
        return (
            <div>
                <section className="Posts">
                    <div class="row" className="Caja1">
                        <div class="col">
                            <h2>Novedades literarias</h2>
                        </div>
                    </div>
                    <div class="row">
                        {posts}
                    </div>
                </section>

                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section className="Comentarios">
                    <div class="row" className="Caja2">
                        <div class="col">
                            <h5>Comentarios de otros usuarios</h5>
                        </div>
                    </div>
                    <div class="row">
                        {comentarios}
                    </div>
                </section>
                <section>
                    <NewPost />
                </section>
            </div >
        );
    }
}

export default Blog;