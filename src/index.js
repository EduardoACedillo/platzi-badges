import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge'
// const name = 'Richard';
// const sum = () => 3 + 3;
// const element = React.createElement('a',{ href:'https://platzi.com' },'Ir a platzi');
// const element = React.createElement('h1', {}, `hola soy ${name}`);
// const jsx = <h1>Hola soy, {sum()}</h1>
const element = (
    <div>
        <h1>Hola soy Eduardo</h1>
        <p>Soy un futuro ingeniero</p>
    </div>
);
const container = document.getElementById('app');

ReactDOM.render(<Badge/>,container);