
type Props = {
    name:string,
    lastname:string,
    grades: number[];
}

export default function Student({name, lastname, grades}: Props) {
  return (
    <div>
        <p>Name:{name}</p>
        <p>Lastname:{lastname}</p>
        {
            grades
        }
        </div>
  )
}