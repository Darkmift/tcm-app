import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
import React from 'react'
import {v4 as uuid} from 'uuid'
import capitalizeFirstLetter from '../../../../utilities/CapitalizeWord'

type Props = {
  value: any
  name: string
  handleChange: (evt: any) => void
  options: any[]
  multiple: boolean
  optionLabelKey: string
  optionValueKey: string
}

function SelectMUI({
  value,
  handleChange,
  name,
  options,
  optionLabelKey,
  optionValueKey
}: Props) {
  const htmlId = uuid()
  return (
    <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
      <InputLabel id={htmlId}>{capitalizeFirstLetter(name)}</InputLabel>
      <Select
        labelId={htmlId}
        id={htmlId + name}
        value={value}
        onChange={handleChange}
        label={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, key) => (
          <MenuItem key={key} value={option[optionValueKey]}>
            {option[optionLabelKey]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectMUI
