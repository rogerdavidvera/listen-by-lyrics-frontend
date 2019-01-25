import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

const MadeWithLove = () => (
  <>
  <Divider hidden />
  <Divider hidden />
  <Divider hidden />
  <Container className="MadeWithLove">
  Made with <span className="emoji" role="img" aria-label="Heart">❤️</span> by <a className="name" href="https://github.com/rogerdavidvera" target="_blank" rel="noopener noreferrer">Roger Vera</a>
  </Container>
  </>
)

export default MadeWithLove
