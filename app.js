// A list of Japanese words for your flashcard app.
const initialCardsData = [
  { word: "足 (ashi)", meaning: "foot, leg", known: false, starred: false },
  { word: "頭 (atama)", meaning: "head", known: false, starred: false },
  { word: "顔 (kao)", meaning: "face", known: false, starred: false },
  { word: "口 (kuchi)", meaning: "mouth", known: false, starred: false },
  { word: "歯 (ha)", meaning: "tooth", known: false, starred: false },
  { word: "目 (me)", meaning: "eye", known: false, starred: false },
  { word: "耳 (mimi)", meaning: "ear", known: false, starred: false },
  { word: "手 (te)", meaning: "hand", known: false, starred: false },
  { word: "指 (yubi)", meaning: "finger, toe", known: false, starred: false },
  { word: "首 (kubi)", meaning: "neck", known: false, starred: false },
  { word: "病気 (byōki)", meaning: "illness", known: false, starred: false },
  { word: "家族 (kazoku)", meaning: "family", known: false, starred: false },
  { word: "両親 (ryōshin)", meaning: "parents", known: false, starred: false },
  { word: "子供 (kodomo)", meaning: "children, child", known: false, starred: false },
  { word: "父 (chichi)", meaning: "father", known: false, starred: false },
  { word: "母 (haha)", meaning: "mother", known: false, starred: false },
  { word: "兄 (ani)", meaning: "older brother", known: false, starred: false },
  { word: "姉 (ane)", meaning: "older sister", known: false, starred: false },
  { word: "弟 (otōto)", meaning: "younger brother", known: false, starred: false },
  { word: "妹 (imōto)", meaning: "younger sister", known: false, starred: false },
  { word: "野菜 (yasai)", meaning: "vegetable", known: false, starred: false },
  { word: "果物 (kudamono)", meaning: "fruit", known: false, starred: false },
  { word: "飲み物 (nomimono)", meaning: "drink/beverage", known: false, starred: false },
  { word: "水 (mizu)", meaning: "water", known: false, starred: false },
  { word: "月曜日 (getsuyōbi)", meaning: "Monday", known: false, starred: false },
  { word: "火曜日 (kayōbi)", meaning: "Tuesday", known: false, starred: false },
  { word: "水曜日 (suiyōbi)", meaning: "Wednesday", known: false, starred: false },
  { word: "木曜日 (mokuyōbi)", meaning: "Thursday", known: false, starred: false },
  { word: "金曜日 (kinyōbi)", meaning: "Friday", known: false, starred: false },
  { word: "日曜日 (nichiyōbi)", meaning: "Sunday", known: false, starred: false },
  { word: "新聞 (shinbun)", meaning: "newspaper", known: false, starred: false },
  { word: "音楽 (ongaku)", meaning: "music", known: false, starred: false },
  { word: "学校 (gakkō)", meaning: "school", known: false, starred: false },
  { word: "仕事 (shigoto)", meaning: "work", known: false, starred: false },
  { word: "時間 (jikan)", meaning: "time", known: false, starred: false },
  { word: "言葉 (kotoba)", meaning: "word, language", known: false, starred: false },
  { word: "春 (haru)", meaning: "spring", known: false, starred: false },
  { word: "夏 (natsu)", meaning: "summer", known: false, starred: false },
  { word: "秋 (aki)", meaning: "autumn", known: false, starred: false },
  { word: "冬 (fuyu)", meaning: "winter", known: false, starred: false },
  { word: "雨 (ame)", meaning: "rain", known: false, starred: false },
  { word: "雪 (yuki)", meaning: "snow", known: false, starred: false },
  { word: "風 (kaze)", meaning: "wind", known: false, starred: false },
  { word: "空 (sora)", meaning: "sky", known: false, starred: false },
  { word: "海 (umi)", meaning: "sea, ocean", known: false, starred: false },
  { word: "山 (yama)", meaning: "mountain", known: false, starred: false },
  { word: "川 (kawa)", meaning: "river", known: false, starred: false },
  { word: "町 (machi)", meaning: "town", known: false, starred: false },
  { word: "家 (ie)", meaning: "house", known: false, starred: false },
  { word: "駅 (eki)", meaning: "train station", known: false, starred: false },
  { word: "道 (michi)", meaning: "road, street", known: false, starred: false },
  { word: "電車 (densha)", meaning: "train", known: false, starred: false },
  { word: "車 (kuruma)", meaning: "car", known: false, starred: false },
  { word: "本 (hon)", meaning: "book", known: false, starred: false },
  { word: "紙 (kami)", meaning: "paper", known: false, starred: false },
  { word: "手紙 (tegami)", meaning: "letter", known: false, starred: false },
  { word: "辞書 (jisho)", meaning: "dictionary", known: false, starred: false },
  { word: "部屋 (heya)", meaning: "room", known: false, starred: false },
  { word: "机 (tsukue)", meaning: "desk", known: false, starred: false },
  { word: "椅子 (isu)", meaning: "chair", known: false, starred: false },
  { word: "テレビ (terebi)", meaning: "television", known: false, starred: false },
  { word: "ラジオ (rajio)", meaning: "radio", known: false, starred: false },
  { word: "映画 (eiga)", meaning: "movie", known: false, starred: false },
  { word: "写真 (shashin)", meaning: "photograph", known: false, starred: false }
];

