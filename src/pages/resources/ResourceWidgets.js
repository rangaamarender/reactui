import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ResourceWidgets() {
    return (
        <Row xs={2} sm={2} md={4} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card className="widgets">
                        <Card.Body>
                            <Card.Title className="l-fs-14 l-fw-500 l-color-widget-lable">Billable Employees</Card.Title>
                            <Card.Text className="l-fs-21 l-fw-700"> 2116 </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default ResourceWidgets;
