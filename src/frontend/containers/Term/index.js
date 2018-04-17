import { createElement, Component } from '@plesk/ui-library';
import { EventTypeEnum } from './enums';
import Terminal from './terminal';
import TtyAddressResolver from './ttyAddressResolver';

class Term extends Component {
    componentDidMount() {
        const options = this.props.store.getTtyParams();
        const addressResolver = new TtyAddressResolver(options);
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

        // update participant list
        updateSession({
            siteId: this.props.store.getClusterName(),
            json: data.session
        })
    }
}

export default Term;
