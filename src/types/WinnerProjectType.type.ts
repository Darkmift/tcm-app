export type WinnerProjectType = {
  collectionId: string
  collectionName: string
  created: string
  icon: string
  id: string
  name: string
  updated: string
  year: number
}

export interface InsertWinnerProjectType
  extends Pick<WinnerProjectType, 'icon' | 'name' | 'year'> {}
