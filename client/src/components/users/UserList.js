import React, {PropTypes} from 'react';
import UserListItem from './UserListItem';

class UserList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            addUserFormVisible: false,
            newUserName: '',
            newUserNumber: ''
        };
    }

    getUserNodes() {
        return this.props.users.map((user, idx) => {
            return <UserListItem key={idx} user={user} onClick={this.removeUser.bind(this)} />;
        });
    }

    removeUser(user){
        this.props.removeUser(user);
    }

    handleFormChange(e) {
        let newVal = {};
        newVal[e.target.name] = e.target.value;

        this.setState(newVal);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.newUserName,
            phone: this.state.newUserNumber
        };

        this.addUser(newUser);
    }

    addUser(user) {
        this.props.addUser(user);
        this.setState({
            newUserName: '',
            newUserNumber: ''
        });
        this.hideAddUserForm();
    }

    showAddUserForm() {
        this.setState({
            addUserFormVisible: true
        });
    }

    hideAddUserForm() {
        this.setState({
            addUserFormVisible: false
        });
    }

    getUserForm(form) {
        return this.state.addUserFormVisible ? form : '';
    }

    render() {
        const addUserForm = (
            <form className="form" onSubmit={this.handleFormSubmit.bind(this)}>
                <div className="form-group">
                    <input required type="text" placeholder="name" name="newUserName" className="form-control" value={this.state.newUserName} onChange={this.handleFormChange.bind(this)}/>
                </div>
                <div className="form-group">
                    <input required type="phone" placeholder="phone" name="newUserNumber" className="form-control" value={this.state.newUserNumber} onChange={this.handleFormChange.bind(this)} />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Save</button>
                    <button className="btn btn-default" onClick={this.hideAddUserForm.bind(this)}>Cancel</button>
                </div>
            </form>
        );
        return (
            <div className="user-list-container panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">On call team</h2>
                    <a href="#" className="user-add-btn" onClick={this.showAddUserForm.bind(this)}>Add team member</a>
                </div>
                <div className="panel-body">
                    {this.getUserForm(addUserForm)}
                    <ol className="user-list list-group">
                        {this.getUserNodes()}
                    </ol>
                </div>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    removeUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
};

export default UserList;
