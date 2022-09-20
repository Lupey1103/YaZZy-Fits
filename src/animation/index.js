import { keyframes } from "@mui/system";

const flipHorizontalBottom = keyframes`

0% {
    -webkit-transform: translateY(0) rotateX(0);
            transform: translateY(0) rotateX(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
  }
  100% {
    -webkit-transform: translateY(100%) rotateX(180deg);
            transform: translateY(100%) rotateX(180deg);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
  }
}`;

const slideBottom = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(100px);
            transform: translateY(100px);
  }
}
`;
