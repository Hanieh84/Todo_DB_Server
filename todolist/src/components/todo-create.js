import React from 'react';

export default class TodoCreate extends React.Component {

    render() {
        return (
            <form className="create form-horizontal" onSubmit={this.handleCreate.bind(this) }>
                <div className="form-group">
                    <div className="col-md-10">
                        <input className="form-control" type="text" ref="inputName" placeholder="Todo ..." />
                    </div>
                    <div className="col-md-2 text-right">
                        <button type="submit" className="btn btn-default">Add</button>
                    </div>
                </div>
            </form>
        )
    }

    handleCreate(event) {
        event.preventDefault();

        const input= this.refs.inputName;
        const task = input.value;

        if (task.valueOf('')) {
            this.props.postArticle(task);
        }
        input.value = '';
    }

}