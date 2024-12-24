document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
        behavior: 'smooth',
      });
    }
  });
});

document.getElementById('learnMoreButton').addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop - document.querySelector('.navbar').offsetHeight,
      behavior: 'smooth',
    });
  }
});
