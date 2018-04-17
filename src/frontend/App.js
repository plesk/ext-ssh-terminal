import { createElement, LocaleProvider, PropTypes } from '@plesk/ui-library';
import Home from './containers/Home';

const App = ({ locale }) => (
    <LocaleProvider messages={require(`./locale/${locale}.json`)}>
        <Home />
    </LocaleProvider>
);

App.propTypes = {
    locale: PropTypes.string.isRequired,
};

export default App;
