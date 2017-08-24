import React from 'react';
import ReactDOM from 'react-dom';

export const randomPosition = (WrappedComponent)=> {
    return class RandomPosition extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                style: {
                    top: `${Math.floor(Math.random() * 100)}vh`,
                    left: `${Math.floor(Math.random() * 100)}vw`,
                    position: 'fixed'
                }
            }
        }

        render() {
            return <WrappedComponent {...this.props} style={this.state.style}/>
        }
    }
};

export const fadeIn = (WrappedComponent) => {
    return class FadeIn extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            $(ReactDOM.findDOMNode(this)).hide().fadeIn('slow');
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
};
