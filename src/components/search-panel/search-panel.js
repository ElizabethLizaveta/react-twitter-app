import React, {Component} from 'react';
import { Input } from 'reactstrap';
import './search-panel.css';
 
export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <Input 
            className="search-input"
            type="text"
            placeholder="Search by post"
            onChange={this.onUpdateSearch}
            />
        )
    }
} 