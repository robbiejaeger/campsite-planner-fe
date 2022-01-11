export interface Location {
  lat: string,
  long: string
}

export interface Campsite {
  title: string,
  location: Location,
  datesAvailable: [string],
  elevation: string
}
