export const requestStarWarsPerson = (name) =>
  fetch(`https://swapi.dev/api/people/?search=${name}`).then((r) => {
    if (!r.ok) throw new Error('HTTP status ' + r.status)
    return r.json()
  })

export const requestStarWarsPeople = (url) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error('HTTP status ' + r.status)
    return r.json()
  })
