const values = {
    strArea: [
      {
        id: "AE",
        title: "United Arab Emirates",
        pathData: "M619.874,393.722L620.373,393.573...",
      },
      {
        id: "AF",
        title: "Afghanistan",
        pathData: "M646.879,356.901L649.738,358.201...",
      },
      // more areas...
    ]
  };

{values.strArea.map((area) => {
    return (
      <section className="ag-canvas" key={area.id}>
        <svg className="ag-canvas_svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1" viewBox="0 0 1008 651">
          <Tooltip className="capitalize bg-teal-500" content={contents()}>
            <path
              id={area.id}
              title={area.title}
              className="fill-teal-500"
              d={area.pathData}
            />
          </Tooltip>
        </svg>
      </section>
    );
  })}
  

  mengambil id dengan React hook ref

  import React, { useEffect, useRef } from 'react';

const PathComponent = () => {
  // Membuat ref untuk elemen path
  const pathRef = useRef(null);

  useEffect(() => {
    // Mengakses ID dari elemen path setelah komponen ter-render
    if (pathRef.current) {
      console.log(pathRef.current.id); // Mencetak ID ke konsol
    }
  }, []); // Efek dijalankan sekali setelah render pertama

  return (
    <svg width="200" height="200">
      <path
        id="AF"
        title="Afghanistan"
        ref={pathRef} // Menambahkan ref ke elemen path
        d="M646.879,356.901L649.738,358.201L651.853,357.745L652.438,356.188L654.651,355.669L656.231,354.617L656.791,351.832L659.154,351.154L659.594,349.902L660.917,350.843L661.762,350.952L663.323,350.975L665.438,351.716L666.295,352.143L668.324,351.017L669.27,351.694L670.174,350.085L671.85,350.159L672.281,349.641L672.578,348.213L673.785,346.975L675.303,347.785L674.998,348.869L675.846,349.038L675.585,351.994L676.694,353.137L677.672,352.404L678.916,352.057L680.663,350.486L682.594,350.745L685.486,350.751L685.985,351.758L684.353,352.15L682.928,352.795L679.71,353.2L676.699,353.931L675.063,355.439L675.725,356.899L676.046,358.603L674.649,360.033L674.766,361.335L673.995,362.549L671.328,362.444L672.43,364.663L670.646,365.507L669.455,367.511L669.609,369.491L668.514,370.415L667.477,370.109L665.334,370.537L665.027,371.451L662.939,371.446L661.377,373.289L661.278,376.039L657.635,377.374L655.682,377.092L655.114,377.794L653.438,377.386L650.634,377.865L645.936,376.228L648.479,373.298L648.249,371.202L646.125,370.65L645.905,368.565L644.987,365.921L646.187,364.094L644.966,363.599L645.736,361.148z"
      />
    </svg>
  );
};

export default PathComponent;

mengambil id dengan DOM javascript

import React, { useEffect } from 'react';

const PathComponent = () => {
  useEffect(() => {
    // Mengambil elemen path dengan ID 'AF'
    const pathElement = document.querySelector('#AF');
    if (pathElement) {
      console.log(pathElement.id); // Mencetak ID ke konsol
    }
  }, []);

  return (
    <svg width="200" height="200">
      <path
        id="AF"
        title="Afghanistan"
        d="M646.879,356.901L649.738,358.201L651.853,357.745L652.438,356.188L654.651,355.669L656.231,354.617L656.791,351.832L659.154,351.154L659.594,349.902L660.917,350.843L661.762,350.952L663.323,350.975L665.438,351.716L666.295,352.143L668.324,351.017L669.27,351.694L670.174,350.085L671.85,350.159L672.281,349.641L672.578,348.213L673.785,346.975L675.303,347.785L674.998,348.869L675.846,349.038L675.585,351.994L676.694,353.137L677.672,352.404L678.916,352.057L680.663,350.486L682.594,350.745L685.486,350.751L685.985,351.758L684.353,352.15L682.928,352.795L679.71,353.2L676.699,353.931L675.063,355.439L675.725,356.899L676.046,358.603L674.649,360.033L674.766,361.335L673.995,362.549L671.328,362.444L672.43,364.663L670.646,365.507L669.455,367.511L669.609,369.491L668.514,370.415L667.477,370.109L665.334,370.537L665.027,371.451L662.939,371.446L661.377,373.289L661.278,376.039L657.635,377.374L655.682,377.092L655.114,377.794L653.438,377.386L650.634,377.865L645.936,376.228L648.479,373.298L648.249,371.202L646.125,370.65L645.905,368.565L644.987,365.921L646.187,364.094L644.966,363.599L645.736,361.148z"
      />
    </svg>
  );
};

export default PathComponent;
