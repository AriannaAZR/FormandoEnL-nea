document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".prog-item-new");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault(); 

      const targetList = item.nextElementSibling; 

      
      document.querySelectorAll(".sidebar-card ul").forEach((ul) => {
        if (ul !== targetList) {
          ul.classList.remove("is-open");
          ul.previousElementSibling.classList.remove("active");
        }
      });

      
      targetList.classList.toggle("is-open");
      item.classList.toggle("active");
    });
  });
});
const actualizarContador = () => {
    
    const courses = document.querySelectorAll('.course-card');
    const badge = document.getElementById('course-counter');

    if (badge) {
        badge.innerText = courses.length;
        console.log("Cursos encontrados:", courses.length); 
    }
};


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', actualizarContador);
} else {
    actualizarContador();
}