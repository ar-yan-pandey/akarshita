document.addEventListener("DOMContentLoaded", function() {
    // Get all section elements
    var sections = document.querySelectorAll('section');
  
    // Set up Intersection Observer
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Get the corresponding link and add the 'active' class
          var targetId = entry.target.id;
          var link = document.querySelector('a[href="#' + targetId + '"]');
          
          // Remove 'active' class from all links
          document.querySelectorAll('.navitembox').forEach(function(item) {
            item.classList.remove('active');
          });
  
          // Add 'active' class to the current link
          link.classList.add('active');
        }
      });
    }, { threshold: 0.5 });
  
    // Observe each section
    sections.forEach(function(section) {
      observer.observe(section);
    });
  });
  