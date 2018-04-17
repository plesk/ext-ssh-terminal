import { createElement, render, unmountComponentAtNode } from '@plesk/ui-library';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App locale="en-US" />, div);
    unmountComponentAtNode(div);
});
