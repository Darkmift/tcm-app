import * as React from 'react'
import {ReactNode} from 'react'
import {Theme, useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, {SelectChangeEvent} from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import {FormHelperText, IconButton} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(option: string, options: readonly string[], theme: Theme) {
  return {
    fontWeight:
      options.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

type Props = {
  value: any
  multiple: boolean
  name: string
  handleChange: (evt: SelectChangeEvent | any) => void
  options: any[]
  optionLabelKey: string
  optionValueKey: string
  error?: boolean
  helperText?: string
}

function SelectMultipleMUI({
  value,
  handleChange,
  multiple,
  name,
  options,
  optionLabelKey,
  optionValueKey,
  error,
  helperText,
}: Props) {
  const theme = useTheme()

  const parseEventHandler = (evt: SelectChangeEvent | any) => {
    if (!evt.target.value) {
      evt.target.value = multiple ? [] : ''
    }
    evt.target.name = name
    handleChange(evt)
  }

  return (
    !!options && (
      <FormControl sx={{width: '100%'}} error={error}>
        <InputLabel id="demo-multiple-chip-label">{name}</InputLabel>
        <Select
          name={name}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple={multiple}
          variant="standard"
          value={value}
          onChange={parseEventHandler}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected: string[]): ReactNode => {
            if (multiple) {
              return selected.map((selectOption, key) => {
                const selectedOption = options.find(
                  (o) => o[optionValueKey] === selectOption
                )
                return <Chip key={key} label={selectedOption[optionLabelKey]} />
              })
            }

            const selectedOption = options.find(
              (o) => o[optionValueKey] === selected
            )

            return (
              <Chip label={selectedOption[optionLabelKey]} variant="outlined" />
            )
          }}
          endAdornment={
            <IconButton
              sx={{display: !!value ? '' : 'none'}}
              onClick={parseEventHandler}
            >
              <ClearIcon />
            </IconButton>
          }
          MenuProps={MenuProps}
        >
          {options.map((option, key) => (
            <MenuItem
              key={key}
              value={option[optionValueKey]}
              style={getStyles(name, options, theme)}
            >
              {option[optionLabelKey]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText sx={{color: 'red'}}>{helperText}</FormHelperText>
      </FormControl>
    )
  )
}

export default SelectMultipleMUI
