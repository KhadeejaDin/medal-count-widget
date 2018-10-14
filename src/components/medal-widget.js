import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SortCountries } from '../helpers/SortCountries.js';

class MedalWidget extends Component {
    static propTypes = {
        element_id: PropTypes.string,
        sort: PropTypes.oneOf(['total', 'gold', 'silver', 'bronze'])
    };

    static defaultProps = {
        element_id: null,
        sort: 'gold'
    };

    state = {
        countries: [],
        error: 'Cannot fetch countries data'
    };

    componentDidMount() {
        console.log('Medal Widget component has mounted');
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json")
            .then(res => res.json())
            .then(
                (result) => {
                    let countriesList = result.map(c => { 
                            c = { ...c, total: c.gold + c.silver + c.bronze };
                            return c;
                    });
                    this.sortCountries(countriesList);
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    };

    sortCountries = (countriesList, sort) => {
        this.setState({
            countries: SortCountries(countriesList, sort || this.props.sort)
        });
    };

    render() {
        console.log(this.state.countries);
        return (
            <ul>
                {this.state.countries.map(item => (
                    <li key={item.code}>
                        {item.code} {item.total}
                    </li>
                ))}
            </ul>
        );
    };
}

export default MedalWidget;

// <Table countries={this.state.countries} />

//countries will always have 13 countries but table will display only 10