/* A Medal Widget meant to be embedded on websites during the Olympic games. */
/* The component which fetches countries information the first time it mounts. */
/* It then sorts the countries with a sortCountries helper function. */
/* Lastly it sends the sorted countries to the Table componenet. */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
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
        error: null
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
                    this.sortCountries(this.props.sort, countriesList);
                },
                (error) => {
                    this.setState({
                        error: 'Failed to fetch countries information.'
                    });
                }
            )
    };

    sortCountries = (sort, countriesList) => {
        this.setState({
            countries: SortCountries(sort, countriesList || this.state.countries)
        });
    };

    render() {
        return (
            <React.Fragment>
                <Table countries={this.state.countries} sortCountries={this.sortCountries} />
                {this.state.error ? <div className="text-red pad2 font1 display-bl">{this.state.error}</div> : null}
            </React.Fragment>
            
        );
    };
}

export default MedalWidget;