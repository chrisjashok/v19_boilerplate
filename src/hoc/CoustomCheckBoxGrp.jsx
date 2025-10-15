import { Checkbox, FormControl, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

/**
 * @typedef {Object} CheckBoxItem
 * @property {string} name - The name of the checkbox
 * @property {string} label - The label for the checkbox
 * @property {boolean} checked - Whether the checkbox is checked
 */

/**
 * @typedef {Object} CustomCheckBoxGrpProps
 * @property {CheckBoxItem[]} [data] - Array of checkbox items
 * @property {(event: import("react").ChangeEvent<HTMLInputElement>) => void} [onChange] - Change handler
 * @property {import('@mui/material').SxProps<import('@mui/material').Theme>} [sx] - MUI sx styling prop
 * @property {React.CSSProperties} [style] - Inline styles
 * @property {string} [className] - Optional class name
 */

/**
 * @param {CustomCheckBoxGrpProps} props
 */

export default function CustomCheckBoxGrp(props) {
  const { data = [{ name: "", label: "", checked: false }], onChange , sx={}, style={}, className='' } = props;
  return (
    <FormControl component="fieldset" variant="standard"  style={style??null} className={className??null} >
      <FormGroup sx={sx??null}>
        {data.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={item?.checked}
                  onChange={onChange}
                  name={item?.name}
                />
              }
              label={item?.label}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
}
