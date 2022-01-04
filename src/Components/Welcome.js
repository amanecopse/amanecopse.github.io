import { Col, Row } from "react-bootstrap";

function Welcome() {
  return (
    <header>
      <Row className="mt-5">
        <Col
          className="pt-5 pb-5"
          style={{
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <h1 className="display-1">Welcome</h1>
        </Col>
      </Row>
      <div
        className="pt-5 pb-5"
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0)",
        }}
      ></div>
      <Row className="mt-5">
        <Col
          className="pt-5 pb-5"
          style={{
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <h3>このウェブサイトは林周鉉のポートフォリオです。</h3>
          プロフィールからはじめ、ITに関する過去活動の履歴、そして学歴や技術スタックなどが記載されています。
          <br></br>
          <a class="btn btn-outline-primary mt-5" href="#start" role="button">
            <h3>スタート</h3>
          </a>
        </Col>
      </Row>
    </header>
  );
}

export default Welcome;
