import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";

/**
 * @typedef {Object} CheckBoxItem
 * @property {string} name
 * @property {string} label
 * @property {boolean} checked
 */

/**
 * @typedef {Object} CustomCheckBoxGrpProps
 * @property {CheckBoxItem[]} [data]
 * @property {(event: import("react").ChangeEvent<HTMLInputElement>) => void} [onChange]
 * @property {import('@mui/material').SxProps<import('@mui/material').Theme>} [sx]
 * @property {React.CSSProperties} [style]
 * @property {string} [className]
 * @property {string} [name]
 */

/**
 * @param {CustomCheckBoxGrpProps} props
 */

export default function CustomCheckBoxGrp(props) {
  const {
    name = "",
    data = [{ name: "", label: "", checked: false }],
    onChange,
    sx = {},
    style = {},
    className = "",
  } = props;

  const [showAll, setShowAll] = useState(false);

  // Determine how many items to show
  const itemsToShow = showAll ? data : data.slice(0, 3);
  const hasMore = data.length > 3;

  return (
    <FormControl
      component="fieldset"
      variant="standard"
      style={style ?? null}
      className={className ?? null}
      name={name}
    >
      <FormGroup sx={sx ?? null}>
        {itemsToShow.map((item) => (
          <FormControlLabel
            key={item.name}
            control={
              <Checkbox
                checked={item?.checked}
                onChange={onChange}
                name={item?.name}
              />
            }
            label={item?.label}
          />
        ))}
        {hasMore && (
          <Button
            size="small"
            onClick={() => setShowAll(!showAll)}
            sx={{ textTransform: "none", mt: 0, fontSize: "0.95rem" }}
          >
            {showAll ? "View Less" : "View More"}
          </Button>
        )}
      </FormGroup>
    </FormControl>
  );
}
