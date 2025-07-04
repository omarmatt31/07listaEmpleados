import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
    return (
        <section className="d-flex justify-content-center">
            <ListGroup>
                {
                    empleados.map((item, indice)=><EmpleadoRow key={indice} empleado={item}></EmpleadoRow>)
                }
            </ListGroup>
        </section>
    );
};

export default EmpleadoList;