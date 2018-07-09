import React, {Component} from 'react'
import "./LandingPage.scss"
import NetworkManager from "network/NetworkManager"
import {FormControl, FormGroup, Grid, Row, Col, Button} from 'react-bootstrap'

export default class LandingPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            socketDomain:null
        }
    }

    onStateChanged(state) {
        this.setState(state)
    }

    connectSocket(e){
        if(this.state.socketDomain){
            NetworkManager.connectSocket(this.state.socketDomain)
        }
    }

    handleInputChange(event){
        this.setState({socketDomain: event.target.value})
    }

    render(){
        return (
            <div id="landingPage">
                <Grid fluid={true}>
                    <Row className="row1">
                        <Col lg={12} sm={12} md={12} xs={12}>
                            <div className={"connectForm"}>
                                <div>
                                    <FormGroup>
                                        <FormControl placeholder="http://localhost:4000" onChange={this.handleInputChange.bind(this)}/>
                                    </FormGroup>
                                </div>
                                <div>
                                    <Button type="submit" bsStyle="info" onClick={(e) => this.connectSocket(e)}>Connect</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}