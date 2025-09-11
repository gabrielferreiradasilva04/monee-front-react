import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TransactionsHeader from "../components/TransactionsHeader";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import PageContainer from "../components/PageConteiner";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";

dayjs.locale("pt-br");
export default function Transactions() {
  return (
    <>
      <PageContainer>
        <Box>
          <Box>
            <TransactionsHeader></TransactionsHeader>
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                endIcon={<AddIcon/>}
                sx={{fontWeight:"bold"}}
              >Lançamentos</Button>
            </Box>
          </Box>
          <Box>
            <SearchBar></SearchBar>
          </Box>
        </Box>
      </PageContainer>
    </>
  );
}
