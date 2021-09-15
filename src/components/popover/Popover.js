import React from "react";
import MyButton from "../myButton/MyButton";
import logo from "../../imgs/shuttle.png";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const forP = {
    height: 16,
    fontFamily: "Noto Sans",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    color: " #4c5862",
  };
  const forInp = {
    width: 330,
    height: 48,
    border: "1px solid #abaaaa",
    boxSizing: "border-box",
    borderRadius: 5,
    paddingLeft: 16,
  };

  const button = {
    height: 48,
    width: 220,
    backgroundColor: "#6241ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    cursor: "pointer",
  };
  const buttonP = {
    color: "#ffffff",
  };

  return (
    <div>
      <MyButton
        widthP={props.widthP}
        heightP={props.heightP}
        fontP={props.fontP}
        fn={() => handleClickOpen}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <div style={{ width: 24, height: 24, marginRight: 10 }}>
              <img width="100%" alt="logo" src={logo} />
            </div>
            <p
              style={{
                fontFamily: "Chakra Petch",
                fontWeight: 500,
                fontSize: 24,
                color: "#1E1E1E",
              }}
            >
              Equire
            </p>
          </div>
        </DialogTitle>
        <DialogContent id="alert-dialog-description">
          <div>
            <p style={forP}>Name</p>
            <input style={forInp} type="text" placeholder="Name" />
          </div>
          <div>
            <p style={forP}>Phone</p>
            <input style={forInp} type="text" placeholder="+123 568 6354" />
          </div>
        </DialogContent>
        <DialogActions>
          <div style={button} onClick={() => handleClose()}>
            <p style={buttonP}>Send message</p>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
