function hexToRGBA(hex, opacity) {
  let r = 0,
    g = 0,
    b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}

function applyBackgroundStyles() {
  const elements = document.querySelectorAll("#header, #footer");

  elements.forEach((element) => {
    const bgColor = element.getAttribute("data-bg-color");
    const bgOpacity = element.getAttribute("data-bg-opacity");

    if (bgColor && bgOpacity) {
      const rgbaColor = hexToRGBA(bgColor, bgOpacity);
      element.style.backgroundColor = rgbaColor;
    }
  });
}
document.addEventListener("DOMContentLoaded", applyBackgroundStyles);
