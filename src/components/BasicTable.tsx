import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

import React, {useEffect} from 'react'

type Props = {dataset: any[]; customHeaders?: string[]}

function getKeys(obj: any) {
  if (!obj) return []
  const k = []
  for (const key in obj) {
    k.push(key)
  }
  return k
}

function BasicTable({dataset, customHeaders}: Props) {
  const headers =
    dataset?.[0] && customHeaders ? customHeaders : getKeys(dataset[0])

  useEffect(() => {
    console.log('🚀 ~ file: BasicTable.tsx:17 ~ BasicTable ~ headers:', {
      dataset,
      headers,
    })
  }, [dataset])

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
          {dataset?.length &&
            dataset.map((row, index) => {
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
