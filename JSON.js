// Dados de cards
const cards = [
  {
    id: 1,
    titulo: "Card 1",
    descricao: "Descrição do primeiro card",
    imagens: ["imagem1.jpg", "imagem1-2.jpg", "imagem1-3.jpg"],
    localizacao: "https://maps.google.com/?q=location1",
    corFundo: "#FF6B6B"
  },
  {
    id: 2,
    titulo: "Card 2",
    descricao: "Descrição do segundo card",
    imagens: ["imagem2.jpg", "imagem2-2.jpg", "imagem2-3.jpg"],
    localizacao: "https://maps.google.com/?q=location2",
    corFundo: "#4ECDC4"
  },
  {
    id: 3,
    titulo: "Card 3",
    descricao: "Descrição do terceiro card",
    imagens: ["imagem3.jpg", "imagem3-2.jpg", "imagem3-3.jpg"],
    localizacao: "https://maps.google.com/?q=location3",
    corFundo: "#45B7D1"
  }
];

// Função para renderizar cards no HTML
function renderCards() {
  const container = document.getElementById("cards-container");
  
  cards.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.backgroundColor = card.corFundo;
    cardElement.innerHTML = `
      <img src="${card.imagem}" alt="${card.titulo}">
      <h3>${card.titulo}</h3>
      <p>${card.descricao}</p>
    `;
    container.appendChild(cardElement);
  });
}

// Chamar ao carregar a página
document.addEventListener("DOMContentLoaded", renderCards);