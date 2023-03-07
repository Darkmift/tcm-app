import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {
  FunctionWithOptionalPayload,
  LinkConfig,
  NavBarClick,
  StyleXsObject,
} from '@/types'
import Link from 'next/link'
import {Box} from '@mui/material'

type Props = {
  links: LinkConfig[]
  sx?: {
    btn?: StyleXsObject
    box?: StyleXsObject
    dropdown?: StyleXsObject
    menuItem?: StyleXsObject
  }
  btnVariant?: string
  onDropDownOptionClick?: FunctionWithOptionalPayload<LinkConfig, NavBarClick>
  dropDownName?: string
}

export default function NavbarDropDown({
  links,
  sx,
  dropDownName = 'links',
  onDropDownOptionClick,
  btnVariant,
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (evt: NavBarClick) => {
    setAnchorEl(evt.currentTarget)
  }
  const handleClose = (evt: NavBarClick, payload: LinkConfig | null) => {
    if (onDropDownOptionClick && payload) {
      onDropDownOptionClick(payload, evt)
    }
    setAnchorEl(null)
  }

  if (!links.length) return <></>

  return (
    <Box sx={sx?.box}>
      <Button
        sx={{color: 'primary', ...sx?.btn}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant={btnVariant ? (btnVariant as 'text') : 'text'}
      >
        {dropDownName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={(evt: NavBarClick) => handleClose(evt, null)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{...sx?.dropdown}}
      >
        {links.map((link) => (
          <MenuItem
            key={link.name}
            onClick={(evt: any) => handleClose(evt, link)}
            href={link.pathTo}
            component={Link}
            sx={{...sx?.menuItem}}
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