// Load from localStorage or use the initial data
let cardsData;
try {
  const savedData = localStorage.getItem('flashcardApp_data');
  if (savedData) {
    cardsData = JSON.parse(savedData);
  } else {
    cardsData = initialCardsData;
  }
} catch (e) {
  console.error("Failed to load data from localStorage", e);
  cardsData = initialCardsData;
}


let currentIndex = 0;
let showKnownOnly = false;
let showStarredOnly = false;
let isRandomized = false;
let currentDeck = [];

// DOM elements
const cardArea = document.getElementById('cardArea');
const cardCounter = document.getElementById('cardCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const markKnownBtn = document.getElementById('markKnownBtn');
const starCardBtn = document.getElementById('starCardBtn');
const toggleKnownBtn = document.getElementById('toggleKnownBtn');
const toggleStarredBtn = document.getElementById('toggleStarredBtn');
const jumpInput = document.getElementById('jumpInput');
const jumpBtn = document.getElementById('jumpBtn');
const randomizeBtn = document.getElementById('randomizeBtn');
const backToStartBtn = document.getElementById('backToStartBtn');

// Helper function to save card data to local storage
function saveCardsData() {
  try {
    localStorage.setItem('flashcardApp_data', JSON.stringify(cardsData));
  } catch (e) {
    console.error("Failed to save data to localStorage", e);
  }
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to update the current deck based on filters
function updateDeck() {
  let newDeck;
  if (showKnownOnly) {
    newDeck = cardsData.filter(c => c.known);
  } else if (showStarredOnly) {
    newDeck = cardsData.filter(c => c.starred);
  } else {
    newDeck = [...cardsData];
  }
  
  if (isRandomized) {
    shuffle(newDeck);
  }
  
  currentDeck = newDeck;
  currentIndex = 0;
  renderCard();
}

// Function to refresh the view without changing the deck or index
function refreshCard() {
  renderCard();
  updateCounter();
}

// Function to render the current card
function renderCard() {
  cardArea.innerHTML = '';
  const cardData = currentDeck[currentIndex];

  if (!cardData) {
    cardCounter.textContent = `0 / 0`;
    setControlState(true);
    return;
  } else {
    setControlState(false);
  }

  const card = document.createElement('div');
  card.className = 'card';
  if (cardData.known) card.classList.add('known');
  if (cardData.starred) card.classList.add('starred');

  card.innerHTML = `
    <div class="card-content">
      <div class="card-face front">${cardData.word}</div>
      <div class="card-face back">${cardData.meaning}</div>
    </div>
    ${cardData.known ? '<div class="known-indicator">✅</div>' : ''}
    ${cardData.starred ? '<div class="star-indicator">⭐</div>' : ''}
  `;
  
  cardArea.appendChild(card);

  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

  const knownIndicator = card.querySelector('.known-indicator');
  if (knownIndicator) {
    knownIndicator.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleKnown(cardData);
    });
  }

  const starIndicator = card.querySelector('.star-indicator');
  if (starIndicator) {
    starIndicator.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStar(cardData);
    });
  }

  markKnownBtn.textContent = cardData.known ? '✅ Mark Unknown' : '✅ Mark Known';
  starCardBtn.textContent = cardData.starred ? '⭐ Unstar' : '⭐ Star';
  updateCounter();
}

