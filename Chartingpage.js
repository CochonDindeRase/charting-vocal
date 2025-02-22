// Fonction pour restituer les images
async function renderSectionImages(sectionClass, jsonFilePath, prefix) {
  const response = await fetch(jsonFilePath);
  const data = await response.json();
  const section = document.querySelector(sectionClass);

  data.forEach(item => {
      const container = document.createElement("div");
      container.classList.add(prefix);

      const image = document.createElement("img");
      image.src = item.image;
      image.id = `${prefix}-img-${item.nom}`;
      container.appendChild(image);

      const name = document.createElement("h2");
      name.innerText = item.nom;
      container.appendChild(name);

      section.appendChild(container);
  });
}

// Rendu des images
renderSectionImages(".dents1", "./maxillairevestibulaire.json", "maxV");
renderSectionImages(".dents2", "./mandibulevestibulaire.json", "mandV");
renderSectionImages(".dents3", "./maxillairepalatin.json", "maxP");
renderSectionImages(".dents4", "./mandibulepalatin.json", "mandP");

    
    
    
    
    
    
    
    
    // Création tableau pour les dents maxillaires
        // données pour le tableau
    const data = [
      ["18", "17", "16", "15", "14", "13", "12", "11", "21", "22", "23", "24", "25", "26", "27", "28", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];


    const espacementData1 = [
      23, 23, 8, 24, 24, 14, 26, 26, 10, 17, 17, 12, 19, 19, 12, 20, 20, 16, 17, 17, 12, 24, 22, 8, 24, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
    ];
    
    const espacementData2 = [
      25, 25, 13, 30, 28, 17, 30, 30, 16, 17, 17, 14, 19, 19, 16, 18, 19, 16, 17, 17, 12, 15, 15, 11, 15, 15, 12, 17, 17, 16, 19, 18, 16, 19, 19, 14, 17, 17, 16, 30, 30, 17, 28, 30, 13, 25, 25
    ];
    
    const espacementData3 = [
      23, 23, 8, 24, 24, 14, 26, 25, 9, 17, 17, 12, 19, 18, 12, 19, 19, 16, 17, 17, 12, 23, 24, 9, 23, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
    ];
    
    const espacementData4 = [
      25, 25, 13, 30, 28, 17, 30, 30, 16, 17, 17, 14, 18, 19, 15, 18, 19, 16, 17, 17, 12, 15, 15, 11, 15, 15, 12, 17, 17, 16, 19, 18, 15, 19, 18, 14, 17, 17, 16, 30, 30, 17, 28, 30, 13, 25, 25
    ];
    
    // Tableau dents maxillaire vestibulaire
    createTable('table-container', data);

    
// Fonction générique pour créer un tableau
function createTable(containerId, tableData) {
  const tableContainer = document.getElementById(containerId);

  // Créez un élément de tableau
  const table = document.createElement('table');

  // Ajoutez chaque élément du tableau comme une ligne dans le tableau
  for (let i = 0; i < tableData.length; i++) {
      const rowData = tableData[i];
      const row = document.createElement('tr');

      // Ajoutez chaque élément du tableau comme une cellule dans la ligne
      for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);

          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if (i < tableData.length - 1 && j < rowData.length - 1) {
              cell.contentEditable = true;
              cell.addEventListener('input', function () {
                  // Mettez à jour les données lorsque l'utilisateur modifie la cellule*
                  tableData[i][j] = cell.textContent;
              });
          } else {
              // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne
              cell.contentEditable = false;
          }
      }
      table.appendChild(row);
  }
  // Ajoutez le tableau à votre conteneur
  tableContainer.appendChild(table);
}

    // Création tableau pour les dents maxillaires
        // données pour le tableau
        const data3 = [
          ["28", "27", "26", "25", "24", "23", "22", "21", "11", "12", "13", "14", "15", "16", "17", "18", "num dent"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
          ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
        ];
        
        // Tableau dents maxillaire palatin
        createthirdTable('third-table-container', data3);
        
        // Fonction générique pour créer un tableau
        function createthirdTable(containerId, tableData) {
          const tableContainer = document.getElementById(containerId);
        
        // Créez un élément de tableau
        const table = document.createElement('table');
        
        // Ajoutez chaque élément du tableau comme une ligne dans le tableau
        for (let i = 0; i < data.length; i++) {
          const rowData = data[i];
          const row = document.createElement('tr');
        
          // Ajoutez chaque élément du tableau comme une cellule dans la ligne
          for (let j = 0; j < rowData.length; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = rowData[j];
            row.appendChild(cell);
        
            // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
            if (i < tableData.length - 1 && j < rowData.length - 1) {
              cell.contentEditable = true;
              cell.addEventListener('input', function () {
                // Mettez à jour les données lorsque l'utilisateur modifie la cellule*
                data[i][j] = cell.textContent;
              });
            } else {
              // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne
              cell.contentEditable = false;
            }
          }
          table.appendChild(row);
        }
        // Ajoutez le tableau à votre conteneur
        tableContainer.appendChild(table);
        }
    

    
    // Création tableau pour les dents mandubulaires
        // données pour le tableau
    const data2 = [
      ["48", "47", "46", "45", "44", "43", "42", "41", "31", "32", "33", "34", "35", "36", "37", "38", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];
    
    // Tableau dents mandibule vestibulaire
    createsecondTable('second-table-container', data2);
    
    // Tableau dents mandibule linguale
    createsecondTable('quatre-table-container', data2);
    
    // Fonction générique pour créer un tableau
    function createsecondTable(containerId, tableData) {
      const tableContainer = document.getElementById(containerId);
    
      // Créez un élément de tableau
      const table = document.createElement('table');
    
      // Ajoutez chaque élément du tableau comme une ligne dans le tableau
      for (let i = 0; i < tableData.length; i++) {
        const rowData = tableData[i];
        const row = document.createElement('tr');
    
        // Ajoutez chaque élément du tableau comme une cellule dans la ligne
        for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);
    
          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if ((i > 0 && j > 0) && !(i === 0 || j === rowData.length - 1)) {
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
              // Mettez à jour les données lorsque l'utilisateur modifie la cellule
              tableData[i][j] = cell.textContent;
            });
          } else {
            // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne*
            cell.contentEditable = false;
          }
        }
        table.appendChild(row);
      }
      // Ajoutez le tableau à votre conteneur
      tableContainer.appendChild(table);
    }
    
    

    
    // Création tableau pour les dents mandubulaires
        // données pour le tableau
    const data4 = [
      ["38", "37", "36", "35", "34", "33", "32", "31", "41", "42", "43", "44", "45", "46", "47", "48", "num dent"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
      ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ];
    
    // Tableau dents mandibule linguale
    createquatreTable('quatre-table-container', data4);
    
    // Fonction générique pour créer un tableau
    function createquatreTable(containerId, tableData) {
      const tableContainer = document.getElementById(containerId);
    
      // Créez un élément de tableau
      const table = document.createElement('table');
    
      // Ajoutez chaque élément du tableau comme une ligne dans le tableau
      for (let i = 0; i < tableData.length; i++) {
        const rowData = tableData[i];
        const row = document.createElement('tr');
    
        // Ajoutez chaque élément du tableau comme une cellule dans la ligne
        for (let j = 0; j < rowData.length; j++) {
          const cell = document.createElement(i === 0 ? 'th' : 'td');
          cell.textContent = rowData[j];
          row.appendChild(cell);
    
          // Permettez à l'utilisateur d'éditer les cellules (*à l'exception de la première ligne et de la première colonne)
          if ((i > 0 && j > 0) && !(i === 0 || j === rowData.length - 1)) {
            cell.contentEditable = true;
            cell.addEventListener('input', function () {
              // Mettez à jour les données lorsque l'utilisateur modifie la cellule
              tableData[i][j] = cell.textContent;
            });
          } else {
            // Désactivez la modification pour les cellules de la première ligne et de la dernière colonne*
            cell.contentEditable = false;
          }
        }
        table.appendChild(row);
      }
      // Ajoutez le tableau à votre conteneur
      tableContainer.appendChild(table);
    }
     
     
   
// Fonctions pour rendre invisibles les dents lorsque l'on clique sur le numéro de la dent dans le tableau        
function attachClickHandlers() {
  // Attachez des gestionnaires d'événements aux containers de tableaux
  document.getElementById('table-container').addEventListener('click', function(event) {
    handleTableCellClick(event, 'maxV-', 'third-table-container', 'maxP-');
  });
  
  document.getElementById('third-table-container').addEventListener('click', function(event) {
    handleTableCellClick(event, 'maxP-', 'table-container', 'maxV-');
  });
  
  document.getElementById('second-table-container').addEventListener('click', function(event) {
    handleTableCellClick(event, 'mandV-', 'quatre-table-container', 'mandP-');
  });
  
  document.getElementById('quatre-table-container').addEventListener('click', function(event) {
    handleTableCellClick(event, 'mandP-', 'second-table-container', 'mandV-');
  });
  }
  
  // Fonction pour gérer les clics sur les cellules et synchroniser les actions avec un tableau lié
  function handleTableCellClick(event, prefix, linkedTableId, linkedPrefix) {
    if (event.target.tagName === 'TD' || event.target.tagName === 'TH') {
        // Ignorer les cellules avec des éléments interactifs
        if (event.target.querySelector('select, input')) {
            return;
        }
  
        const cellIndex = event.target.cellIndex; // Index réel (commence à 0)
        const cellValue = event.target.innerText.trim();
        if (!cellValue) return;
  
        const table = event.target.closest('table');
        const isLastColumn = cellIndex === table.rows[0].cells.length - 1; // Vérifier si c'est la dernière colonne
  
        if (!isLastColumn) {
            const imageId = `${prefix}img-${cellValue}`;
            const imageElement = document.getElementById(imageId);
  
            // Masquage/affichage des images et des cellules
            const cells = table.querySelectorAll(`tr td:nth-child(${cellIndex + 1}), tr th:nth-child(${cellIndex + 1})`);
            let isContentVisible = event.target.dataset.contentVisible === 'true';
  
            cells.forEach(cell => {
                if (cell === event.target) {
                    // Texte barré pour la cellule cliquée
                    cell.style.textDecoration = isContentVisible ? '' : 'line-through';
                    cell.dataset.contentVisible = !isContentVisible;
                    if (imageElement) imageElement.style.visibility = isContentVisible ? 'visible' : 'hidden';
                } else {
                    // Masquage pour les autres cellules
                    cell.style.visibility = isContentVisible ? '' : 'hidden';
                    cell.style.borderTop = cell.style.borderBottom = isContentVisible ? '' : '0';
                }
            });
  
            // Synchroniser avec le tableau lié
            if (linkedTableId && linkedPrefix) {
              const linkedTable = document.getElementById(linkedTableId);
              if (linkedTable) {
                  const linkedRows = Array.from(linkedTable.querySelectorAll('tr'));
                  const linkedNumberRow = linkedRows[0]; // Première ligne (numéros de dents)
                  const linkedCells = Array.from(linkedNumberRow.children);
                  const linkedCellIndex = linkedCells.length - 2 - cellIndex; // Index inversé en ignorant la dernière cellule

                  if (linkedCellIndex >= 0 && linkedCellIndex < linkedCells.length) {
                      const linkedCell = linkedCells[linkedCellIndex];

                      // Masquage/affichage des cellules dans le tableau lié
                      const linkedCellsToUpdate = linkedTable.querySelectorAll(`tr td:nth-child(${linkedCellIndex + 1}), tr th:nth-child(${linkedCellIndex + 1})`);
                      const linkedImageId = `${linkedPrefix}img-${linkedCell.innerText.trim()}`;
                      const linkedImageElement = document.getElementById(linkedImageId);

                      linkedCellsToUpdate.forEach((cell, rowIndex) => {
                          if (cell === linkedCell) {
                              // Texte barré pour la cellule liée (première ligne)
                              cell.style.textDecoration = isContentVisible ? '' : 'line-through';
                              cell.dataset.contentVisible = !isContentVisible;
                              cell.style.visibility = ''; // Toujours visible
                          } else if (rowIndex === 0) {
                              // La cellule numéro dans la première ligne reste visible et barrée
                              cell.style.visibility = '';
                              cell.style.textDecoration = isContentVisible ? '' : 'line-through';
                              cell.dataset.contentVisible = !isContentVisible;
                          } else {
                              // Masquage pour les autres cellules de la colonne
                              cell.style.visibility = isContentVisible ? '' : 'hidden';
                              cell.style.borderTop = cell.style.borderBottom = isContentVisible ? '' : '0';
                          }
                      });

                      if (linkedImageElement) {
                          linkedImageElement.style.visibility = isContentVisible ? 'visible' : 'hidden';
                      }
                  }
              }
          }

  
  
            // Mettre à jour les pourcentages après la modification de la visibilité
            updatePlaquePercentage();
            updateSaignementPercentage();
  
            adjustVerticalBorders(table);
        }
    }
  }





// Fonction pour ajuster les bords verticaux entre les colonnes sélectionnées
function adjustVerticalBorders(table, cellIndex) {
  const rows = table.querySelectorAll('tr');
  rows.forEach(row => {
      const cells = row.querySelectorAll('td, th');
      // Premièrement, réinitialiser tous les styles de bordure pour éviter l'accumulation
      cells.forEach(cell => {
          cell.style.borderLeft = cell.style.borderRight = '';
      });

      // Ensuite, ajustez les bordures basées sur les cellules voisines
      cells.forEach((cell, index) => {
          if (cell.style.visibility === 'hidden') {
              const nextCell = cells[index + 1];
              const prevCell = cells[index - 1];
              if (nextCell && nextCell.style.visibility === 'hidden') {
                  // La cellule suivante est également cachée, masquez le bord droit
                  cell.style.borderRight = '0';
                  nextCell.style.borderLeft = '0';
              }
              if (prevCell && prevCell.style.visibility === 'hidden') {
                  // La cellule précédente est également cachée, masquez le bord gauche
                  cell.style.borderLeft = '0';
                  prevCell.style.borderRight = '0';
              }
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', attachClickHandlers);
attachClickHandlers(); // Assurez-vous que cette fonction est appelée une fois que tous vos tableaux sont créés



// Fonction pour lier les cases à cocher aux images correspondantes et les remplacer par des images d'implants lors du clic 
async function attachCheckboxImageReplacement() {
  // Définir les chemins des fichiers JSON pour chaque groupe d'images
  const jsonFiles = {
      "table-container": "./maxillairevestibulaire.json",
      "second-table-container": "./mandibulevestibulaire.json",
      "third-table-container": "./maxillairepalatin.json",
      "quatre-table-container": "./mandibulepalatin.json"
  };

  // Parcourir chaque tableau et récupérer les données JSON associées
  for (let tableId in jsonFiles) {
      const table = document.getElementById(tableId);
      const jsonFilePath = jsonFiles[tableId];
      
      if (table) {
          const response = await fetch(jsonFilePath);
          const data = await response.json();

          // Obtenir les cases à cocher pour le tableau actuel
          const checkboxes = table.querySelectorAll(".custom-checkbox1");
          
          // Associer chaque case à cocher à l'image correspondante dans les données JSON
          checkboxes.forEach((checkbox, index) => {
              if (data[index]) {
                  const originalImagePath = data[index].image; // Chemin de l'image d'origine dans le dossier "dents"
                  const implantImagePath = originalImagePath.replace("dents", "implants"); // Chemin de l'image d'implant

                  // Ajouter un écouteur d'événement pour basculer entre les images d'origine et d'implant
                  const updateImages = () => {
                      const images = document.querySelectorAll(`img[src="${originalImagePath}"], img[src="${implantImagePath}"]`);
                      images.forEach((image) => {
                          image.src = checkbox.checked ? implantImagePath : originalImagePath;
                      });
                  };

                  checkbox.addEventListener("change", updateImages);

                  // Synchronisation avec les cases à cocher liées (indices inversés)
                  const linkedCheckbox = findLinkedCheckbox(tableId, index, checkboxes.length);
                  if (linkedCheckbox) {
                      checkbox.addEventListener("change", () => {
                          linkedCheckbox.checked = checkbox.checked;
                          updateImages();
                      });
                      linkedCheckbox.addEventListener("change", () => {
                          checkbox.checked = linkedCheckbox.checked;
                          updateImages();
                      });
                  }
              }
          });
      }
  }
}

// Fonction pour trouver la checkbox implant liée avec inversion des indices
function findLinkedCheckbox(currentTableId, index, totalCells) {
    const linkedTableId = {
        "table-container": "third-table-container",
        "third-table-container": "table-container",
        "second-table-container": "quatre-table-container",
        "quatre-table-container": "second-table-container"
    }[currentTableId];

    if (linkedTableId) {
        const linkedTable = document.getElementById(linkedTableId);
        if (linkedTable) {
            const linkedCheckboxes = linkedTable.querySelectorAll(".custom-checkbox1");
            const invertedIndex = totalCells - 1 - index; // Calcul de l'index inversé
            return linkedCheckboxes[invertedIndex] || null;
        }
    }
    return null;
}

// Exécuter cette fonction après la création dynamique des tableaux et des cases à cocher
document.addEventListener("DOMContentLoaded", async () => {
  await attachCheckboxImageReplacement();
});



// Ajoutez les IDs des conteneurs de tableaux dans un ordre cyclique
const tableContainers = [
'table-container', 
'second-table-container', 
'third-table-container', 
'quatre-table-container'
];

// Fonction pour obtenir l'index du conteneur suivant dans le cycle
function getNextTableIndex(currentTableIndex) {
return (currentTableIndex + 1) % tableContainers.length;
}

// Fonction pour trouver le prochain champ de saisie visible
function findNextVisibleInput(currentInput) {
  const inputs = Array.from(document.querySelectorAll('input[type="text"]')); // Liste de tous les champs
  const currentIndex = inputs.indexOf(currentInput); // Obtenir l'index du champ actuel

  // Vérifie le champ suivant dans l'ordre du DOM
  for (let i = currentIndex + 1; i < inputs.length; i++) {
      const nextInput = inputs[i];
      if (nextInput && getComputedStyle(nextInput).visibility !== 'hidden') {
          return nextInput;
      }
  }
  return null;
}


// Fonction pour trouver le premier champ de saisie visible dans le tableau suivant
function findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex) {
const nextTableIndex = getNextTableIndex(currentTableIndex);
const nextTableContainer = document.getElementById(tableContainers[nextTableIndex]);
let nextInput = nextTableContainer.querySelector(`tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([style*="visibility: hidden"])`);
if (!nextInput) {
  nextInput = nextTableContainer.querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
}
return nextInput;
}

// Ajoutez cette fonction pour calculer le pourcentage de plaque
function calculatePlaquePercentage() {
  const visiblePlaqueCheckboxes = Array.from(document.querySelectorAll('.custom-checkbox2')).filter(cb => getComputedStyle(cb.closest('td')).visibility !== 'hidden');
  const checkedPlaqueCheckboxes = visiblePlaqueCheckboxes.filter(checkbox => checkbox.checked).length;
  const percentage = (checkedPlaqueCheckboxes / visiblePlaqueCheckboxes.length) * 100;
  return visiblePlaqueCheckboxes.length > 0 ? percentage.toFixed(2) : '0.00';
}

// Mettez à jour le pourcentage de plaque dans le DOM et remplissez la barre de progression
function updatePlaquePercentage() {
const percentage = calculatePlaquePercentage();
document.getElementById('plaque-percentage').textContent = `${percentage}%`;

const plaqueBar = document.getElementById('plaque-bar');
plaqueBar.style.width = `${percentage}%`; // Ajuste la largeur de la barre en fonction du pourcentage
plaqueBar.setAttribute('aria-valuenow', percentage);
}

// Appelez updatePlaquePercentage chaque fois qu'une case à cocher "Plaque" est cochée ou décochée
document.addEventListener('change', function(event) {
if (event.target.classList.contains('custom-checkbox2')) {
  updatePlaquePercentage();
}
});

// Appelez cette fonction initialement pour définir le pourcentage correct au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
updatePlaquePercentage();
});

// Fonction pour calculer le pourcentage de cases cochées pour la ligne "Saignement"
function calculateSaignementPercentage() {
  const visibleSaignementCheckboxes = Array.from(document.querySelectorAll('.custom-checkbox3')).filter(cb => getComputedStyle(cb.closest('td')).visibility !== 'hidden');
  const checkedSaignementCheckboxes = visibleSaignementCheckboxes.filter(checkbox => checkbox.checked).length;
  const percentage = (checkedSaignementCheckboxes / visibleSaignementCheckboxes.length) * 100;
  return visibleSaignementCheckboxes.length > 0 ? percentage.toFixed(2) : '0.00';
}

// Mettez à jour le pourcentage de saignement dans le DOM et remplissez la barre de progression
function updateSaignementPercentage() {
const percentage = calculateSaignementPercentage();
document.getElementById('saignement-percentage').textContent = `${percentage}%`;

const saignementBar = document.getElementById('saignement-bar');
saignementBar.style.width = `${percentage}%`; // Ajuste la largeur de la barre en fonction du pourcentage
saignementBar.setAttribute('aria-valuenow', percentage);
}

// Appelez updateSaignementPercentage chaque fois qu'une case à cocher "Saignement" est cochée ou décochée
document.addEventListener('change', function(event) {
if (event.target.classList.contains('custom-checkbox3')) {
  updateSaignementPercentage();
}
});

// Appelez cette fonction initialement pour définir le pourcentage correct au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
updateSaignementPercentage();
});

// Fonction de synchronisation des cellules
function synchronizeCells() {
  const tableMappings = [
      {
          tables: ["#table-container", "#third-table-container"],
          rowsToSync: {
              "mobilité": 8, // Huitième ligne
              "implant": 6  // Sixième ligne
          }
      },
      {
          tables: ["#second-table-container", "#quatre-table-container"],
          rowsToSync: {
              "mobilité": 8, // Huitième ligne
              "implant": 6  // Sixième ligne
          }
      }
  ];

  tableMappings.forEach(mapping => {
      const [tableId1, tableId2] = mapping.tables;
      const rowsToSync = mapping.rowsToSync;

      const table1 = document.querySelector(tableId1);
      const table2 = document.querySelector(tableId2);

      if (table1 && table2) {
          const rows1 = table1.querySelectorAll("tr");
          const rows2 = table2.querySelectorAll("tr");

          Object.entries(rowsToSync).forEach(([label, rowIndex]) => {
              const row1 = rows1[rowIndex];
              const row2 = rows2[rowIndex];

              if (row1 && row2) {
                  const cells1 = row1.querySelectorAll("td, th"); // Inclure <th> et <td>
                  const cells2 = row2.querySelectorAll("td, th");

                  cells1.forEach((cell, index) => {
                      if (index < cells1.length - 1) { // Ignore la dernière cellule (titre)
                          if (label === "implant") {
                              const checkbox1 = cell.querySelector("input[type='checkbox']");
                              const checkbox2 = cells2[cells1.length - 2 - index]?.querySelector("input[type='checkbox']");

                              if (checkbox1 && checkbox2) {
                                  checkbox1.addEventListener("change", () => {
                                      checkbox2.checked = checkbox1.checked;
                                  });
                                  checkbox2.addEventListener("change", () => {
                                      checkbox1.checked = checkbox2.checked;
                                  });
                              }
                          } else {
                              const dropdown1 = cell.querySelector("select");
                              const dropdown2 = cells2[cells1.length - 2 - index]?.querySelector("select");

                              if (dropdown1 && dropdown2) {
                                  // Ajout de journaux pour déboguer
                                  console.log(`Synchronisation entre ${tableId1} et ${tableId2} pour la ligne ${label}, cellule ${index}`);
                                  console.log("Dropdown1:", dropdown1, "Dropdown2:", dropdown2);

                                  dropdown1.addEventListener("change", () => {
                                      console.log(`Modification détectée dans ${tableId1}, ligne ${label}, cellule ${index}`);
                                      dropdown2.value = dropdown1.value;
                                  });
                                  dropdown2.addEventListener("change", () => {
                                      console.log(`Modification détectée dans ${tableId2}, ligne ${label}, cellule ${index}`);
                                      dropdown1.value = dropdown2.value;
                                  });
                              }
                          }
                      }
                  });
              }
          });
      }
  });
}

// Appeler la fonction de synchronisation lors du chargement du document
document.addEventListener("DOMContentLoaded", synchronizeCells);




// Fonction pour créer des champs de texte avec gestion des événements de navigation
function createTextInputs(count, dentNumber, type, rowIndex, tableIndex) {
  const textInputs = [];
  for (let i = 0; i < count; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `input-${type}-${dentNumber}-${i}`; // Un ID unique pour chaque champ
      input.classList.add('small-input', 'direct-input'); // Ajouter des classes spéciales

      // Ajouter un gestionnaire d'événements de clic pour sélectionner tout le texte au clic
      input.addEventListener('click', function () {
          this.select();
      });

      // Ajouter un gestionnaire d'événements pour la touche "Entrée"
      input.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
              // Passez au champ suivant s'il y en a un dans la même cellule
              if (i < count - 1) {
                  textInputs[i + 1].focus();
                  textInputs[i + 1].select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
              } else {
                  // Essayez de passer à la cellule suivante dans la même ligne
                  let nextInput = findNextVisibleInput(input);
                  if (nextInput) {
                      nextInput.focus();
                      nextInput.select();                  
                    } else {
                      // Si c'est la dernière cellule, passer au prochain champ de saisie
                      let targetRowIndex = rowIndex;
                      let currentTableIndex = tableIndex;
                  
                      // Si on est à la fin de la ligne "Niveau Gingival" (2e ligne)
                      if (rowIndex === 1) {
                          targetRowIndex = 2; // Passer à la ligne "Profondeur Sondage" (3e ligne) dans le même tableau
                      } 
                      // Si on est à la fin de la ligne "Profondeur Sondage" (3e ligne)
                      else if (rowIndex === 2) {
                          targetRowIndex = 1; // Aller à la ligne "Niveau Gingival" du tableau suivant
                          currentTableIndex++; // Passer au tableau suivant
                  
                          // Si on est dans le dernier tableau, revenir au premier tableau
                          if (currentTableIndex === tableContainers.length) {
                              currentTableIndex = 0; // Revenir au premier tableau
                          }
                      }
                  
                      // Trouver le premier champ visible dans la ligne cible du tableau actuel ou suivant
                      const nextInput = document.getElementById(tableContainers[currentTableIndex])
                          .querySelector(`tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([style*="visibility: hidden"])`);
                      
                      if (nextInput) {
                          nextInput.focus();
                          nextInput.select();
                      } else {
                          // Si aucun champ n'est trouvé, revenir au premier champ du tableau suivant
                          const firstInputNextTable = document.getElementById(tableContainers[getNextTableIndex(currentTableIndex)])
                              .querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
                          if (firstInputNextTable) {
                              firstInputNextTable.focus();
                              firstInputNextTable.select();
                          }
                      }
                  }
                  
              }
          }
      });

      textInputs.push(input);
  }
  return textInputs;
}



