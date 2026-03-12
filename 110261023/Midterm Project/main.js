document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');

  const cardWidth = 100;
  const cardHeight = 100;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  const placedCards = []; // 記錄已放置的卡片位置

  // 碰撞偵測函數
  function isOverlapping(x, y) {
    return placedCards.some((card) => {
      return (
        Math.abs(card.x - x) < cardWidth &&
        Math.abs(card.y - y) < cardHeight
      );
    });
  }

  cards.forEach((card) => {
    // --- 嘗試找到一個不重疊的位置 ---
    let attempts = 0;
    let maxAttempts = 1000;
    let left, top;

    do {
      const offsetX = Math.random() * 400 - 200;
      const offsetY = Math.random() * 400 - 200;
      left = centerX + offsetX - cardWidth / 2;
      top = centerY + offsetY - cardHeight / 2;
      attempts++;
    } while (isOverlapping(left, top) && attempts < maxAttempts);

    // 紀錄這個卡片位置
    placedCards.push({ x: left, y: top });

    // --- 定位與樣式 ---
    card.style.position = 'absolute';
    card.style.left = `${left}px`;
    card.style.top = `${top}px`;
    card.style.cursor = 'move';

    // --- 拖曳邏輯 ---
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;

    card.addEventListener('mousedown', (e) => {
      isDragging = true;
      dragOffsetX = e.clientX - card.offsetLeft;
      dragOffsetY = e.clientY - card.offsetTop;
      card.style.zIndex = 9999;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        card.style.left = (e.clientX - dragOffsetX) + 'px';
        card.style.top = (e.clientY - dragOffsetY) + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // --- 點兩下開啟 Modal 彈窗 ---
    card.addEventListener('dblclick', () => {
      const title = card.dataset.title || '卡片';
      const content = card.dataset.content || '這是預設內容';
      modalTitle.innerText = title;
      modalContent.innerText = content;
      modalOverlay.style.display = 'flex';
    });
  });

  // --- Modal 關閉邏輯 ---
  modalClose.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
});