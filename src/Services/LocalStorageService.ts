const LS = typeof window !== 'undefined' && window.localStorage

const LocalStorageService = {
  isLocalStorageServiceSet() {
    if (!!LS === false)
      throw new Error('LS called but not defined in current execution scope')
  },
  get(key: string) {
    try {
      LocalStorageService.isLocalStorageServiceSet()
      return JSON.parse(localStorage.getItem(key) as string).data
    } catch (error) {
      console.log(
        '🚀 ~ file: LocalStorageService.ts:7 ~ get ~ error',
        (error as Error).message
      )
      return null
    }
  },
  set(key: string, payload: any) {
    LocalStorageService.isLocalStorageServiceSet()
    return localStorage.setItem(key, JSON.stringify({data: payload}))
  },
  delete(key: string) {
    LocalStorageService.isLocalStorageServiceSet()
    localStorage.removeItem(key)
  },
}

export default LocalStorageService
