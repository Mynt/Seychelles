
// List of actual images in the images folder (manually listed for now)
const images = [
  "images/Sey00001.jpg","images/Sey00004.jpg","images/Sey00005.jpg","images/Sey00006.jpg","images/Sey00007.jpg","images/Sey00008.jpg","images/Sey00009.jpg","images/Sey00010.jpg","images/Sey00011.jpg","images/Sey00012.jpg","images/Sey00014.jpg","images/Sey00015.jpg","images/Sey00016.jpg","images/Sey00017.jpg","images/Sey00018.jpg","images/Sey00019.jpg","images/Sey00020.jpg","images/Sey00021.jpg","images/Sey00023.jpg","images/Sey00024.jpg","images/Sey00025.jpg","images/Sey00026.jpg","images/Sey00027.jpg","images/Sey00028.jpg","images/Sey00029.jpg","images/Sey00030.jpg","images/Sey00031.jpg","images/Sey00032.jpg","images/Sey00033.jpg","images/Sey00034.jpg","images/Sey00035.jpg","images/Sey00036.jpg","images/Sey00037.jpg","images/Sey00038.jpg","images/Sey00039.jpg","images/Sey00040.jpg","images/Sey00041.jpg","images/Sey00042.jpg","images/Sey00043.jpg","images/Sey00044.jpg","images/Sey00045.jpg","images/Sey00046.jpg","images/Sey00047.jpg","images/Sey00048.jpg","images/Sey00049.jpg","images/Sey00050.jpg","images/Sey00051.jpg","images/Sey00052.jpg","images/Sey00053.jpg","images/Sey00054.jpg","images/Sey00055.jpg","images/Sey00056.jpg","images/Sey00057.jpg","images/Sey00058.jpg","images/Sey00059.jpg","images/Sey00060.jpg","images/Sey00061.jpg","images/Sey00062.jpg","images/Sey00063.jpg","images/Sey00064.jpg","images/Sey00065.jpg","images/Sey00066.jpg","images/Sey00068.jpg","images/Sey00069.jpg","images/Sey00070.jpg","images/Sey00071.jpg","images/Sey00072.jpg","images/Sey00073.jpg","images/Sey00074.jpg","images/Sey00075.jpg","images/Sey00076.jpg","images/Sey00077.jpg","images/Sey00079.jpg","images/Sey00081.jpg","images/Sey00082.jpg","images/Sey00083.jpg","images/Sey00084.jpg","images/Sey00085.jpg","images/Sey00087.jpg","images/Sey00088.jpg","images/Sey00089.jpg","images/Sey00090.jpg","images/Sey00091.jpg","images/Sey00092.jpg","images/Sey00093.jpg","images/Sey00094.jpg","images/Sey00095.jpg","images/Sey00096.jpg","images/Sey00097.jpg","images/Sey00098.jpg","images/Sey00099.jpg","images/Sey00100.jpg","images/Sey00101.jpg","images/Sey00102.jpg","images/Sey00103.jpg","images/Sey00104.jpg","images/Sey00105.jpg","images/Sey00106.jpg","images/Sey00107.jpg","images/Sey00108.jpg","images/Sey00109.jpg","images/Sey00110.jpg","images/Sey00111.jpg","images/Sey00112.jpg","images/Sey00113.jpg","images/Sey00114.jpg","images/Sey00115.jpg","images/Sey00116.jpg","images/Sey00117.jpg","images/Sey00118.jpg","images/Sey00119.jpg","images/Sey00120.jpg","images/Sey00121.jpg","images/Sey00122.jpg","images/Sey00123.jpg","images/Sey00124.jpg","images/Sey00126.jpg","images/Sey00127.jpg","images/Sey00128.jpg","images/Sey00129.jpg","images/Sey00130.jpg","images/Sey00131.jpg","images/Sey00132.jpg","images/Sey00133.jpg","images/Sey00134.jpg","images/Sey00135.jpg","images/Sey00136.jpg","images/Sey00137.jpg","images/Sey00139.jpg","images/Sey00140.jpg","images/Sey00141.jpg","images/Sey00142.jpg","images/Sey00143.jpg","images/Sey00145.jpg","images/Sey00146.jpg","images/Sey00147.jpg","images/Sey00148.jpg","images/Sey00149.jpg","images/Sey00150.jpg","images/Sey00151.jpg","images/Sey00152.jpg","images/Sey00153.jpg","images/Sey00154.jpg","images/Sey00155.jpg","images/Sey00156.jpg","images/Sey00157.jpg","images/Sey00158.jpg","images/Sey00160.jpg","images/Sey00161.jpg","images/Sey00162.jpg","images/Sey00163.jpg","images/Sey00164.jpg","images/Sey00165.jpg","images/Sey00166.jpg","images/Sey00167.jpg","images/Sey00168.jpg","images/Sey00169.jpg","images/Sey00170.jpg","images/Sey00171.jpg","images/Sey00172.jpg","images/Sey00173.jpg","images/Sey00174.jpg","images/Sey00175.jpg","images/Sey00176.jpg","images/Sey00177.jpg","images/Sey00178.jpg","images/Sey00179.jpg","images/Sey00180.jpg","images/Sey00181.jpg","images/Sey00182.jpg","images/Sey00183.jpg","images/Sey00184.jpg","images/Sey00185.jpg","images/Sey00186.jpg","images/Sey00187.jpg","images/Sey00188.jpg","images/Sey00189.jpg"
];

