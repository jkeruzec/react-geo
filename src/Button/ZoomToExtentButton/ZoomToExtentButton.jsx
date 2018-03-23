import React from 'react';
import PropTypes from 'prop-types';

import OlMap from 'ol/map';
import OlSimpleGeometry from 'ol/geom/simplegeometry';
import easing from 'ol/easing';

import {
  SimpleButton
} from '../../index';

/**
 * Class representing an zoom to extent button.
 *
 *
 * @class The ZoomToExtentButton
 * @extends React.Component
 */
class ZoomToExtentButton extends React.Component {

  /**
   * The className added to this component.
   * @type {String}
   * @private
   */
  className = 'react-geo-zoomtoextentbutton'

  static propTypes = {
    /**
     * The className which should be added.
     * @type {String}
     */
    className: PropTypes.string,

    /**
     * Instance of OL map this component is bound to.
     * @type {ol.Map}
     */
    map: PropTypes.instanceOf(OlMap).isRequired,
    
    /**
     * The array extent[minx, miny, maxx, maxy]  (the values must be in the maps coordination system) or instance of Ol SimpleGeometry that the map should zoom to.
     * @type {Array}
     */
    extent: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.instanceOf(OlSimpleGeometry)
    ]).isRequired,

    /**
     * Options for fitting to the given extent. See http://openlayers.org/en/latest/apidoc/ol.View.html#fit
     * @type {Object}
     */
    fitOptions: PropTypes.shape({
      constrainResolution: PropTypes.bool,
      duration: PropTypes.number,
      easing: PropTypes.function,
      padding: PropTypes.arrayOf(PropTypes.number),
      nearest: PropTypes.bool
    })
    
  }

  /**
   * The default properties.
   * @type {Object}
   */
  static defaultProps = {
    fitOptions: {
      constrainResolution: false,
      duration: 1000,
      easing: easing.inAndOut
    }
  }

  /**
   * Called when the button is clicked.
   *
   * @method
   */
  onClick = (fitProp = {}) => {
    const{
      map, 
      extent 
    } = this.props;
    const view = map.getView();

    if (fitProp.constrainResolution === undefined) {
      fitProp.constrainResolution = false; // TODO access defaultProps?
    }

    view.fit(extent, fitProp);
  }

  /**
   * The render function.
   */
  render() {
    const {
      className,
      fitOptions,
      ...passThroughProps
    } = this.props;
    const finalClassName = className ?
      `${className} ${this.className}` :
      this.className;

    return ( 
      <SimpleButton className = {
        finalClassName
      }
      onClick = {
        ()=>this.onClick(fitOptions)
      } { ...passThroughProps}
      />
    );
  }
}

export default ZoomToExtentButton;
