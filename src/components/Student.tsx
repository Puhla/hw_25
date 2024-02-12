
type Props = {
    name:string,
    lastname:string,
    grades: number[];
}

export default function Student({name, lastname, grades}: Props) {
  const avgGrades = grades.reduce((acc, item) => acc +item)/grades.length;
  return (
    <div>
        <p>{name}</p>
        <p>{lastname}</p>
        <p>{avgGrades}</p>
        {
            grades
        }
        </div>
  )
}