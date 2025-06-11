let i = 1;
setInterval( function(){
  document.getElementById('slide' + i).checked = true;
  i++;
  if (i > 5){
    i = 1;
  }
}, 3000)


  const inicio = new Date("2021-11-21T00:00:00");

  function atualizarCronometro() {
    const agora = new Date();
    const diff = agora - inicio;

    const segundosTotais = Math.floor(diff / 1000);
    const dias = Math.floor(segundosTotais / (3600 * 24));
    const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    const texto = `${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
    document.getElementById("cronometro").textContent = texto;
  }

  atualizarCronometro();
  setInterval(atualizarCronometro, 1000);

 
  const audio = document.getElementById('audioPlayer');
  const playBtn = document.getElementById('playPauseBtn');
  const icon = document.getElementById('icon');
  const progress = document.getElementById('progress');

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      icon.textContent = 'pause';
    } else {
      audio.pause();
      icon.textContent = 'play_arrow';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage || 0;
  });

  progress.addEventListener('input', () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });



