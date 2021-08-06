const url = 'http://localhost:3000/api/todos';
const data = [
  { 
    id: 1,
    name: 'Выучить typesript',
    done: false 
  }
]


try {
  const response = await fetch(url, {
    method: 'POST', 
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  console.log('Успех:', JSON.stringify(json));
} catch (error) {
  console.error('Ошибка:', error);
}