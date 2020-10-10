import React, {Component} from 'react';
import './Menubar.css';
import {NavLink} from 'react-router-dom';

const newsKinds = [
    {
        kind: 'hankyong',
        display: '한국경제신문'
    },
    {
        kind: 'mk',
        display: '매일경제'
    }
];

// newsKinds.map(newsPaper => {
//     return (
//
//     );
// })

class Menubar extends Component {
    render(){
        return (
            <div className="menubar">
                {
                    newsKinds.map(newsPaper => (
                        <NavLink className="menu"
                             activeClassName="active"
                             exact={newsPaper.kind==='hankyong'}
                             // to={newsPaper.kind === 'hankyong' ? `/hankyong` : `/${newsPaper.kind}` }
                             to={'/'+newsPaper.kind}
                             key={newsPaper.kind}
                        >
                            {newsPaper.display}
                        </NavLink>
                    ))
                }
            </div>
        );
        // return (
        //     <div className="menubar">
        //         <div className="menu"> 한국경제신문 </div>
        //         <div className="menu"> 매일경제 </div>
        //     </div>
        // )
    }
}

export default Menubar;