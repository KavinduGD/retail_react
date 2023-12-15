import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";

function ProgressBar(props) {
  const absoluteValue = Math.abs(props.value);

  var color = "";
  if (props.value > 20) {
    color = "#E77E7E"; // Use your custom color here
  }
  if (props.value > 0 && props.value < 20) {
    color = "#83DBB1"; // Use your custom color here
  }
  if (props.value < 0) {
    color = "#DECE3B"; // Use your custom color here
  }
  return (
    <div className="w-[130px] mr-10">
      <LinearProgress
        determinate
        variant="outlined"
        size="sm"
        thickness={24}
        value={absoluteValue}
        sx={{
          "--LinearProgress-radius": "20px",
          "--LinearProgress-thickness": "20px",
          color: color,
          backgroundColor: "#EDEDFF",
        }}
      >
        <Typography
          level="body-xs"
          fontWeight="xl"
          textColor="#E49696"
          sx={{ mixBlendMode: "difference" }}
        >
          {props.value}
        </Typography>
      </LinearProgress>
    </div>
  );
}

export default ProgressBar;
