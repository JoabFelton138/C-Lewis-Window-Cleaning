export function navigateToForm (navigate) {
    navigate("/home");
    setTimeout(() => {
        const formSection = document.getElementById("target");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
};