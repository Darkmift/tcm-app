import {toJSON, fromJSON, stringify, parse} from 'flatted'

export function parseFlatted(string: string) {
  return parse(string)
}
export function stringifyWithFlatted(obj: any) {
  return stringify(obj)
}
