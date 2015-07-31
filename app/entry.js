import React from 'react';
import Hello from './modules/component.jsx';
import './modules/style.sass';

main();

function main() {
    React.render(<Hello />, document.getElementById('app'));
}
