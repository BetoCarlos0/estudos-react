import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFilradoState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos)
        const todosOsEventos = get(listaDeEventosState)
        const eventos = todosOsEventos.filter(e => {
            if (!filtro.data) {
                return true;
            }
            const mesmoDia = filtro.data.toISOString().slice(0, 10) === e.inicio.toISOString().slice(0, 10)
            return mesmoDia;
        });
        return eventos
    }
})