import People from './People.jsx';

const PeopleTable = () => {
  return (
    <div className="people-table">
      <h1>Quem somos</h1>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Fundadores</th>
              <th>Cargo</th>
              <th>Experiência</th>
              <th>LinkedIn</th>
            </tr> 
            <People name="Lucas Borges Dalcin" job="Estagiario Sênior" experience="11" link="https://www.linkedin.com/in/lucas-borges-dalcin-948a4020b/" />
            <People name="Fabio Krakauer" job="Tech Manager" experience="10" link="#" />
            <People name="Felipe Meira" job="CTO" experience="10" link="#" />
            <People name="Leticia Amorim" job="CBO" experience="12" link="#" />
            <People name="Maria Augusta Borba" job="CDO" experience="13" link="#" />
            <People name="Ruth Catao" job="CMO" experience="11" link="#" />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PeopleTable;