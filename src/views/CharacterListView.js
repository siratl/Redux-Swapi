import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { CharacterList } from '../components';
// import actions
import { getChars } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(this.props);
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.isLoading) {
      <Loader type="Bars" color="#00BFFF" height="90" width="60" />;
    }
    return (
      <div className="CharactersList_wrapper">
        <h1>StarWars Characters</h1>
      
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading,
  error: state.charsReducer.error,
});

export default connect(
  mapStateToProps,
  { getChars },
)(CharacterListView);
