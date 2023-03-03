import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import {LinkConfig, StyleXsObject} from '@/types'
import Link from 'next/link'
import {Box} from '@mui/material'

type Props = {
  links: LinkConfig[]
  sx?: {
    btn?: StyleXsObject
    box?: StyleXsObject
    dropdown?: StyleXsObject
  }
  dropDownName?: string
}

export default function NavbarDropDown({
  links,
  sx,
  dropDownName = 'links',
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={sx?.box}>
      <Button
        sx={{color: 'primary', ...sx?.btn}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {dropDownName}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{...sx?.dropdown}}
      >
        {links.map((link) => (
          <MenuItem
            key={link.name}
            onClick={handleClose}
            href={link.pathTo}
            component={Link}
          >
            {link.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
