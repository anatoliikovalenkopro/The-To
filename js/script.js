// VIDEO MODAL
function openVideo(id) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  modal.style.display = "flex";
  frame.src = "https://www.youtube.com/embed/" + id;
}

function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoFrame").src = "";
}

/* SHOW MORE */
let expanded = false;

function toggleVideos() {
  const vids = document.querySelectorAll(".hidden-video");
  const btn = document.getElementById("toggleBtn");

  expanded = !expanded;

  vids.forEach(v => {
    v.style.display = expanded ? "block" : "none";
  });

  btn.innerText = expanded ? "Show Less" : "Show More";
}

/* 🔥 ALBUM DATA */
const albums = {
  lucid2021: {
    title: "Lucid Dream 2021",
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3WWrGJhRd9S6KQfA6LenIn" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/lucid-dream/1586047230" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/lucid-dream" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/lucid-dream" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_n9lMXd7mk0foUhfnTvDvXgeMR77veAycw" },
      { name: "Deezer", url: "https://www.deezer.com/en/album/257522382" },
      { name: "Tidal", url: "https://tidal.com/album/196952427" }
    ]
  },

  ep2011: {
    title: "I EP (Remastered) 2011",
    links: [
      { name: "Apple Music", url: "https://music.apple.com/us/album/i-ep/1892302087" },
      { name: "Spotify", url: "https://open.spotify.com/album/2i4xbYxUX6IJfPGJgooVi8" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mSKLHOC_AHtNPNSXmPQbtpCT9D1PZs_R0" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/i2566" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/i-remastered" },
      { name: "Deezer", url: "https://www.deezer.com/en/album/957888821" },
      { name: "Tidal", url: "https://tidal.com/album/514524535" }
    ]
  }
};

/* OPEN ALBUM */
function openAlbum(id) {
  const modal = document.getElementById("albumModal");
  const title = document.getElementById("albumTitle");
  const linksBox = document.getElementById("albumLinks");

  const album = albums[id];

  modal.style.display = "flex";
  title.innerText = album.title;

  linksBox.innerHTML = "";

  album.links.forEach(link => {
    linksBox.innerHTML += `
      <a href="${link.url}" target="_blank">${link.name}</a>
    `;
  });
}

/* CLOSE */
function closeAlbum() {
  document.getElementById("albumModal").style.display = "none";
}

/* CLICK OUTSIDE CLOSE */
window.onclick = function(e) {
  const albumModal = document.getElementById("albumModal");
  const videoModal = document.getElementById("videoModal");

  if (e.target === albumModal) albumModal.style.display = "none";
  if (e.target === videoModal) videoModal.style.display = "none";
};