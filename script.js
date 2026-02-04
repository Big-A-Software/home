async function inject(id, file) {
  const slot = document.getElementById(id);
  if (!slot) return;
  const res = await fetch(file);
  if (!res.ok) throw new Error(`Could not load ${file}`);
  slot.innerHTML = await res.text();
}

(async () => {
  try {
    await inject("header-slot", "header.html");
    await inject("footer-slot", "footer.html");

    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  } catch (e) {
    console.error(e);
  }
})();
