import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          padding: 20px 5px;
        }
        @media (min-width: 760px) {
          .layout {
            padding: 15px;
          }
        }
        @media (min-width: 300px) {
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
