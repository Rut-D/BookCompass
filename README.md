# 📚 BookCompass

<p align="center">
  <img src="frontend/logo.png" alt="BookCompass Logo" width="180">
</p>

<p align="center">
  <b>Discover your next favorite book with Machine Learning.</b>
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?logo=flask)
![Scikit Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?logo=scikitlearn)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

## 🌐 Live Demo

🚀 **Try BookCompass:**
https://bookcompass-1-fp37.onrender.com/
---

## 📖 About

**BookCompass** is a Machine Learning-powered book recommendation web application designed to help readers discover books based on natural language queries.

Instead of searching only by exact book titles, users can describe what they want to read, such as:

* *"psychological mystery"*
* *"cozy fantasy"*
* *"dark thriller with an unreliable narrator"*

BookCompass analyzes the query and recommends books that are most relevant to the user's interests.

The recommendation engine uses **TF-IDF Vectorization** and **Cosine Similarity** to compare the user's query with information from the book dataset.

---

## ✨ Features

* 🔍 Search books using natural language
* 🤖 Machine Learning-based book recommendations
* 📚 Content-based recommendation system
* 🖼️ Book cover previews
* 📖 Detailed book information
* 🏷️ Genre tags
* ⭐ Book ratings
* 💡 "Why this book?" explanation
* 🎨 Modern and responsive user interface
* 🌐 Live web deployment

---

## 🧠 How the Recommendation System Works

BookCompass uses a **content-based recommendation approach**.

The recommendation process works as follows:

1. The user enters a natural-language description of the type of book they want.
2. The user's query is converted into a numerical representation using **TF-IDF Vectorization**.
3. The query vector is compared with the book data stored in the trained model.
4. **Cosine Similarity** is used to measure how closely each book matches the query.
5. Books with the highest similarity scores are selected.
6. The Flask backend sends the recommendations to the frontend.
7. The frontend displays the recommended books to the user.

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask
* Flask-CORS

### Machine Learning

* Scikit-learn
* TF-IDF Vectorizer
* Cosine Similarity

### Dataset

* Goodreads Books Dataset

### Deployment

* Render

---

## 📂 Project Structure

```text
BookCompass/
│
├── backend/
│   ├── app.py
│   ├── Procfile
│   ├── requirements.txt
│   └── model/
│       ├── books.pkl
│       ├── tfidf.pkl
│       └── tfidf_matrix.pkl
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── logo.png
│
└── README.md
```

> Note: The local Python virtual environment (`venv`) is not included in the project structure.

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Rut-D/BookCompass.git
cd BookCompass
```

### 2. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 3. Run the Backend

```bash
cd backend
python app.py
```

The Flask server will start locally.

### 4. Open the Frontend

Open:

```text
frontend/index.html
```

in your browser.

---

## 💻 Local Development

When running BookCompass locally, the frontend communicates with the Flask backend through the API.

For the deployed version, the frontend communicates with the live Render backend.

This allows the same recommendation system to work both locally and online.

---

## 📊 Machine Learning Model

The recommendation system is based on **TF-IDF** and **Cosine Similarity**.

### TF-IDF

TF-IDF (Term Frequency-Inverse Document Frequency) converts textual information into numerical vectors while giving greater importance to meaningful words.

### Cosine Similarity

Cosine Similarity measures how similar two vectors are. In BookCompass, it is used to determine how closely a user's query matches the available books.

This approach allows users to search using descriptions and concepts rather than requiring exact book titles.

---

## 🔮 Future Improvements

* ❤️ Add favorites and personal reading lists
* 🔐 Add user accounts and authentication
* 📈 Improve recommendation accuracy
* 📱 Further improve mobile responsiveness
* 🔎 Add advanced filtering and sorting
* 📚 Expand the book dataset
* 🎯 Add more personalized recommendations based on user preferences

---

## 👩‍💻 Author

**Rutuja Dombe**

GitHub:
https://github.com/Rut-D

LinkedIn:
[www.linkedin.com/in/rutuja-dombe](http://www.linkedin.com/in/rutuja-dombe)

---

## ⭐ Support

If you like **BookCompass**, consider giving the repository a ⭐ on GitHub!

---

<p align="center">
  Made with ❤️ and Machine Learning
</p>
