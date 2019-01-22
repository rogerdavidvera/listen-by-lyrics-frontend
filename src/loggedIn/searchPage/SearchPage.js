import React, { Component } from 'react';
import ApiUrl from '../../assets/ApiUrl'
import { Container, Grid, Image, Dimmer, Loader, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'

class SearchPage extends Component {
  state = {query: '', isLoading: false}

  handleSearch = (e, query) => {
    e.preventDefault()
    if (query === '') {
      return null
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
      .then(songs => {
        this.setState({songs: songs, isLoading: false})
      })
    })
  }

  // showSearchResults = () => {
  //   return (
  //     <div>
  //       {this.props.player.current_song ?
  //           <Grid centered columns={2} divided>
  //             <Grid.Row>
  //               <Grid.Column width={6}>
  //                 <LoggedInSongList data={this.state.songs}/>
  //               </Grid.Column>
  //               <Grid.Column width={6}>
  //                 <LyricsContainer />
  //               </Grid.Column>
  //             </Grid.Row>
  //           </Grid>
  //         :
  //         <Grid centered columns={1}>
  //           <Grid.Row>
  //             <Grid.Column width={10}>
  //             <LoggedInSongList data={this.state.songs}/>
  //             </Grid.Column>
  //           </Grid.Row>
  //         </Grid>
  //       }
  //     </div>
  //   )
  // }

  render() {
    return (
      <>
        <Divider hidden section />
        <SearchForm
          handleSearch={this.handleSearch}
          handleInput={this.handleInput} />
        {this.state.isLoading ?
          <Dimmer active>
            <Loader size='massive'>Searching for "{this.state.query}"</Loader>
          </Dimmer>
          :
          <>
          </>
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
