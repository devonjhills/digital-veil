import { Content } from "antd/es/layout/layout";
import { Card, Row, Col, Button, Divider } from "antd";

const Homepage = () => {
  return (
    <Content style={{ padding: "24px", backgroundColor: "#0e1217" }}>
      <Card title="Welcome to My Website">
        <p>This is the homepage of my website.</p>
        <p>Feel free to explore and discover more about us.</p>
      </Card>

      <Divider />

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="Feature 1">
            <p>Feature 1 description</p>
            <Button type="primary">Learn More</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Feature 2">
            <p>Feature 2 description</p>
            <Button type="primary">Learn More</Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Feature 3">
            <p>Feature 3 description</p>
            <Button type="primary">Learn More</Button>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Homepage;
