import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
import Date from "./Date";
import Addfeild from "./Addfeild";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="input feild">
          <SimpleForm />
        </SimpleCard>
        <SimpleCard title="date">
          <Date />
        </SimpleCard>
        <SimpleCard title="addbutton">
          <Addfeild />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppForm;
