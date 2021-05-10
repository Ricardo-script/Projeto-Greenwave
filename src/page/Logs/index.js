import React, { useState } from 'react';
import Header from '../../components/Header';
import { Container, HeaderTable, AreaTable} from './styles';
import api from '../../services/api';

export default function Logs(){

    const [dados, setDados] = useState(['']);
    const [loading, setLoading] = useState('Atualizar');
    const [filterData, setFilterData] = useState('Tudo');
    const [total, setTotal] = useState('');

    function atualizar(){
        async function lerDados(){
            setLoading('Carregando...');
            const response = await api.get('');

            if(filterData === 'Tudo'){
                setDados(response.data);
                setTotal('Total :' + response.data.length);
            }

            if(filterData === 'Normal'){
                const filtro = (response.data).filter( info => (info.descricao_falha === 'Normal'));
                setDados(filtro);
                setTotal('Total :' + filtro.length);
            }

            if(filterData === 'Amarelo Intermitente'){
                const filtro = (response.data).filter( info => (info.descricao_falha === 'Amarelo Intermitente'));
                setDados(filtro);
                setTotal('Total :' + filtro.length);
            }

            if(filterData === 'Offline'){
                const filtro = (response.data).filter( info => (info.descricao_falha === 'Offline'));
                setDados(filtro);
                setTotal('Total :' + filtro.length);
            }

            if(filterData === 'Estacionado'){
                const filtro = (response.data).filter( info => (info.descricao_falha === 'Estacionado'));
                setDados(filtro);
                setTotal(filtro.length);
            }
            
            setLoading('Atualizar');
        }

        lerDados();

    }

    return(
        <Container>
            <Header />
            <HeaderTable>
                <span>Controle operacional</span>
                <span>Filtro:</span>
                <div className='filtro'>
                   <select onChange={(e) => setFilterData(e.target.value)}>
                       <option value="Tudo" key="1">Tudo</option>
                       <option value="Normal" key="2">Normal</option> 
                       <option value="Amarelo Intermitente" key="3">Amarelo Intermitente</option>
                       <option value="Offline" key="4">Offline</option>
                       <option value="Estacionado" key="5">Estacionado</option>                    
                   </select>
                   <button onClick={atualizar}>{loading}</button>
                   <span>{total}</span> 
                </div>
            </HeaderTable>
            <AreaTable>
                <table>
                    <tr key="">
                        <th>Id</th>
                        <th>Id cruzamento</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Agente</th>
                    </tr>
                    {dados.map( (info) => {
                        const dataConverter = new Date(info.data).toLocaleString('pt-BR', {timeZone: 'UTC'});
                        return(
                            <tr key={info._id}>
                                <td>{info._id}</td>
                                <td>{info.id_cruzamento}</td>
                                <td>{info.descricao_falha}</td>
                                <td>{ dataConverter === 'Invalid Date' ? (info.data)  : dataConverter }</td>
                                <td>{info.tipo}</td>
                                <td>{info.agente}</td>
                            </tr>
                        );
                    })}
                </table>
            </AreaTable>
        </Container>
    );
}