// Fonction d'aide pour créer une case à cocher (afin de pouvoir en avoir 3 par cellule)
function createCheckbox(classname, updateFunction) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add(classname); // Utilisez la classe spécifiée en argument
  // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
  checkbox.addEventListener('change', updateFunction);
  return checkbox;
}

// Fonctions pour créer des boutons et des Menus déroulants modifiée pour inclure 3 checkboxs
function createTableWithCheckboxesAndDropdowns(containerId, tableData, tableType, tableIndex) {
const tableContainer = document.getElementById(containerId);
const table = document.createElement('table');

for (let i = 0; i < tableData.length; i++) {
  const rowData = tableData[i];
  const row = document.createElement('tr');

  for (let j = 0; j < rowData.length; j++) {
    const cell = document.createElement(i === 0 ? 'th' : 'td');
    // Déterminez le numéro de la dent ici
    let dentNumber;
    switch(tableType) {
      case 'maxillaireVestibulaire':
        dentNumber = j < 8 ? 11 + j : 21 + (j - 8);
        break;
      case 'mandibuleVestibulaire':
        dentNumber = j < 8 ? 31 + j : 41 + (j - 8);
        break;
    }

    // Fonction pour gérer le changement de la case à cocher
    const handleCheckboxChange = function() {
      updateData(i, j, this.checked);
    };

    // Ajoutez trois cases à cocher pour chaque cellule de la ligne contenant "Plaque"
    if (rowData.includes('Plaque') && rowData[j] !== 'Plaque') {
      for (let k = 0; k < 2; k++) {
        const checkbox = createCheckbox('custom-checkbox2', handleCheckboxChange);
        cell.appendChild(checkbox);
      }
    }
    // Ajoutez trois cases à cocher pour chaque cellule de la ligne contenant "Saignement"
    else if (rowData.includes('Saignement') && rowData[j] !== 'Saignement') {
      for (let k = 0; k < 2; k++) {
        const checkbox = createCheckbox('custom-checkbox3', handleCheckboxChange);
        cell.appendChild(checkbox);
      }
    }
    
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Implant"
          if (rowData.includes('Implant') && rowData[j] !== 'Implant') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox1'); // = classe des cases à cocher ligne Implant (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Plaque"
          else if (rowData.includes('Plaque') && rowData[j] !== 'Plaque') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox2'); // = classe des cases à cocher ligne Plaque (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
          // Ajoutez une case à cocher pour chaque cellule de la ligne contenant "Saignement"
          else if (rowData.includes('Saignement') && rowData[j] !== 'Saignement') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('custom-checkbox3'); // = classe des cases à cocher ligne Saignement (pour le CSS)
            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la case à cocher est modifiée
            checkbox.addEventListener('change', function () {
              updateData(i, j, checkbox.checked);
            });
            cell.appendChild(checkbox);
          }
    
          // Ajoutez une liste déroulante pour chaque cellule de la ligne contenant "Furcation"
          else if (rowData.includes('Furcation') && rowData[j] !== 'Furcation') {
            const dropdown = createDropdown(['1', '2', '3']);
            dropdown.classList.add('custom-dropdown'); // classe des menus déroulants all (pour le CSS)

            // Créez un conteneur pour inclure l'icône et la liste déroulante
            const wrapper = document.createElement('div');
            wrapper.classList.add('dropdown-wrapper'); // Classe pour styler le conteneur

            // Ajoutez l'icône dans le conteneur
            const icon = document.createElement('span');
            icon.classList.add('dropdown-icon'); // Classe pour styler l'icône

            // Ajoutez la liste déroulante et l'icône dans le conteneur
            wrapper.appendChild(dropdown);
            wrapper.appendChild(icon);

            // Ajoutez le conteneur à la cellule
            cell.appendChild(wrapper);

            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la valeur de la liste déroulante est modifiée
            dropdown.addEventListener('change', function () {
              updateData(i, j, dropdown.value);
            });
          }

          // Ajoutez une liste déroulante pour chaque cellule de la ligne contenant "Mobilité"
          else if (rowData.includes('Mobilité') && rowData[j] !== 'Mobilité') {
            const dropdown = createDropdown(['0', '1', '2', '3']);
            dropdown.classList.add('custom-dropdown'); // classe des menus déroulants all (pour le CSS)

            // Créez un conteneur pour inclure l'icône et la liste déroulante
            const wrapper = document.createElement('div');
            wrapper.classList.add('dropdown-wrapper'); // Classe pour styler le conteneur

            // Ajoutez l'icône dans le conteneur
            const icon = document.createElement('span');
            icon.classList.add('dropdown-icon'); // Classe pour styler l'icône

            // Ajoutez la liste déroulante et l'icône dans le conteneur
            wrapper.appendChild(dropdown);
            wrapper.appendChild(icon);

            // Ajoutez le conteneur à la cellule
            cell.appendChild(wrapper);

            // Ajoutez un gestionnaire d'événements pour mettre à jour les données lorsque la valeur de la liste déroulante est modifiée
            dropdown.addEventListener('change', function () {
              updateData(i, j, dropdown.value);
            });
          }
          
          
                    
          // Ajoutez des plages de valeurs pour chaque cellule de la ligne contenant "Niveau Gingival"
          else if (rowData.includes('Niveau Gingival') && rowData[j] !== 'Niveau Gingival') {
            const textInputs = createTextInputs(3, dentNumber, 'niveau', i, tableIndex);

            for (let k = 0; k < 3; k++) {
                textInputs[k].value = '0';
                let hasMinus = false; // Suivi de la présence du signe "-"

                // Fonction pour gérer le signe "-" uniquement pour la reconnaissance vocale
                function handleMinusSignForVoice(enteredValue, command, k) {
                    if (!hasMinus && enteredValue !== '' && enteredValue !== '-' && !/^-/.test(enteredValue)) {
                        if (command && (command.includes("plus") || command.includes("+"))) {
                            console.log("Commande 'plus' détectée, la valeur reste positive.");
                            enteredValue = Math.abs(enteredValue); // Forcer la valeur à être positive
                        } else {
                            console.log("Valeur par défaut ou 'moins' détecté, ajout du signe négatif.");
                            enteredValue = '-' + enteredValue; // Forcer le signe négatif
                        }
                        textInputs[k].value = enteredValue;
                        hasMinus = true;
                    }
                }

                // Fonction pour gérer le signe "-" lors de la saisie manuelle
                function handleManualInput(enteredValue, k) {
                  if (!hasMinus && enteredValue !== '' && enteredValue !== '-' && !/^-/.test(enteredValue)) {
                      console.log("Saisie manuelle détectée, ajout automatique du signe négatif.");
                      enteredValue = '-' + enteredValue;
                      textInputs[k].value = enteredValue;
                      hasMinus = true;
                  }
                }

                textInputs[k].addEventListener('input', function () {
                  let enteredValue = textInputs[k].value.trim();
              
                  // N'appliquer la logique manuelle que si ce n'est pas une commande vocale
                  if (!isVoiceCommand) {
                      // Ajout automatique du signe "-" sauf si "plus" ou "+" est spécifié
                      if (!hasMinus && enteredValue !== '' && enteredValue !== '-' && !/^-/.test(enteredValue)) {
                          console.log("Saisie manuelle détectée, ajout automatique du signe négatif.");
                          enteredValue = '-' + enteredValue;
                          textInputs[k].value = enteredValue;
                          hasMinus = true;
                      }
                  }
              
                  // Vérifiez si la valeur entrée est un nombre (positif, négatif ou zéro)
                  if (/^-?\d*\.?\d*$/.test(textInputs[k].value) || textInputs[k].value === '-') {
                      updateData(i, j + k, textInputs[k].value);
                  } else {
                      // Si la valeur n'est pas un nombre, rétablissez la valeur par défaut (0)
                      textInputs[k].value = '0';
                      updateData(i, j + k, '0');
                  }
              });
              


                cell.appendChild(textInputs[k]);
            }
            cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
            cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
          }

          
          // Ajoutez des plages de valeurs pour chaque cellule de la ligne contenant "Profondeur Sondage"
          else if (rowData.includes('Profondeur Sondage') && rowData[j] !== 'Profondeur Sondage') {
            const textInputs = createTextInputs(3, dentNumber, 'profondeur', i, tableIndex);
          
            for (let k = 0; k < 3; k++) {
              textInputs[k].value = '1';
              textInputs[k].addEventListener('input', function () {
                const enteredValue = textInputs[k].value.trim();
          
                // Vérifiez si la valeur entrée est un nombre (positif, négatif ou zéro)
                if (/^-?\d*\.?\d*$/.test(textInputs[k].value) || textInputs[k].value === '-') {
                  updateData(i, j + k, textInputs[k].value);

                  // Ajoutez ici la condition pour changer la couleur si la valeur est supérieure ou égale à 4
                  if (parseFloat(textInputs[k].value) >= 4) {
                    textInputs[k].style.color = 'red';
                  } else {
                    textInputs[k].style.color = ''; // Remettre la couleur par défaut
                  }

                } else {
                  // Si la valeur n'est pas un nombre, rétablissez la valeur par défaut
                  textInputs[k].value = '1';
                  updateData(i, j + k, '1');
                }
              });
          
              cell.appendChild(textInputs[k]);
            }
            cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
            cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
          } else {
            cell.textContent = rowData[j];
          }
          row.appendChild(cell);
        }
        table.appendChild(row);
      }
    
      tableContainer.innerHTML = ''; // Effacez le contenu actuel du conteneur
      tableContainer.appendChild(table);
    
      // Fonction pour créer une liste déroulante avec des options spécifiées
      function createDropdown(options) {
        const dropdown = document.createElement('select');
        options.forEach(optionValue => {
          const option = document.createElement('option');
          option.value = optionValue;
          option.text = optionValue;
          dropdown.add(option);
        });
        return dropdown;
      }
    
      // Fonction pour mettre à jour les données lorsque l'état de la case à cocher change ou la valeur de la liste déroulante
      function updateData(rowIndex, columnIndex, value) {
        // Récupérez la ligne actuelle du tableau
        const rowData = tableData[rowIndex];

        // Ignorez la cellule qui a la donnée "Implant", "Plaque", "Saignement", "Furcation" ou "Mobilité"
        if (
          rowData[columnIndex] !== 'Implant' &&
          rowData[columnIndex] !== 'Plaque' &&
          rowData[columnIndex] !== 'Saignement' &&
          rowData[columnIndex] !== 'Furcation' &&
          rowData[columnIndex] !== 'Mobilité'
        ) {
          tableData[rowIndex][columnIndex] = value;
        }
      }
    }
    
