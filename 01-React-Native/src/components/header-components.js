import React, {Component} from 'react';
import HeaderContainer from '../container/header-container';
import Functions from '../../functions/functions'

class Header extends Component
{  
    
    login = () => { Functions.login() }

    render()
    {
        return(
            <HeaderContainer login={this.login}/>
        );
    }
}

export default Header;