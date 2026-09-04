/* Gera index.html (página completa, pronta para GitHub Pages) a partir de treino58.html,
   que é escrito como fragmento para o publicador de Artifacts.
   Uso: node build.js */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "treino58.html");
const OUT = path.join(__dirname, "index.html");

let src = fs.readFileSync(SRC, "utf8");

// tira do corpo o que pertence ao <head>
const title = (src.match(/<title>([\s\S]*?)<\/title>/) || [, "Treino 58"])[1];
const links = (src.match(/<link\b[^>]*>/g) || []).join("\n  ");
src = src.replace(/<title>[\s\S]*?<\/title>\s*/, "").replace(/<link\b[^>]*>\s*/g, "");

const favicon =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🏋️‍♀️</text></svg>'
  );

const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="Plano de treino, cardio, nutrição, hábitos e registro de dor e ciclo — 12 semanas, adaptado para endometriose.">
  <meta name="robots" content="noindex, nofollow">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#0F5C4E" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0E1513" media="(prefers-color-scheme: dark)">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="${title}">
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="icon" href="${favicon}">
  <link rel="apple-touch-icon" href="${favicon}">
  <link rel="manifest" href="manifest.webmanifest">
  ${links}
  <style>
    html{-webkit-text-size-adjust:100%}
    body{margin:0}
    img{max-width:100%}
    [hidden]{display:none!important}
  </style>
</head>
<body>
${src.trim()}
</body>
</html>
`;

fs.writeFileSync(OUT, html, "utf8");
console.log("index.html gerado — " + (html.length / 1024).toFixed(1) + " KB");
