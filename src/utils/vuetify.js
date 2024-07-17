// Styles
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { VNumberInput } from "vuetify/labs/VNumberInput";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VNumberInput,
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#f5f5f9",
          surface: "#fff",
          primary: "#f18900",
          secondary: "#0068f1",
          success: "#00c853",
          warning: "#ffc107",
          error: "#f44336",
          info: "#03c9d7",
        },
      },
    },
  },
});
