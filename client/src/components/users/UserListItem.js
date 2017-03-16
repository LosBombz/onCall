import React, {PropTypes} from 'react';

const UserListItem = ({user}) => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    
                </h3>
            </div>
            <div className="panel-body">
                {user.name}
            </div>
        </div>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListItem;
