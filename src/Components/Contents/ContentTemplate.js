import { Container } from "react-bootstrap";
import Space from "../Space";

function ContentTemplate({ children, id }) {
  return (
    <div id={id}>
      <Space size={1}></Space>
      <Container
        className="bg-light border rounded mt-5 mb-5 p-5"
        style={{
          backgroundColor: "rgba(255,255,255,0.8)",
        }}
      >
        {children}
      </Container>
      <Space size={1}></Space>
    </div>
  );
}

export default ContentTemplate;
