import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmpleadoRow = ({empleado}) => {
    return (
        <ListGroup.Item>
            <Container>
                <Row className="d-flex align-items-center">
                    <Col md={4}><EmpleadoAvatar imagen={empleado.pic}></EmpleadoAvatar></Col>
                    <Col md={8}>
                        <div><p className="fw-bold fs-5">{empleado.fullName}</p></div>
                        <div className="d-flex"><p className="me-3">{empleado.title}</p><p className="bg-info px-2 rounded-1">{empleado.department}</p></div>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;