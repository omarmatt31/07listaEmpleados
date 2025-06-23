import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./components/EmpleadoAvatar";

function App() {
  let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "/img/empleado01.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "/img/empleado02.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "/img/empleado03.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "/img/empleado04.png" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "/img/empleado05.png" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "/img/empleado06.png" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "/img/empleado07.png" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "/img/empleado08.png" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "/img/empleado09.png" },
]
  return (
    <>
      <EmpleadoList empleados={empleados}></EmpleadoList>
    </>
  )
}

export default App
