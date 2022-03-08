function LetterItem({ subTitle }) {
  return (
    <>
      <div className="TopBtnWrap">
        <button className="rule">
          <img
            src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
            alt="rule"
          />
          게시판 운영 원칙
        </button>
        <button className="write">
          <img
            src="https://jj2084jj.github.io/radioWeb/img-icon-write.png"
            alt="write"
          />
          글쓰기
        </button>
      </div>
      <div className="notice">
        <button>
          <img
            src="https://jj2084jj.github.io/radioWeb/free-icon-lightbulb-702797.png"
            alt=""
          />
          <p>{subTitle}</p>
        </button>
      </div>
    </>
  );
}
export default LetterItem;
