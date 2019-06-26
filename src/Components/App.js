import React from 'react';
import requestHandler from '../RequestHandler/requestHandler';
import SearchBar from './SearchBar';
import ResultCard from './ResultCard';

class App extends React.Component {

state = { term: '', selectedTerm: '', searchTerms: [], selectedData: []};

onSearchAutoResults = async term => {    
    if(term==='')
    return;
    const response = await requestHandler.get(`&suggest=true&search=${term}`);
    this.setState({searchTerms : response.data[1].map(searchTerm => ({label: searchTerm, value: searchTerm}))});
}

onSearchResults = async selectedTerm => {
    const response = await requestHandler.get(`&search=${selectedTerm}`);
    this.setState({selectedData : response.data[1].map((title,index) => ({ title, desc:  response.data[2][index], link:  response.data[3][index] }))});
}

onSearch = term => {
    //console.log("inside onSearch", term);
    this.setState({ term }, () => this.onSearchAutoResults(term));
}

onSelect = async selectedTerm => {
    this.setState({ selectedTerm }, () => this.onSearchResults(selectedTerm.label));
}

render() {
    return(
        <div >
            <br/>
            <h1 align="center"> WikiSearch</h1>
            <SearchBar 
                term={this.state.term} 
                onSearch={this.onSearch} 
                searchTerms={this.state.searchTerms} 
                onSelect={this.onSelect}
                selectedTerm={this.state.selectedTerm} 
            />
            <br/>
            <ResultCard selectedData={this.state.selectedData} />
            <br/>
        </div>
    );
;}

}
export default App;