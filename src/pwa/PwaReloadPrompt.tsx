import './ReloadPrompt.css';

import { useRegisterSW } from 'virtual:pwa-register/react';

export default function PwaReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered: ' + r);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  console.log({ offlineReady, needRefresh });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <div className="ReloadPrompt-container">
      {(offlineReady || needRefresh) && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {needRefresh && (
            <button
              type="button"
              className="ReloadPrompt-toast-button"
              onClick={() => void updateServiceWorker(true)}
            >
              Reload
            </button>
          )}
          <button
            type="button"
            className="ReloadPrompt-toast-button"
            onClick={() => close()}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
