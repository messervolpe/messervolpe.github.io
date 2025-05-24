fetch('test.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('jsonList');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} (${item.age})`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('jsonList').textContent = 'Error loading data.';
  });