import { connect } from 'react-redux';
import App from '../components/App.jsx';

const mapStateToProps = ({ listName, list }) => {
    const props = { listName, list };
    return props;
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
