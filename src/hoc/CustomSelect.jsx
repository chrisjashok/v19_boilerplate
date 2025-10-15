import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import React from "react";

/**
 * @typedef {string} labelIdType
 * @typedef {string} labelType
 * @typedef {string} valueType
 * @typedef {string} nameType
 * @typedef {"standard" | "outlined" | "filled" | undefined} variantType
 * @typedef {'small' | 'medium' | ''} sizeType
 * @typedef {boolean} fullWidthType
 * @typedef {import("@mui/material").SxProps <import("@mui/material").Theme>} sxType
 * @typedef {import("@mui/material").SxProps <import("@mui/material").Theme>} styleType
 * @typedef {boolean} displayEmptyType
 * @typedef {Array<string | number | Object>} menuItemsType
 * @typedef {import("@mui/material").SxProps <import("@mui/material").Theme>} styleType
 * @typedef {} onChangeType
 * @typedef {} renderValueType
 * @typedef {} renderitemType
 */

/**
 * @param {{
 * labelId?:labelIdType
 * label?:labelType
 * value?:valueType
 * name?: nameType
 * variant?:variantType
 * size?: sizeType
 * fullWidth?: boolean,
 * sx?: import("@mui/material").SxProps <import("@mui/material").Theme>
 * style?: styleType
 * displayEmpty?: boolean
 * menuItems?: menuItemsType
 * onChange?: {(event: import("react").ChangeEventEvent<{ name?: string; value: unknown }>) => void} onChangeType
 * renderValue?:{(event: import("react").ChangeEventEvent<{ name?: string; value: unknown }>) => void} renderValueType
 * renderitem?:()=> renderitemType
 * }} props
 */

export default function CustomSelect(props) {
  const {
    labelId = "",
    label = "",
    value = "",
    variant = "outlined",
    onChange,
    name = "",
    size = "medium",
    fullWidth = true,
    sx,
    style,
    displayEmpty = false,
    renderValue,
    menuItems = [],
    // renderitem,
  } = props;


  return (
    <Grid
      container
      size={12}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width: !fullWidth ? "30%" : "100%",
      }}
    >
      <FormControl variant={variant}>
        <Select
          labelId={labelId}
          label={label}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          name={name}
          size={size}
          sx={sx}
          style={style}
          displayEmpty={displayEmpty}
          renderValue={renderValue}
        >
          {/* {renderitem && typeof renderitem === "function"
            ? renderitem()
            : menuItems?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))} */}

          {menuItems?.map((option,index) => {
            if (React.isValidElement(option)) {
              return (
                <MenuItem key={index} disableRipple disableTouchRipple>
                  {option}
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
    </Grid>
  );
}
