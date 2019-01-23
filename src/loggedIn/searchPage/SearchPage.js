import React, { Component } from 'react';
import ApiUrl from '../../assets/ApiUrl'
import { Dimmer, Loader, Divider, Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import ResultsContainer from './ResultsContainer'

class SearchPage extends Component {
  state = {query: '', isLoading: false}

  handleSearch = (event, query) => {
    event.preventDefault()
    if (query === '') {
      return null;
    }
    this.setState({isLoading: true, query: query}, () => {
      fetch(`${ApiUrl}search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "search_term": query
        })
      })
      .then(response => response.json())
      .then(data => {
        this.setState({songs: data.songs, isLoading: false})
      })
    })
  }

  render() {
    return (
      <>
        <Divider hidden section />
        <Container text>
          <Header size='large' textAlign="center">
            Search by lyrics, artist, song, or album
          </Header>
        </Container>
        <Divider hidden />
        <SearchForm
          handleSearch={this.handleSearch}
          handleInput={this.handleInput} />
        {this.state.isLoading ?
          <Dimmer active>
            <Loader size='massive'>Searching for "{this.state.query}"</Loader>
          </Dimmer>
          :
          <ResultsContainer songs={this.state.songs} />
        }
      </>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(SearchPage)
