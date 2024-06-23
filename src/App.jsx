import { Button, TextField, colors } from "@mui/material";
import React, { useState } from "react";

function App() {
  const [simpleInterest, setSimpleIteeret] = useState(0);
  const [PrincipleAmount, setPrincipleAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  // validate State
  const [PrincipleAmountValidate, setPrincipleAmountValidate] = useState(true);
  const [rateValidate, setRateValidate] = useState(true);
  const [timeValidate, setTimeValidate] = useState(true);

  // Validate
  const validateHandler = (data) => {
    if (/^[0-9]*$/.test(data.target.value)) {
      if (data.target.name === "PAmount") {
        setPrincipleAmountValidate(true);
        setPrincipleAmount(data.target.value);
      } else if (data.target.name === "RInterest") {
        setRateValidate(true);
        setRate(data.target.value);
      } else {
        setTimeValidate(true);
        setTime(data.target.value);
      }
    } else {
      if (data.target.name === "PAmount") {
        setPrincipleAmount(data.target.value);
        setPrincipleAmountValidate(false);
      } else if (data.target.name === "RInterest") {
        setRate(data.target.value);
        setRateValidate(false);
      } else {
        setTime(data.target.value);
        setTimeValidate(false);
      }
    }
  };
  // Reset
  const resetHandler = () => {
    setPrincipleAmount("");
    setRate("");
    setTime("");
    setSimpleIteeret(0);
  };
  // Calculate
  const calculateHandler = () => {
    setSimpleIteeret((PrincipleAmount * rate * time) / 100);
  };
  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="wrapper">
          <div className="screen w-100 d-flex justify-content-center">
            <span className="bg-success shadow w-50 text-center text-light fw-bold py-5 rounded-3">
              Simple Interest :<p className="mt-3">{simpleInterest}</p>
            </span>
          </div>
          <form className="inputContainer mt-5 p-3">
            <TextField
              id="outlined-basic"
              label="Principle Amount"
              variant="outlined"
              className="mb-4 w-100"
              value={PrincipleAmount || ""}
              onChange={(e) => validateHandler(e)}
              name="PAmount"
              helperText={PrincipleAmountValidate ? "" : "Incorrect Value"}
              FormHelperTextProps={{ sx: { color: "red" } }}
            />
            <TextField
              id="outlined-basic"
              label="Rate of Interest %"
              variant="outlined"
              className="mb-4 w-100"
              value={rate || ""}
              onChange={(e) => validateHandler(e)}
              name="RInterest"
              helperText={rateValidate ? "" : "Incorrect Value"}
              FormHelperTextProps={{ sx: { color: "red" } }}
            />
            <TextField
              id="outlined-basic"
              label="Time in Years"
              variant="outlined"
              className="mb-4 w-100"
              value={time || ""}
              onChange={(e) => validateHandler(e)}
              name="Time"
              helperText={timeValidate ? "" : "Incorrect Value"}
              FormHelperTextProps={{ sx: { color: "red" } }}
            />
            <div className="float-end">
              <Button
                onClick={resetHandler}
                className=" bg-primary me-3"
                variant="contained"
              >
                Reset
              </Button>
              <Button
                disabled={
                  !PrincipleAmountValidate || !rateValidate || !timeValidate
                }
                className=" bg-warning"
                variant="contained"
                onClick={calculateHandler}
              >
                Calculate
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
