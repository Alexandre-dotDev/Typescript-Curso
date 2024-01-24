interface iCard {
    id: number,
    paragrafo: string,
    details: string
}

export const Card = ({id, paragrafo, details}: iCard) => {
    return (
        <>
            <h1>Card {id}</h1>
            <p>{paragrafo}</p>
            <p>{details}</p>
        </>
    )
}