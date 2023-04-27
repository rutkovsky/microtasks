type StudentsType = {
    id: number,
    name: string,
    age: number
}

type NewComponentType = {
    students: StudentsType[]
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            <ul>
                {props.students.map((el) => {
                    debugger
                    return (
                        <li key={el.id}><span>{el.name}, </span><span>{el.age} years old.</span></li>
                    )
                })}
            </ul>
        </div>
    )
}