import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

function DynamicAccordions() {
    const accordionData = [
        {
            id: "panel1",
            summary: "Structure",
            details: [
                "RCC Framed Structure As Per Earthquake Resistant Design",
                "Masonry With Concrete Blocks & Plastering"
            ],
        },
        {
            id: "panel2",
            summary: "Flooring",
            details: [
                "Living, Bedrooms & Kitchen - Polished Vitrified Tiles - Double Charged - Kajaria/RAK or Equivalent Make",
                "Toilet Flooring - Anti-Skid Vitrified Tiles - Kajaria/RAK or Equivalent Make"
            ],
        },
        {
            id: "panel3",
            summary: "French Doors/Windows",
            details: ["EWC & Wash Basin - Wall Hung Closet with Concealed Tanks & Wash Basin - Kohler/Grohe/American Standard or Equivalent Make"]
        },
        {
            id: "Railing",
            summary: "Premium Sanitary Ware & Fittings",
            details: ["Main Door - Teak Wood Frame with Thick Veneered Shutters Along with Architraves & Dorma/Hafele Premium Fittings/Dorset",]
        },
        {
            id: "False Ceiling - Toilets",
            summary: "Premium Sanitary Ware & Fittings",
            details: ["French Doors - 3 Track - (2 Panel + 1 Panel - Mosquito Fibre Mesh) with Clear Glass",]
        },
        {
            id: "Kitchen",
            summary: "Premium Sanitary Ware & Fittings",
            details: ["Balcony Railing - Handrail with Toughened/Laminated Glass",]
        },
        {
            id: "Painting & Finishes",
            summary: "Premium Sanitary Ware & Fittings",
            details: ["Exterior Finishes - Texture Putty - Asian/Dulux/Equivalent Make Exterior Emulsion - Weatherproof - Asian/Dulux/Equivalent Make",]
        },
    ];

    // For controlled accordions (optional)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Grid size={{ md: 10 }} sx={{ margin: '3rem 0 5rem 0' }}>
            <Grid size={12} sx={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:'center',margin:'2rem 0 3rem 0'}}>
                <Typography variant="h4" className="title">Specifications</Typography>
            </Grid>
            {accordionData.map((item) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === item.id} // For controlled accordions
                    onChange={handleChange(item.id)} // For controlled accordions
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                    >
                        <Typography variant="h6"  >{item.summary}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.details}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Grid>
    );
}

export default DynamicAccordions;
