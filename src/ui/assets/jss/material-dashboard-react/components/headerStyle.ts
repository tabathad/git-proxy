import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
} from '../../material-dashboard-react';

interface StyleProps {
  appBar: React.CSSProperties;
  container: React.CSSProperties;
  flex: React.CSSProperties;
  title: React.CSSProperties & {
    '&:hover,&:focus': React.CSSProperties;
  };
  appResponsive: React.CSSProperties;
  primary: React.CSSProperties;
  info: React.CSSProperties;
  success: React.CSSProperties;
  warning: React.CSSProperties;
  danger: React.CSSProperties;
}

const headerStyle = (): StyleProps => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    position: 'absolute',
    width: '100%',
    paddingTop: '27px',
    zIndex: '1029',
    color: 'black',
    border: '0',
    borderRadius: '3px',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block',
  },
  container: {
    ...container,
    minHeight: '50px',
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    letterSpacing: 'unset',
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    margin: '0',
    '&:hover,&:focus': {
      background: 'transparent',
    },
  },
  appResponsive: {
    top: '8px',
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default headerStyle;