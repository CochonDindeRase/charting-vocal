// Fonctions pour restituer les images
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
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
    ["18", "17", "16", "15", "14", "13", "12", "11", "21", "22", "23", "24", "25", "26", "27", "28", "Num dent"],
  ];

  const espacementData1 = [
    23, 23, 8, 24, 24, 14, 26, 26, 10, 17, 17, 12, 19, 19, 12, 20, 20, 16, 17, 17, 12, 24, 22, 8, 24, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
  ];
  
  const espacementData2 = [
    25, 25, 13, 30, 28, 17, 30, 30, 16, 17, 17, 16, 19, 19, 16, 18, 19, 16, 17, 16, 12, 14, 13, 11, 14, 14, 12, 17, 17, 16, 19, 18, 16, 19, 19, 16, 17, 17, 16, 30, 30, 17, 28, 30, 13, 25, 25
  ];
  
  const espacementData3 = [
    23, 23, 8, 24, 24, 14, 26, 25, 9, 17, 17, 12, 19, 18, 12, 19, 19, 16, 17, 17, 12, 23, 24, 10, 23, 23, 12, 17, 17, 16, 20, 20, 11, 19, 18, 12, 17, 17, 9, 26, 26, 14, 24, 24, 8, 23, 23
  ];
  
  const espacementData4 = [
    25, 25, 13, 30, 28, 17, 30, 33, 16, 17, 17, 16, 19, 19, 16, 18, 19, 16, 17, 16, 13, 13, 13, 14, 13, 14, 13, 17, 17, 16, 19, 18, 16, 19, 19, 16, 17, 17, 16, 31, 30, 17, 28, 30, 13, 25, 25
  ];
  
  
  // Tableau dents maxillaire vestibulaire
  createTable('table-container', data);

  
  // Fonction générique pour créer un tableau
  function createTable(containerId, tableData) {
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

          // Si nous sommes à la dernière ligne, celle avec les numéros de dents
          if (i === tableData.length - 1) {
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function() {
                const dentNumber = cell.innerText;
                const imageElement = document.getElementById(`image-${dentNumber}`);
                if (imageElement) {
                    imageElement.style.display = 'none';
                }
            });
        }

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
  
  // Création tableau pour les dents maxillaires
      // données pour le tableau
      const data3 = [
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Mobilité"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Furcation"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Implant"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
        ["28", "27", "26", "25", "24", "23", "22", "21", "11", "12", "13", "14", "15", "16", "17", "18", "Num dent"],
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

          // Si nous sommes à la dernière ligne, celle avec les numéros de dents
          if (i === tableData.length - 1) {
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function() {
                const dentNumber = cell.innerText;
                const imageElement = document.getElementById(`image-${dentNumber}`);
                if (imageElement) {
                    imageElement.style.display = 'none';
                }
            });
        }
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
    ["48", "47", "46", "45", "44", "43", "42", "41", "31", "32", "33", "34", "35", "36", "37", "38", "Num dent"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
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

          // Si nous sommes à la dernière ligne, celle avec les numéros de dents
          if (i === tableData.length - 1) {
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function() {
                const dentNumber = cell.innerText;
                const imageElement = document.getElementById(`image-${dentNumber}`);
                if (imageElement) {
                    imageElement.style.display = 'none';
                }
            });
        }
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
    ["38", "37", "36", "35", "34", "33", "32", "31", "41", "42", "43", "44", "45", "46", "47", "48", "Num dent"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Niveau Gingival"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Profondeur Sondage"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Saignement"],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Plaque"],
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

          // Si nous sommes à la dernière ligne, celle avec les numéros de dents
          if (i === tableData.length - 1) {
            cell.style.cursor = 'pointer';
            cell.addEventListener('click', function() {
                const dentNumber = cell.innerText;
                const imageElement = document.getElementById(`image-${dentNumber}`);
                if (imageElement) {
                    imageElement.style.display = 'none';
                }
            });
        }

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
      const linkedRows = Array.from(linkedTable.querySelectorAll('tr')); // Toutes les lignes du tableau lié

      // Identifier la ligne contenant les numéros
      const isFirstRowNumberLinked = linkedTableId === 'second-table-container' || linkedTableId === 'quatre-table-container';
      const linkedNumberRow = isFirstRowNumberLinked ? linkedRows[0] : linkedRows[linkedRows.length - 1];

      if (linkedNumberRow) {
          const linkedCells = Array.from(linkedNumberRow.children);
          const linkedCellIndex = linkedCells.length - 2 - cellIndex; // Index inversé en ignorant la dernière cellule

          // Vérifier que l'indice calculé est valide
          if (linkedCellIndex >= 0 && linkedCellIndex < linkedCells.length) {
              const linkedCell = linkedCells[linkedCellIndex];

              // Mettre à jour la colonne liée
              const linkedCellsToUpdate = linkedTable.querySelectorAll(`tr td:nth-child(${linkedCellIndex + 1}), tr th:nth-child(${linkedCellIndex + 1})`);
              const linkedImageId = `${linkedPrefix}img-${linkedCell.innerText.trim()}`;
              const linkedImageElement = document.getElementById(linkedImageId);

              linkedCellsToUpdate.forEach(cell => {
                  if (cell === linkedCell) {
                      // Texte barré pour la cellule liée
                      cell.style.textDecoration = isContentVisible ? '' : 'line-through';
                      cell.dataset.contentVisible = !isContentVisible;
                      cell.style.visibility = ''; // Toujours visible
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
        // Assurez-vous que cette fonction est appelée une fois que tous vos tableaux sont créés
        attachClickHandlers();


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
function findNextVisibleInput(startCell) {
let nextCell = startCell;
while (nextCell) {
  nextCell = nextCell.nextElementSibling;
  if (nextCell && nextCell.querySelector('input[type="text"]') && getComputedStyle(nextCell.querySelector('input[type="text"]')).visibility !== 'hidden') {
    return nextCell.querySelector('input[type="text"]');
  }
}
return null;
}

// Fonction pour trouver le premier champ de saisie visible dans le tableau suivant
function findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex) {
  const nextTableIndex = getNextTableIndex(currentTableIndex);
  const nextTableContainer = document.getElementById(tableContainers[nextTableIndex]);
  
  // Recherche du premier champ visible dans la ligne spécifiée
  let nextInput = nextTableContainer.querySelector(
      `tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([style*="visibility: hidden"]), 
       tr:nth-child(${targetRowIndex + 1}) td input[type="text"]:not([hidden])`
  );

  // Si aucun champ n'est trouvé dans la ligne, recherche dans l'ensemble du tableau
  if (!nextInput) {
      nextInput = nextTableContainer.querySelector(
          'tr td input[type="text"]:not([style*="visibility: hidden"]), tr td input[type="text"]:not([hidden])'
      );
  }
  return nextInput;
}

// Fonction mise à jour pour calculer et afficher le pourcentage de plaque
function calculateAndDisplayPlaquePercentage() {
  const plaqueCheckboxes = document.querySelectorAll('.custom-checkbox2');
  const visiblePlaqueCheckboxes = Array.from(plaqueCheckboxes).filter(checkbox => {
      return getComputedStyle(checkbox.closest('td')).visibility !== 'hidden';
  });
  const checkedPlaqueCheckboxes = visiblePlaqueCheckboxes.filter(checkbox => checkbox.checked).length;
  const percentage = (checkedPlaqueCheckboxes / visiblePlaqueCheckboxes.length) * 100;

  return visiblePlaqueCheckboxes.length ? percentage.toFixed(2) : '0.00';
}

function updatePlaquePercentage() {
  const percentage = calculateAndDisplayPlaquePercentage();
  document.getElementById('plaque-percentage').textContent = `${percentage}%`;
  const plaqueBar = document.getElementById('plaque-bar');
  plaqueBar.style.width = `${percentage}%`;
  plaqueBar.setAttribute('aria-valuenow', percentage);
}

// Écoute des changements pour mettre à jour le pourcentage de plaque
document.addEventListener('change', function(event) {
  if (event.target.classList.contains('custom-checkbox2')) {
      updatePlaquePercentage();
  }
});

// Calcul initial du pourcentage de plaque au chargement
document.addEventListener('DOMContentLoaded', updatePlaquePercentage);

// Fonction pour calculer et afficher le pourcentage de saignement
function calculateAndDisplaySaignementPercentage() {
  const saignementCheckboxes = document.querySelectorAll('.custom-checkbox3');
  const visibleSaignementCheckboxes = Array.from(saignementCheckboxes).filter(checkbox => {
      return getComputedStyle(checkbox.closest('td')).visibility !== 'hidden';
  });
  const checkedSaignementCheckboxes = visibleSaignementCheckboxes.filter(checkbox => checkbox.checked).length;
  const percentage = (checkedSaignementCheckboxes / visibleSaignementCheckboxes.length) * 100;

  return visibleSaignementCheckboxes.length ? percentage.toFixed(2) : '0.00';
}

function updateSaignementPercentage() {
  const percentage = calculateAndDisplaySaignementPercentage();
  document.getElementById('saignement-percentage').textContent = `${percentage}%`;
  const saignementBar = document.getElementById('saignement-bar');
  saignementBar.style.width = `${percentage}%`;
  saignementBar.setAttribute('aria-valuenow', percentage);
}

// Écoute des changements pour mettre à jour le pourcentage de saignement
document.addEventListener('change', function(event) {
  if (event.target.classList.contains('custom-checkbox3')) {
      updateSaignementPercentage();
  }
});

// Calcul initial du pourcentage de saignement au chargement
document.addEventListener('DOMContentLoaded', updateSaignementPercentage);


// Fonction de synchronisation des cellules
function synchronizeCells() {
  const tableMappings = [
      {
          tables: ["#table-container", "#third-table-container"],
          rowsToSync: {
              "mobilité": 0, // Première ligne
              "implant": 2  // Troisième ligne
          }
      },
      {
          tables: ["#second-table-container", "#quatre-table-container"],
          rowsToSync: {
              "mobilité": 7, // Huitième ligne
              "implant": 5  // Sixième ligne
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
  input.classList.add('small-input', 'direct-input'); // Ajoutez des classes spéciales

  // Ajoutez un gestionnaire d'événements de clic pour sélectionner tout le texte au clic
  input.addEventListener('click', function () {
    this.select();
  });

  // Ajoutez un gestionnaire d'événements pour la touche "Entrée"
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      // Passez au champ suivant s'il y en a un dans la même cellule
      if (i < count - 1) {
        textInputs[i + 1].focus();
        textInputs[i + 1].select(); // Sélectionnez automatiquement la valeur prédéfinie suivante
      } else {
        // Essayez de passer à la cellule suivante dans la même ligne
        let nextCellInput = findNextVisibleInput(input.parentNode);
        if (nextCellInput) {
          nextCellInput.focus();
          nextCellInput.select();
        } else {
          // Si c'est la dernière cellule, passez au tableau suivant en tenant compte des lignes spéciales
          let targetRowIndex = rowIndex;
          const currentTableIndex = tableIndex;

          // Gestion des lignes spécifiques pour "Profondeur Sondage" et "Niveau Gingival"
          if ((currentTableIndex === 0 || currentTableIndex === 2) && rowIndex === 5) { // Profondeur Sondage 6ème ligne des tableaux 1 et 3
            targetRowIndex = 2;
          } else if ((currentTableIndex === 1 || currentTableIndex === 3) && rowIndex === 2) { // Profondeur Sondage 3ème ligne des tableaux 2 et 4
            targetRowIndex = 5;
          } else if ((currentTableIndex === 0 || currentTableIndex === 2) && rowIndex === 6) { // Niveau Gingival 7ème ligne des tableaux 1 et 3
            targetRowIndex = 1;
          } else if ((currentTableIndex === 1 || currentTableIndex === 3) && rowIndex === 1) { // Niveau Gingival 2ème ligne des tableaux 2 et 4
            targetRowIndex = 6;
          }

          // Cas spécifique pour le quatrième tableau
          if (currentTableIndex === 3 && rowIndex === 2) { // Dernier champ de Profondeur Sondage du quatrième tableau
            targetRowIndex = 6; // Aller à la ligne Niveau Gingival du premier tableau
          } else if (currentTableIndex === 3 && rowIndex === 1) { // Dernier champ de Niveau Gingival du quatrième tableau
            targetRowIndex = 5; // Aller à la ligne Profondeur Sondage du premier tableau
          }

          const nextInput = findFirstVisibleInputInNextTable(currentTableIndex, targetRowIndex);
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          } else {
            // Si le champ suivant n'est pas trouvé dans la ligne cible, passez à la première cellule visible du tableau suivant
            const firstInputNextTable = nextTableContainer.querySelector('tr td input[type="text"]:not([style*="visibility: hidden"])');
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
        let hasMinus = false; // Ajout d'une variable pour suivre la présence du signe "-"
    
        textInputs[k].addEventListener('input', function () {
          let enteredValue = textInputs[k].value.trim();
    
          // Ajoutez automatiquement le signe "-" après que l'utilisateur est entrée une valeur avec possibilité de l'enlever avant d'entrer la valeur
          if (!hasMinus && enteredValue !== '' && enteredValue !== '-' && !/^-/.test(enteredValue)) {
            enteredValue = '-' + enteredValue;
            textInputs[k].value = enteredValue;
            hasMinus = true;
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
    
            // Mettez à jour le graphique lorsque la valeur du champ de saisie change
            updateChart(j + k - 1, '1');
          }
        });

        cell.appendChild(textInputs[k]);
      }
      cell.classList.add('full-width-cell'); // Ajoutez la classe à la cellule
      cell.classList.add('full-width-cell', 'text-center'); // Ajoutez la classe à la cellule
    }
    else {
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

// Ajoutez des écouteurs pour les colonnes masquées
document.addEventListener('DOMContentLoaded', function() {
attachClickHandlers();
});



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
      lines: [] // (à mettre pour afficher grilles verticales) spacings.map((value, index) => ({ value: value, text: '' })) // Ajoutez les lignes verticales
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


//Effet survol bouton Assistance Vocale (pas possible en CSS car Bootstrap 5)
const vocaleButton = document.getElementById('vocaleButton');

vocaleButton.addEventListener('mouseover', function() {
this.style.backgroundColor = '#9466ff';
});

vocaleButton.addEventListener('mouseout', function() {
this.style.backgroundColor = 'rgb(43, 0, 112)';
});

vocaleButton.addEventListener('click', function() {
this.style.backgroundColor = 'rgb(43, 0, 112)';
});


