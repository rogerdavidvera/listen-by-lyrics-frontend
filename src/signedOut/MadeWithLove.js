import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

const MadeWithLove = () => (
  <>
  <Container className="MadeWithLove">
  <Divider hidden />
  Made with <span className="emoji" role="img" aria-label="Heart">❤️</span> by <a className="name" href="https://github.com/rogervera" target="_blank" rel="noopener noreferrer">Roger Vera</a>
  </Container>
  </>
)

export default MadeWithLove