const albumView = document.getElementById('albumView');
const rollingView = document.getElementById('rollingView');
const rollingImage = document.getElementById('rollingImage');
const rollingCaption = document.getElementById('rollingCaption');
const albumBtn = document.getElementById('albumBtn');
const rollingBtn = document.getElementById('rollingBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playPauseBtn = document.getElementById('playPauseBtn');

let rollingIndex = 0;
let rollingInterval = null;
let isPlaying = false;

function showAlbum() {
  albumView.style.display = '';
  rollingView.style.display = 'none';
}

function showRolling() {
  albumView.style.display = 'none';
  rollingView.style.display = '';
  showRollingImage(rollingIndex);
}

function showRollingImage(index) {
  rollingImage.src = images[index];
  rollingCaption.textContent = images[index].split('/').pop();
}

function nextImage() {
  rollingIndex = (rollingIndex + 1) % images.length;
  showRollingImage(rollingIndex);
}

function prevImage() {
  rollingIndex = (rollingIndex - 1 + images.length) % images.length;
  showRollingImage(rollingIndex);
}

function playRolling() {
  if (!isPlaying) {
    isPlaying = true;
    playPauseBtn.textContent = 'Pause';
    rollingInterval = setInterval(nextImage, 2000);
  } else {
    isPlaying = false;
    playPauseBtn.textContent = 'Play';
    clearInterval(rollingInterval);
  }
}

function renderAlbum() {
  albumView.innerHTML = '';
  images.forEach((img, idx) => {
    const div = document.createElement('div');
    div.className = 'album-item';
    const image = document.createElement('img');
    image.src = img;
    image.alt = img.split('/').pop();
    image.addEventListener('click', () => openModal(img));
    div.appendChild(image);
    albumView.appendChild(div);
  });
}

albumBtn.onclick = showAlbum;
rollingBtn.onclick = showRolling;
prevBtn.onclick = prevImage;
nextBtn.onclick = nextImage;
playPauseBtn.onclick = playRolling;

// Initial render
renderAlbum();
showAlbum();

// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');

function openModal(imgSrc) {
  modal.style.display = 'flex';
  modalImg.src = imgSrc;
}

modalClose.onclick = function() {
  modal.style.display = 'none';
  modalImg.src = '';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    modalImg.src = '';
  }
};

// Allow clicking rolling image for full size
if (rollingImage) {
  rollingImage.addEventListener('click', () => openModal(rollingImage.src));
}

// Allow clicking rolling image for full size
if (rollingImage) {
  rollingImage.addEventListener('click', () => openModal(rollingImage.src));
}