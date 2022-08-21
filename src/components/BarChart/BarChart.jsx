import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

function BarChart() {
  const [trackingName, setTrackingName] = useState([]);
  const [trackingValue, setTrackingValue] = useState([]);

  useEffect
    (() => {
      const recentSevenDay = [];
      const trackingValuePerDay = [];

      const getTrackinkRecord = async () => {
        const dataRequest = await fetch("#");
        const dataResponse = await dataRequest.json();

        //console.log(dataResponse); -> array

        //ดึงข้อมูลมาทำชื่อกราฟแกน x -> ดึง 7 วันล่าสุด
        for (let i = 0; i < dataResponse.length; i++) {
          recentSevenDay.push(dataResponse[i].recent7dayInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
          trackingValuePerDay.push(dataResponse[i].valueExerciseInDB); //ดึงจาก database ที่เก็บ 7 วันล่าสุด ??
        }

        // console.log(recentSevenDay);
        // console.log(trackingValuePerDay);

        setTrackingName(recentSevenDay);
        setTrackingValue(trackingValuePerDay);
      };

      getTrackinkRecord();
    },
    []);



  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h2 className="text-center mt-3 mb-3"></h2>

        <Chart
          type="bar"
          width={452}
          height={268}
          series={[
            {
              name: "Track History",
              data: [1,2,3,4,5,6,7],//trackingValue,   //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
            },
          ]}
          options={{
            title: {
              text: "",
              style: { fontSize: 30 },
            },

            subtitle: {
              text: "",
              style: { fontSize: 18 },
            },

            colors: ["#515A5A"],  //สีกราฟแท่ง 
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories: trackingName,  //ก่อนเอามาใช้ตรงนี้ต้องเปลี่ยนจาก objarray -> array ก่อน | ยังไม่ทำ!!
              title: {
                text: "Day per week",
                style: { color: "#F1C40F", fontSize: 17 },  //สีชื่อแกน x
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#34495E"] }, //สีอักษรแกน y
              },
              title: {
                text: "Time (minute)",
                style: { color: "#F1C40F", fontSize: 17 },  //สีแกน y
              },
            },

            legend: {
              show: true,
              position: "left",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#F1C40F"],  //text in bar
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;