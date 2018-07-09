import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap'

export default class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className={"header"}>
                <Navbar fluid bsStyle="default" className="navbar-fixed-top">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a>Hello!</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
            </div>
        )
    }
}