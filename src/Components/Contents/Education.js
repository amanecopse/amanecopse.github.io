import { Col, Container, Row } from "react-bootstrap";
import ContentTemplate from "./ContentTemplate";

function Education() {
  return (
    <ContentTemplate id="education">
      <Container fluid>
        <h3>
          Education
          <small className="text-muted"> 学歴</small>
        </h3>
        <br></br>
        <dl className="row">
          <dt className="col-sm-3">
            <p>高等学校</p>
          </dt>
          <dd className="col-sm-9">
            <p>신도림고등학교(新道林高等学校)、卒業</p>
          </dd>

          <dt className="col-sm-3">大学</dt>
          <dd className="col-sm-9">
            <p>
              한국외국어대학교(韓国外国語大学)、コンピューター工学部で在学中（２０２２年から三年生）
            </p>
            学内活動
            <ul>
              <li>
                大学のSW創業支援プログラムに提出した企画書が選定されアンドロイドのアプリを開発しリリース（一年生）
              </li>
              <li>
                SW奉仕団という団体に加入し、小学生から高校生までの学生を対象にしたSW教育奉仕で補助講師として活動（一年生〜現在）
              </li>
              <li>
                GNUVILというSW同好会に加入し、データストラクチャーやアルゴリズムについてスタディ活動（一年生〜現在）
              </li>
              <li>
                GNUVILというSW同好会の部員たちで構成したチームでフィットネスを主題にしたアンドロイドのアプリを開発しコンテストに応募（二年生）
              </li>
              <li>
                学内団体のGDSC
                HUFSが主催するコーディングテストのビギナートラックに参加し一位で入賞（二年生）
              </li>
            </ul>
          </dd>
        </dl>
      </Container>
    </ContentTemplate>
  );
}

export default Education;
