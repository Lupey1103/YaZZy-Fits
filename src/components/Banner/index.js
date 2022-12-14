import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerImage,
} from "../../styles/Banner";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="./imgs/bannerimg.png" />
      <BannerContent>
        <Typography variant="h6">New Winter Collection</Typography>
        <BannerTitle varient="h4">Winter Outfits</BannerTitle>
        <BannerDescription varient="subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};
