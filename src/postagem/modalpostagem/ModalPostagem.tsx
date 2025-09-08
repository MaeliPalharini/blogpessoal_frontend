import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormPostagem from '../formpostagem/FormPostagem';

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='text-bold border rounded px-4 py-2 hover:bg-[#fbbf24] hover:text-[#1d4f5d] '
                    >
                        Nova Postagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '20rem'
                }}
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;
