import React, {Component} from 'react';

class NavLink extends Component {
    render() {



        const { cities, changeCity, active } = this.props;

        return (
            <div className='main-container'>
                <div className="tab-links">
                    {cities.map(item => (
                        <div className={active === item.id ? 'active' : ''} key={item.id} onClick={()=> changeCity(item.id)}>{item.title}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default NavLink;