import { PartsStyleObject, SystemStyleObject } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const choiceChipAnatomy = {
  __type: "ChoiceChip",
  keys: ["container", "label", "icon"],
};

const containerStyle: SystemStyleObject = {
  backgroundColor: "alias.white",
  boxShadow: `0 0 0 1px ${colors.alias.celadon}`,
  color: "alias.darkTeal",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "16px",
  transitionProperty: "box-shadow, backgroundColor",
  transitionDuration: "fast",
  _focus: {
    boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
  },
  _hover: {
    boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
  },
  _checked: {
    background: "alias.seaMist",
  },
};
const iconStyle: SystemStyleObject = {
  mr: 1,
};
const labelStyle: SystemStyleObject = {};

const baseStyle: PartsStyleObject<typeof choiceChipAnatomy> = {
  container: containerStyle,
  icon: iconStyle,
  label: labelStyle,
};

const sizes: Record<string, PartsStyleObject<typeof choiceChipAnatomy>> = {
  sm: {
    container: {
      borderRadius: "15px",
      height: "30px",
      px: 1.5,
    },
  },
  md: {
    container: {
      borderRadius: "18px",
      height: "36px",
      px: 2,
    },
  },
  lg: {
    container: {
      borderRadius: "21px",
      height: "42px",
      px: 3,
    },
  },
};

const defaultProps = {
  size: "md",
};

export default {
  parts: choiceChipAnatomy.keys,
  baseStyle,
  sizes,
  defaultProps,
};
