export interface Hospital {
  code: string
  address: {
    municipality: string
    state: string
  }
  institution: {
    code: string
    name: string
    status: string
    type: string
    unit: string
  }
  closing: {
    year: number
  }
}

export interface HospitalsList {
  data: Hospital[]
}
