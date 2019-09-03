const INITIAL_STATE = { value: 'Label Inicial' }

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'VALOR_ALTERADO':
            if(action.payload != ''){
                return { value: action.payload }
            }else{
                return { value: 'Label Alterada' }
            }
        default:
            return state
    }
}