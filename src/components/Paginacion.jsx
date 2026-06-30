import './style-components/paginacion.css';

function Pagination({prev, next, onPrevious, onNext}) {
    return (
        <>
        <ul className='next-prev'>
            {prev && (
            <li className='page-item'>
                <button className='page-link' onClick={onPrevious}> Anterior </button>
            </li>
            )}

            {next && (
            <li className='page-item'>
                <button className='page-link' onClick={onNext}> Siguiente </button>
            </li>
            )}
        </ul>
        </>
    )
}

export default Pagination