import { Employee } from '../../../modules/employee';
import { Page, Table, useTableColumns } from '../../../shared';

const List = () => {
    const columns = useTableColumns<Employee>()
    return (
        <Page links={[{ type: 'label', label: 'Dashboard' }, { type: 'label', label: 'Employee List' }]}>
            <Table columns={columns} data={[]} />
        </Page>
    )
}
export const Component = List;
