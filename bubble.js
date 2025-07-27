function getBubbleColor() {
  return document.getElementById("bubbleColor").value;
}

function insertBubble(direction, color, noTail = false) {
  const editor = document.getElementById('editor');
  const selection = window.getSelection();

  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selectedText = range.toString().trim();

    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';

    const bubble = document.createElement('div');
    bubble.className = `bubble ${direction} ${color}${noTail ? ' no-tail' : ''}`;
    bubble.textContent = selectedText || '吹き出し';

    bubbleContainer.appendChild(bubble);

    range.deleteContents();
    range.insertNode(bubbleContainer);

    const p = document.createElement('p');
    p.innerHTML = '<br>';
    bubbleContainer.after(p);

    const newRange = document.createRange();
    newRange.setStart(p, 0);
    newRange.collapse(true);
    selection.removeAllRanges();
    selection.addRange(newRange);
  }

  editor.focus();
}
