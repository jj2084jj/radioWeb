import { Pagination } from "antd";

function Mini() {
  return (
    <>
      <div>
        <div className="TopBtnWrap">
          <img
            src="https://jj2084jj.github.io/radioWeb/img-icon-rule.jpg"
            alt="rule"
          />
          게시판 운영 원칙
        </div>
        <div className="miniMessage">
          <div>
            <textarea
              name="write"
              placeholder="메시지를 입력해주세요."
            ></textarea>
            <div>
              <img
                src="https://jj2084jj.github.io/radioWeb/img-icon-write.png"
                alt="write"
              />
              글쓰기
            </div>
          </div>
          <p>/ 120 Byte</p>
        </div>
      </div>
      <div className="miniTable">
        <table>
          <thead>
            <tr>
              <td>구분</td>
              <td>내용</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/free-icon-lightbulb-702797.png"
                  alt=""
                />
              </td>
              <td>
                <div className="miniListUser">
                  <div>별밤</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  ★ 내일 할 일! 여러분이 내일 꼭~ 해야 할 일!! 남겨주세요~
                  클로징에서 나눠볼게요 :)
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/mobile-con-icon.png"
                  alt=""
                />
                <div>Mobile</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>나경숙</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  오늘도 수고많으셨습니다~ 다들 굳밤~
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/web-con-icon.png"
                  alt=""
                />
                <div>Web</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>조상구</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  오늘도 잘들었어요. 모두 편안한 밤 되세요.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/mobile-con-icon.png"
                  alt=""
                />
                <div>Moblie</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>소돌이</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  PD님, 작가님 오늘 2시간도 감사합니다~~~ 고생 많으셨습니다
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/web-con-icon.png"
                  alt=""
                />
                <div>Web</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>서영주</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  오늘 많이 힘들었는데 좋았습니다 감사합니다^^
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/web-con-icon.png"
                  alt=""
                />
                <div>Web</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>정예리</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  어릴때? 별을 볼때면 내가 찾는 별의 갯수만큼 빌수있는 소원의
                  수라고 생각하면서 찾았던 기억이 있어요. 별이 엄청 많은곳이
                  있다는데 만약 보게 된다면 눈물이 날것 같아요.
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://jj2084jj.github.io/radioWeb/mobile-con-icon.png"
                  alt=""
                />
                <div>Moblie</div>
              </td>
              <td>
                <div className="miniListUser">
                  <div>조상구</div>
                  <div>2021-12-16 23:47:34</div>
                </div>
                <div className="miniListTitle">
                  오늘도 잘들었어요. 모두 편안한 밤 되세요.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination className="pagination" defaultCurrent={1} total={50} />
      </div>
    </>
  );
}
export default Mini;
