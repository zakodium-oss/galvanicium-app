/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FaInfo } from 'react-icons/fa';
import {
  IvPlotView,
  useDropFiles,
  useLoadFileCollectionFromHash,
  MeasurementsPanelAccordion,
  MeasurementInfoPanelAccordion,
  MeasurementConfigPanelAccordion,
  AboutDialogToolbarButton,
} from 'react-science/app';
import {
  getExistingMeasurementKinds,
  useAppState,
} from 'react-science/app-data';
import {
  Accordion,
  DropZoneContainer,
  FullscreenToolbarButton,
  Header,
  SplitPane,
  Toolbar,
  assert,
  FullSpinner,
} from 'react-science/ui';

import { AboutInformation } from './components/AboutInformation';
import { loadFiles } from './helpers/loadFiles';

const mainCss = {
  root: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  bottom: css`
    display: flex;
    flex-direction: row;
    flex: 1;
  `,
  contents: css`
    width: 100%;
    height: 100%;
  `,
  measurement: css`
    padding: 5px;
    width: 100%;
    height: 100%;
  `,
  panels: css`
    width: 100%;
    height: 100%;
    flex: 1 1 0%;
  `,
};

export default function MainLayout() {
  const appState = useAppState();

  const measurementKinds = getExistingMeasurementKinds(
    appState.data.measurements,
  );

  assert(measurementKinds.length === 0 || measurementKinds.includes('iv'));

  useLoadFileCollectionFromHash(loadFiles);
  const onDrop = useDropFiles(loadFiles);

  return (
    <div css={mainCss.root}>
      <Header>
        <Toolbar orientation="horizontal">
          <AboutDialogToolbarButton
            name="Analysis UI Components - BIG MAP"
            icon={<FaInfo />}
            body={<AboutInformation />}
          />
        </Toolbar>
        <Toolbar orientation="horizontal">
          <FullscreenToolbarButton />
        </Toolbar>
      </Header>
      <div css={mainCss.bottom}>
        <div>
          <Toolbar orientation="vertical">
            <div />
          </Toolbar>
        </div>
        <div css={mainCss.contents}>
          <SplitPane
            initialSize="400px"
            initialClosed={500}
            controlledSide="end"
          >
            {appState.load.isLoading ? (
              <div style={{ width: '100%', height: '100%' }}>
                <FullSpinner />
              </div>
            ) : (
              <div css={mainCss.measurement}>
                <DropZoneContainer onDrop={onDrop}>
                  {measurementKinds.length > 0 ? <IvPlotView /> : null}
                </DropZoneContainer>
              </div>
            )}
            <div css={mainCss.panels}>
              <Accordion>
                <MeasurementsPanelAccordion />
                <MeasurementConfigPanelAccordion />
                <MeasurementInfoPanelAccordion />
              </Accordion>
            </div>
          </SplitPane>
        </div>
      </div>
    </div>
  );
}
