import React, {Component} from 'react'
import Header from "templates/Header";
import LandingPage from "pages/landing/LandingPage";
import ConnectStore from "stores/ConnectStore"
import ConnectedPage from "pages/connected/ConnectedPage";
import ErrorPage from "pages/error/ErrorPage";
import "./TemplateApp.scss"

export default class TemplateApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            greeting: ConnectStore.getState().greeting,
            error: ConnectStore.getState().error
        }
    }

    componentDidMount() {
        ConnectStore.listen(this.onStateChanged.bind(this))
    }

    componentWillUnmount() {
        ConnectStore.unlisten(this.onStateChanged.bind(this))
    }

    onStateChanged(state) {
        this.setState(state)
    }

    render(){
        return (
            <div id="templateApp">
                <Header className={"app-header"}/>
                <div className={"app-body avoidHeader"}>
                    {!this.state.error && <div>
                        {!this.state.greeting && <LandingPage/>}
                        {this.state.greeting && <ConnectedPage greeting={this.state.greeting}/>}
                    </div>}
                    {this.state.error && <ErrorPage error={this.state.error}/>}
                </div>
            </div>
        )
    }
}