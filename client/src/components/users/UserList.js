import React, {PropTypes} from 'react';
import UserListItem from './UserListItem';

const UserList = ({users}) => {
    let getUserNodes = () => {
        return users.map((user, idx) => { return <UserListItem key={idx} user={user} />; });
    };
    return (

        <div className="user-list-container panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">On call team</h2>
                <a href="#" className="user-add-btn">Add team member</a>
            </div>
            <div className="panel-body">
                <ul className="user-list list-group">
                    {getUserNodes()}
                </ul>
            </div>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
