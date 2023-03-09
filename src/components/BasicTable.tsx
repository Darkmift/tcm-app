import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import React from 'react'

type Props = {dataset: any[]}

function BasicTable({dataset}: Props) {
  const headers = Object.keys(dataset[0])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="students table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row, index) => {
            return (
              <TableRow key={index}>
                {Object.values(row).map((value, jIndex) => {
                  return (
                    <TableCell key={jIndex + '-' + index}>
                      {typeof value === 'string'
                        ? value
                        : !!value
                        ? 'True'
                        : 'False'}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
