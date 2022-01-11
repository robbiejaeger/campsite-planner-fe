export function getCampsites() {
  return fetch('http://localhost:3001/api/v1/campsites')
    .then(response => response.json())
}
