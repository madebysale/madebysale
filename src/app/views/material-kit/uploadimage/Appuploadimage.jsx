import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import Singleimage from "./Singleimage";
import Multipleimage from "./Multipleimage";


const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const Appuploadimage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title=" single Uploadimage">
            <Singleimage/>
        </SimpleCard>
        
        <SimpleCard title="multiple Uploadimage">
        <Multipleimage/>
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default Appuploadimage;
