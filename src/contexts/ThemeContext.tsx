import React, {Component, createContext} from 'react';

interface ThemeContextInterface {
    isLightTheme: boolean
    toggleTheme: () => void
    light: Theme,
    dark: Theme
}

interface Theme {
    syntax: string,
    ui: string,
    bg: string
}

export const ThemeContext = createContext({} as ThemeContextInterface);


class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'},
    }

    public toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
    }

    render() {
        return (
            //<ThemeContext.Provider value={{...this.state}}>
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;