$(document).ready(function () {
  const $cards = $('.card');
  const $modalOverlay = $('#modal-overlay');
  const $modalTitle = $('#modal-title');
  const $modalContent = $('#modal-content');
  const $modalClose = $('#modal-close');

  const cardWidth = 100;
  const cardHeight = 100;
  const screenWidth = $(window).width();
  const screenHeight = $(window).height();
  const centerX = screenWidth / 2;
  const centerY = screenHeight / 2;

  const placedCards = [];

  function isOverlapping(x, y) {
    return placedCards.some((card) => {
      return (
        Math.abs(card.x - x) < cardWidth &&
        Math.abs(card.y - y) < cardHeight
      );
    });
  }

  $cards.each(function () {
    const $card = $(this);
    const $link = $card.closest('a');

    let attempts = 0;
    const maxAttempts = 1000;
    let left, top;

    do {
      const offsetX = Math.random() * 400 - 200;
      const offsetY = Math.random() * 400 - 200;
      left = centerX + offsetX - cardWidth / 2;
      top = centerY + offsetY - cardHeight / 2;
      attempts++;
    } while (isOverlapping(left, top) && attempts < maxAttempts);

    placedCards.push({ x: left, y: top });

    $card.css({
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      cursor: 'grab'
    });

    // 拖曳邏輯
    $card.on('mousedown', function (e) {
      const $thisCard = $(this);
      const offsetX = e.clientX - $thisCard.offset().left;
      const offsetY = e.clientY - $thisCard.offset().top;

      $thisCard.css('z-index', 9999).css('cursor', 'grabbing');

      $(document).on('mousemove.dragCard', function (e) {
        $thisCard.css({
          left: e.clientX - offsetX + 'px',
          top: e.clientY - offsetY + 'px'
        });
      });

      $(document).on('mouseup.dragCard', function () {
        $(document).off('.dragCard');
        $thisCard.css('cursor', 'grab');
      });

      e.preventDefault(); // 避免選取圖片或文字
    });

    // 阻止 <a> 的預設行為
    if ($link.length) {
      $link.on('click', function (e) {
        e.preventDefault();
      });
    }

    // 雙擊打開 Modal 並直接跳轉（同分頁）
    $card.on('dblclick', function () {
      const title = $card.data('title')  ;
      const content = $card.data('content') ;
      $modalTitle.text(title);
      $modalContent.text(content);
      $modalOverlay.css('display', 'flex');

      if ($link.length) {
        window.location.href = $link.attr('href'); // 同頁跳轉，不開新視窗
      }
    });
  });

  // Modal 關閉邏輯
  $modalClose.on('click', function () {
    $modalOverlay.css('display', 'none');
  });

  $modalOverlay.on('click', function (e) {
    if (e.target === this) {
      $modalOverlay.css('display', 'none');
    }
  });

  // 背景切換邏輯
  $('.bg-switch').on('click', function () {
    const bgUrl = $(this).data('bg');
    $('body').css({
      'background-image': `url('${bgUrl}')`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed'
    });
  });
});

