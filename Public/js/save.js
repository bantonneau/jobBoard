document.addEventListener('DOMContentLoaded', () => {
    const saveJobButtons = document.querySelectorAll('.save-job');
    saveJobButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobId = this.getAttribute('data-job-id');
            
            fetch('/api/users/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId }),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // You can update the button to indicate that the job has been saved
                this.textContent = 'Job Saved';
                this.disabled = true;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    });
});
