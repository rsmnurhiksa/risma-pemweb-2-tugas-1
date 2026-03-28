const express = require("express");
const app = express();
const PORT = 3000;

// middleware biar bisa baca JSON
app.use(express.json());

// data dummy
let students = [
  { id: 1, nama: "Andi", jurusan: "Informatika" },
  { id: 2, nama: "Budi", jurusan: "Sistem Informasi" },
  { id: 3, nama: "Citra", jurusan: "Teknik Komputer" },
];

// 1. Home Endpoint
app.get("/", (req, res) => {
  res.send("API Mahasiswa berjalan");
});

// 2. GET semua mahasiswa
app.get("/students", (req, res) => {
  res.json(students);
});

// 3. GET mahasiswa by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  res.json(student);
});

// 4. POST tambah mahasiswa
app.post("/students", (req, res) => {
  const { nama, jurusan } = req.body;

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    nama,
    jurusan,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// 5. PUT update mahasiswa
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nama, jurusan } = req.body;

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  student.nama = nama;
  student.jurusan = jurusan;

  res.json(student);
});

// 6. DELETE mahasiswa
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).send("Mahasiswa tidak ditemukan");
  }

  const deleted = students.splice(index, 1);
  res.json({
    message: "Mahasiswa berhasil dihapus",
    data: deleted[0],
  });
});

// jalankan server
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
