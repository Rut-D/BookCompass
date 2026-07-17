/* ---------------- nav scroll state ---------------- */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

/* ---------------- scroll reveal ---------------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

/* ---------------- book dataset ---------------- */
const beanFilled = '<svg viewBox="0 0 40 60" class="filled" fill="currentColor"><ellipse cx="20" cy="30" rx="17" ry="27"/><path d="M20 5v50" stroke="var(--cream-warm)" stroke-width="3"/></svg>';
const beanEmpty  = '<svg viewBox="0 0 40 60" class="empty" fill="currentColor"><ellipse cx="20" cy="30" rx="17" ry="27"/><path d="M20 5v50" stroke="var(--cream)" stroke-width="3"/></svg>';


function beanRating(n){
  let out = '';
  for(let i=1;i<=5;i++) out += (i<=n ? beanFilled : beanEmpty);
  return out;
}


function displayBooks(list) {

    const grid = document.getElementById("resultsGrid");
    grid.innerHTML = "";

    list.forEach((book, i) => {

        const card = document.createElement("div");
        card.className = "lib-card";

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>⭐ ⭐ ${Number(book.rating).toFixed(1)}</p>
            <p>${book.genres}</p>
        `;

        grid.appendChild(card);
    });
}

  function displayBooks(books){

    const grid = document.getElementById("resultsGrid");

    grid.innerHTML = "";

    books.forEach((book,i)=>{

        const card = document.createElement("div");

        card.className = "lib-card";

        card.style.animationDelay = `${i*0.08}s`;

       card.innerHTML = `
    <img src="${book.coverImg}" class="book-cover">

    <div class="lib-top">
        <span class="call-number">⭐ ${book.rating}</span>
        <span class="stamp">Recommended</span>
    </div>

    <h3>${book.title}</h3>

    <div class="lib-author">
        ${book.author}
    </div>

    <p class="lib-blurb">
        ${book.description
    ? book.description.substring(0, 700) + "..."
    : "No description available."}
    </p>
    <button class="read-btn">Read More</button>
<div class="lib-tags">
${
    book.genres
    ? book.genres
        .replace("[","")
        .replace("]","")
        .replaceAll("'","")
        .split(",")
        .slice(0,3)
        .map(g => `<span class="tag-pill">${g.trim()}</span>`)
        .join("")
    : ""
}
</div>
`;
card.onclick = () => openBook(book);
        grid.appendChild(card);

    });

}

function openBook(book){

    document.getElementById("bookModal").style.display = "block";

    document.getElementById("modalImg").src = book.coverImg;
    document.getElementById("modalTitle").innerText = book.title;
    document.getElementById("modalAuthor").innerText = book.author;
    document.getElementById("modalGenres").innerText = book.genres;
    document.getElementById("modalDesc").innerText = book.description;
}
  document.getElementById('results').scrollIntoView({behavior:'smooth', block:'start'});


async function findMyBook() {
const btn = document.getElementById("findBtn");

    btn.disabled = true;
    btn.innerText = "Finding...";
    console.log("BUTTON CLICKED");

    const query = document.getElementById("bookInput").value.trim();

    console.log("Query:", query);

    try {

        const response = await fetch("http://127.0.0.1:5000/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        });

        console.log("Response:", response);

        const books = await response.json();

        console.log("Books:", books);
        console.log(books[0]);
        displayBooks(books);
        btn.disabled = false;
        btn.innerText = "Find My Book"; 

    } catch(err) {
        console.error(err);
    }
}

document.getElementById('findBtn').addEventListener('click', findMyBook);
document.getElementById('bookInput').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' && (e.metaKey || e.ctrlKey)) findMyBook();
});

document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.getElementById('bookInput').value = chip.textContent;
    findMyBook();
  });
});
document.querySelector(".close").onclick = () => {
    document.getElementById("bookModal").style.display = "none";
};