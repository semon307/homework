import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";


function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                <div>
                    <Header/>
                </div>
                <div>

                    <Routes/>
                </div>

            </HashRouter>
        </div>
    )
}

export default HW5
