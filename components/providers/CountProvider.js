import React from 'react';

const CountContext = React.createContext();

class CountProvider extends React.Component {
    state = {
        count: 0
    }
    render() {
        return(
            <CountContext.Provider value={{
                count: this.state.count,
                increaseCount: () => {
                    let state = this.state;
                    state.count = state.count + 1;
                    this.setState(state);
                },
                decreaseCount: () => {
                    let state = this.state;
                    state.count = state.count - 1;
                    this.setState(state);
                },
                resetCount: () => {
                    let state = this.state;
                    state.count = 0;
                    this.setState(state);
                }
            }}>
                { this.props.children }
            </CountContext.Provider>
        )
    }
}

export default CountProvider;
export { CountContext };