import { createElement, Component } from '@plesk/ui-library';
import { EventTypeEnum } from './enums';
import Terminal from './Terminal';
import AddressResolver from './AddressResolver';

class Container extends Component {
    componentDidMount() {
        const addressResolver = new AddressResolver(this.props);
        this.terminal = new Terminal({
            el: this.refs.container,
            addressResolver
        });

        this.terminal.ttyEvents.on('data', this.receiveEvents.bind(this));
        this.terminal.open();
    }

    componentWillUnmount() {
        this.terminal.destroy();
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return ( <div ref="container"/> );
    }

    receiveEvents(data) {
        let hasEnded = data.events.some(item => item.event === EventTypeEnum.END);
        if (hasEnded) {
            close();
        }
    }
}

export default Container;
