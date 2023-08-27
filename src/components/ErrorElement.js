import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {

    const {status, data, statusText} = useRouteError();
    return (
        <div>
            <h1 className="text-danger">{status} {statusText}</h1>
            <h3 className="text-danger">{data}</h3>
        </div>
    )
}

export default ErrorElement;