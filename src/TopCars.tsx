type TopCarsType = {
    manufacturer: string,
    model: string
}

type TopCarsProps = {
    topCars: TopCarsType[]
}

export const TopCars = (props: TopCarsProps) => {
    return (
        <ul>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                <tr>
                    {props.topCars.map((tc, index) => {
                        return (
                            <tr key={index}>{tc.manufacturer} {tc.model}</tr>
                        )
                    })}
                </tr>
            </table>
        </ul>
    )
}





