import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Common/Navbar";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";
import { AuthContext } from "../Auth/context";

const PrivateLayout = (props) => {
  const { user } = useContext(AuthContext);
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    let cms = window.location.pathname.split("/");
    setCrumbs(cms);
  }, []);
  return (
    <div >
      <Navbar />
      <div >
        <Sidebar />
        <div >
          <section style={{ margin: "24px 16px 0"}}>
            {/* <Breadcrumb style={{ margin: "16px 20px", textAlign: "left" }}>
              {crumbs.map((c) => (
                <Breadcrumb.Item key={c}>{c}</Breadcrumb.Item>
              ))}
            </Breadcrumb> */}
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: '75vh' }}
            >
              {props.children}
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default PrivateLayout;
