import React from 'react';
import { Grid } from 'semantic-ui-react'
import Songs from './Songs'


const ResultsContainer = ({ songs }) => (
  <>
    <Songs songs={songs}/>
  </>
)

export default ResultsContainer
