import { useRouteError } from "react-router-dom";

const ErrorMessage = () => {
    const error = useRouteError();
    return (
        <div className="space-y-4">
            <h4 className="text-center text-3xl font-bold">Oopss!!!!</h4>
            <p className="text-center text-2xl font-semibold">{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorMessage;