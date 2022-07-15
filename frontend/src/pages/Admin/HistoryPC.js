import React from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import axios from "axios";

function HistoryPC() {
    const consultarHistorial = async () => {
        const historial = await axios.get("http://localhost:3001/history", {

        })
    }
    
    return(
        <DashboardLayout>
            Ver historial de reserva de equipos
        </DashboardLayout>
    )
}

export default HistoryPC;