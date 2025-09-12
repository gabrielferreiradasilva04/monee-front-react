import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import TransactionsHeader from "../components/TransactionHeader";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import PageContainer from "../components/PageConteiner";
import SearchBar from "../components/SearchBar";
import AddIcon from "@mui/icons-material/Add";
import TransactionBox from "../components/TransactionBox";

dayjs.locale("pt-br");
export default function Transactions() {
  const transactions = [
    {
      id: 1,
      title: "Salário",
      account: "Nubank",
      amount: "1500,00",
      type: "income",
    },
    {
      id: 2,
      title: "Mercado",
      account: "Nubank",
      amount: "-600,00",
      type: "expense",
    },
    {
      id: 3,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 4,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 5,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
    {
      id: 6,
      title: "Assinaturas",
      account: "Nubank",
      amount: "-30,00",
      type: "expense",
    },
  ];
  return (
    <>
      <PageContainer>
        <Box>
          <Box>
            <TransactionHeader></TransactionHeader>
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
                endIcon={<AddIcon />}
                sx={{ fontWeight: "bold" }}
              >
                Lançamentos
              </Button>
            </Box>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <SearchBar></SearchBar>
          </Box>
          <Box
            sx={{
              maxHeight: "400px", // limite de altura
              overflowY: "auto", // scroll vertical
              border: "1px solid #eee",
              borderRadius: 2,
              bgcolor: "background.paper",
            }}
          >
            {transactions.map((tx) => (
              <TransactionBox
                key={tx.id}
                title={tx.title}
                account={tx.account}
                amount={tx.amount}
                type={tx.type}
              />
            ))}
          </Box>

        </Box>
      </PageContainer>
    </>
  );
}
