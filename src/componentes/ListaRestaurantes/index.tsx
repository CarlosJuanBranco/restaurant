import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaProxima, setProximaPagina] = useState("")

  useEffect(() => {
    axios.get<IPaginacao<IRestaurante>>("http://localhost:8000/api/v1/restaurantes/")
      .then(resposta => {
        setRestaurantes(resposta.data.results)
        setProximaPagina(resposta.data.next)
      })
      .catch(error => {
        console.log("Erro na renderização", error)
      })
  }, [])

  const verMais = () => {
    axios.get<IPaginacao<IRestaurante>>(proximaProxima)
      .then(resposta => {
        setRestaurantes(resposta.data.results)
        setProximaPagina(resposta.data.next)
      })
      .catch(error => {
        console.log("Erro na renderização", error)
      })
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
    {proximaProxima && <Button onClick={verMais}> Ver Mais </Button>}
  </section>)
}

export default ListaRestaurantes