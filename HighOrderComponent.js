import React from 'react';

export const randomPosition = (WrappedComponent)=> {
    return class RandomPosition extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
};
