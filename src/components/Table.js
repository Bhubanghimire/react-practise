import React from "react";
import Columns from "./Column"

function Table() {
    return (
        <React.Fragment>
            <table>
            <tbody>
            <tr>
                <Columns/>
            </tr>
            </tbody>
            </table>
        </React.Fragment>
    )

}
export default Table