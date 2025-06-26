import '@mdi/font/css/materialdesignicons.min.css';
import type { App } from 'vue';
import { type VuetifyOptions, createVuetify } from 'vuetify';
import {
  VCalendar,
  VCalendarDay,
  VCalendarHeader,
  VCalendarInterval,
  VCalendarIntervalEvent,
  VCalendarMonthDay,
} from 'vuetify/labs/VCalendar';
import { VDateInput } from 'vuetify/labs/VDateInput';
import { VFileUpload, VFileUploadItem } from 'vuetify/labs/VFileUpload';
import { VIconBtn } from 'vuetify/labs/VIconBtn';
import { VPicker, VPickerTitle } from 'vuetify/labs/VPicker';
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh';
import { VStepperVertical, VStepperVerticalActions, VStepperVerticalItem } from 'vuetify/labs/VStepperVertical';
import { VTimePicker, VTimePickerClock, VTimePickerControls } from 'vuetify/labs/VTimePicker';
import { VTreeview, VTreeviewGroup, VTreeviewItem } from 'vuetify/labs/VTreeview';
import { en, fr } from 'vuetify/locale';
// @ts-ignore
import 'vuetify/styles';

import SlickteamClipboardButton from '@/components/molecules/button/SlickteamClipboardButton.vue';
import SlickteamIconButton from '@/components/molecules/button/SlickteamIconButton.vue';
import SlickteamTextIconButton from '@/components/molecules/button/SlickteamTextIconButton.vue';
import SlickteamColorPicker from '@/components/molecules/picker/SlickteamColorPicker.vue';
import SlickteamIconPicker from '@/components/molecules/picker/SlickteamIconPicker.vue';
import SlickteamContainer from '@/components/organisms/SlickteamContainer.vue';
import SlickteamDataTable from '@/components/organisms/SlickteamDataTable.vue';
import SlickteamSidebar from '@/components/organisms/SlickteamSidebar.vue';
import SlickteamSidebarIcon from '@/components/organisms/SlickteamSidebarIcon.vue';
import SlickteamToolbar from '@/components/organisms/SlickteamToolbar.vue';

const SlickComponentLibrary = {
  install: (app: App) => {
    app.component('SlickteamClipboardButton', SlickteamClipboardButton);
    app.component('SlickteamIconButton', SlickteamIconButton);
    app.component('SlickteamTextIconButton', SlickteamTextIconButton);
    app.component('SlickteamColorPicker', SlickteamColorPicker);
    app.component('SlickteamIconPicker', SlickteamIconPicker);
    app.component('SlickteamContainer', SlickteamContainer);
    app.component('SlickteamToolbar', SlickteamToolbar);
    app.component('SlickteamSidebarIcon', SlickteamSidebarIcon);
    app.component('SlickteamSidebar', SlickteamSidebar);
    app.component('SlickteamDataTable', SlickteamDataTable);
  },
};

const VuetifyLibrary = {
  install(app: App, options: VuetifyOptions) {
    const defaultOptions = options ?? {
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              background: '#f5f5f9',
              surface: '#fff',
              primary: '#f18900',
              secondary: '#0068f1',
              success: '#00c853',
              warning: '#ffc107',
              error: '#f44336',
              info: '#03c9d7',
            },
          },
        },
      },
      locale: {
        locale: 'fr',
        fallback: 'en',
        messages: { fr, en },
      },
    };

    const vuetify = createVuetify(defaultOptions);
    app.use(vuetify);
  },
};

export {
  VuetifyLibrary,
  SlickComponentLibrary,
  // Molecules
  SlickteamClipboardButton,
  SlickteamIconButton,
  SlickteamTextIconButton,
  SlickteamColorPicker,
  SlickteamIconPicker,
  // Organisms
  SlickteamContainer,
  SlickteamToolbar,
  SlickteamSidebarIcon,
  SlickteamSidebar,
  SlickteamDataTable,
  // Labs comps
  VCalendar,
  VCalendarDay,
  VCalendarHeader,
  VCalendarInterval,
  VCalendarIntervalEvent,
  VCalendarMonthDay,
  VDateInput,
  VFileUpload,
  VFileUploadItem,
  VIconBtn,
  VPicker,
  VPickerTitle,
  VPullToRefresh,
  VStepperVertical,
  VStepperVerticalActions,
  VStepperVerticalItem,
  VTimePicker,
  VTimePickerClock,
  VTimePickerControls,
  VTreeview,
  VTreeviewGroup,
  VTreeviewItem,
};
