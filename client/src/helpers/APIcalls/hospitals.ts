import { FetchOptions } from '../../interface/FetchOptions'
import { HospitalsList } from '../../interface/Hospital'

export async function getAllHospitals(page?: number): Promise<HospitalsList> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'mes',
    },
  }

  return await fetch(
    `http://localhost:5000/hospitals?page=${page}`,
    fetchOptions,
  ).then(async (response) => {
    if (response.ok) {
      return await response.json()
    } else {
      const errorMessage = await response.text()
      return Promise.reject(new Error(errorMessage))
    }
  })
}
