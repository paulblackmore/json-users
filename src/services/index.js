const get = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`).then(response => response.json());
}

const create = (body) => {
  const headers = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  }

  return fetch('https://jsonplaceholder.typicode.com/users', headers).then((response) => response.json());
}

const update = (body) => {
  const headers = {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  }

  return fetch(`https://jsonplaceholder.typicode.com/users`, headers).then(response => response.json());
}

const destroy = () => {
  const headers = {
    method: 'DELETE'
  }
  return fetch(`https://jsonplaceholder.typicode.com/users`, headers).then(response => response.json());
}
export const userService = {
  get,
  create,
  update,
  destroy
}
