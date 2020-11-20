import React from 'react'
import BuildIcon from '@material-ui/icons/Build';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <BuildIcon/>
                Product Builder
            </a>
            </nav>
        </div>
    )
}

export default Navbar
