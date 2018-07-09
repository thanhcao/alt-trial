import React, {Component} from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import "./ConnectedPage.scss"
import NetworkManager from "network/NetworkManager"

export default class ConnectedPage extends Component{
    constructor(props){
        super(props)
    }

    disconnectSocket(){
        NetworkManager.disconnectSocket()
    }

    render(){
        return (
            <div id="connectedPage">
                <Grid fluid={true}>
                    <Row className="row1">
                        <Col lg={12} sm={12} md={12} xs={12}>
                            <div className={"connectedContainer"}>
                                <div>
                                    {this.props.greeting}
                                </div>
                                <div>
                                    <Button type="submit" bsStyle="info" onClick={(e) => this.disconnectSocket(e)}>Disconnect</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}