function setControlState(disabled) {
  markKnownBtn.disabled = disabled;
  starCardBtn.disabled = disabled;
  prevBtn.disabled = disabled;
  nextBtn.disabled = disabled;
  jumpBtn.disabled = disabled;
  randomizeBtn.disabled = disabled;
  backToStartBtn.disabled = disabled;
}

function updateCounter() {
  const total = currentDeck.length;
  const displayIndex = total === 0 ? 0 : currentIndex + 1;
  cardCounter.textContent = `${displayIndex} / ${total}`;
  
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= total - 1;
}

function toggleKnown(cardData) {
  const originalCard = cardsData.find(c => c.word === cardData.word);
  if (originalCard) {
    originalCard.known = !originalCard.known;
    saveCardsData(); // Save state after change
    refreshCard();
  }
}

function toggleStar(cardData) {
  const originalCard = cardsData.find(c => c.word === cardData.word);
  if (originalCard) {
    originalCard.starred = !originalCard.starred;
    saveCardsData(); // Save state after change
    refreshCard();
  }
}

// Event listeners for controls
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < currentDeck.length - 1) {
    currentIndex++;
    renderCard();
  }
});

markKnownBtn.addEventListener('click', () => {
  const cardData = currentDeck[currentIndex];
  if (cardData) {
    toggleKnown(cardData);
  }
});

starCardBtn.addEventListener('click', () => {
  const cardData = currentDeck[currentIndex];
  if (cardData) {
    toggleStar(cardData);
  }
});

toggleKnownBtn.addEventListener('click', () => {
  // New logic: toggle to show only unknown cards
  showKnownOnly = !showKnownOnly;
  showStarredOnly = false;
  toggleKnownBtn.textContent = showKnownOnly ? '✅ Show All Cards' : '✅ Show Unknown Only';
  toggleStarredBtn.textContent = '🌟 Show Starred Only';
  isRandomized = false;
  randomizeBtn.textContent = '🔀 Shuffle';

  // Update the deck to show only unknown cards
  if (showKnownOnly) {
    currentDeck = cardsData.filter(c => !c.known);
  } else {
    currentDeck = cardsData;
  }
  currentIndex = 0;
  renderCard();
});

toggleStarredBtn.addEventListener('click', () => {
  showStarredOnly = !showStarredOnly;
  showKnownOnly = false;
  toggleStarredBtn.textContent = showStarredOnly ? '🌟 Show All Cards' : '🌟 Show Starred Only';
  toggleKnownBtn.textContent = '✅ Show Known Only';
  isRandomized = false;
  randomizeBtn.textContent = '🔀 Shuffle';
  updateDeck();
});

jumpBtn.addEventListener('click', () => {
  const jumpToIndex = parseInt(jumpInput.value, 10) - 1;
  if (!isNaN(jumpToIndex) && jumpToIndex >= 0 && jumpToIndex < currentDeck.length) {
    currentIndex = jumpToIndex;
    renderCard();
  } else {
    alert(`Please enter a number between 1 and ${currentDeck.length}.`);
  }
  jumpInput.value = '';
});

randomizeBtn.addEventListener('click', () => {
  isRandomized = !isRandomized;
  randomizeBtn.textContent = isRandomized ? '🔄 Unshuffle' : '🔀 Shuffle';
  updateDeck();
});

// New event listener for the Back to Start button
backToStartBtn.addEventListener('click', () => {
  currentIndex = 0;
  renderCard();
});

// Initial load
updateDeck();