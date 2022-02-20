import { motion } from "framer-motion";
import styled from "styled-components";

export const Bar = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.accent};
  border-radius: 12px;
`;
Bar.displayName = "Bar";
