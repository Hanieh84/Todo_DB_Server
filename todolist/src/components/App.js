import React from 'react';
import TodoCreate from './todo-create';
import Article from './Article.js';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        this.getArticles();
    }

    //GET
    getArticles() {
        fetch('http://localhost:3001/articles')
            .then(res => res.json())
            .then(articles => this.setState({articles: articles}));
    }

    //DELETE
    deleteArticle(id) {
        fetch(`http://localhost:3001/articles/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => this.getArticles());
    }

    //POST or create
    postArticle(task) {
        let dataInput = {
            "isCompleted": false,
            "task": task
        };
        fetch(`http://localhost:3001/articles/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataInput),
        })
            .then(() => this.getArticles());
    }

    //PUT
    editArticle(id, isCompleted, task) {
        let dataInput = {
            "id": id,
            "isCompleted": isCompleted,
            "task": task
        };
        fetch(`http://localhost:3001/articles/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataInput),
        })
            .then(() => this.getArticles());
    };

    renderAddTask() {
        return (
            <div>
                <h1>Todolist</h1>
                <div className="td-list-con">
                    <TodoCreate
                        articles={this.state.articles}
                        postArticle={this.postArticle.bind(this)}
                    />
                </div>
            </div>
        )
    }

    renderGetArticleList() {
        return (
            this.state.articles.map(article =>
                <Article
                    key={article.id}
                    id={article.id}
                    task={article.task}
                    isCompleted={article.isCompleted}
                    editArticle={this.editArticle.bind(this)}
                    delete={() => this.deleteArticle(article.id)}
                />)
        )
    }

    render() {
        return (
            <div className="form-group">
                {this.renderAddTask()}
                {this.renderGetArticleList()}
            </div>
        )
    }
}


