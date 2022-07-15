import React from "react";
import Box from "@mui/material/Box";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function ViewFeed() {
    const consultarFeed = async () => {
        const historial = await axios.get("http://localhost:3001/feed", {

        })
    }

    return (
        <DashboardLayout>
            Consultar retroalimentaciones
        </DashboardLayout>
    )
}

export default ViewFeed;