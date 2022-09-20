import { Box } from "@mui/system";
import { MessageText, PromosContainer } from "../../styles/Promos";
import { useEffect, useState } from "react";
import { Slide } from "@mui/material";

const messages = [
  "15% off on your first order!",
  "Winter sale starts now on select items",
  "Follow us on Instagram!",
];

export default function Promos() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);

      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <PromosContainer>
      <Slide direction={show ? "left" : "right"} in={show} timeout={{enter: 500, exit: 100}}>
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromosContainer>
  );
}
