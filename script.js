document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}})});

/* 案例图点击预览：不改变原卡片尺寸与布局 */
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `
    <div class="image-lightbox-inner">
      <button class="image-lightbox-close" aria-label="关闭预览">×</button>
      <img alt="案例大图预览">
      <div class="image-lightbox-tip">点击空白处或按 ESC 关闭</div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const previewImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".image-lightbox-close");

  function openPreview(src, alt) {
    previewImg.src = src;
    previewImg.alt = alt || "案例大图预览";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePreview() {
    lightbox.classList.remove("active");
    previewImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".case-img img, .screen img").forEach(function (img) {
    img.addEventListener("click", function () {
      openPreview(img.currentSrc || img.src, img.alt);
    });
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closePreview();
  });

  closeBtn.addEventListener("click", closePreview);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("active")) {
      closePreview();
    }
  });
});
