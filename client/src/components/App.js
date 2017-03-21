import React, {PropTypes} from 'react';
import NavBar from './common/NavBar';
// import BottomNavigation from './common/BottomNavigation';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <NavBar />
            {this.props.children}
        </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
