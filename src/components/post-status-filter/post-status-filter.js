import React, { Component } from 'react';

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            { name: 'all', label: 'All' },
            { name: 'like', label: 'Liked' }
        ]
    }
    render() {
        const buttons = this.buttons.map(({ name, label }) => {
           const active = this.props.filter === name;
           const activeClass = active ? 'btn-info':'btn-outline-secondary'
            return (
                <button
                    key={name}
                    className={`btn ${activeClass}`}
                    type="button"
                    onClick={()=>this.props.onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
} 