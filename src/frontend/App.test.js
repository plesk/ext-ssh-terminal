import { createElement, render, unmountComponentAtNode } from '@plesk/ui-library';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(
        <App
            login="root"
            sid="test"
            token="secret"
            cluster="local"
            serverId="1"
        />,
        div
    );
    unmountComponentAtNode(div);
});
