import React, { Component } from 'react';
import $ from 'jquery';
import './Styles/App.css';
import Header from './Components/Header.js';
import About from "./Components/About.js";
import Calendar2 from './Components/Calendar2';
import TodayFocus from "./TodayFocus";

//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga';

class App extends Component {


    constructor(props) {
            super(props);
            this.state = {
                foo: 'bar',
                resumeData: {}
            };
        }
        /*
        Fetches data from a json file and feeds to sub-components as props
        */
    getResumeData() {
        $.ajax({
            url: 'resumeData.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }

    componentDidMount() {
        this.getResumeData();
        //ReactGA.initialize('UA-191999663-1');
        //ReactGA.pageview("/homepage");
    }

    render() {
        return ( 
            < div >
                <Header data = { this.state.resumeData.main }/>  
                <h1 id="dividor_h1">What do i work on?</h1>
                <div id = "things_done_container">
                    <div id = "calendar_container">
                        <Calendar2 /> 
                    </div>
                    <div id = "todayfocus_container">
                    <TodayFocus></TodayFocus>
                    </div>
                </div>
                
                
                
            </div> 
        );
    }
}export default App;