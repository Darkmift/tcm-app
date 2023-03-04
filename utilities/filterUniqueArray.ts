export default function filterUniqueArray(array: any[], key: string) {
  return [...new Map(array.map((item) => [item[key], item])).values()]
}
