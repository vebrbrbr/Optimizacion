const translations = {
    es: {
        title: "Bienvenido a Mi Tienda",
        support: "Soporte",
        description: "Descripción del producto"
    },
    en: {
        title: "Welcome to My Store",
        support: "Support",
        description: "Product Description"
    },
    fr: {
        title: "Bienvenue dans Ma Boutique",
        support: "Support",
        description: "Description du produit"
    }
};

function changeLanguage() {
    const language = document.getElementById("language-select").value;
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("support").textContent = translations[language].support;
    document.getElementById("description").textContent = translations[language].description;
}