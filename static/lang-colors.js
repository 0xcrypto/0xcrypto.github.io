const LANG_COLORS = {
  "Assembly": "#6E4C13",
  "C": "#555555",
  "C#": "#178600",
  "C++": "#f34b7d",
  "Clojure": "#db5855",
  "CoffeeScript": "#244776",
  "CSS": "#563d7c",
  "Dart": "#00B4AB",
  "Elixir": "#6e4a7e",
  "Elm": "#60B5CC",
  "Erlang": "#B83998",
  "Go": "#00ADD8",
  "Haskell": "#5e5086",
  "HTML": "#e34c26",
  "Java": "#b07219",
  "JavaScript": "#f1e05a",
  "Julia": "#a270ba",
  "Kotlin": "#A97BFF",
  "Lua": "#000080",
  "Nim": "#ffc200",
  "Objective-C": "#438eff",
  "OCaml": "#3be133",
  "Perl": "#0298c3",
  "PHP": "#4F5D95",
  "Python": "#3572A5",
  "R": "#198CE7",
  "Ruby": "#701516",
  "Rust": "#dea584",
  "Scala": "#c22d40",
  "Shell": "#89e051",
  "Swift": "#F05138",
  "TypeScript": "#3178c6",
  "Vim script": "#199f4b",
  "Zig": "#ec915c"
};

document.querySelectorAll('.repo-card__lang .lang-dot').forEach(function(dot) {
  var lang = dot.nextElementSibling || dot.parentElement.lastElementChild;
  if (lang) {
    var name = lang.textContent.trim();
    var color = LANG_COLORS[name] || "#8b949e";
    dot.style.backgroundColor = color;
  }
});