import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    onStoreChange = () => {
      this.forceUpdate()
    }

    componentDidMount() {
      this.subcriptionId = this.context.store.subscribe(this.onStoreChange)
    }

    componentWillUnmount = () => {
      this.context.store.unsubscribe(this.subcriptionId)
    }

    render() {
      return <Component
        {...this.props}
        store={this.context.store}
        {...extraProps(this.context.store, this.props)}
      />
    }
  }
}

export default storeProvider;