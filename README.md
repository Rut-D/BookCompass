![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![Scikit Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?logo=scikitlearn)
![License](https://img.shields.io/badge/License-MIT-green)
# 📚 BookCompass

<p align="center">
  <img src="frontend/logo.png" alt="BookCompass Logo" width="180">
</p>

<p align="center">
  <b>Discover your next favorite book with Machine Learning.</b>
</p>

---

## 📖 About

BookCompass is an ML-powered book recommendation web application that helps users discover books based on natural language queries.

Instead of searching by exact titles, users can describe what they want to read (for example, *"psychological mystery"* or *"cozy fantasy"*) and receive personalized recommendations.

The recommendation engine is built using **TF-IDF Vectorization** and **Cosine Similarity**, while the frontend provides a modern and interactive reading experience.

---

## ✨ Features

- 🔍 Search books using natural language
- 🤖 Machine Learning recommendation engine
- 📚 Personalized book recommendations
- 🖼️ Book cover previews
- 📖 Detailed book modal
- 🏷️ Genre tags
- ⭐ Book ratings
- 💡 "Why this book?" explanation
- 🎨 Modern responsive UI

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask
- Flask-CORS

### Machine Learning

- Scikit-learn
- TF-IDF Vectorizer
- Cosine Similarity

### Dataset

- Goodreads Books Dataset

---

## 📂 Project Structure

```text
BookCompass/
│
├── backend/
│   ├── app.py
│   ├── model/
│   │   ├── books.pkl
│   │   ├── tfidf.pkl
│   │   └── tfidf_matrix.pkl
│
├── frontend/
│   ├── assets/
│   │   └── logo.png
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/Rut-D/BookCompass.git
```

Move into the project folder

```bash
cd BookCompass
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the backend

```bash
cd backend
python app.py
```

Open

```
frontend/index.html
```

in your browser.

---

## 📸 Screenshots

### Home Page

<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/e409f0bd-d0c7-4365-bfb3-6fb37303bb83" />

---

### Recommendations

<img width="1902" height="907" alt="image" src="https://github.com/user-attachments/assets/68d8b146-8052-43ec-a176-768c8b4b7905" />

---

### Book Details

<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/2bd745f4-fb19-48df-9e3c-98f17afd08ae" />

---

## 💻 How It Works

1. User enters a search query.
2. Query is converted into TF-IDF vectors.
3. Cosine Similarity finds the closest matching books.
4. Flask API returns the recommendations.
5. Frontend displays book cards with additional information.

---

## 🔮 Future Improvements

- ❤️ Favorites
- 📈 Better recommendation model
- 📱 Mobile optimization
- 🌐 Live deployment

---

## 👩‍💻 Author

**Rutuja Dombe**

GitHub: https://github.com/Rut-D

LinkedIn: www.linkedin.com/in/rutuja-dombe

---

⭐ If you like this project, consider giving it a star!
