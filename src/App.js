import React from 'react';
import { connect } from 'react-redux';

import { addItem } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = (e, index) => {
    e.preventDefault();
    props.addItem(index);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.feature.car,
    store: state.feature.store,
    additionalPrice: state.feature.additionalPrice
  };
};

export default connect(
  mapStateToProps,
  { addItem }
)(App);
