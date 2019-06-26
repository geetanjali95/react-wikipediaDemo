import React from 'react';
import Select from 'react-select';

class SearchBar extends React.Component {

  //  {searchTerms,onSearch,onSelect,selectedTerm} = this.props;

    render() {
        return(
            <div style={{margin : '30px 500px 0 500px'}}>
                <Select 
                    options={this.props.searchTerms}  
                    onInputChange={this.props.onSearch}
                    onChange={this.props.onSelect}
                    value={this.props.selectedTerm}
                    placeholder="Search here..."
                />
            </div>
        );
    };

}
 
export default SearchBar;