import React, {PropTypes} from 'react';

function onCallStatus(user) {
    if(user.primary) {
        return <span className="on-call on-call-primary">Primary</span>;
    } else if (user.backup) {
        return <span className="on-call on-call-backup">Backup</span>;
    }

    return;
}

const UserListItem = ({user}) => {

    return (
        <li className="user-list-item list-group-item">
            <span className="badge">{user.order}</span>
            <h3 className="user-name list-group-item-heading">{user.name}</h3>
            <span className="user-phone">555-555-5555</span>
            {onCallStatus(user)}
            <a href="#" className="user-remove pull-right">Remove user</a>
        </li>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListItem;
