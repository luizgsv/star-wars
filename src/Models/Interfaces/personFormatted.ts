export interface PersonFormatted {
  name: string
  infos: Info[]
  films: Film[]
}

export interface Info {
  label: string
  value: string
}

export interface Film {
  release_date: string
  title: string
}