import {Container, styled} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getData} from "./api/getData";
import DataTable from "./components/DataTable";
import Header from "./components/Header";
import {StoreInterface} from "./interfaces/StoreInterface";
import {setData} from "./store/actions/setData";

const AppContainer = styled(Container)({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
});

const App: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: StoreInterface) => state.data);
    
    useEffect(() => {
        getData().then((response) => {
            if(response.status > 300){
                console.error("Failed to fetch Data");
            }else{
                response.json().then((resource) => {
                    dispatch(setData(resource));
                });
            }
        });
    }, []);
    
    const renderContent = ():React.ReactNode => {
        if(!data.length){
            return null;
        }
        return (
            <DataTable data={data}/>
        );
    };
    
    return (
        <AppContainer>
            <Header/>
            {renderContent()}
        </AppContainer>
    );
};

export default App;
