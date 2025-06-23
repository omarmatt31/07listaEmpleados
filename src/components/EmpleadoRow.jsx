import { ListGroupItem } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EmpleadoRow = ({empleado}) => {
    return (
        <ListGroup.Item>
            <EmpleadoAvatar></EmpleadoAvatar>
            <Container>
                <Row>
                    <Col md={3}><EmpleadoAvatar imagen={empleado.pic}></EmpleadoAvatar></Col>
                    <Col md={9}>
                    <div><p>{empleado.fullName}</p></div>
                    <div><p>{empleado.title}</p><p>{empleado.department}</p></div>
                    </Col>
                </Row>
            </Container>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;