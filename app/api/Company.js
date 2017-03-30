//@flow
import { routes } from '~/app/config'
import { apiGet, apiPost } from '~/app/api/__helpers'

export function getCompanies(page: number) {
  return apiGet(`${routes.companies.index}?page=${page}`)
}

export function createCompany(payload: Object) {
  return apiPost(routes.companies.index, payload)
}

export function generateCompanies() {
  return apiPost(routes.companies.generate)
}
