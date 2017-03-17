import React, {PropTypes} from 'react';
import UserListItem from './UserListItem';

class UserList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    getUserNodes() {
        return this.props.users.map((user, idx) => { return <UserListItem key={idx} user={user} onClick={this.removeUser.bind(this)} />; });
    }

    removeUser(user){
        console.log('userId', user);
        console.log('removeUser', this.props.removeUser);
        this.props.removeUser(user);
    }

    render() {
        return (
            <div className="user-list-container panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">On call team</h2>
                    <a href="#" className="user-add-btn">Add team member</a>
                </div>
                <div className="panel-body">
                    <ul className="user-list list-group">
                        {this.getUserNodes()}
                    </ul>
                </div>
            </div>
        );
    }

}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    removeUser: PropTypes.func.isRequired
};

export default UserList;
