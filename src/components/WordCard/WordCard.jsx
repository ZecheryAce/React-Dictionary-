import React, { Component } from 'react';
import './WordCard.css';

export default class WordCard extends Component {
    state = {
        isFront: true
    }

    handleFlip = () => {
        this.setState({ isFront: !this.state.isFront });
    };

    handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.deleteWord(this.props.front);
    }

    render() {
        const cardContent = 
            this.state.isFront ? 
            <div className="card-front">English: {this.props.front}</div> :
            <div className="card-back">German: {this.props.back}</div>;

        return (
            <div className="word-card" onClick={this.handleFlip}>
                <span className="delete-card" onClick={this.handleDelete}>X</span>
                {cardContent}
            </div>
        );
    }
}
