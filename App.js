import React from 'react';
import {randomPosition, fadeIn} from './HighOrderComponent'

const image = (props)=> {
    return(
        <img style={props.style}
             src="./baoman.jpg" />
    )
};

const text = (props) => {
    return (<h1 style={props.style}>Hello</h1>);
};

const AppImage = fadeIn(randomPosition(image));
//const AppText = fadeIn(randomPosition(text));

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0
        };
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillMount() {
    }

    increment() {
        const count = this.state.count + 1;
        this.setState({
            count: count
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }


    render(){
        const images = [];
        const texts = [];
        for(let i = 0; i < this.state.count ; i++) {
            images.push(<AppImage key={i}/>);
            //texts.push(<AppText key={i}/>);
        }
        return(
            <div>
                {images}
                <button onClick={this.increment}><h1>{this.state.count}</h1></button>
                <button onClick={this.reset}><h1>重置</h1></button>
            </div>
        );
    }
}
