document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-message').textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
