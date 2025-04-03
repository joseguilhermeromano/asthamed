<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-input-wrapper">
        <input
          type="text"
          placeholder="Buscar nos produtos"
          class="search-input"
        />
        <button class="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
}

.search-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 800px; /* Largura máxima para telas grandes */
}

.search-input-wrapper {
  position: relative;
  display: flex;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px 16px;
  padding-right: 50px;
  border: 1px solid #000;
  font-size: 14px;
  font-family: 'PT Sans Caption', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: #10404b;
  background-color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.search-button {
  position: absolute;
  right: 0px;
  background: none;
  border: none;
  cursor: pointer;
  color: #10404b;
  padding: 8px;
}

.search-subtitle {
  text-align: center;
  font-family: 'PT Sans Caption', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #10404b;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 5px;
}

/* Media Queries para responsividade */
@media (min-width: 480px) {
  .search-input {
    padding: 12px 20px;
    padding-right: 50px;
    font-size: 16px;
  }

  .search-button {
    padding: 10px;
  }
}

@media (min-width: 768px) {
  .search-container {
    padding: 0 24px;
  }

  .search-input {
    padding: 12px 24px;
    padding-right: 50px;
  }
}

@media (min-width: 1024px) {
  .search-container {
    padding: 0 32px;
  }
}
</style>
