const People = ({name, job, experience, link}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
      <td>{experience} anos</td>
      <td><a href={link}>Link</a></td>
    </tr>
  )
}

export default People;