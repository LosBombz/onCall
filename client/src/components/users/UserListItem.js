import React, {PropTypes} from 'react';

const UserListItem = ({user}) => {
    return (
        <li className="user-list-item list-group-item">
            <span className="badge">1</span>
            <h3 className="user-name list-group-item-heading">{user.name}</h3>
            <span className="user-phone">555-555-5555</span>
            <span className="on-call on-call-primary">Primary</span>
            <a href="#" className="user-remove pull-right">Remove user</a>
        </li>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListItem;
