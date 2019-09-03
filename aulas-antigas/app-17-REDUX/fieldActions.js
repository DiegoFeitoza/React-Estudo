export function changeValue(e){
    return {
        type: 'VALOR_ALTERADO',
        payload: e.target.value
    }
}