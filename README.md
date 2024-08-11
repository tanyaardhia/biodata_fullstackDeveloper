# Mock-Up Application

_Tech Stack:_

- Backend: Node.js, PostgreSQL
- Frontend: React.Js, Vite.Js, React Hook Form, Axios

_informasi_
- untuk contoh data Formulir yang akan di hit ada di "server" folder data


_Fitur Utama:_

**Role : User**

1. **Halaman Login**
    - Pengguna dapat login ke akun mereka dengan email dan password.

2. **Halaman Register**
    - Pengguna dapat mendaftar dengan email dan password.

3. **Halaman Utama**
    - Sebagai User/Candidate halaman utama nya adalah Formulir

4. **Halaman My Data**
    - Menampilkan List Data Formulir user/candidate yang sudah submit

5. **Halaman Formulir User / Candidate**
    - Menampilkan detail formulir user/candidate yang sudah submit

   ## API Endpoints - Server (User / Candidate)

   - POST /login - Untuk login pengguna.
   - POST /register - Untuk registrasi pengguna baru.
   - POST /form-biodata - Untuk mengisi formulir.
   - GET /my-data - Menampilakn semua formulir user
   - GET /my-data/formulir/:biodataId - menampilan formulir yang sudah di submit

   ## API Endpoints - Client (User / Candidate)
   - /login
   - /register-user
   - /form-biodata
   - /list/myBiodata
   - /myBiodata/:biodataId

**Role : Admin**

1. **Halaman Login**
   - Pengguna dapat login ke akun mereka dengan email dan password.

2. **Halaman Register**
    - Pengguna dapat mendaftar dengan email dan password.

3. **Halaman Utama**
    - Menampilkan List semua data formulir yang dikirim oleh user/candidate

4. **Halaman Detail Formulir**
    - Menampilkan Detail Formulir user/candidate

5. **Halaman Edit Formulir**
    - dapat meng-edit formulir user/candidate yang sudah submit

    ## API Endpoints - Server (Admin)

   - POST /login - Untuk login pengguna.
   - POST /admin/register - Untuk registrasi pengguna baru.
   - GET /admin/database - Untuk melihat list formulir.
   - GET /admin/database/:id - Menampilakan detail formulir user/candidate
   - PUT /admin/database/edit/:id - dapat mengedit formulir yang sudah di submit
   - DELETE /admin/database/:id - dapat menghapus formulir yang sudah di submit
   - POST /admin/database/search -dapat searchinf formulir berdasarkan nama

   ## API Endpoints - Client (Admin)
   - /login
   - /register-admin
   - /admin/database
   - /admin/database/:id
   - /admin/database/edit/:id

## Instruksi Persiapan

1. **Clone repository:**

   ```bash
   git clone <url_repository>
   cd <name_repository>
   ```

2. **Install dependencies untuk Backend**

   ```bash
   cd .\server\
   npm install
   ```

3. **Install dependencies untuk Frontend**

   ```bash
   cd .\client\
   npm install
   ```

## Menjalankan Aplikasi

1. **Jalankan server Backend**
    
    masih di tempat server yang sudah di cd/server, lalu bisa di running

    ```
    npx nodemon app
    ```

1. **Jalankan server Frontend**
    
    masih di tempat server yang sudah di cd/server, lalu bisa di running

    ```
    npm run dev
    ```