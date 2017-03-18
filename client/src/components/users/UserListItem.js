import React, {PropTypes} from 'react';

const UserListItem = (props) => {
    const onCallStatus = (user) => {
        if(user.primary) {
            return <span className="on-call on-call-primary">Primary</span>;
        } else if (user.backup) {
            return <span className="on-call on-call-backup">Backup</span>;
        }

        return;
    };

    const onClick = (e) => {
        props.onClick(props.user);
    };

    return (
        <li className="user-list-item list-group-item">
            <span className="badge">{props.user.order}</span>
            <h3 className="user-name list-group-item-heading">{props.user.name}</h3>
            <span className="user-phone">{props.user.phone}</span>
            {onCallStatus(props.user)}
            <a href="#" className="user-remove pull-right" onClick={onClick} >Remove user</a>
        </li>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default UserListItem;
