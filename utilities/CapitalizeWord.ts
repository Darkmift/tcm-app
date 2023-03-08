export default function capitalizeFirstLetter(str: string) {
  try {
    return str.charAt(0).toUpperCase() + str.slice(1)
  } catch (error) {
    console.log(
      '🚀 ~ file: CapitalizeWord.ts:6 ~ capitalizeFirstLetter ~ error:',
      error
    )
    return str
  }
}
