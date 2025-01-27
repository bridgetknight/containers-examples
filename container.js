document.addEventListener('DOMContentLoaded', () => { 
    document.querySelectorAll(".container_card").forEach(card => {
        card.addEventListener("click", () => {
            console.log("clicked");
            const content = card.querySelector(".container_content");
            const isActive = content.classList.contains("active");
            content.classList.toggle("active");

            // Scroll to the top of the card if not open
            if (!isActive) {
                setTimeout(() => {
                    const title = card.querySelector(".container_title");
                    
                    // Calculate the offset of the title relative to the viewport
                    const rect = title.getBoundingClientRect();
                    const scrollTop = document.documentElement.scrollTop;

                    // Adjust scrolling to be 30px above the title
                    const offset = 30;
                    const targetScrollPosition = rect.top + scrollTop - offset;

                    window.scrollTo({
                        top: targetScrollPosition,
                        behavior: "smooth"
                    });
                }, 350); 
            }
        });
    });
});