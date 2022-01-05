import { Col, Container, Row, Button } from "react-bootstrap";
import Education from "./Contents/Education";
import Profile from "./Contents/Profile";
import Space from "./Space";

function Content() {
  return (
    <Container fluid id="start">
      <Space size={9}></Space>

      <article>
        <Profile></Profile>
        <Education></Education>
      </article>
    </Container>
  );
}

export default Content;
