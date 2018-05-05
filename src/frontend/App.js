import { createElement, PropTypes } from '@plesk/ui-library';
import Term from './containers/Term';

const App = props => <Term {...props} />;

App.propTypes = {
    login: PropTypes.string.isRequired,
    sid: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    cluster: PropTypes.string.isRequired,
    serverId: PropTypes.string.isRequired,
};

export default App;
