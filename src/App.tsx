import { KbsProvider } from 'react-kbs';
import { AppStateProvider } from 'react-science/app-data';
import { RootLayout, FullScreenProvider } from 'react-science/ui';

import MainLayout from './MainLayout.js';

export default function App() {
  return (
    <RootLayout>
      <KbsProvider>
        <AppStateProvider>
          <FullScreenProvider>
            <MainLayout />
          </FullScreenProvider>
        </AppStateProvider>
      </KbsProvider>
    </RootLayout>
  );
}
