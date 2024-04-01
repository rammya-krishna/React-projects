import React from 'react';

import ReactDOM from 'react-dom';

{/* <div id="firstparent">
    <div id="secondparent">
        <h1 id="first">first</h1>
        <h1 id="second">secocnd</h1>
    </div>
</div> */}

// REACT functional component
const headings =React.createElement
("div",
{id:"firstparent"},
    React.createElement
    ("div",{id:"secondparent"},
        [React.createElement
        ("h1",{id:"first"},"first"),React.createElement
        ("h1",{id:"second"},"second")])

);

const root_=ReactDOM.createRoot(document.getElementById("root"));
root_.render(headings)
    
