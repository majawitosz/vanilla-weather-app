var div = document.createElement("div");
div.textContent = "I \u2764\uFE0F emoji!";
document.body.appendChild(div);

twemoji.parse(document.body);

var img = div.querySelector("img");

// note the div is preserved
img.parentNode === div; // true

img.src; // https://twemoji.maxcdn.com/v/latest/72x72/2764.png
img.alt; // \u2764\uFE0F
img.className; // emoji
img.draggable; // false

function imageSourceGenerator(icon, options) {
  return "".concat(
    options.base, // by default Twitter Inc. CDN
    options.size, // by default "72x72" string
    "/",
    icon, // the found emoji as code point
    options.ext // by default ".png"
  );
}
