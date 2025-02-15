import * as React from 'react';
import TestUtil from '../../Util/TestUtil';
import moment from 'moment';
import TimeLayerSliderPanel from '../TimeLayerSliderPanel/TimeLayerSliderPanel';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';

describe('<TimeLayerSliderPanel />', () => {

  let map;

  const testLayerName = 'OSM-WMS';
  const testLayerTitle = 'OSM-WMS - by terrestris';
  const testLayer = new OlLayerTile({
    visible: false,
    title: testLayerTitle,
    source: new OlSourceTileWMS({
      url: 'https://ows.terrestris.de/osm/service?',
      params: {
        'LAYERS': testLayerName,
        'TILED': true
      }
    })
  });

  beforeEach(() => {
    map = TestUtil.createMap();
    map.addLayer(testLayer);
  });

  it('is defined', () => {
    expect(TimeLayerSliderPanel).not.toBeUndefined();
  });

  it('can be rendered', () => {
    const { container } = render(<TimeLayerSliderPanel
      map={map}
      initStartDate={moment().subtract(3, 'hours')}
      initEndDate={moment()}
    />);
    expect(container).toBeVisible();
  });

  it('autoplay button is visible', () => {
    render(<TimeLayerSliderPanel
      map={map}
      initStartDate={moment().subtract(3, 'hours')}
      initEndDate={moment()}
    />);

    const playButton = screen.getByLabelText('Autoplay');
    expect(playButton).toBeVisible();
  });

  it('autoplay can be toggled', () => {
    render(<TimeLayerSliderPanel
      map={map}
      initStartDate={moment().subtract(3, 'hours')}
      initEndDate={moment()}
      timeAwareLayers={[testLayer]}
    />);

    const playButton = screen.getByLabelText('Autoplay');
    expect(playButton).toHaveAttribute('aria-pressed', 'false');
    userEvent.click(playButton);
    expect(playButton).toHaveAttribute('aria-pressed', 'true');
    expect(playButton).toBeVisible();
  });
});
