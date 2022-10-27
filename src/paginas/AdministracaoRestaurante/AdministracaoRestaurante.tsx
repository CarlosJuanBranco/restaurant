import { useEffect, useState } from "react"
import IRestaurante from "../../interfaces/IRestaurante"
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, Button } from "@mui/material"
import axios from "axios"
import { Link } from "react-router-dom"

const AdministracaoRestaurante = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
            .then(resposta => {
                setRestaurantes(resposta.data)
            })
            .catch(erro =>
                console.log(erro))
    }, [])

    const excluir = (excluindoRestaurante: IRestaurante) => {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${excluindoRestaurante.id}/`)
            .then(() => {
                const listaRestaurante = restaurantes.filter(restaurante => restaurante.id !== excluindoRestaurante.id)
                setRestaurantes([...listaRestaurante])
            })
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante => <TableRow key={restaurante.id}>
                        <TableCell>
                            {restaurante.nome}
                        </TableCell>
                        <TableCell>
                            [<Link to={`/admin/restaurantes/${restaurante.id}`}>editar</Link>]
                        </TableCell>
                        <TableCell>
                            <Button variant="outlined" color="error" onClick={() => excluir(restaurante)}>
                                Excluir
                            </Button>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdministracaoRestaurante