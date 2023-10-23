/ Ambil referensi ke elemen-elemen HTML yang diperlukan
const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
const deleteItemButton = document.getElementById("delete-item");

// Tambahkan event listener untuk tombol "Tambah Item"
addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Item Baru";
  itemList.appendChild(newItem);
});

// Tambahkan event listener untuk tombol "Hapus Item"
deleteItemButton.addEventListener("click", () => {
  const lastItem = itemList.lastChild;
  if (lastItem) {
    itemList.removeChild(lastItem);
  }
});