document.addEventListener("DOMContentLoaded", function () {
  const preview = document.createElement("div");
  preview.className = "image-lightbox";

  const previewImg = document.createElement("img");
  preview.appendChild(previewImg);
  document.body.appendChild(preview);

  document.querySelectorAll(".card img").forEach(function (img) {
    img.addEventListener("click", function () {
      previewImg.src = img.src;
      preview.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  preview.addEventListener("click", function () {
    preview.classList.remove("active");
    previewImg.src = "";
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      preview.classList.remove("active");
      previewImg.src = "";
      document.body.style.overflow = "";
    }
  });
});
