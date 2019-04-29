import Head from 'next/head';
import CountCard from '../components/card/CountCard';
import "../static/css/styles.css";

const Index = () => (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Next.js with React Context</title>
            </Head>
            <section className="section">
                <div className="container">
                    <h1 className="title">Example of using Next.js with React Context</h1>
                    <div className="columns">
                        <div className="column">
                            <CountCard />
                        </div>
                        <div className="column">
                            <CountCard />
                        </div>
                        <div className="column">
                            <CountCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
)

export default Index;