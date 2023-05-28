const API = {
  COUNTRY_WISE_CASES_API: 'https://disease.sh/v3/covid-19/countries',
  DATE_WISE_CASES_API:
    'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
}

export const fetchLineChartData = async () => {
  let data = await localStorage.getItem('date_cases_data')
  if (data) return JSON.parse(data)
  data = await fetch(API.DATE_WISE_CASES_API)
  data = await data.json()
  await localStorage.setItem('date_cases_data', JSON.stringify(data))
  return data
}

export const fetchMapChartData = async () => {
  let data = await localStorage.getItem('country_cases_data')
  if (data) return JSON.parse(data)
  data = await fetch(API.COUNTRY_WISE_CASES_API)
  data = await data.json()
  await localStorage.setItem('country_cases_data', JSON.stringify(data))
  return data
}
