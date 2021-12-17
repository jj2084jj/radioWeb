function List({ name, img, title }) {
  return (
    <>
      <li>
        <img
          src="https://jj2084jj.github.io/radioWeb/youtubeIcon.png"
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
