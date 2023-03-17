import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [rows, setRows] = useState([]);
  const [rowsT, setRowsT] = useState([]);

    useEffect(() => {
      let mounted = true;

      if (mounted){
        fetch();
      }

      return () => {
        mounted = false;
      };
    }, []);

    const fetch = () => {
      axios
    .get("/aula/alunos")
    .then(function (response) {
      setRows(response.data)
      }).catch(function (response){
        alert("Ocorreu um erro")
      });

      axios
      .get("/turmas")
      .then(function (response) {
        setRowsT(response.data)
        }).catch(function (response){
          alert("Ocorreu um erro")
        });
    }

  return ( 
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>dtNascimento</th>
            <th>IDADE</th>
          </tr>
        </thead>
        <tbody>
        { rows.map((row, idx) => (
          <tr key={idx}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.dtNascimento}</td>
            <td>{row.idade}</td>
          </tr> ))}        
        </tbody>       
      </table>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>CURSO</th>
            <th>CARGA_HORARIA</th>
          </tr>
        </thead>
        <tbody>
        { rowsT.map((row, idx) => (
          <tr key={idx}>
            <td>{row.id}</td>
            <td>{row.curso}</td>
            <td>{row.cargaHoraria}</td>
          </tr> ))}        
        </tbody>       
      </table>
    </div>
  );
}

export default App;
