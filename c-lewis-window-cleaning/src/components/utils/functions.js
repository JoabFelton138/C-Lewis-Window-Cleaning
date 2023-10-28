export function navigateToForm (navigate) {
    console.log("test func clicked");
    navigate("/home");
    setTimeout(() => {
        const formSection = document.getElementById("target");
        if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth" });
        }
    }, 100);
};