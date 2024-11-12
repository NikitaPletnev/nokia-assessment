import React from "react";
import {GridColDef, GridColumnHeaderParams} from "@mui/x-data-grid";
import {dataGridSortComparator} from "./dataGridSortComparator";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTableColumns = (data: any,
    renderColumns: (opt: string) =>  React.ReactNode,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderRowsByType: (type: string, opt: any, row: any) => React.ReactNode,
    tableFlex: number[]
): GridColDef[] => {
    return [...Object.keys(data[0])].filter((opt) => opt !== "id").map((opt, index) => {
        return {
            field: opt,
            flex: tableFlex[index],
            headerAlign: "center",
            align: index === 1 ? "left" : "center",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderHeader: (params: GridColumnHeaderParams<any, any, any>) => renderColumns(params.field),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderCell: (params: any) => renderRowsByType(params.field, params.value, params.row),
            hideable: false,
            disableReorder: true,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sortComparator: (a:any , b: any) => dataGridSortComparator(opt, a, b)
        };
        
    });
};
