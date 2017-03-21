import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';
import * as scheduleActions from '../actions/scheduleActions';
import UserList from '../components/users/UserList';

class DashboardPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    render() {
        const {users} = this.props;
        const {actions} = this.props;
        const {schedule} = this.props;

        return (
            <div>
                <h1>Call Team</h1>
                <h2>Current Schedule: {schedule.schedule}</h2>
                <UserList
                    users={users}
                    removeUser={actions.removeUser.bind(this)}
                    addUser={actions.addUser.bind(this)}
                />
            </div>
        );
    }
}

DashboardPage.propTypes = {
    actions: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    schedule: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users,
        schedule: state.schedule
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, userActions, scheduleActions), dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
