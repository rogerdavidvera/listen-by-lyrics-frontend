import React, { Component } from 'react'

// Should be a container
import {
  Grid,
  Form,
  Input
} from 'semantic-ui-react'


class SearchForm extends Component {
  state = {query: ''}

  handleInput = (query) => {
    this.setState({query})
  }

  render() {
    return (
      <>
      <Grid centered>
        <Grid.Column width={10}>
          <Form onSubmit={(e) => this.props.handleSearch(e, this.state.query)}>
            <Form.Field>
              <Input size='big' icon='search' placeholder='Search for songs' onChange={e => this.handleInput(e.target.value)} />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
      </>
    )
  }

}

export default SearchForm
