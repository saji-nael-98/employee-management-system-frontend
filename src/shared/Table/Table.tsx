import {
    useMantineReactTable,
    MantineReactTable,
    type MRT_ColumnDef
} from 'mantine-react-table';
import React from 'react';
import { Resource } from '../../types';
import { ActionIcon, Group } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
interface ComponentProps {
    columns: MRT_ColumnDef<Resource>[],
    data: Resource[]
}

const Table: React.FC<ComponentProps> = ({ columns, data }) => {
    const table = useMantineReactTable({
        columns,
        data,
        state: {
            density: 'xs'
        },
        renderTopToolbarCustomActions: () => <Group>
            <ActionIcon variant="filled" radius="sm" size='md' >
                <IconPlus size="1.25rem" />
            </ActionIcon>
        </Group>
    })
    return (
        <MantineReactTable table={table} />
    )
}
export { Table };

