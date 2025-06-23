import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
    return (
        <ListGroup>
            {
                empleados.map((item, indice)=><EmpleadoRow key={indice} empleado={item}></EmpleadoRow>)
            }
        </ListGroup>
    );
};

export default EmpleadoList;