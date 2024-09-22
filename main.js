const musicName = document.getElementById('music-name'); //cria uma referencia por id
const nameArtist = document.getElementById('artist');
const cover = document.getElementById('cover');
const song = document.getElementById('audio');
const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');



const mar = {
    musicName : 'Mar',
    artist : 'Bea Duarte',
    file : 'Bea-Duarte-Mar'
};

const queen = {
    musicName : 'Queen',
    artist : 'Loren Gray',
    file : 'Loren-Gray-Queen' 
};

const worldSmallestViolin = {
    musicName : 'World Smallest Violin',
    artist : 'AJR',
    file : 'World-Smallest-Violin-AJR'
};

let isPlaying = false;
const playlist = [mar, queen, worldSmallestViolin];
let index = 0;
function playMusic(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
};
function pauseMusic(){
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    song.pause();
    isPlaying = false;
};
function playOrPause(){

    if(isPlaying === true){
        pauseMusic();
    }else{
        playMusic();
    }
};

function initializeMusic(){

 cover.src =`image/${playlist[index].file}.png`;
 song.src = `audio/${playlist[index].file}.mp3`;
 musicName.innerText = playlist[index].musicName;
 artist.innerText = playlist[index].artist;

 document.body.classList.remove('mar', 'queen', 'violin');
 if(playlist[index].file === 'Bea-Duarte-Mar'){
    document.body.classList.add('mar');
 }else if(playlist[index].file === 'Loren-Gray-Queen'){
    document.body.classList.add('queen');
 }else{
    document.body.classList.add('violin');
 }
};

function previousMusic(){
    
    if (index === 0) {
        index = playlist.length - 1;
    }else{
        index -= 1;
    }
    initializeMusic();
    playMusic();
};

function  nextMusic() {
    
    if (index === playlist.length - 1) {
        index = 0;
    }else{
        index += 1; 
    }
    initializeMusic();
    playMusic();
};

play.addEventListener('click',playOrPause);
previous.addEventListener('click',previousMusic);
next.addEventListener('click', nextMusic);
