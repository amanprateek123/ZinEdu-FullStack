import React from 'react'
import Nav1 from './Nav/Nav1'
import Nav2 from './Nav/Nav2'

export default function Navbar(props) {
    return (
        <React.Fragment>
            <Nav1 openModal={props.openModal}/>
            <Nav2/>
        </React.Fragment>
    )
}
