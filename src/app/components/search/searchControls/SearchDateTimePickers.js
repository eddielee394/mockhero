import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const SearchDateTimePickers = () => {
  const useStyles = makeStyles((theme) => ({
    inputControl: {
      maxWidth: "200px",
    },
  }));

  const [selectedDateTime, setSelectedDateTime] = useState();
  const classes = useStyles();

  function handledDateTimeChange() {
    console.log("date time changed");
  }

  return (
    <div className="flex flex-col">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="flex justify-between">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Enter After"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "exit after",
            }}
            className={classes.inputControl}
            inputVariant="outlined"
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Exit Before"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "exit before",
            }}
            className={classes.inputControl}
            inputVariant="outlined"
          />
        </div>
        <div className="flex justify-between">
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="time-picker"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "enter after",
            }}
            keyboardIcon={<AccessTime />}
            className={classes.inputControl}
            inputVariant="outlined"
          />
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="time-picker"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "enter after",
            }}
            keyboardIcon={<AccessTime />}
            className={classes.inputControl}
            inputVariant="outlined"
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default SearchDateTimePickers;
