import React, {PropTypes} from 'react';
import UserListItem from './UserListItem';

const UserList = ({users}) => {
    let getUserNodes = () => {
        return users.map((user, idx) => { return <UserListItem key={idx} user={user} />; });
    };
    return (

        <div className="user-list-container panel panel-default">
            <div>
                {getUserNodes()}
            </div>
            <div className="panel-heading">
                <h2 className="panel-title">On call team</h2>
                <a href="#" className="user-add-btn">Add team member</a>
            </div>
            <div className="panel-body">
                <ul className="user-list list-group">
                    <li className="user-list-item list-group-item">
                        <span className="badge">1</span>
                        <h3 className="user-name list-group-item-heading">Carlos Escobar</h3>
                        <span className="user-phone">555-555-5555</span>
                        <span className="on-call on-call-primary">Primary</span>
                        <a href="#" className="user-remove pull-right">Remove user</a>
                    </li>
                </ul>
            </div>
        </div>

    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
