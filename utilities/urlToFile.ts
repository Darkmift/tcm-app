export default function urlToFile(
  url: string,
  filename: string,
  mimeType: string
): Promise<File> {
  return fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, {type: mimeType}))
}
