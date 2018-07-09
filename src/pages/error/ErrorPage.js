import React, {Component} from 'react'
import "./ErrorPage.scss"
import {Grid, Row, Col, Button} from 'react-bootstrap'
import ConnectAction from "actions/ConnectAction"

export default class ErrorPage extends Component{
    constructor(props){
        super(props)
    }

    reset(){
        ConnectAction.restart()
    }

    render(){
        return (
            <div id="errorPage">
                <Grid fluid={true}>
                    <Row className="row1">
                        <Col lg={12} sm={12} md={12} xs={12}>
                            <div className={"errorContainer"}>
                                <div>
                                    {this.props.error && <div>{this.props.error}</div>}
                                </div>
                                <div>
                                    <Button type="submit" bsStyle="info" onClick={(e) => this.reset(e)}>Reset</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}