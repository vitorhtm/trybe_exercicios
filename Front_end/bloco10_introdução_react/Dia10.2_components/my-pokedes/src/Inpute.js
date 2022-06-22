
export default function inpute() {
    return (
        <input
            type={'texto'}
            className='inputType'
            placeholder={props.pHolder}
            onKeyDown={(e) => buscaInput(e)}
        />
    )
};
