const albumTracks = document.querySelector('#album-tracks');
let audioObject = null;

export default function playlisTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const target = e.target.parentNode;

    if (target.classList.contains('active')) {
      audioObject.pause();
    } else {
      if (audioObject) {
        audioObject.pause();
      }

      audioObject = new Audio(target.dataset.trackPreview);
      audioObject.play();

      audioObject.addEventListener('pause', () => {
        target.classList.remove('active');
      });
    }
  });
}
