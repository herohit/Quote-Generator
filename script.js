document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {  
      document.querySelector(".loading-screen").style.opacity = "0"; 
      document.querySelector("main").style.display = "flex"; 
      setTimeout(function() {
        document.querySelector(".loading-screen").style.display = "none";
      }, 300);
    }, 1000);
  });
  



  const btn = document.querySelector("main button");
  const para = document.querySelector("main p em");
  const auth = document.querySelector(".text span");

  const apiUrl = "https://type.fit/api/quotes";




  let handleCopyClick = document.querySelector(".copy");
  let popup = document.querySelector(".alert");

  handleCopyClick.addEventListener("click", () => {
    let text = para.textContent;
    let author = auth.textContent;
    navigator.clipboard.writeText(`${text} ${author}`);

    popup.classList.add("active");
    setTimeout(() => {
      popup.classList.remove("active");
    }, 2000);
  });

  btn.addEventListener("click", fetchQuotes);

  function fetchQuotes() {
    let random = Math.floor(Math.random() * 16 + 1);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {

        para.textContent = data[random].text;
        auth.textContent = data[random].author.split(", ")[0];
      });
  }

  fetchQuotes();