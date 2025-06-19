function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.display = 'none';
  });
  const target = document.getElementById(sectionId);
  if (target) {
    target.style.display = 'flex';
    target.classList.add('animated-section');
  }
}
