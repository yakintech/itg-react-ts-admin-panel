import { Button as MaterialButtonComponent } from '@mui/material'
import React from 'react'



interface ButtonProps extends React.ComponentProps<typeof MaterialButtonComponent> {

}

function ITGButton(props: ButtonProps) {
    return (<>
        <MaterialButtonComponent {...props}>{props.children}</MaterialButtonComponent>
    </>
    )
}

export default ITGButton