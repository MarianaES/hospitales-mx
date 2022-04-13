export interface Hospital {
  code: string
  'address.state': string
  'address.state.code': number
  'address.municipality': string
  'address.municipality.code': number
  'institution.code.long': string
  'institution.code': string
  'institution.type': string
  'institution.unit': string
  'institution.unit.code': string
  'institution.name': string
  'institution.status': string
  'closing.year': number
}
