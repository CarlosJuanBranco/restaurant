import { useEffect, useState } from "react"
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import http from "../../http"
import IPrato from "../../interfaces/IPrato"

const AdministracaoPrato = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        http.get<IPrato[]>("pratos/")
            .then(resposta => {
                setPratos(resposta.data)
            })
            .catch(erro =>
                console.log(erro))
    }, [])

    const excluir = (excluindoPrato: IPrato) => {
        http.delete(`pratos/${excluindoPrato.id}/`)
            .then(() => {
                const listaPrato = pratos.filter(prato => prato.id !== excluindoPrato.id)
                setPratos([...listaPrato])
            })
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Nome
                            </TableCell>
                            <TableCell>
                                Tag
                            </TableCell>
                            <TableCell>
                                Imagem
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
                        {pratos.map(prato => <TableRow key={prato.id}>
                            <TableCell>
                                {prato.nome}
                            </TableCell>
                            <TableCell>
                                {prato.tag}
                            </TableCell>
                            <TableCell>
                                [ <a href={prato.imagem} target="blank"> Ver Imagem</a> ]
                            </TableCell>
                            <TableCell>
                                [<RouterLink to={`/admin/pratos/${prato.id}`}>editar</RouterLink>]
                            </TableCell>
                            <TableCell>
                                <Button variant="outlined" color="error" onClick={() => excluir(prato)}>
                                    Excluir
                                </Button>
                            </TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdministracaoPrato