import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import {Navbar,Button,Line,Menu,MenuContainer,MenuItem,MenuPanel,Wrapper} from './StyledHeader'
import tw from 'tailwind.macro'
// Components
import Logo from './Logo'
import PageLink from './PageLink'

const MenuButton = ({ status, onClick }) => (
    <Button className={`menu-button ${status}`} onClick={onClick}>
        <Line className='half start' />
        <Line />
        <Line className='half end' />
    </Button>
)

MenuButton.propTypes = {
    status: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}


class Nav extends React.Component {

    state = {
        panel: false,
    }

    togglePanel = () => {
        if (this.state.panel)
            this.setState({ panel: false })
        else
            this.setState({ panel: true })
    }

    isPanelVisible = () => (this.state.panel ? 'active' : '')

    render() {
        const logo = this.props.logo
        const mobile = this.props.mobile
        return (
            <StaticQuery query={menuQuery}
                         render={data => (
                             <Wrapper className='nav-wrapper'>
                                 <Fade top delay={250}>
                                     <MenuContainer>
                                         {logo ? <Logo className='logo-container' link={data.site.siteMetadata.menuLinks[0].link} /> : null}
                                         { mobile ?
                                             <MenuButton status={this.isPanelVisible()} onClick={this.togglePanel} />
                                             :
                                             <Navbar>
                                                 <Menu className='menu'>
                                                     {data.site.siteMetadata.menuLinks.map((item) => {
                                                         if (item.external) {
                                                             return (
                                                                 <MenuItem className='menu-item external' key={item.name}>
                                                                     <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.name}</a>
                                                                 </MenuItem>
                                                             )
                                                         }
                                                         return (
                                                             <MenuItem className='menu-item' key={item.name}>
                                                                 <PageLink to={item.link}>{item.name}</PageLink>
                                                             </MenuItem>
                                                         )
                                                     })}
                                                 </Menu>
                                             </Navbar>
                                         }
                                     </MenuContainer>
                                 </Fade>
                                 { mobile ?
                                     <MenuPanel className={`${this.isPanelVisible()}`}>
                                         {data.site.siteMetadata.menuLinks.map((item) => {
                                             if (item.external) {
                                                 return (
                                                     <MenuItem className='menu-item external' key={item.name}>
                                                         <a href={item.link} target='_blank' rel='noopener noreferrer'>{item.name}</a>
                                                     </MenuItem>
                                                 )
                                             }
                                             return (
                                                 <MenuItem className='menu-item' key={item.name}>
                                                     <PageLink to={item.link}>{item.name}</PageLink>
                                                 </MenuItem>
                                             )
                                         })}
                                     </MenuPanel> : null }
                             </Wrapper>
                         )}
            />
        )
    }
}

Nav.defaultProps = {
    logo: true,
    mobile: false,
}
Nav.propTypes = {
    logo: PropTypes.bool,
    mobile: PropTypes.bool,
}

export default Nav

const menuQuery = graphql`
  query {
    site {
      siteMetadata {
        menuLinks {
          name
          link
          external
        }
      }
    }
  }
`