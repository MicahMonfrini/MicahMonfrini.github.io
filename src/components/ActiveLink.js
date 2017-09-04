import { withRouter } from 'next/router';

// @TODO - Play with style variable and convert to styles from Header.css stylesheet

const ActiveLink = ({ children, router, href }) => {
  const style = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 100,
    margin: 15,
    paddingBottom: 5,
    position: 'relative',
    marginRight: 10,
    color: router.pathname === href ? 'red' : 'white'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink);
