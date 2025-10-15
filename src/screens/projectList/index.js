import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import ImgCardList from "../../components/moreDetail/ImgCardList";
import CustomSelect from "../../hoc/CustomSelect";
import { Paper, Slider, Typography } from "@mui/material";
import CustomCheckBoxGrp from "../../hoc/CoustomCheckBoxGrp";
import { useNavigate } from "react-router-dom";
// import OverView from "../../components/projectDetail/OverView";
// import AboutPorject from "../../components/projectDetail/AboutPorject";

export default function ProjectList() {
  const data = [
    {
      id: 1,
      price: 12,
      discription: "2 BHK home in near guindy",
      bed: 2,
      bath: 2,
    },
    {
      id: 2,
      price: 27,
      discription: "3 BHK home in near kodambakkam",
      bed: 3,
      bath: 2,
    },
    {
      id: 3,
      price: 15,
      discription: "2 BHK home in near medavakkam",
      bed: 1,
      bath: 2,
    },
    {
      id: 4,
      price: 17,
      discription: "2 BHK home in near guindy",
      bed: 2,
      bath: 2,
    },
    {
      id: 5,
      price: 12,
      discription: "2 BHK home in near kodambakkam",
      bed: 2,
      bath: 2,
    },
    {
      id: 6,
      price: 12,
      discription: "2 BHK home in near guindy",
      bed: 2,
      bath: 2,
    },
  ];

  const [selected, setSelected] = useState({
    type: "Select BHK",
    location: "Chennai",
    price: [20, 35],
  });
  const [sort, setSort] = useState("Sort");
  const [checked, setChecked] = useState([
    { name: "1 BHK", label: "1 BHK", checked: false },
    { name: "2 BHK", label: "2 BHK", checked: false },
    { name: "3 BHK", label: "3 BHK", checked: false },
  ]);
  const [locationbox, setLocationBox] = useState([
    { name: "chennai", label: "chennai", checked: false },
    { name: "Hydrabad", label: "Hydrabad", checked: false },
    { name: "Mumbai", label: "Mumbai", checked: false },
    { name: "kochi", label: "kochi", checked: false },
  ]);

  const nav = useNavigate();

  const handleChange = (e, newvalue) => {
    if (e.target.name === "price") {
      setSelected({ ...selected, [e.target.name]: newvalue });
    } else {
      setSelected({ ...selected, [e.target.name]: e.target.value });
    }
  };

  const handleCheck = (e) => {
    const { name, checked: isChecked } = e.target;

    const updatedCheckboxes = checked.map((item) =>
      item.name === name ? { ...item, checked: isChecked } : item
    );

    setChecked(updatedCheckboxes);
  };

  const handleLocationcheck = (e) => {
    const { name, checked: isChecked } = e.target;

    const updatedCheckboxes = locationbox.map((item) =>
      item.name === name ? { ...item, checked: isChecked } : item
    );
    setLocationBox(updatedCheckboxes);
  };

  return (
    <Grid
      container
      size={12}
      spacing={5}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F9F6F3",
      }}
    >
      <Grid
        size={8}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#fff",
          border: "1px solid #9a3f81",
          height: "10vh",
          borderRadius: "1rem",
          padding: "0 1rem",
        }}
      >
        <Grid container size={6}>
          <CustomSelect
            name="type"
            value={selected.type}
            menuItems={["1 BHK", "2 BHK", "3 BHK"]}
            onChange={handleChange}
            size="small"
            fullWidth={false}
            sx={{ color: "#9a3f81" }}
            renderValue={(selected) => {
              if (selected.length === undefined || selected.length === 0) {
                return <em>Select BHK</em>;
              } else {
                return <em>{selected}</em>;
              }
            }}
          />

          <CustomSelect
            name="location"
            value={selected.location}
            menuItems={["Guindy", "Kodambakkam", "Medavakkam", "valachery"]}
            onChange={handleChange}
            size="small"
            fullWidth={false}
            sx={{ color: "#9a3f81" }}
            renderValue={(selected) => {
              if (selected.length === undefined || selected.length === 0) {
                return <em>Select location</em>;
              } else {
                return <em>{selected}</em>;
              }
            }}
          />
        </Grid>

        <Grid
          container
          size={3}
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">Sort by: </Typography>
          <CustomSelect
            name="sort"
            value={sort}
            menuItems={["new", "1 week", "1 month"]}
            onChange={(e) => setSort(e.target.value)}
            size="small"
            variant="standard"
            fullWidth={false}
            renderValue={(selected) => {
              if (selected.length === undefined || selected.length === 0) {
                return <em>new</em>;
              } else {
                return <em>{selected}</em>;
              }
            }}
          />
        </Grid>
      </Grid>
      {/* <OverView value={data}  />
            <AboutPorject/> */}

      <Grid
        container
        size={9}
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "12.6vw",
            position: "absolute",
            left: "4vw",
            zIndex: 100,
          }}
        >
          <Grid size={12} sx={{ padding: "4px 8px" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#9a3f81", fontWeight: "700" }}
            >
              House Type
            </Typography>
            <CustomCheckBoxGrp
              data={checked}
              onChange={handleCheck}
              sx={{ color: "#9a3f81", display: "flex", flexDirection: "row" }}
            />
          </Grid>
          <Grid size={12} sx={{ padding: "4px 8px" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#9a3f81", fontWeight: "700" }}
            >
              Location
            </Typography>
            <CustomCheckBoxGrp
              data={locationbox}
              onChange={handleLocationcheck}
              sx={{ color: "#9a3f81", display: "flex", flexDirection: "row" }}
            />
          </Grid>
          <Grid size={12} sx={{ padding: "4px 12px" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#9a3f81", fontWeight: "700" }}
              gutterBottom
            >
              Price range
            </Typography>
            <Slider
              name="price"
              value={selected.price}
              valueLabelDisplay="auto"
              onChange={handleChange}
              step={10}
              min={20}
              max={90}
              valueLabelFormat={(value) => `₹${value}`}
              sx={{color:'#9a3f81'}}
            />
          </Grid>
        </Paper>
        {data.map((item) => {
          return <ImgCardList data={item} onNavigate={(param)=>{ nav('/projectdetail',{state:param})}} />;
        })}
      </Grid>
    </Grid>
  );
}
