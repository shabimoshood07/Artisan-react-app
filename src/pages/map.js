import React from "react";
// import tt from "@tomtom-international/web-sdk-services";
import tt from "@tomtom-international/web-sdk-maps";

function Map() {
  var map = tt.map({
    key: "94W33mAvweBLHwkwjGuAmUlwqrXQD6Wn",
    container: "map",
    // dragPan: !isMobileOrTablet(),
  });
  map.addControl(new tt.FullscreenControl());
  map.addControl(new tt.NavigationControl());

  // tt.services.copyrights({
  //   key: "94W33mAvweBLHwkwjGuAmUlwqrXQD6Wn",
  // });
  return <div>{/* <div id="map" className="map"></div> */}</div>;
}

export default Map;
