import { createElement, LocaleProvider, PropTypes } from '@plesk/ui-library';
import Term from './containers/Term';

const App = ({ locale }) => (
    <LocaleProvider messages={require(`./locale/${locale}.json`)}>
        <Term />
    </LocaleProvider>
);

App.propTypes = {
    locale: PropTypes.string.isRequired,
};

export default App;
