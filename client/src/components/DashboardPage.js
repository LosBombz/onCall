import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import UserList from './users/UserList';

class DashboardPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const {users} = this.props;
        return (
            <div>
                <h1>Call Team</h1>
                <UserList users={users} />
            </div>
        );
    }
}

DashboardPage.propTypes = {
    actions: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
