import * as React from 'react'
// next
import Link from 'next/link'
import Image from 'next/image'
// assets
import logoImg from '../../assets/images/colman_logo.png'
// mui
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import {useRouter} from 'next/router'
import {LinkConfig} from '../../../types'

const pages: LinkConfig[] = [{name: 'Home', pathTo: '/'}]
const settings: LinkConfig[] = [{name: 'Login', pathTo: '/admin/login'}]

function ResponsiveAppBar() {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* the logo */}
          <Box
            component={Image}
            sx={{
              cursor: 'pointer',
              display: {width: 55, height: 55, xs: 'none', md: 'flex'},
              mr: 1,
            }}
            alt="Your logo."
            src={logoImg}
            onClick={() => {
              router.push('/')
            }}
          />

          {/* Hamburger menu */}
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Hamburger menu link*/}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  href={page.pathTo}
                  component={Link}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component={Image}
            sx={{
              cursor: 'pointer',
              display: {width: 35, height: 35, xs: 'flex', md: 'none'},
              mr: 1,
            }}
            alt="Your logo."
            src={logoImg}
            onClick={() => {
              router.push('/')
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          {/* the NORMAL menu links */}
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                LinkComponent={Link}
                href={page.pathTo}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{my: 2, color: 'white', display: 'block'}}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* the user Avatar menu - uses settings */}
          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  href={setting.pathTo}
                  component={Link}
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
