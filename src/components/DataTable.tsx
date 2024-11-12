import {Box, styled} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import React, {useMemo} from "react";
import {getTableColumns} from "../helpers/getTableColumns";
import {DataInterface} from "../interfaces/DataInterface";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface DataTableInterface {
    data: DataInterface[]
}

const StatusBox = styled(Box)({
    marginRight: "auto",
    display: "flex",
    gap: "10px"
});

const DataTable = ({data}: DataTableInterface):JSX.Element => {
    
    const tableFlex = [
        2,1,1,2
    ];
    
    const rows = useMemo(() => {
        return data.map((opt, index) => {
            return {
                ...opt,
                id: index,
            };
        });
    },[data[0], data.length]);
    
    const getStatusIcon = (status: string):React.ReactNode => {
        switch (status) {
        case "Interrupted": return <PauseCircleOutlineOutlinedIcon/>;
        case "Failed": return <CancelIcon htmlColor={"red"}/>;
        case "Finished": return <CheckCircleIcon htmlColor={"green"}/>;
        }
    };
    
    const renderStatus = (opt: string):React.ReactNode => {
        return <StatusBox className={opt.toLowerCase()}>
            {getStatusIcon(opt)}
            {opt}
        </StatusBox>;
    };
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderRowsByType = (type: string, opt: any):React.ReactNode => {
        switch (type) {
        case "status": return renderStatus(opt);
        default: return <span>{opt.toString()}</span>;
        }
    };
    
    const renderColumns = (opt: string): React.ReactNode => {
        return <Box
            key={opt}>{/(?=[A-Z])/g[Symbol.split](opt).map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join(" ")}</Box>;
    };
    
    const columns: GridColDef[] = useMemo(() => getTableColumns(data,renderColumns, renderRowsByType,tableFlex), [data]);
    
    return (
        <DataGrid
            headerHeight={50}
            rowHeight={40}
            disableColumnSelector={true}
            disableSelectionOnClick={true}
            columns={columns}
            rows={[...rows]}
            checkboxSelection
        />
    );
};

export default DataTable;
