document.addEventListener("DOMContentLoaded", function () {
    const projectGallery = document.getElementById("project-gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeLightbox = document.getElementById("close-lightbox");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    const imageCount = 5; // Number of project images
    let currentIndex = 0;
    let images = [];

    for (let i = 1; i <= imageCount; i++) {
        let imgSrc = `assets/projects/project1-${i}.jpg`;
        images.push(imgSrc);
        const projectItem = document.createElement("div");
        projectItem.classList.add("bg-gray-800", "rounded-lg", "p-4", "shadow-lg");
        projectItem.innerHTML = `<img src="${imgSrc}" class="w-full h-48 object-cover rounded-lg cursor-pointer" data-index="${i-1}">`;
        projectItem.querySelector("img").addEventListener("click", function () {
            currentIndex = parseInt(this.getAttribute("data-index"));
            lightboxImg.src = images[currentIndex];
            lightbox.classList.remove("hidden");
        });
        projectGallery.appendChild(projectItem);
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) lightbox.classList.add("hidden");
    });
});
