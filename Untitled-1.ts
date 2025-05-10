// script.js

// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function() {
  const yesBtn = document.getElementById('yes');
  const noBtn  = document.getElementById('no');

  // Vérifier que les éléments existent bien
  if (!yesBtn || !noBtn) {
    console.error('Boutons "Yes" ou "No" introuvables dans le DOM.');
    return;
  }

  // Animation bounce sur le bouton Yes
  yesBtn.addEventListener('click', function() {
    yesBtn.classList.add('animate-bounce');
    setTimeout(function() {
      yesBtn.classList.remove('animate-bounce');
    }, 600);
  });

  // Animation shake sur le bouton No
  noBtn.addEventListener('click', function() {
    noBtn.classList.add('animate-shake');
    setTimeout(function() {
      noBtn.classList.remove('animate-shake');
    }, 800);
  });
});

