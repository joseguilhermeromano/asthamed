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
  max-width: 450px;
  margin: 0 auto;
}

.search-bar {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 12px 20px;
  padding-right: 50px;
  border: 1px solid #000;
  font-size: 16px;
  font-family: 'PT Sans Caption', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #10404b;
  background-color: #fff;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

.search-button {
  position: absolute;
  right: 10px;
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
</style>
