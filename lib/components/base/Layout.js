import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          padding: 15px;
        }
        @media (max-width: 360) {
          .layout {
            padding: 5px;
          }
        }
      `}</style>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
