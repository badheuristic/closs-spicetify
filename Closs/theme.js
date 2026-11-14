(function closs() {
  const P = window.Spicetify && Spicetify.Player;
  if (!P || !P.addEventListener || !P.data) {
    setTimeout(closs, 300);
    return;
  }
  const toUrl = (u) => !u ? null
    : u.startsWith("spotify:image:") ? "https://i.scdn.co/image/" + u.slice(14)
    : u;
  const update = () => {
    const m = (P.data && P.data.item && P.data.item.metadata) || {};
    const url = toUrl(m.image_xlarge_url || m.image_large_url || m.image_url);
    const root = document.documentElement;
    if (url) {
      root.style.setProperty("--closs-cover", 'url("' + url + '")');
      root.classList.add("closs-has-cover");
    } else {
      root.classList.remove("closs-has-cover");
    }
  };
  P.addEventListener("songchange", update);
  update();
})();
