

document.querySelector('#search').addEventListener('click', function() {
    console.log('Button clicked');  
    const location = document.querySelector('.dropdown button[aria-controls="dropdown-menu"]:nth-of-type(1) span:first-child').textContent;
    const experience = document.querySelectorAll('.dropdown .dropdown-trigger button')[1].querySelector('span').textContent;
    const minSalary = document.querySelector('#numericalInput').value;
    
    fetch('/api/users/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ location, experience, minSalary }),
    })
    .then(response => response.json())
    .then(data => {
      // Clear existing job listings
      const jobContainer = document.querySelector('.job-listings');
      jobContainer.innerHTML = '';

      // Add new job listings
      data.jobs.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.classList.add('job-item');
        jobElement.innerHTML = `
          <div class="job-info">
            <h3><a href="/jobs/${job.id}">${job.title}</a></h3>
            <p>${job.company} - 
              ${job.remote ? ' Remote ' : ''} 
              ${job.hybrid ? ' Hybrid ' : ''} 
              ${job.onSite ? ' On Site ' : ''}
            </p>
          </div>
          <div class="job-savebutton"></div>
        `;

        jobContainer.appendChild(jobElement);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });