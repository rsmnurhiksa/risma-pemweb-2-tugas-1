## 📌 Endpoint API

### 1. Home

**GET /**

```
API Mahasiswa berjalan
```

---

### 2. GET Semua Mahasiswa

**GET /students**

---

### 3. GET Mahasiswa by ID

**GET /students/:id**

Contoh:

```
/students/1
```

Jika tidak ditemukan:

```
Mahasiswa tidak ditemukan
```

---

### 4. POST Tambah Mahasiswa

**POST /students**

Body JSON:

```json
{
  "nama": "Haruto",
  "jurusan": "Informatika"
}
```

---

### 5. PUT Update Mahasiswa

**PUT /students/:id**

Body JSON:

```json
{
  "nama": "Risma Update",
  "jurusan": "Informatika"
}
```

---

### 6. DELETE Mahasiswa

**DELETE /students/:id**

---

## 🧪 Testing

Gunakan tools seperti:

* Postman
* Thunder Client (VS Code)
