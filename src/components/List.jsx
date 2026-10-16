export default function List({ items }) {
  return (
    <ul className="list-card">
      {items.map((item, index) => (
        <li key={index} className="list-card-item">{item}</li>
      ))}
    </ul>
  );
}