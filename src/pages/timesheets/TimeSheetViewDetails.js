import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";



function TimeSheetViewDetails({ eachDetail }) {
  return (
    <>
       <Row xs={3} md={4} className="g-2">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card className="widgets">
                        <Card.Body>
                            <Card.Title className="l-fs-14 l-fw-500 l-color-widget-lable">Total Time Logged</Card.Title>
                            <Card.Text className="l-fs-16 l-fw-700"> 37hours </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
<hr/>
      <Container fluid="md" className=" mt-2 ">
        <Row className="mt-2">
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Employee</h6>
              <h6 className="l-fs-14">{eachDetail.resource}</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Organization</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="mb-3">

              <h6 className="l-fs-14 l-color-grey">Project ID</h6>
              <h6 className="l-fs-14">{eachDetail.contractID}</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Project Title</h6>
              <h6 className="l-fs-14">{eachDetail.contractID}</h6>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Start Date</h6>
              <h6 className="l-fs-14">{eachDetail.startDate}</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">End Date</h6>
              <h6 className="l-fs-14">{eachDetail.endDate}</h6>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Status</h6>
              <h6 className="l-fs-14">{eachDetail.status}</h6>
            </Col>
            <Col className="mb-3">
              <h6 className="l-fs-14 l-color-grey">Signature</h6>
              <h6 className="l-fs-14">--</h6>
            </Col>
          </Row>
          
      </Container>
    </>
  );
}
export default TimeSheetViewDetails;
