import { useEffect, useState } from "react"
import IRestaurante from "../../interfaces/IRestaurante"
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow } from "@mui/material"
import axios from "axios"

const AdministracaoRestaurante = () => {
    const [restaurante, setRestaurante] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
            .then(resposta => {
                setRestaurante(resposta.data)
            })
            .catch(erro =>
                console.log(erro))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurante.map(restaurantes => <TableRow key={restaurantes.id}>
                        <TableCell>
                            {restaurantes.nome}
                        </TableCell>
                    </TableRow>)}

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurante