import React, {Component} from 'react';
import './Menubar.css';
import {NavLink} from 'react-router-dom';

const newsKinds = [
    {
        kind: 'primary_income_account',
        display: '#본원소득수지'
    },
    {
        kind: 'good_balance',
        display: '#상품수지'
    },
    {
        kind: 'service_balance',
        display: '#서비스 수지'
    },
    {
        kind: 'exchange_won_dollar',
        display: '#원달러 환율'
    },
    {
        kind: 'exchange_renmibi_dollar',
        display: '#위안화 환율'
    }
];

class Menubar extends Component {
    render(){
        return (
            <div className="menubar">
                {
                    newsKinds.map((newsPaper, index) => (
                        <NavLink
                            // className={index === 0 ? 'menu active' : 'menu'}
                             className="menu"
                             activeClassName="active"
                             exact={newsPaper.kind ==='primary_income_account'}
                             to={newsPaper.kind === 'primary_income_account' ? '/' : `/${newsPaper.kind}` }
                             // to={'/'+newsPaper.kind}
                             key={newsPaper.kind}
                        >
                            {newsPaper.display}
                        </NavLink>
                    ))
                }
            </div>
        );
    }
}

export default Menubar;