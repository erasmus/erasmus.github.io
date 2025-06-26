document.addEventListener("DOMContentLoaded", function() {
  const toc = document.getElementById("toc");
  const postContent = document.querySelector(".post-content");
  const headings = postContent.querySelectorAll("h1, h2, h3, h4, h5, h6");
  let tocHTML = "<ul>";
  headings.forEach(function(heading) {
    const id = heading.id || heading.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    heading.id = id;
    tocHTML += `<li><a href="#${id}">${heading.textContent}</a></li>`;
  });
  tocHTML += "</ul>";
  toc.innerHTML = tocHTML;

  const openbtn = document.querySelector(".openbtn");
  const closebtn = document.querySelector(".closebtn");

  openbtn.addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
  });

  closebtn.addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
  });
});