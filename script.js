function animateNumber(id, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 50);
    const element = document.getElementById(id);

    const interval = setInterval(function () {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      element.innerText = Math.floor(current);
    }, 50);
  }

  window.onload = function () {
    animateNumber('counter1', 0, 1200, 3000); // Students: 1200
    animateNumber('counter2', 0, 85, 2500);  // Courses: 85
    animateNumber('counter3', 0, 250, 2000); // Professors: 250
    animateNumber('counter4', 0, 10, 1500);  // Campuses: 10
  };