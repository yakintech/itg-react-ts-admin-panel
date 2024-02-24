import React from 'react'
import PrivateLayout from './private';

function Views() {

    var isLogin = true;

    return (<>
        {
            isLogin ?  <PrivateLayout/>: <div>Login</div>
        }
    </>
    )
}

export default Views