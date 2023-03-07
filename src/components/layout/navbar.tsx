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
import {useRouter} from 'next/router'
// consts
import {AVATAR_LINKS, INTERNSHIP_LINKS, PAGES_LINKS, YEAR_LINKS} from '@/const'
import NavbarDropDown from './navbarDropDown'
import {Divider} from '@mui/material'
import {useAppDispatch, useAppSelector} from '@/store'
import {useMemo} from 'react'
import {FunctionWithOptionalPayload, LinkConfig, NavBarClick} from '@/types'
import {setYear} from '@/store/year.slice'

const pages = PAGES_LINKS
const settings = AVATAR_LINKS

function ResponsiveAppBar() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const usernameRedux = useAppSelector((state) => state.auth.username)
  const roleRedux = useAppSelector((state) => state.auth.role)
  const isLoggedInRedux = useAppSelector((state) => state.auth.isLoggedIn)
  const yearsRedux = useAppSelector((state) => state.years.years)
  const selectedYearRedux = useAppSelector((state) => state.years.selectedYear)
  const internshipsRedux = useAppSelector(
    (state) => state.internships.internships
  )
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

  const yearsAsRoutes = useMemo(
    () =>
      yearsRedux.map((y) => ({
        name: y.year + '',
        pathTo: `/year/${y.year}`,
        id: y.id,
      })),
    [yearsRedux]
  )
  const internShipsAsRoutes = useMemo(
    () =>
      internshipsRedux.map((i) => ({
        name: i.name,
        pathTo: `/year/${selectedYearRedux}/internships/${i.id}`,
        id: i.id,
      })),
    [internshipsRedux, selectedYearRedux]
  )

  const handleYearNavigation: FunctionWithOptionalPayload<
    LinkConfig,
    NavBarClick
  > = (payload, evt) => {
    if (evt?.preventDefault) {
      evt.preventDefault()
    }
    if (payload?.name) {
      //set redux selected year
      dispatch(setYear(payload.name))
    }

    console.log(
      '🚀 ~ file: navbar.tsx:73 ~ handleYearNavigation ~ payload:',
      payload
    )
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
              <Divider />
              <NavbarDropDown
                links={yearsAsRoutes}
                sx={{
                  btn: {
                    color: 'black',
                    fontWeight: 400,
                    mx: 1,
                    my: 1,
                    display: 'block',
                  },
                  box: {flexGrow: 0},
                }}
                dropDownName="YEARS"
                onDropDownOptionClick={handleYearNavigation}
              />
              <Divider />
              <NavbarDropDown
                links={internShipsAsRoutes}
                sx={{
                  btn: {
                    color: 'black',
                    fontWeight: 400,
                    mx: 1,
                    mt: 1,
                    display: 'block',
                  },
                  box: {flexGrow: 0},
                }}
                dropDownName="internships"
              />
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
            <NavbarDropDown
              links={yearsAsRoutes}
              sx={{btn: {color: 'white', my: 2, display: 'block'}}}
              dropDownName="YEARS"
              onDropDownOptionClick={handleYearNavigation}
            />
            <NavbarDropDown
              links={internShipsAsRoutes}
              sx={{btn: {color: 'white', my: 2, display: 'block'}}}
              dropDownName="internships"
            />
          </Box>

          {/* the user Avatar menu - uses settings */}
          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                <Avatar alt={usernameRedux || 'Guest'} />
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
              {settings
                .filter((s) => {
                  if (s.name === 'Login') {
                    if (roleRedux === 'Admin') return false
                  }
                  if (roleRedux === 'Admin') return true
                  return s.role !== 'Admin'
                })
                .map((setting) => (
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
