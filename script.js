let texts = [
    "Go Global, Learn Limitless!",
    "Study Abroad, Shape Tomorrow!",
    "Dream Bigger, Study Further!",
    "Your Global Journey Begins Today!",
    "Higher Studies, Higher Horizons!",
    "Discover, Learn, Conquer – Abroad!",
    "Step Out, Stand Out – Study Abroad!",
    "Expand Minds, Explore Borders!",
    "Think Global, Learn Universal!",
    "From Here to Anywhere – Study Abroad!"
  ];
  
  let textElement = document.getElementById('animated-text');
  
  let num = 0;
  const n = texts.length;
  
  const change_text = () => {
    textElement.innerText = texts[num];
  
    // Animate text
    const letters = textElement.innerText.split('');
    textElement.innerHTML = letters.map((letter, index) => {
      const char = letter === ' ' ? '&nbsp;' : letter;
      return `<span style="animation-delay: ${index * 0.1}s; animation: fadeIn 0.1s;">${char}</span>`;
    }).join('');
  
    num = (num + 1) % n;
    setTimeout(change_text, 5000);
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    change_text();
  });
  
  const sidebar = document.getElementById('sidebar');
  const sidebarOpen = document.getElementById('sidebarOpen');
  const sidebarClose = document.getElementById('sidebarClose');
  
  sidebarOpen.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
  });
  
  sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
  });
  
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('bg-white', 'shadow-md', 'text-black');
      navbar.classList.remove('bg-transparent', 'text-white');
    } else {
      navbar.classList.add('bg-transparent', 'text-white');
      navbar.classList.remove('bg-white', 'shadow-md', 'text-black');
    }
  });
  