import './ReloadPrompt.css';

import { useRegisterSW } from 'virtual:pwa-register/react';

export default function PwaReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const close = () => {
    setNeedRefresh(false);
  };

  return (
    <div className="ReloadPrompt-container">
      {needRefresh && (
        <div className="ReloadPrompt-toast">
          <div className="ReloadPrompt-message">
            <span>
              A new version of the application is available. Click on the reload
              button to update.
            </span>
          </div>
          <button
            type="button"
            className="ReloadPrompt-toast-button"
            onClick={() => void updateServiceWorker(true)}
          >
            Reload
          </button>
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
