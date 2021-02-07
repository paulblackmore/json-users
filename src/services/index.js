

const get = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
}

const create = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
}

const update = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
}

export const userService = {
  get,
  create,
  update
}