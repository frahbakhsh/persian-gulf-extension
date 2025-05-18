const replacements = [
    { from: /arabic gulf/gi, to: 'Persian Gulf' },
    { from: /خلیج عربی/g, to: 'خلیج فارس' }
  ];
  
  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      let text = node.textContent;
      replacements.forEach(pair => {
        text = text.replace(pair.from, pair.to);
      });
      node.textContent = text;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
      }
    }
  }
  
  window.addEventListener("load", () => {
    replaceText(document.body);
  });
  