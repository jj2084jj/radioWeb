function List({ name, title }) {
  return (
    <>
      <li>
        <img
          src="https://jj2084jj.github.io/radioWeb/youtubeIcon.jpg"
          alt={name}
        />
        <div>
          <h5>{name}</h5>
          <p>{title}</p>
        </div>
      </li>
    </>
  );
}

export default List;
