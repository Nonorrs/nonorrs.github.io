const username = "Nonorrs"; // Remplace avec ton pseudo GitHub
const repoList = document.getElementById("project-list");

// Fonction pour récupérer les repositories de l'utilisateur
async function fetchRepositories() {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error("Problème lors de la récupération des repos");
        
        const repos = await response.json();

        // Affichage des projets dans la liste
        repos.forEach(repo => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = repo.html_url;
            link.textContent = repo.name;
            link.target = "_blank"; // Ouvrir dans un nouvel onglet
            listItem.appendChild(link);
            repoList.appendChild(listItem);
        });
    } catch (error) {
        repoList.innerHTML = `<p>Erreur de chargement des projets.</p>`;
        console.error(error);
    }
}

// Appel de la fonction pour charger les repos au démarrage
fetchRepositories();
