import { useMemo } from 'react'
import {
    type MRT_ColumnDef
} from 'mantine-react-table';
import { Resource } from '../../types';
function useTableColumns<T extends Resource>(columns: MRT_ColumnDef<T>[] = []) {
    columns.unshift({
        header: 'Name',
        accessorKey: 'name'
    })
    columns.unshift({
        header: 'ID',
        accessorKey: 'id'
    })
    return useMemo(() => columns, []);
}
export { useTableColumns }