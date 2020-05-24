import React from 'react';

import { Slider, Rail, Handles, Tracks } from 'react-compound-slider';
import { Handle, Track } from './RangeHelpers';

const sliderStyle = {
  marginTop: '5%',
  position: 'relative',
  width: '100%'
};

const railStyle = {
  position: 'absolute',
  width: '100%',
  height: 1,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: '#ffffff33'
};

const domain = [0, 500];

class Range extends React.Component {
  state = {
    values: [20, 300]
  };

  onChange = (values) => {
    this.setState({ values });
  };

  render() {
    const {
      state: { values }
    } = this;

    return (
      <div style={{ height: '20px', width: '100%', marginBottom: '50px', marginTop: '35px' }}>
        <Slider
          mode={1}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={this.onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>
    );
  }
}
 
export default Range;
