/* Custom Button component */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    static propTypes = {
        sortCountries: PropTypes.func,
        type: PropTypes.oneOf(['total', 'gold', 'silver', 'bronze']),
        buttonClass: PropTypes.string
    };

    static defaultProps = {
        sortCountries: null,
        type: 'gold',
        buttonClass: null
    };

    state = {
        active: false
    };

    handleButtonClick = (sortType) => {
        this.setState ({
            active: !this.state.active
        });
        this.props.sortCountries(sortType);
    };

    render() {
        return (
            <button className={this.state.active ? this.props.buttonClass + ' br-top-grey2' : this.props.buttonClass} onClick={() => this.handleButtonClick(this.props.type)}>
                {this.props.type === 'total' ? 'TOTAL' : ''}
            </button>
        );
    };
}

export default Button;