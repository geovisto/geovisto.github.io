// Module
import { GeovistoHeatLayerTool } from "geovisto-layer-heat";

// Module styles
import "geovisto-layer-heat/dist/index.css";

// React
import React from "react";

// Static
import config from "../../../../../static/config/config-layer-heat.json";
import data from "../../../../../static/data/data-heat.json";

// Base core of Geovisto
import Base from "../../../GeovistoBase";

const Heat = () => {
    const moduleToDisplay = GeovistoHeatLayerTool.createTool({
        id: "geovisto-tool-layer-heat",
    });

    return (
        <Base
            {...{
                config,
                data,
                moduleToDisplay,
            }}
        />
    );
};

export default Heat;
