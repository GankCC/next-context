import React from 'react';
import { CountContext } from '../providers/CountProvider';

class CountCard extends React.Component {
    render() {
        return(
            <div>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Card Count
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content has-text-centered">
                            { this.context.count }
                            { this.context.name }
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" onClick={this.context.increaseCount} className="card-footer-item">+</a>
                        <a href="#" onClick={this.context.decreaseCount} className="card-footer-item">-</a>
                        <a href="#" onClick={this.context.resetCount} className="card-footer-item">Reset</a>
                    </footer>
                </div>
            </div>
        )
    }
}
CountCard.contextType = CountContext;

export default CountCard;