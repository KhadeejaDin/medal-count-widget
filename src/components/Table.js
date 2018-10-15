/* Custom Table component to display countries medal count. */
/* Table components recieves a number of countries in sorted order. */
/* It displays the top 10 countries from the list in a table format. */

import React from 'react';
import Button from './Button';

const Table = (props) => (
    <div className="display-bl br-top-ltgray1 br-rt-ltgray1 pad1-right pad1-botm pad2-left">
        <h1 className="display-bl text-grey mar8-botm">MEDAL COUNT</h1>
        <div className="display-bl br-bt-grey2 vert-pad8 center-align">
            <div className="col-48 display-i-bl"></div>
            <div className="col-13 display-i-bl">
                <Button type="gold" sortCountries={props.sortCountries} buttonClass="circle bg-gold"/>
            </div>
            <div className="col-13 display-i-bl">
                <Button type="silver" sortCountries={props.sortCountries} buttonClass="circle bg-grey"/>
            </div>
            <div className="col-13 display-i-bl">
                <Button type="bronze" sortCountries={props.sortCountries} buttonClass="circle bg-brown"/>
            </div>
            <div className="col-13 display-i-bl ">
                <Button type="total" sortCountries={props.sortCountries} buttonClass="text-black font1"/>
            </div>   
        </div>
        <ul className="font1 text-grey display-bl pad0 mar0">
        {props.countries.slice(0,10).map(
            (country, index) =>
            <li className="br-bt-ltgray1 display-bl center-align vert-pad8" key={country.code} id={country.code}>
                <div className="col-5 display-i-bl">{index+1}</div>
                <div className="col-13 display-i-bl">
                    <div className="flag display-i-bl"></div>
                </div>
                <div className="col-30 display-i-bl left-align">{country.code}</div>
                <div className="col-13 display-i-bl">{country.gold}</div>
                <div className="col-13 display-i-bl">{country.silver}</div>
                <div className="col-13 display-i-bl">{country.bronze}</div>
                <div className="col-13 display-i-bl text-black">{country.total}</div>
            </li>
        )}
        </ul>
    </div>  
)

export default Table;