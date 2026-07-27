document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("這是示範文章，之後可以再加入正式文章頁。");
  });
});
