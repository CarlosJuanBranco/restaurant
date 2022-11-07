import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import http from "../../http"
import IRestaurante from "../../interfaces/IRestaurante"
import ITag from "../../interfaces/ITag"

const FormularioPratos = () => {

    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')

    const [imagem, setImagem] = useState<File | null>(null)

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()

    }

    const [tag, setTag] = useState('')
    const [tags, setTags] = useState<ITag[]>([])

    const [restaurante, setRestaurante] = useState<IRestaurante[]>([])
    const [restaurantes, setRestaurantes] = useState('')

    useEffect(() => {
        http.get<{ tags: ITag[] }>("tags/")
            .then(resposta => setTags(resposta.data.tags))

        http.get<IRestaurante[]>("restaurantes/")
            .then(resposta => {
                setRestaurante(resposta.data)
            })

    }, [])

    return (
        <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column", alignItems: "center" }}>
            <Typography component="h1" variant="h6">Formulário Pratos</Typography>
            <Box sx={{ width: "100%" }} component="form" onSubmit={aoSubmeter}>
                <TextField value={nomePrato}
                    onChange={evento => setNomePrato(evento.target.value)}
                    id="standard-basic"
                    label="Nome do Prato"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <TextField value={descricao}
                    onChange={evento => setDescricao(evento.target.value)}
                    id="standard-basic"
                    label="Descrição"
                    variant="standard"
                    fullWidth
                    required
                    margin="dense"
                />
                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-tag">Tag</InputLabel>
                    <Select labelId="select-tag" value={tag} onChange={evento => setTag(evento.target.value)}>
                        {tags.map(tag => <MenuItem key={tag.id} value={tag.id}>
                            {tag.value}
                        </MenuItem>)}
                    </Select>
                </FormControl>

                <FormControl margin="dense" fullWidth>
                    <InputLabel id="select-restaurante">Restaurantes</InputLabel>
                    <Select labelId="select-restaurante" value={restaurantes} onChange={evento => setRestaurantes(evento.target.value)}>
                        {restaurante.map(restaurante => <MenuItem key={restaurante.id} value={restaurante.nome}>
                            {restaurante.nome}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                <input type="file" onChange={selecionarArquivo} />

                <Button sx={{ marginTop: 1 }} type="submit" fullWidth variant="outlined">Salvar</Button>
            </Box>
        </Box>
    )
}

export default FormularioPratos