// Appelez la fonction avec le type de tableau approprié
createTableWithCheckboxesAndDropdowns('table-container', data, 'maxillaireVestibulaire', 0);
createTableWithCheckboxesAndDropdowns('second-table-container', data2, 'mandibuleVestibulaire', 1);
createTableWithCheckboxesAndDropdowns('third-table-container', data3, 'maxillairePalatin', 2);
createTableWithCheckboxesAndDropdowns('quatre-table-container', data4, 'mandibuleLingual', 3);

// Attacher les gestionnaires de clic après la création des tableaux
    attachClickHandlers();

function getChartDataWithSpacing(tableContainer, type, spacings) {
  const profondeurValues = [];
  const niveauValues = [];

  // Récupérer toutes les valeurs des inputs pour les deux types
  const tableInputs = document.querySelectorAll(`#${tableContainer} input[type='text']`);
  tableInputs.forEach(input => {
    if (input.id.includes('profondeur')) {
      profondeurValues.push(parseFloat(input.value) || 0);
    }
    if (input.id.includes('niveau')) {
      let niveauValue = parseFloat(input.value) || 0;
      niveauValue *= -1; // Inverser la valeur pour Niveau Gingival
      niveauValues.push(niveauValue);
    }
  });

  const chartData = spacings.map((spacing, index) => [spacing, type === 'profondeur' ? profondeurValues[index] + niveauValues[index] : niveauValues[index]]);
  return chartData;
}

// Fonction pour générer les labels et espacements
function generateLabelsAndSpacings(espacement) {
  let labels = [];
  let spacings = [];
  let currentSpacing = 0;

  for (let i = 0; i < 16; i++) {
    for (let j = 1; j <= 3; j++) {
      labels.push(`Dent ${i + 1}-${j}`);
      spacings.push(currentSpacing);
      currentSpacing += espacement[(i * 3 + j - 1) % espacement.length];
    }
  }
  return { labels, spacings };
}



// Fonction mise à jour pour les graphiques
function updateChartC3(chartId, tableContainer, espacement) {
  const { labels, spacings } = generateLabelsAndSpacings(espacement);
  const dataProfondeur = getChartDataWithSpacing(tableContainer, 'profondeur', spacings);
  const dataNiveau = getChartDataWithSpacing(tableContainer, 'niveau', spacings);

  var chart = c3.generate({
    bindto: chartId,
    data: {
      xs: {
        'Profondeur Sondage area': 'x1',
        'Profondeur Sondage line': 'x1',
        'Niveau Gingival': 'x2'
      },
      columns: [
        ['x1', ...spacings],
        ['x2', ...spacings],
        ['Profondeur Sondage area', ...dataProfondeur.map(d => d[1])],
        ['Profondeur Sondage line', ...dataProfondeur.map(d => d[1])],
        ['Niveau Gingival', ...dataNiveau.map(d => d[1])]
      ],
      types: {
        'Profondeur Sondage area': 'area',
        'Profondeur Sondage line': 'line',
        'Niveau Gingival': 'line'
      }
    },
    tooltip: {
      show: false
    },
    point: {
      show: false
    },
    axis: {
      y: {
        show: false,
        max: 20,
        min: -8,
        padding: { top: 0, bottom: 0 }
      },
      x: {
        show: false // Cache l'axe des x
      }
    },
    grid: {
      y: {
        lines: Array.from({ length: 21 }, (_, i) => ({ value: i, text: '' }))
      },
      x: {
        lines: [] // (à mettre pour afficher grilles verticales): spacings.map((value, index) => ({ value: value, text: '' })) 
                                                                           // (pour enlever): []
      }
    },
    legend: {
      show: false
    },
    color: {
      pattern: ['rgba(0, 8, 176, 1)', 'red', 'blue']
    }
  });

  // Appliquer la transformation scaleY(-1) aux graphiques 2 et 4
  if (chartId === '#graph2' || chartId === '#graph4') {
    document.querySelector(chartId).style.transform = 'scaleY(-1)';
  }

  return chart;
}




// Retourne verticalement les graphiques
function invertGraphContainer(chartId) {
  const graphContainer = document.querySelector(chartId);
  graphContainer.style.transform = 'scaleY(-1)';
}

// Appliquer la fonction aux graphiques 2 et 4
document.addEventListener('DOMContentLoaded', function() {
  invertGraphContainer('#graph2');
  invertGraphContainer('#graph4');
});

// Écouteurs d'événements pour la mise à jour des graphiques
document.querySelectorAll('#table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart1 = updateChartC3("#graph1", 'table-container', espacementData1);
  });
});
document.querySelectorAll('#second-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart2 = updateChartC3("#graph2", 'second-table-container', espacementData2);
  });
});
document.querySelectorAll('#third-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart3 = updateChartC3("#graph3", 'third-table-container', espacementData3);
  });
});
document.querySelectorAll('#quatre-table-container input[type="text"]').forEach(input => {
  input.addEventListener('input', () => {
    chart4 = updateChartC3("#graph4", 'quatre-table-container', espacementData4);
  });
});




// Déclarez les variables globales pour les graphiques
let chart1, chart2, chart3, chart4;

// Initialiser les graphiques avec des espacements différents
chart1 = updateChartC3('#graph1', 'table-container', espacementData1);
chart2 = updateChartC3('#graph2', 'second-table-container', espacementData2);
chart3 = updateChartC3('#graph3', 'third-table-container', espacementData3);
chart4 = updateChartC3('#graph4', 'quatre-table-container', espacementData4);



//TELECHARGER ET IMPRIMER
// Ajouter des écouteurs d'événements pour les boutons Télécharger et Imprimer
document.querySelector('.telechargement-btn').addEventListener('click', function () {
  generateAndSavePDF(false); // Télécharger sans imprimer
});

document.querySelector('.imprimante-btn').addEventListener('click', function () {
  generateAndSavePDF(true); // Télécharger et imprimer
});

// Fonction pour générer et sauvegarder le PDF
async function generateAndSavePDF(autoPrint) {
  const chartingSection = document.querySelector('#Charting');
  const fondElement = chartingSection.querySelector('.fond');

  if (!chartingSection) {
    console.error("La section #Charting n'a pas été trouvée.");
    return;
  }

  const { jsPDF } = window.jspdf;

  try {
    // Sauvegarder les styles originaux
    const originalFondBackgroundColor = fondElement.style.backgroundColor;
    const originalFondBorder = fondElement.style.border;

    // Supprimer le fond et la bordure temporairement
    fondElement.style.backgroundColor = 'transparent';
    fondElement.style.border = 'none';

    // Décaler la section légèrement vers le bas pour capturer entièrement le contenu
    chartingSection.style.paddingTop = '20px';

    // Utiliser html2canvas pour capturer la section entière
    const canvas = await html2canvas(chartingSection, {
      scale: 3, // Réduire légèrement l'échelle pour ne pas couper en bas
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      width: chartingSection.scrollWidth,
      height: chartingSection.scrollHeight + 20,
      x: chartingSection.getBoundingClientRect().left,
      y: chartingSection.getBoundingClientRect().top - 20,
    });

    // Restaurer les styles originaux
    chartingSection.style.paddingTop = '';
    fondElement.style.backgroundColor = originalFondBackgroundColor;
    fondElement.style.border = originalFondBorder;

    const imgData = canvas.toDataURL('image/png');
    
    // Créer l'instance jsPDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Ajuster légèrement la taille du PDF pour bien ajuster le contenu
    const pdfWidth = pdf.internal.pageSize.getWidth() * 1;
    const pdfHeight = pdf.internal.pageSize.getHeight() * 1.4;

    // Proportionner correctement l'image pour le PDF
    const imgProps = pdf.getImageProperties(imgData);
    const imageHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // Si l'image tient sur une seule page, l'ajouter directement
    if (imageHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', xOffset, yOffset, pdfWidth, imageHeight);
    } else {
      // Sinon, ajuster l'image pour qu'elle tienne sur une page
      const scale = pdfHeight / imageHeight;
      const scaledWidth = pdfWidth * scale;
      const scaledHeight = imageHeight * scale;
      const yOffset = 0; // Pas de décalage pour centrer verticalement
      const xOffset = (pdfWidth - scaledWidth) / 4; // Centrer horizontalement

      pdf.addImage(imgData, 'PNG', xOffset, yOffset, scaledWidth, scaledHeight);
    }

    const pdfBlob = pdf.output('blob');

    // Si autoPrint est vrai, ouvrir la boîte de dialogue d'impression
    if (autoPrint) {
      const printWindow = window.open(URL.createObjectURL(pdfBlob));
      printWindow.onload = function () {
        printWindow.print();
      };
    } else {
      pdf.save('charting.pdf');
    }
  } catch (error) {
    console.error("Erreur lors de la capture de la section:", error);
  }
}


//Animation d'impression et de téléchargement
document.querySelector('.telechargement-btn').addEventListener('click', function() {
  showLoading();
  const downloadButton = this;
  downloadButton.disabled = true;
  downloadButton.style.opacity = '0.6';

  setTimeout(function() {
      hideLoading();
      downloadButton.disabled = false;
      downloadButton.style.opacity = '1';
      // Ajoutez votre logique de téléchargement ici
  }, 3000); // Ajustez selon la durée du téléchargement réel
});

document.querySelector('.imprimante-btn').addEventListener('click', function() {
  showLoading();
  const printButton = this; // Référence au bouton d'impression
  printButton.disabled = true;
  printButton.style.opacity = '0.6'; 

  // Simulate loading, and when the print action (handled elsewhere) is done, we hide the loading screen
  setTimeout(function() {
      hideLoading();
      printButton.disabled = false;
      printButton.style.opacity = '1';

      // Si votre fonction d'impression est gérée ailleurs et fonctionne déjà, ne faites rien ici
      // Simule simplement la fin du processus de chargement
      // Vous pouvez également inclure d'autres actions ici si nécessaire, comme la navigation ou une confirmation
  }, 3000); // Ajustez le délai si nécessaire pour correspondre au temps réel d'impression ou de téléchargement.
});


function showLoading() {
  document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

//  ASSISTANCE VOCALE :

                let currentInputIndex = 0;
                let inputs;
                let isProcessingCommand = false;
                let processedCommands = new Set(); // Ensemble des commandes déjà traitées
                let isVoiceCommand = false;

                // Liste des variations orthographiques pour chaque commande
                const commandSynonyms = {
                    "saignement vestibulaire": ["saignement vestibulaire", "saignements vestibulaires", "enseignement vestibulaire"],
                    "saignement mésial": ["saignement mésial", "saignements mésial", "méssial"],
                    // Ajoute des variations pour les autres commandes ici...
                };

                // Fonction pour normaliser la commande
                function normalizeCommand(command) {
                    for (let key in commandSynonyms) {
                        if (commandSynonyms[key].includes(command)) {
                            return key; // Retourne la commande normalisée
                        }
                    }
                    return command; // Si aucune variation n'est trouvée, retourne la commande originale
                }

                // Clé API Azure et région
                const subscriptionKey = "4d084ab2c53e4dbf9e491c0fe16507d6";
                const serviceRegion = "francecentral";

                // Initialiser le microphone
                function initialiserMicrophone() {
                if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    navigator.mediaDevices.getUserMedia({ audio: true })
                        .then((stream) => {
                            console.log("Accès au microphone accordé.");
                            startVoiceRecognition();
                        })
                        .catch((err) => {
                            console.error("Accès au microphone refusé ou bloqué :", err);
                            alert("L'accès au microphone est requis pour utiliser l'assistance vocale.");
                        });
                } else {
                    console.error("L'API getUserMedia n'est pas prise en charge par ce navigateur.");
                    alert("Votre navigateur ne prend pas en charge l'utilisation du microphone. Veuillez utiliser un navigateur compatible.");
                }
            }


                // Débloquer la synthèse vocale (haut-parleurs)
                function unlockAudioContext() {
                    document.body.addEventListener('click', () => {
                        const utterance = new SpeechSynthesisUtterance('');
                        speechSynthesis.speak(utterance);
                        console.log('Haut-parleurs débloqués via interaction utilisateur');
                    }, { once: true });
                }

              // Fonction pour gérer l'affichage du cercle de chargement
              function toggleLoadingSpinner(isVisible) {
                const spinner = document.getElementById('new-loading-spinner');
                if (spinner) {
                    spinner.style.display = isVisible ? 'block' : 'none'; // Afficher ou masquer le spinner
                }
              }

              // Démarrer la reconnaissance vocale
              function startVoiceRecognition() {
                const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
                speechConfig.speechRecognitionLanguage = "fr-FR";
                const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
                const recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

                // Afficher le cercle dès qu'un son est détecté
                recognizer.recognizing = (s, event) => {
                    console.log('Son détecté, affichage du cercle de chargement.');
                    toggleLoadingSpinner(true); // Afficher le cercle dès que du son est détecté
                };

                // Traiter les résultats de la reconnaissance
                recognizer.recognized = (s, event) => {
                    console.log('Texte reconnu:', event.result.text);
                    if (isProcessingCommand) return; // Empêcher le traitement multiple
                    const command = event.result.text.trim().toLowerCase();
                    processVoiceCommand(command); // Traiter la commande
                };

                recognizer.onerror = (event) => {
                    console.error('Erreur de reconnaissance vocale:', event.error);
                    toggleLoadingSpinner(false); // Masquer le cercle en cas d'erreur
                };

                recognizer.onend = () => {
                    console.log('Fin de la reconnaissance.');
                    setTimeout(() => recognizer.start(), 50); // Redémarrer la reconnaissance
                };

                recognizer.startContinuousRecognitionAsync();
              }



            // Empêcher l'extraction de valeurs lors d'une phrase quelconque 
              function extractNumericCommand(command) {
                // Convertir en minuscules et remplacer toute ponctuation (sauf lettres, chiffres, tirets et espaces) par des espaces.
                let normalized = command.toLowerCase().replace(/[^\w\- ]/g, " ").trim();
                console.log("Normalized command:", JSON.stringify(normalized));
              
                // Si la commande est composée uniquement de chiffres, on découpe en chiffres individuels.
                if (/^\d+$/.test(normalized)) {
                  const digits = normalized.split('');
                  console.log("Commande entièrement numérique sans espace, digits:", digits);
                  return digits;
                }
              
                // Découper en tokens par espaces
                let tokens = normalized.split(/\s+/).filter(token => token.length > 0);
              
                // Liste autorisée : nombres écrits (zéro à vingt) + "plus" et "moins"
                const allowedWords = new Set([
                  "retour", "suivant",
                  "plus", "moins",
                  "zéro", "un", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
                  "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize",
                  "dix-sept", "dix-huit", "dix-neuf", "vingt"
                ]);
              
                // Vérifier que chaque token est autorisé ou bien est purement numérique.
                // Sauf si le token contient des tirets et est composé uniquement de chiffres séparés par des tirets.
                for (let token of tokens) {
                  if (!allowedWords.has(token) && !/^\d+$/.test(token)) {
                    if (token.includes('-')) {
                      // Vérifier que ce token est composé uniquement de chiffres séparés par des tirets.
                      let parts = token.split('-').filter(p => p.length > 0);
                      if (!parts.every(part => /^\d+$/.test(part))) {
                        console.log("Token non autorisé :", token);
                        return [];
                      }
                    } else {
                      console.log("Token non autorisé :", token);
                      return [];
                    }
                  }
                }
              
                // Mapping des mots numériques en chiffres (sous forme de chaîne)
                const mapping = {
                  "zéro": "0",
                  "un": "1",
                  "une": "1",
                  "deux": "2",
                  "trois": "3",
                  "quatre": "4",
                  "cinq": "5",
                  "six": "6",
                  "sept": "7",
                  "huit": "8",
                  "neuf": "9",
                  "dix": "10",
                  "onze": "11",
                  "douze": "12",
                  "treize": "13",
                  "quatorze": "14",
                  "quinze": "15",
                  "seize": "16",
                  "dix-sept": "17",
                  "dix-huit": "18",
                  "dix-neuf": "19",
                  "vingt": "20"
                };
              
                const result = [];
                let currentSign = ""; // Signe en attente ("" par défaut, "+" ou "-" après détection)
              
                // Traiter les tokens dans l'ordre.
                for (let token of tokens) {
                  if (token === "plus") {
                    currentSign = "+"; // On prépare le signe positif
                  } else if (token === "moins") {
                    currentSign = "-"; // On prépare le signe négatif
                  } else if (allowedWords.has(token)) {
                    // Token autorisé (comme "dix-sept")
                    let num = mapping[token];
                    result.push(currentSign + num);
                    currentSign = ""; // réinitialiser le signe après usage
                  } else if (/^\d+$/.test(token)) {
                    // Token purement numérique
                    result.push(currentSign + token);
                    currentSign = "";
                  } else if (token.includes('-')) {
                    // Token contenant des tirets et composé uniquement de chiffres (exemple "1-2-3")
                    let parts = token.split('-').filter(p => p.length > 0);
                    for (let part of parts) {
                      if (/^\d+$/.test(part)) {
                        result.push(currentSign + part);
                      }
                    }
                    currentSign = ""; // On réinitialise après avoir traité le token composite
                  }
                }
                console.log("Tokens numériques extraits :", result);
                return result;
              }
              
              
                 
              
              function fillMultipleInputFields(values, command) {
                let currentInput = document.activeElement;
                console.log("Remplissage multiple des champs avec les valeurs :", values, "dans l'élément :", currentInput);
                if (currentInput && currentInput.tagName === 'INPUT' && currentInput.type === 'text') {
                  // Désactiver la lecture automatique pour éviter le bip issu de l'événement "input"
                  isVoiceCommand = true;
                  
                  // 1. Remplissage rapide de tous les champs sans déclencher de bip via l'écouteur
                  values.forEach(rawValue => {
                    let value = rawValue;
                    if (command && (command.includes("plus") || command.includes("+"))) {
                      console.log("Commande 'plus' détectée, valeur positive.");
                      value = Math.abs(value);
                    } else if (isNiveauGingivalLine(currentInput)) {
                      console.log("Valeur négative par défaut pour 'Niveau Gingival'.");
                      value = -Math.abs(value);
                    }
                    currentInput.value = value;
                    currentInput.dispatchEvent(new Event('input'));
                    simulateEnterKeyPress(currentInput); // Passage au champ suivant via ta logique existante
                    const nextInput = findNextVisibleInput(currentInput);
                    if (nextInput) {
                      nextInput.focus();
                      nextInput.select();
                      currentInput = nextInput;
                    }
                  });
                  
                  // 2. Lecture des bips en séquence avec un délai très court (1 ms)
                  (async () => {
                    for (let i = 0; i < values.length; i++) {
                      await playBipSoundAsync();
                      // Délai très court entre chaque bip (ajuste à 1 ms)
                      await new Promise(resolve => setTimeout(resolve, 1));
                    }
                    // Réactiver la lecture automatique une fois la séquence terminée
                    isVoiceCommand = false;
                  })();
                }
              }
              

              function playBipSoundAsync() {
                return new Promise(resolve => {
                  const audio = new Audio('./bip.mp3');
                  audio.addEventListener('ended', resolve);
                  audio.play().catch(err => {
                    console.error("Erreur lors de la lecture du bip:", err);
                    resolve();
                  });
                });
              }
               
         
              

              
                            
              


