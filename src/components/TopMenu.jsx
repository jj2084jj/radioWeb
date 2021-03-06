import { useEffect } from "react";
// import "./TopMenu.scss";
import "scss/common.scss";
function TopMenu({ hover }) {
  useEffect(() => {
    if (hover === true) {
      document.getElementsByClassName("topMenuBg")[0].classList.add("slide");
      document.getElementsByClassName("menuIcon")[0].classList.add("slide");
    } else {
      document.getElementsByClassName("topMenuBg")[0].classList.remove("slide");
      document.getElementsByClassName("menuIcon")[0].classList.remove("slide");
    }
  }, [hover]);

  return (
    <div className="topMenuBg">
      <div className="container">
        <div className="menuHeader">
          <div className="headerLeft">
            <div>
              <img
                src="https://jj2084jj.github.io/radioWeb/public/14-1.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://jj2084jj.github.io/radioWeb/mbc-logo-b.png"
                alt=""
              />
            </div>
          </div>
          <div className="headerRigth">
            <div className="search">
              <img
                src="https://jj2084jj.github.io/radioWeb/search.svg"
                alt="search"
              />
            </div>
            <div className="ticket">
              <img
                src="https://jj2084jj.github.io/radioWeb/ticket.svg"
                alt="ticket"
              />
            </div>
            <div>
              <img
                src="https://jj2084jj.github.io/radioWeb/user.svg"
                alt="user"
              />
            </div>
          </div>
        </div>
        <div className="menuContents">
          <div className="slideHeader">
            <ul>
              <li>
                <a href="https://www.imbc.com/broad/tv/drama/">드라마</a>
              </li>
              <li>
                <a href="https://www.imbc.com/broad/enews/">연애</a>
              </li>
              <li>
                <a
                  href="https://imnews.imbc.com/pc_main.html"
                  target={"_blank"}
                >
                  뉴스
                </a>
              </li>
              <li>
                <a href="https://www.imbc.com/broad/tv/ent/">예능</a>
              </li>
              <li>
                <a href="https://www.imbc.com/broad/tv/sports/">스포츠</a>
              </li>
              <li>
                <a href="https://www.imbc.com/broad/radio/">라디오</a>
              </li>
              <li>
                <a href="https://www.imbc.com/broad/tv/culture/">시사교양</a>
              </li>
              <li>
                <a href="https://onair.imbc.com/NVOD?chid=2">라이브</a>
              </li>
              <li>
                <a href="https://global.imbc.com/">영화</a>
              </li>
            </ul>
          </div>
          <div className="slideSubHeader">
            <ul>
              <li>
                <a href="http://with.mbc.co.kr/pr/press/" target={"_blank"}>
                  보도자료
                </a>
              </li>
              <li>
                <a href="https://www.imbc.com/disabled/">장애인서비스</a>
              </li>
              <li>
                <a href="https://schedule.imbc.com/">편성표</a>
              </li>
              <li>
                <a href="https://clip.imbc.com/">클립</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menuVideo">
          <div className="onVideo">
            <h3>온에어</h3>
            <div className="onVideoContents">
              <ul>
                <li>
                  <div className="onVideoImg">
                    <img
                      src="https://jj2084jj.github.io/radioWeb/mbc-img01.png"
                      alt=""
                    />
                  </div>
                  <div className="onVideoTit">
                    <h4>2시 뉴스 외전</h4>
                    <p>MBC</p>
                  </div>
                </li>
                <li>
                  <div className="onVideoImg">
                    <img
                      src="https://jj2084jj.github.io/radioWeb/mbc-img-2.png"
                      alt=""
                    />
                  </div>
                  <div className="onVideoTit">
                    <h4>라디오 스타</h4>
                    <p>MBC every1</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="MBCLive">
            <h3>Mbic Live</h3>
            <div className="liveVideoContents">
              <ul>
                <li>
                  <div className="liveVideoImg">
                    <img
                      src="https://jj2084jj.github.io/radioWeb/mbc-img-3.png"
                      alt=""
                    />
                  </div>
                  <div className="liveVideoTit">
                    <h4>사극 정주행</h4>
                    <p>[이산][7회] 저 계집이 그림을 그린다 했소?</p>
                  </div>
                </li>
                <li>
                  <div className="liveVideoImg">
                    <img
                      src="https://jj2084jj.github.io/radioWeb/mbc-img-4.png"
                      alt=""
                    />
                  </div>
                  <div className="liveVideoTit">
                    <h4>공화국 시리즈</h4>
                    <p>[제2공과국][2회] 보안법 파동과 자유당</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopMenu;
