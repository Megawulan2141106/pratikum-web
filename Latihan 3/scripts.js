const library = [
    {
      title: "Judul Buku 1",
      author: "Penulis 1",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Judul Buku 2",
      author: "Penulis 2",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: "Judul Buku 3",
      author: "Penulis 3",
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  library.forEach((book) => {
    book.status.read = true;
  });
  
  const firstBook = library[0];
  firstBook.title = "Judul Buku Baru";
  
  const libraryJSON = JSON.stringify(library);
  // scripts.js
const hasilElement = document.getElementById("hasil");
hasilElement.textContent = "Hasil eksekusi kode JavaScript";