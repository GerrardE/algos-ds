import React, {Fragment} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import FetchFailure from "./FetchFailure";
import Placeholder from "./Placeholder";

import "./ContactDetails.css";

const ContactDetails = ({ data, hasFailedToFetch, fetching }) => {
  const wrapped = (node) => (
    <section className="ContactDetails">
      {node}
    </section>
  );

  if (hasFailedToFetch) {
    return wrapped(
      <FetchFailure className="ContactDetails_failure" />,
    );
  }

  if (!data) {
    return wrapped(
      <Placeholder className="ContactDetails_placeholder" />,
    );
  }

  const { name, phone, addressLines } = data;
  
  return wrapped(
    <div className="ContactDetails_data">

      {fetching ? <Fragment /> : (
        <Fragment>
          <div className="ContactDetails_data_item ContactDetails_name">
        <span>Name</span>
        <span>{name}</span>
      </div>

      <div className="ContactDetails_data_item ContactDetails_phone">
        <span>Phone</span>
        <span>{phone}</span>
      </div>

      {/* TODO something is wrong here */}
      <div className="ContactDetails_data_item ContactDetails_address">
        <span>Address</span>
        {addressLines && addressLines.map((a,i) => <span key={i}>{a}</span>)}
      </div>
        </Fragment>
      )}

    </div>,
  );
};

ContactDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    addressLines: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  hasFailedToFetch: PropTypes.bool.isRequired,
};

const mapReduxStateToProps = state => ({
  data: state.addressBook.contacts.fetchedContact,
  hasFailedToFetch: state.addressBook.contacts.fetchFailure,
  fetching: state.addressBook.contacts.fetching,
});

export default connect(
  mapReduxStateToProps,
)(ContactDetails);
