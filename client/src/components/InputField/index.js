import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./style.css"

const CssTextField = withStyles({
  root: {
    '& input': {
        color: 'white',
      },
    '& label': {
        color: 'white',
      },
    '& label.Mui-focused': {
        color: '#2eb3b0',
      },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2eb3b0",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className="text-field"
        id="custom-css-standard-input"
        label="Name"
        variant="outlined"
      />
    </form>
  );
}