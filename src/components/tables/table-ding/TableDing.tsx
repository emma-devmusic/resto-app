import { useCallback, useEffect, useState } from "react";
import { Pagination } from "../../"
import { headerMapping } from "../../../common/definitions/constants";
import { ActionButton } from "../../../types/form";
import { tdKey } from "../../../types/table";
import { TableHead } from "./TableHead"
import { TableRow } from "./TableRow"
import { CircleHelp } from "lucide-react";

interface TableDingProps {
    td: any[];
    columns: tdKey[];
    withActionsRow?: boolean;
    actions?: ActionButton[];
    getItemsSelected?: (e: any) => void;
}

export const TableDing = ({ td, columns, withActionsRow = false, actions, getItemsSelected }: TableDingProps) => {
    const headers = columns.map((col: tdKey) => headerMapping[col as tdKey]);
    const [itemsSelected, setItemsSelected] = useState<string[] | number[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(td.length / itemsPerPage);

    // Dividir los datos según la página

    useEffect(() => {
        if (getItemsSelected) {
            getItemsSelected(itemsSelected)
        }
    }, [itemsSelected, getItemsSelected])

    const handleSelectAll = useCallback(() => {
        setItemsSelected((prev) => (prev.length === td.length ? [] : td.map((e) => e.id)));
    }, [td]);

    return (
        <div className="rounded-lg border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <TableHead
                        items={td}
                        handleSelectAll={getItemsSelected ? handleSelectAll : undefined}
                        isChecked={itemsSelected.length === td.length}
                        headers={
                            !withActionsRow
                                ? headers
                                : [...headers, 'Acciones']
                        }
                    />
                    <tbody className="divide-y divide-gray-200">
                        {td.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + (withActionsRow ? 1 : 0)} className="text-center py-20">
                                    <div className="flex items-center justify-center gap-2 text-gray-600">
                                        <CircleHelp className="h-5" /> <span>No hay datos disponibles.</span>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            td.map((e, i) => (
                                <TableRow
                                    key={i}
                                    td={e}
                                    columns={columns}
                                    withActions={withActionsRow}
                                    actions={actions}
                                    handleSelectItem={getItemsSelected ? setItemsSelected : undefined}
                                    isChecked={itemsSelected.includes(e.id as never)}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    )
}
