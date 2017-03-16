import React, {PropTypes} from 'react';
// import TopBar from './common/TopBar';
// import BottomNavigation from './common/BottomNavigation';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            {/* <TopBar /> */}
            {this.props.children}
            {/* <BottomNavigation /> */}
        </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
