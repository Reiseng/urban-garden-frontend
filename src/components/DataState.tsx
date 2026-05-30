interface DataStateProps {
    loading: boolean;
    error: boolean;
    isEmpty: boolean;
    emptyMessage: string;
    children: React.ReactNode;
}

function DataState({
    loading,
    error,
    isEmpty,
    emptyMessage,
    children
}: DataStateProps) {

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error al cargar datos.</p>;
    }

    if (isEmpty) {
        return <p>{emptyMessage}</p>;
    }

    return <>{children}</>;
}

export default DataState;