import { render, createElement } from '@plesk/ui-library';
import App from './App';

module.exports = (container, props) => {
    render(
        <App {...props} />,
        container,
    );
};
