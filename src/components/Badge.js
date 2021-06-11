import React from 'react';

import confLogo from '../images/badge-header.svg';
class Badge extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src= {confLogo} alt= "Logo de platzi"></img>
                </div>
                <div>
                    <img src= "https://www.gravatar.com/avatar?d=identicon" alt = "Avatar"></img>
                   <h1>Eduardo <br/> Cedillo</h1> 
                </div>
                <div>
                    <p>Futuro ingeniero</p>
                    <p>eduartcedillo@gmail.com</p>
                </div>
                <div>
                    #platziconf
                </div>
            </div>
        )
    }
}

export default Badge;