import React from 'react';

export default class Article extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-10">
                <div className="col-md-7 text-left">
                    <form className="create form-horizontal" onSubmit={this.handleCreate.bind(this)}>

                        <input type="checkbox" ref="editCheckbox" onChange={this.handleCreate.bind(this)}
                               defaultChecked={this.props.isCompleted}/> Completed
                        <input type="text" className="form-control input-sm" ref="editInput"
                               defaultValue={this.props.task}/>
                    </form>
                    &nbsp;
                </div>
                <div className="col-md-3 text-right">
                    <button className="btn btn-primary btn-xs" onClick={this.props.delete}>Delete</button>
                </div>
                &nbsp;
            </div>
        );
    }

    handleCreate(event) {
        event.preventDefault();
       // window.location.reload();
        const id = this.props.id;
        const task = this.refs.editInput.value;
        const isCompleted = this.refs.editCheckbox.checked;
        this.props.editArticle(id, isCompleted, task);
    }
}
