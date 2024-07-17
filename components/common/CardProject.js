export default function CardProject({data}) {
  return (
    <div className="CardProject">
      <img alt="" />
      <span className="Category">Estado</span>
      <span className="Date">2024.02.18</span>
      <h1>{data.titulo}</h1>
      <span className="ProjectOwner">Propietario del Proyecto</span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}
