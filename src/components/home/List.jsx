function List({ name, title }) {
  return (
    <>
      <li>
        <a
          href={`https://www.youtube.com/results?search_query=${name}+${title}`}
        >
          <img
            src="https://jj2084jj.github.io/radioWeb/youtubeIcon.jpg"
            alt={name}
          />
          <div>
            <h5>{name}</h5>
            <p>{title}</p>
          </div>
        </a>
      </li>
    </>
  );
}

export default List;
