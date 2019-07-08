import React, { Component } from 'react';
import './ReactComponent.css';

class ReactComponent extends Component {

    state = {
        style : [
          { backgroundColor: '#fff' }
        ],
        viewAlert: [
            { colorApplied: 'No'}
        ]
    
      } 

    //   style = {
    //       backgroundColor: '#000'
    //   }

    applyColorHandler = (newColor, selColor) => {
        //console.log("Clicked");

        this.setState({
            style : [
                { backgroundColor: newColor }
            ],
            viewAlert : [
                { colorApplied: selColor}
            ]
        })

        

    }


      


    render() {
        return (

            //console.log(this.style),
            //console.log(this.state.style[0]),

            <div style = {this.state.style[0]} className="body">

                <div className="color-list">
                    <h1> Color  Palette </h1>
                    <p>
                        <label> Red </label>
                        <button onClick={() => this.applyColorHandler('#e17055', 'Red')}> Apply </button>
                    </p>
                    <p>
                        <label> Blue </label>
                        <button onClick={() => this.applyColorHandler('#74b9ff', 'Blue')}> Apply </button>
                    </p>
                    <p>
                        <label> Yellow </label>
                        <button onClick={() => this.applyColorHandler('#fdcb6e', 'Yellow')}> Apply </button>
                    </p>
                    <p>
                        <label> Green </label>
                        <button onClick={() => this.applyColorHandler('#00b894', 'Green')}> Apply </button>
                    </p>
                </div>

                <div className="color-alert">

                    <h1> Mode </h1>

                    <div className="display-mode">

                        <p> {this.state.viewAlert[0].colorApplied} Mode is Applied. </p> 
                        
                        
                    </div>
                    
                </div>

                
            </div>
        );
    }
}

export default ReactComponent;

