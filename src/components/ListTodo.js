import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListTodo extends Component {

    componentDidMount() {
        // var todo = {
        //     id: 3,
        //     name: 'dingu',
        //     status: true
        // }
        // this.props.addTodo();
        // this.props.deleteTodo(1);
    }

    showTodos = (todos) => {
        var result = [];
        if (todos.length) {
            result = todos.map((value, index) =>
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td className="text-center">
                        {
                            value.status ? <span className="label label-success">
                                Kích Hoạt
                            </span>
                            : 
                            <span className="label label-info">
                                Ẩn
                            </span>
                        }
                    </td>
                    <td className="text-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-warning">
                                <span className="fa fa-pencil mr-5" />Sửa
                    </button>
                            &nbsp;
                    <button type="button" className="btn btn-danger">
                                <span className="fa fa-trash mr-5" />Xóa
                    </button>
                        </div>
                    </td>
                </tr>)
        }
        return result;
    }

    render() {

        console.log(this.props.todos);

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng Thái</th>
                        <th className="text-center">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td />
                        <td>
                            <input type="text" className="form-control" />
                        </td>
                        <td>
                            <select className="form-control">
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td />
                    </tr>
                    {this.showTodos(this.props.todos)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => {
            dispatch({
                type: 'ADD_TODO',
                todo: todo
            })
        },
        deleteTodo: (id) => {
            dispatch({
                type: 'DELETE_TODO',
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);