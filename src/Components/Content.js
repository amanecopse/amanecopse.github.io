import { Col, Container, Row, Button } from "react-bootstrap";
import Profile from "./Contents/Profile";
import Space from "./Space";

function Content() {
  return (
    <Container fluid>
      <Space size={9}></Space>

      <article>
        <Profile></Profile>
      </article>
    </Container>
  );
}

export default Content;
