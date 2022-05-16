import React, { Component } from 'react';
export default class SecondComponent extends Component {
    render() {
        return (
            <div style={{background:"white",color:"royalblue",padding:"10px"}}>
                This is my second component.Here we get the props named :
                Username:{this.props.username}<br/>
                Address:{this.props.address}<br/>
                Number:{this.props.number}<br/>
            </div>
        );
    }
}

// export default secondComponent;