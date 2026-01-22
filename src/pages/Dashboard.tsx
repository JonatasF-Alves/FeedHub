import { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5100/")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar reviews");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando reviews...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>
        ⭐ {data.rating} ({data.user_ratings_total} avaliações)
      </p>

      <hr />

      {data.reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: "16px" }}>
          <strong>{review.author_name}</strong>
          <p>⭐ {review.rating}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}
