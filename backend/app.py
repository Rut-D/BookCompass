from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

# Load the saved model
books = joblib.load("model/books.pkl")
tfidf = joblib.load("model/tfidf.pkl")
tfidf_matrix = joblib.load("model/tfidf_matrix.pkl")

def recommend_books(query, top_n=10):

    query_vector = tfidf.transform([query])

    similarity = cosine_similarity(query_vector, tfidf_matrix).flatten()

    similarities = list(enumerate(similarity))

    similarities = sorted(
    similarities,
    key=lambda x: x[1],
    reverse=True
)

    similar_books = similarities[:10]

    recommendations = []

    for idx, score in similar_books:

        book = books.iloc[idx]

        recommendations.append({
        "title": book["title"],
        "author": book["author"],
        "genres": book["genres"] if book["genres"] else "",
        "rating": float(book["rating"]),
        "description": book["description"] if book["description"] else "",
        "coverImg": book["coverImg"] if book["coverImg"] else "",
        "match": round(score * 100, 1),
        "query": query
        })

    return recommendations

@app.route("/")
def home():
    return "BookCompass ML API is running!"

@app.route("/recommend", methods=["POST"])
def recommend():

    data = request.get_json()

    query = data.get("query")

    if not query:
        return jsonify({
            "error": "No query provided"
        }), 400

    results = recommend_books(query)

    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True, port=5000)