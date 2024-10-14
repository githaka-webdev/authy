export default function UsersTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>Last Name</th>
                    <th>Year Of Birth</th>
                    <th>Email</th>
                    <th>Hash</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>John</th>
                    <th>Doe</th>
                    <th>2000</th>
                    <th>john@gmail.com</th>
                    <th>f4FnH78Ki</th>
                </tr>
            </tbody>
            <tfoot>
                <p>Pagination</p>
            </tfoot>
        </table>
    );
}
