

function addEllipsis() {

  const divBlocks = document.querySelectorAll('.text-block');

  divBlocks.forEach((div) => {
    if (!div.dataset.originalText) {
      div.dataset.originalText = div.textContent;
    }

    if (div.textContent.endsWith('...')) {
      div.textContent = div.dataset.originalText;
    } else {
      div.textContent += '...';
    }
  });
}


function displaySortedNumbers() {
    const cells = document.querySelectorAll('#numberTable td');

    const numbers = Array.from(cells).map(cell => parseInt(cell.textContent, 10));

    numbers.sort((a, b) => a - b);

    document.getElementById('resultField').value = numbers.join(', ');
}

