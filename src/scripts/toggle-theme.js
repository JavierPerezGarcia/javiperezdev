export function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";

    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme);
}

export function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark").matches ? "dark" : "light");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
}

/* export function applySavedTheme() {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        const savedTheme = localStorage.getItem("theme") || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "Light");
    
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
} */