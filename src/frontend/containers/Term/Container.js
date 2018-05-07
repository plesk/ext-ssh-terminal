import { createElement, Component } from '@plesk/ui-library';
import { EventTypeEnum } from './enums';
import Terminal from './Terminal';
import AddressResolver from './AddressResolver';

class Container extends Component {
    componentDidMount() {
        const addressResolver = new AddressResolver(this.props);
        this.terminal = new Terminal({
            el: this.container,
            addressResolver,
        });

        this.terminal.ttyEvents.on('data', this.receiveEvents.bind(this));
        this.terminal.open();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        this.terminal.destroy();
    }

    receiveEvents(data) {
        const hasEnded = data.events.some(item => item.event === EventTypeEnum.END);
        if (hasEnded) {
            close();
        }
    }

    render() {
        return (<div ref={el => (this.container = el)} />);
    }
}

export default Container;
