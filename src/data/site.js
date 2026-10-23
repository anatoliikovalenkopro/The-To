// All site content lives here. To add a video or album, add an entry below —
// no HTML needs to change.

import lucidDream from "../assets/lucid-dream-2021.webp";
import ep2011 from "../assets/ep-2011.webp";
import magicPunk from "../assets/magic-punk-2015.webp";
import subRosa from "../assets/sub-rosa-2014.webp";
import poltiotDzhmelia from "../assets/poltiot-dzhmelia-2012.webp";

export const marquee = ["THE TO!", "SOLD OUT", "ADD US OR CRY", "FOLLOW"];

export const contact = [
  { name: "Add Friend", url: "https://www.instagram.com/magic_punk/" },
  { name: "Message", url: "https://www.instagram.com/magic_punk/" },
  { name: "Follow", url: "https://www.instagram.com/magic_punk/" },
];

export const socials = [
  { name: "YouTube", url: "https://www.youtube.com/@TheToooo" },
  { name: "Spotify", url: "https://open.spotify.com/artist/3Qhl3gdrlZaXfzAObo41SK" },
  { name: "SoundCloud", url: "https://soundcloud.com/thetoooo" },
  { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/" },
];

export const footerLinks = [
  { name: "Instagram", url: "https://www.instagram.com/magic_punk/" },
  { name: "YouTube", url: "https://www.youtube.com/@TheToooo" },
];

export const interests = [
  { label: null, text: "Your mom" },
  { label: "Movies", text: "Jackass, Once Upon a Time in America" },
  { label: "Books", text: "Hitchhiker's Guide to the Galaxy, Apocalypse Culture" },
  { label: "Music", text: "MCR, Sum 41, The Beatles, Eminem" },
];

// YouTube video IDs, newest first. The home page shows the first 4.
export const videos = [
  "MKJjmx5E6RU",
  "aJfPDZdXoms",
  "ZnKf1uWPujE",
  "v7w_H5KXl54",
  "yUNq2c2mWD8",
  "O8uhBS9eKG8",
];

export const albums = [
  {
    id: "lucid2021",
    title: "Lucid Dream",
    year: 2021,
    cover: lucidDream,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/3WWrGJhRd9S6KQfA6LenIn" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/lucid-dream/1586047230" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/lucid-dream" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/lucid-dream" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_n9lMXd7mk0foUhfnTvDvXgeMR77veAycw" },
      { name: "Deezer", url: "https://www.deezer.com/en/album/257522382" },
      { name: "Tidal", url: "https://tidal.com/album/196952427" },
    ],
  },
  {
    id: "magicpunk2015",
    title: "Magic Punk",
    year: 2015,
    cover: magicPunk,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/7g9zj409r0Mv5IfK0Os8eI" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/magic-punk/6806087158" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/magic-punk-remastered" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/magic-punk-remastered-2015" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_nkQdWlYz2jZ7x7Mgs8apVI4y_Eskp2Tn8" },
      { name: "Deezer", url: "https://www.deezer.com/album/1064691781" },
      { name: "Tidal", url: "https://tidal.com/album/556201242" },
    ],
  },
  {
    id: "subrosa2014",
    title: "Sub Rosa (Remastered)",
    year: 2014,
    cover: subRosa,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/2qDwxNNG1oumGkEmnfIIKH" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/sub-rosa-ep/6787522311" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/sub-rosa-remastered" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/sub-rosa-remastered-2014" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_l0SxXPywnmSXJHAAr4ONhBOYNzFumzw44" },
      { name: "Deezer", url: "https://www.deezer.com/album/1021141571" },
      { name: "Tidal", url: "https://tidal.com/album/539988963" },
    ],
  },
  {
    id: "poltiot2012",
    title: "Польот Джмеля (Remastered)",
    year: 2012,
    cover: poltiotDzhmelia,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/5SZNAPcQK8toIBDOKYmuW7" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/6768008213" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/remastered" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/polot-dzhmelya-remastered" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mQdn5cuQwh2_UafV9oYecF2l51i-ky77c" },
      { name: "Deezer", url: "https://www.deezer.com/album/978428851" },
      { name: "Tidal", url: "https://tidal.com/album/522706088" },
    ],
  },
  {
    id: "ep2011",
    title: "I EP (Remastered)",
    year: 2011,
    cover: ep2011,
    links: [
      { name: "Spotify", url: "https://open.spotify.com/album/2i4xbYxUX6IJfPGJgooVi8" },
      { name: "Apple Music", url: "https://music.apple.com/us/album/i-ep/1892302087" },
      { name: "Bandcamp", url: "https://thetoooo.bandcamp.com/album/i-remastered" },
      { name: "SoundCloud", url: "https://soundcloud.com/thetoooo/sets/i2566" },
      { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mSKLHOC_AHtNPNSXmPQbtpCT9D1PZs_R0" },
      { name: "Deezer", url: "https://www.deezer.com/en/album/957888821" },
      { name: "Tidal", url: "https://tidal.com/album/514524535" },
    ],
  },
];
