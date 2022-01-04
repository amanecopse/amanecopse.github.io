import { Col, Container, Row } from "react-bootstrap";
import Space from "../Space";

function Profile() {
  return (
    <Container
      id="start"
      className="bg-light border rounded"
      style={{
        backgroundColor: "rgba(255,255,255,0.8)",
      }}
    >
      <Space size={1}></Space>
      <Container fluid>
        <h3>
          Profile
          <small class="text-muted"> プロフィール</small>
        </h3>
        <br></br>
        <dl class="row">
          <dt class="col-sm-3">
            <p>氏名</p>
          </dt>
          <dd class="col-sm-9">
            <p>임주현(林周鉉、いむ じゅひょん)</p>
          </dd>

          <dt class="col-sm-3">居住地</dt>
          <dd class="col-sm-9">
            <p>
              7-6, Saneopbaelli-gil, Dunpo-myeon, Asan-si, Chungcheongnam-do,
              31408, Rep. of KOREA
            </p>
          </dd>

          <dt class="col-sm-3">紹介</dt>
          <dd class="col-sm-9">
            <p>
              韓国外国語大学に在学する大学生で、コンピューター工学を専攻しています。
              IT開発者として企業に勤められるよう関連技術の習得に励んでいます。
              プログラミング言語は、C、C++、C#、Python、JavaScript、Kotlin、Javaなどを経験しています。
              フレームワークやライブラリーでは、Android、Node.js、React、Firebase、Arduino、Swingなどを経験しています。
            </p>
          </dd>
        </dl>
      </Container>
    </Container>
  );
}

export default Profile;
