import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "300px",
          color: "#ffffff",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          padding: "10px 30px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          paddingBottom: "4px",
        },
        input: {
          color: "#ffffff",
          backgroundColor: 'transparent',
          WebkitTextFillColor: '#fff',
            "&:-internal-autofill-selected": {
              WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              "::hover": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              },
              "::focus": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              },
              "::active": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              },
            },
        },
        underline: {
          "&:before": {
            borderBottom: "1px solid #ffffff !important",
          },
          "&:after": {
            borderBottom: "2px solid #ffffff",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          borderColor: "#ffffff",
          input: {
            backgroundColor: 'transparent',
            WebkitTextFillColor: '#fff',
            "&:-internal-autofill-selected": {
              WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              "::hover": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
                WebkitTransitionDelay: '9999s',
                borderColor: 'white',
              },
              "::focus": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
                WebkitTransitionDelay: '9999s',
                borderColor: 'white',
              },
              "::active": {
                WebkitTransition: "color 9999s ease-out, background-color 9999s ease-out",
              WebkitTransitionDelay: '9999s',
              },
            },
            ".MuiDisabled": {
              borderColor: "#ffffff",
              color: "#ffffff",
            },
            ".MuiFocused": {
              borderColor: 'white'
            }
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
          borderColor: "#ffffff !important",
          ".MuiDisabled": {
            borderColor: "#ffffff",
          },
          "&:hover": {
            borderColor: "#ffffff",
          }
        },
        notchedOutline: {
          borderColor: "#ffffff",
        }
      } 
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop: "5px",
          marginRight: "10px",
          color: "#ffffff !important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          wordWrap: 'break-word',
          width: '60%',
          color: "#ffffff",
          tableLayout: 'fixed',
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "::hover" : {
            backgroundColor: "white"
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          color: "#ffffff",
          border: '1px solid #ffffff',
          "::hover" : {
            backgroundColor: "white"
          }
        },
        head: {
          fontSize: '16px',
          fontWeight: '600'
        }
      }
    },
  },
});
