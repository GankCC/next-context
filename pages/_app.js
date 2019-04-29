import App, { Container } from 'next/app';
import React from 'react';
import CountProvider from '../components/providers/CountProvider';
class iApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <CountProvider>
                    <Component {...pageProps} />
                </CountProvider>
            </Container>
        )
    }
}

export default iApp