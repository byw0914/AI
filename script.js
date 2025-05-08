// 현재 페이지 링크에 'active' 클래스 추가
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    const current = window.location.pathname.split("/").pop();
    links.forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });
  