// Navigation par numéro de dent via assistance vocale
let lastTableId = "table-container"; // Garde en mémoire le dernier tableau utilisé

// Déterminer la ligne actuelle de l'utilisateur dans le tableau
function getCurrentRowIndex() {
  let activeElement = document.activeElement;
  if (!activeElement) return 1; // Par défaut, ligne 1

  let currentRow = activeElement.closest("tr");
  if (!currentRow) return 1; // Si aucune ligne détectée, retourner la première ligne

  let tableRows = Array.from(currentRow.parentElement.children);
  return tableRows.indexOf(currentRow);
}

function navigateToToothColumn(command, currentTableId) {
  // Reconnaissance de "dent" suivi d'un numéro (ou variante)
  const toothRegex = /\b(dent|dents|dans|d'en)\s*(?:num[eé]ro\s*)?(\d{2})\b/i;
  const match = command.match(toothRegex);
  if (!match) return;

  const toothNumber = parseInt(match[2], 10);
  if (toothNumber < 11 || toothNumber > 48) return;

  // Définir les deux groupes de tableaux
  const vestibulaireGroup = ["table-container", "second-table-container"];
  const lingualGroup = ["third-table-container", "quatre-table-container"];

  // Détecter les mots-clés dans la commande
  const isVestibulaire = /\b(vestibulaire|vestibulaires|vestiboulaire|vestiboulaires|vestibul|vestibule|vestibules)\b/i.test(command);
  const isLingualPalatin = /\b(lingual|linguals|linguale|linguales|palatin|palatins|paladin|paladins|l'ingual|l'angoisse)\b/i.test(command);

  // Si le tableau actif n'appartient pas à un groupe connu, utiliser le dernier mémorisé
  if (!vestibulaireGroup.includes(currentTableId) && !lingualGroup.includes(currentTableId)) {
    currentTableId = lastTableId;
  }

  // Définir allowedTables en fonction des mots-clés ou du groupe du tableau courant
  let allowedTables;
  if (isVestibulaire) {
    allowedTables = vestibulaireGroup;
  } else if (isLingualPalatin) {
    allowedTables = lingualGroup;
  } else {
    if (vestibulaireGroup.includes(currentTableId)) {
      allowedTables = vestibulaireGroup;
    } else if (lingualGroup.includes(currentTableId)) {
      allowedTables = lingualGroup;
    } else {
      allowedTables = vestibulaireGroup; // Par défaut
    }
  }

  // Association des numéros de dents aux colonnes pour chaque tableau
  const toothMapping = {
    "table-container": [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],
    "second-table-container": [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38],
    "third-table-container": [28, 27, 26, 25, 24, 23, 22, 21, 11, 12, 13, 14, 15, 16, 17, 18],
    "quatre-table-container": [38, 37, 36, 35, 34, 33, 32, 31, 41, 42, 43, 44, 45, 46, 47, 48]
  };

  let targetTableId = null;
  let toothIndex = null;
  let foundInCurrentTable = false;

  // Chercher d'abord dans le tableau courant du groupe
  if (allowedTables.includes(currentTableId)) {
    const numbers = toothMapping[currentTableId];
    const index = numbers.indexOf(toothNumber);
    if (index !== -1) {
      targetTableId = currentTableId;
      toothIndex = index;
      foundInCurrentTable = true;
    }
  }
  // Si non trouvé, chercher dans l'autre tableau du groupe
  if (!foundInCurrentTable) {
    for (const tableId of allowedTables) {
      if (tableId !== currentTableId) {
        const numbers = toothMapping[tableId];
        const index = numbers.indexOf(toothNumber);
        if (index !== -1) {
          targetTableId = tableId;
          toothIndex = index;
          break;
        }
      }
    }
  }

  if (!targetTableId || toothIndex === null) return;
  lastTableId = targetTableId; // Met à jour le dernier tableau utilisé

  // Déterminer la ligne actuelle
  let currentRowIndex = getCurrentRowIndex();
  if (currentRowIndex < 1) currentRowIndex = 1;

  // Sélectionner la cellule correspondante dans le tableau ciblé et y déplacer le focus
  const targetTable = document.getElementById(targetTableId);
  if (targetTable) {
    const targetRows = targetTable.querySelectorAll("tr");
    if (targetRows.length > currentRowIndex) {
      const selector = "td:nth-child(" + (toothIndex + 1) + ") input, td:nth-child(" + (toothIndex + 1) + ") select";
      const targetCells = targetRows[currentRowIndex].querySelectorAll(selector);
      if (targetCells.length > 0) {
        targetCells[0].focus();
      }
    }
  }
}

// Navigation verticale dans une même colonne
function navigateVertically(command) {
  // Pour les commandes de récession/niveau (vers la deuxième ligne) et profondeur (vers la troisième ligne)
  const recessionRegex = /\b(r[ée]cession|niveau|gencive)\b/i;
  const profondeurRegex = /\b(profondeur|poche|sondage)\b/i;
  
  let targetRowIndex;
  if (recessionRegex.test(command)) {
    targetRowIndex = 1; // La deuxième ligne (index 1)
  } else if (profondeurRegex.test(command)) {
    targetRowIndex = 2; // La troisième ligne (index 2)
  } else {
    return; // Pas de commande verticale détectée
  }
  
  // Obtenir l'élément actuellement actif
  let activeElement = document.activeElement;
  if (!activeElement) return;
  
  // Récupérer la cellule et la ligne courante
  let currentCell = activeElement.closest("td");
  if (!currentCell) return;
  let currentRow = currentCell.parentElement;
  let allRows = Array.from(currentRow.parentElement.children);
  let currentRowIndex = allRows.indexOf(currentRow);
  
  // Si on est déjà sur la ligne cible, ne rien faire
  if (currentRowIndex === targetRowIndex) return;
  
  // Déterminer l'indice du champ dans la cellule (si plusieurs champs existent)
  let fields = Array.from(currentCell.querySelectorAll("input, select"));
  let fieldIndex = fields.indexOf(activeElement);
  
  // Obtenir le tableau courant
  let table = currentRow.closest("table");
  if (!table) return;
  
  // Obtenir la ligne cible dans le tableau
  let rows = Array.from(table.querySelectorAll("tr"));
  if (rows.length <= targetRowIndex) return;
  let targetRow = rows[targetRowIndex];
  
  // Déterminer l'indice de la cellule (colonne) courante
  let cells = Array.from(currentRow.children);
  let cellIndex = cells.indexOf(currentCell);
  
  // Dans la ligne cible, sélectionner la cellule de la même colonne
  let targetCells = targetRow.children;
  if (cellIndex >= targetCells.length) return;
  let targetCell = targetCells[cellIndex];
  if (!targetCell) return;
  
  // Sélectionner le champ (input/select) dans la cellule cible avec le même indice
  let targetFields = Array.from(targetCell.querySelectorAll("input, select"));
  let targetElement = targetFields[fieldIndex] || targetFields[0];
  if (targetElement) {
    targetElement.focus();
  }
}

// Traiter les commandes vocales
function processVoiceCommand(command) {
  console.log("Commande à traiter:", command);
  isProcessingCommand = true;
  const normalizedCommand = normalizeCommand(command);

  // Gestion explicite des commandes "retour" et "suivant"
  if (normalizedCommand.includes("retour")) {
      focusPreviousInput(); // Déplacement vers le champ précédent
      playErrorSound();     // Jouer le bip après le déplacement
      toggleLoadingSpinner(false);
      isProcessingCommand = false;
      return;
  } else if (normalizedCommand.includes("suivant")) {
      moveToNextInput();    // Déplacement vers le champ suivant
      playErrorSound();     // Jouer le bip après le déplacement
      toggleLoadingSpinner(false);
      isProcessingCommand = false;
      return;
  }

  // Navigation verticale (ex : récession, niveau, gencive, profondeur, poche, sondage)
  const verticalRegex = /\b(r[ée]cession|niveau|gencive|profondeur|poche|sondage)\b/i;
  if (verticalRegex.test(command)) {
      navigateVertically(command);
      toggleLoadingSpinner(false);
      playErrorSound();
      isProcessingCommand = false;
      return;
  }
  
  // Navigation par numéro de dent
  const navigationRegex = /\b(dent|dents|dans|d'en)\s*(?:num[eé]ro\s*)?(\d{2})\b/i;
  if (navigationRegex.test(command)) {
      const activeTable = document.activeElement.closest("table");
      let currentTableId = activeTable ? activeTable.id : lastTableId;
      const vestibulaireGroup = ["table-container", "second-table-container"];
      const lingualGroup = ["third-table-container", "quatre-table-container"];
      if (!vestibulaireGroup.includes(currentTableId) && !lingualGroup.includes(currentTableId)) {
          currentTableId = lastTableId;
      }
      navigateToToothColumn(command, currentTableId);
      toggleLoadingSpinner(false);
      playErrorSound();
      isProcessingCommand = false;
      return;
  }
  
  // Gestion des commandes concernant les cases à cocher ("saignement" ou "plaque")
  if (command.match(/saignement|plaque/i)) {
      handleCheckboxCommand(command);
      toggleLoadingSpinner(false);
      isProcessingCommand = false;
      return;
  }
  
  // Extraction et traitement des commandes numériques
  const numericValues = extractNumericCommand(normalizedCommand);
  if (numericValues.length > 1) {
      fillMultipleInputFields(numericValues, normalizedCommand);
  } else if (numericValues.length === 1) {
      fillInputFields(numericValues, normalizedCommand);
  } else {
      console.log("Commande non numérique complète :", normalizedCommand);
  }
  
  toggleLoadingSpinner(false);
  isProcessingCommand = false;
}

  

              
              

            //Passer au champ suivant
            function moveToNextInput() {
              const activeElement = document.activeElement;
              if (activeElement && activeElement.tagName === 'INPUT' && activeElement.type === 'text') {
                  const nextInput = findNextVisibleInput(activeElement); // Trouve le prochain champ de saisie visible
                  if (nextInput) {
                      nextInput.focus();
                      nextInput.select(); // Sélectionne le contenu du champ
                  } else {
                      console.log("Aucun champ suivant disponible.");
                  }
              } else {
                  console.log("Aucun champ actif détecté.");
              }
          }
          
            


            // Remplir les champs de saisie avec gestion des signes
            function fillInputFields(values, command) {
              const activeElement = document.activeElement;
              console.log("Remplissage du champ avec la valeur:", values[0], "dans l'élément:", activeElement);
            
              if (activeElement && activeElement.tagName === 'INPUT' && activeElement.type === 'text') {
                  // Pour une seule valeur, on s'assure que isVoiceCommand est false pour que l'écouteur 'input' déclenche le bip
                  isVoiceCommand = false;
            
                  let value = values[0];
            
                  if (command && (command.includes("plus") || command.includes("+"))) {
                      console.log("Commande 'plus' détectée, valeur positive.");
                      value = Math.abs(value);
                  } else if (isNiveauGingivalLine(activeElement)) {
                      console.log("Valeur négative par défaut pour 'Niveau Gingival'.");
                      value = -Math.abs(value);
                  }
            
                  activeElement.value = value;
                  activeElement.dispatchEvent(new Event('input'));
                  
                  // On simule l'appui sur "Enter" pour passer au champ suivant
                  simulateEnterKeyPress(activeElement);
              }
            }
            
          


                // Vérifie si le champ actif est dans la deuxième ligne (Niveau Gingival)
                function isNiveauGingivalLine(inputElement) {
                    const row = inputElement.closest('tr');
                    const rowIndex = row.rowIndex; // Indice de la ligne dans le tableau
                    return rowIndex === 1; // Cible spécifiquement la deuxième ligne du tableau
                }

                // Simuler la touche "Entrée"
                function simulateEnterKeyPress(inputElement) {
                    console.log("Simulation de la touche 'Entrée' dans l'élément:", inputElement);
                    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
                    inputElement.dispatchEvent(event);
                }

            // Ajoutez cette fonction pour calculer le pourcentage de plaque
            function calculatePlaquePercentage2() {
              const plaqueCheckboxes = document.querySelectorAll('.custom-checkbox2');
              const visiblePlaqueCheckboxes = Array.from(plaqueCheckboxes).filter(checkbox => {
                  return getComputedStyle(checkbox.closest('td')).visibility !== 'hidden';
              });
              const checkedPlaqueCheckboxes = visiblePlaqueCheckboxes.filter(checkbox => checkbox.checked).length;
          
              const percentage = (checkedPlaqueCheckboxes / visiblePlaqueCheckboxes.length) * 100;
              return visiblePlaqueCheckboxes.length ? percentage.toFixed(2) : '0.00'; // Retourne le pourcentage avec 2 décimales
          }
          

            // Mettez à jour le pourcentage de plaque dans le DOM et remplissez la barre de progression
            function updatePlaquePercentage2() {
              const percentage = calculatePlaquePercentage2();
              document.getElementById('plaque-percentage').textContent = `${percentage}%`;
          
              const plaqueBar = document.getElementById('plaque-bar');
              plaqueBar.style.width = `${percentage}%`; // Ajuste la largeur de la barre en fonction du pourcentage
              plaqueBar.setAttribute('aria-valuenow', percentage);
          }
          

            // Ajoutez cette fonction pour calculer le pourcentage de saignement
            function calculateSaignementPercentage2() {
              const saignementCheckboxes = document.querySelectorAll('.custom-checkbox3');
              const visibleSaignementCheckboxes = Array.from(saignementCheckboxes).filter(checkbox => {
                  return getComputedStyle(checkbox.closest('td')).visibility !== 'hidden';
              });
              const checkedSaignementCheckboxes = visibleSaignementCheckboxes.filter(checkbox => checkbox.checked).length;
          
              const percentage = (checkedSaignementCheckboxes / visibleSaignementCheckboxes.length) * 100;
              return visibleSaignementCheckboxes.length ? percentage.toFixed(2) : '0.00'; // Retourne le pourcentage avec 2 décimales
          }
          

            // Mettez à jour le pourcentage de saignement dans le DOM et remplissez la barre de progression
            function updateSaignementPercentage2() {
              const percentage = calculateSaignementPercentage2();
              document.getElementById('saignement-percentage').textContent = `${percentage}%`;
          
              const saignementBar = document.getElementById('saignement-bar');
              saignementBar.style.width = `${percentage}%`; // Ajuste la largeur de la barre en fonction du pourcentage
              saignementBar.setAttribute('aria-valuenow', percentage);
          }



          function updateTotalCheckboxCounts() {
            const visiblePlaqueCheckboxes = Array.from(document.querySelectorAll('.custom-checkbox2')).filter(cb => getComputedStyle(cb.closest('td')).visibility !== 'hidden');
            const visibleSaignementCheckboxes = Array.from(document.querySelectorAll('.custom-checkbox3')).filter(cb => getComputedStyle(cb.closest('td')).visibility !== 'hidden');
        
            const totalVisiblePlaque = visiblePlaqueCheckboxes.length;
            const totalVisibleSaignement = visibleSaignementCheckboxes.length;
        
        
            updatePlaquePercentage(); // Update plaque percentage with visible checkboxes
            updateSaignementPercentage(); // Update saignement percentage with visible checkboxes
            updatePlaquePercentage2(); // Update plaque percentage for the voice assistant
            updateSaignementPercentage2(); // Update saignement percentage for the voice assistant
        }
        


        document.addEventListener('DOMContentLoaded', function() {
          updatePlaquePercentage();
          updateSaignementPercentage();
          updatePlaquePercentage2(); // Mettez à jour le pourcentage de plaque
          updateSaignementPercentage2(); // Mettez à jour le pourcentage de saignement
          updateTotalCheckboxCounts(); // Initialisez le total des cases visibles
      });
      
        
          

            // Gérer les cases à cocher via commandes vocales
            function handleCheckboxCommand(command) {
              console.log("Commande détectée pour case à cocher:", command);
          
              // Cartographie par défaut avec un ensemble étendu de synonymes pour chaque terme
              const defaultPositionMap = {
                  // Pour "mésial"
                  'mésio': 2, 'mésial': 2, 'méial': 2, 'méiale': 2, 'média': 2,'megal': 2,'megale': 2,'mégal': 2,'mégale': 2,'media': 2, 'méziale': 2, 'métiale': 2, 'méssiale': 2, 'mézial': 2,
                  'médiale': 2, 'médiatl': 2, 'mondial': 2, 'mondiale': 2, 'média': 2, 'm dia': 2,
                  // Pour "vestibulaire"
                  'vestibulaire': 1, 'vestibulaires': 1, 'vestiboulaire': 1, 'vestiboulaires': 1, 'vestibul': 1, 'vestibule': 1, 'vestibules': 1,
                  // Pour "palatin"
                  'palatin': 1, 'palatine': 1, 'palatins': 1, 'palatines': 1,
                  // Pour "lingual"
                  'lingual': 1, 'linguale': 1, 'linguales': 1,
                  // Pour "distal"
                  'disto': 0, 'distal': 0, 'distale': 0, 'distales': 0,
                  'dissale': 0, 'dissal': 0, 'disal': 0, 'disale': 0
              };
          
              // Cartographie modifiée (selon le contexte de la colonne)
              const modifiedPositionMap = {
                  // Pour "mésial"
                  'mésio': 0, 'mésial': 0, 'méial': 0, 'média': 0, 'media': 0, 'méiale': 0,'megal': 0,'megale': 0,'mégal': 0,'mégale': 0, 'méziale': 0, 'métiale': 0, 'méssiale': 0, 'mézial': 0,
                  'médiale': 0, 'médiatl': 0, 'mondial': 0, 'mondiale': 0, 'média': 0, 'm dia': 0,
                  // Pour "vestibulaire"
                  'vestibulaire': 1, 'vestibulaires': 1, 'vestiboulaire': 1, 'vestiboulaires': 1, 'vestibul': 1, 'vestibule': 1, 'vestibules': 1,
                  // Pour "palatin"
                  'palatin': 1, 'palatine': 1, 'palatins': 1, 'palatines': 1,
                  // Pour "lingual"
                  'lingual': 1, 'linguale': 1, 'linguales': 1,
                  // Pour "distal"
                  'disto': 2, 'distal': 2, 'distale': 2, 'distales': 2,
                  'dissale': 2, 'dissal': 2, 'disal': 2, 'disale': 2
              };
          
              // Extraction des identifiants de position avec l'ensemble des variantes (en insensible à la casse)
              const positionIdentifiers = command.match(/(mésio|mésial|méial|média|mégale|mégal|mégale|megal|megale|méziale|métiale|méssiale|mézial|médiale|médiatl|mondial|mondiale|media|m dia|vestibulaire|vestibulaires|vestiboulaire|vestiboulaires|vestibul|vestibule|vestibules|palatin|palatine|palatins|palatines|lingual|linguale|linguales|disto|distal|distale|distales|dissale|dissal|disal|disale)/gi);
              
              // Extraction du type de ligne pour la commande (pour "saignement" et ses variantes, et "plaque" et ses variantes)
              const rowIdentifier = command.match(/(saignement|saignements|seignement|ça me manque|ça me ment|sa me manque|sa me ment|plaque|plaques|blague|plat)/i);
          
              if (positionIdentifiers && rowIdentifier) {
                  console.log("Commande case détectée:", rowIdentifier[0], positionIdentifiers);
                  const table = document.activeElement.closest('table');
                  const columnIdx = document.activeElement.closest('td').cellIndex;
                  // Pour "plaque" on cible la ligne 5, sinon pour "saignement" la ligne 4
                  const rowIdx = rowIdentifier[0].toLowerCase().includes("plaque") ||
                                 rowIdentifier[0].toLowerCase().includes("blague") ||
                                 rowIdentifier[0].toLowerCase().includes("plat")
                                 ? 5 : 4;
                  const targetRow = table.querySelector(`tr:nth-child(${rowIdx})`);
                  const targetCell = targetRow.querySelector(`td:nth-child(${columnIdx + 1})`);
                  const checkboxes = targetCell.querySelectorAll('input[type="checkbox"]');
          
                  positionIdentifiers.forEach((identifier) => {
                      const posId = identifier.toLowerCase();
                      const positionIdx = columnIdx >= 8 ? modifiedPositionMap[posId] : defaultPositionMap[posId];
                      if (checkboxes && checkboxes[positionIdx]) {
                          checkboxes[positionIdx].checked = !checkboxes[positionIdx].checked;
                          checkboxes[positionIdx].dispatchEvent(new Event('change'));
                          console.log("Case", identifier, "cochée/décochée.");
                      }
                  });
          
                  setTimeout(() => {
                      if (rowIdentifier[0].toLowerCase().includes("saignement") ||
                          rowIdentifier[0].toLowerCase().includes("seignement") ||
                          rowIdentifier[0].toLowerCase().includes("ça me manque") ||
                          rowIdentifier[0].toLowerCase().includes("Ca me manque") ||
                          rowIdentifier[0].toLowerCase().includes("ca me ment") ||
                          rowIdentifier[0].toLowerCase().includes("ça me ment") ||
                          rowIdentifier[0].toLowerCase().includes("sa me manque") ||
                          rowIdentifier[0].toLowerCase().includes("sa me ment")) {
                          updateSaignementPercentage2();
                      } else if (rowIdentifier[0].toLowerCase().includes("plaque") ||
                                 rowIdentifier[0].toLowerCase().includes("blague") ||
                                 rowIdentifier[0].toLowerCase().includes("plat")) {
                          updatePlaquePercentage2();
                      }
                  }, 0);
          
                  (async () => {
                    for (let i = 0; i < positionIdentifiers.length; i++) {
                      await playBipSoundAsync();
                    }
                  })();              }
          }
          



                // Fonction pour jouer un son de error
                function playErrorSound() {
                  const audio = new Audio('./error.mp3'); // Assurez-vous que le fichier bip.mp3 est dans le bon répertoire
                  audio.play().catch((err) => {
                      console.error("Erreur lors de la lecture du bip:", err);
                  });
                }

                // Fonction pour jouer un son de bip
                function playBipSound() {
                  const audio = new Audio('./bip.mp3'); // Assurez-vous que le fichier bip.mp3 est dans le bon répertoire
                  audio.play().catch((err) => {
                      console.error("Erreur lors de la lecture du bip:", err);
                  });
                }


                // Prononcer la valeur
                function speakValue(value) {
                console.log("Bip pour la valeur:", value);
                playBipSound();
              }

                // Prononcer la commande
                function speakCommand(command) {
                console.log("Bip pour la commande:", command);
                playBipSound();
              }



                // Déplacer le focus vers le champ précédent
                function focusPreviousInput() {
                const currentInput = document.activeElement;
                const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
                const currentIndex = inputs.indexOf(currentInput);

                if (currentIndex <= 0) {
                    console.log("Vous êtes déjà sur le premier élément.");
                    return;
                }

                const previousInput = inputs[currentIndex - 1];
                const currentCell = currentInput.closest('td');
                const previousCell = previousInput.closest('td');

                // Cas normal : champ précédent dans la même cellule ou cellule visible
                if (previousCell && getComputedStyle(previousCell).display !== 'none' && previousCell === currentCell) {
                    console.log("Retour au champ précédent immédiat:", previousInput);
                    previousInput.focus();
                    previousInput.select();
                    return;
                }

                // Cas avec colonne masquée : aller au dernier champ de la cellule précédente visible
                for (let i = currentIndex - 1; i >= 0; i--) {
                    const potentialPreviousInput = inputs[i];
                    const potentialPreviousCell = potentialPreviousInput.closest('td');

                    if (potentialPreviousCell && getComputedStyle(potentialPreviousCell).display !== 'none' && potentialPreviousCell !== currentCell) {
                        const visibleInputs = Array.from(potentialPreviousCell.querySelectorAll('input[type="text"]')).filter(input => getComputedStyle(input).visibility !== 'hidden');
                        if (visibleInputs.length > 0) {
                            const lastVisibleInput = visibleInputs[visibleInputs.length - 1];
                            console.log("Retour au dernier champ visible dans la cellule précédente:", lastVisibleInput);
                            lastVisibleInput.focus();
                            lastVisibleInput.select();
                            return;
                        }
                    }
                }

                console.log("Aucun élément précédent visible trouvé.");
            }


                // Initialisation des champs de saisie
                document.addEventListener('DOMContentLoaded', () => {
                    inputs = document.querySelectorAll('input[type="text"]');
                    unlockAudioContext();
                    initialiserMicrophone();

                    inputs.forEach((input, index) => {
                        input.addEventListener('focus', () => {
                            console.log("Focus sur l'élément d'index:", index);
                            currentInputIndex = index;
                        });
                        input.addEventListener('input', function() {
                          if (!isVoiceCommand) {
                            speakValue(this.value);
                          }
                        });                        
                        input.addEventListener('keydown', (event) => {
                            if (event.key === 'Enter') {
                                let nextInput = findNextVisibleInput2(input);
                                if (nextInput) {
                                    console.log("Focus sur l'élément suivant:", nextInput);
                                    nextInput.focus();
                                    nextInput.select();
                                } else {
                                    const targetRowIndex = input.closest('tr').rowIndex;
                                    const currentTableIndex = tableContainers.indexOf(input.closest('table').parentNode.id);
                                    nextInput = findFirstVisibleInputInNextTable2(currentTableIndex, targetRowIndex);
                                    if (nextInput) {
                                        console.log("Focus sur l'élément dans la table suivante:", nextInput);
                                        nextInput.focus();
                                        nextInput.select();
                                    }
                                }
                            }
                        });
                    });
                });

                // Navigation entre les champs de saisie
                function findNextVisibleInput2(currentInput) {
                const inputs = Array.from(document.querySelectorAll('input[type="text"]')); // Liste de tous les champs
                const currentIndex = inputs.indexOf(currentInput); // Obtenir l'index du champ actuel

                // Vérifie le champ suivant dans l'ordre du DOM
                for (let i = currentIndex + 1; i < inputs.length; i++) {
                    const nextInput = inputs[i];
                    if (nextInput && getComputedStyle(nextInput).visibility !== 'hidden') {
                        return nextInput;
                    }
                }
                return null;
            }


                function findFirstVisibleInputInNextTable2(currentTableIndex, targetRowIndex) {
                    const nextTableIndex = getNextTableIndex2(currentTableIndex);
                    const nextTableContainer = document.getElementById(tableContainers[nextTableIndex]);
                    let nextInput = nextTableContainer.querySelector(`tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([style*="visibility: hidden"])`);
                    if (!nextInput) nextInput = nextTableContainer.querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
                    return nextInput;
                }

                function getNextTableIndex2(currentTableIndex) {
                    return (currentTableIndex + 1) % tableContainers.length;
                }




                