/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRegisterSW } from 'virtual:pwa-register/react';

const pwaReloadPromptCss = {
  container: css`
    padding: 0;
    margin: 0;
    width: 0;
    height: 0;
  `,
  toast: css`
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
    background-color: white;
  `,
  toastButtons: css`
    display: flex;
    justify-content: space-between;
  `,
  toastButton: css`
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
  `,
};

export default function PwaReloadPrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, reg) {
      if (reg) {
        setInterval(() => {
          if (!(!reg.installing && navigator)) {
            return;
          }

          if ('connection' in navigator && !navigator.onLine) {
            return;
          }

          console.log('Checking for updates...');
          fetch(swUrl, {
            cache: 'no-store',
            headers: {
              cache: 'no-store',
              'cache-control': 'no-cache',
            },
          })
            .then(async (resp) => {
              if (resp?.status === 200) {
                await reg.update();
              }
            })
            .catch(() => {
              // Ignore errors.
            });
        }, 30 * 1000); // TODO: one hour
      }
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  return (
    <div css={pwaReloadPromptCss.container}>
      {needRefresh && (
        <div css={pwaReloadPromptCss.toast}>
          <div>
            <p>A new version of Galvanicium is available.</p>
          </div>
          <div css={pwaReloadPromptCss.toastButtons}>
            <button
              type="button"
              css={pwaReloadPromptCss.toastButton}
              onClick={() => void updateServiceWorker(true)}
            >
              Reload
            </button>
            <button
              type="button"
              css={pwaReloadPromptCss.toastButton}
              onClick={() => close()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
