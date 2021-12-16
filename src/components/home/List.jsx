function List({ name, img, title }) {
  return (
    <>
      <li>
        <img src={img} alt={name} />
        <div>
          <h5>{name}</h5>
          <p>{title}</p>
        </div>
      </li>
    </>
  );
}

export default List;