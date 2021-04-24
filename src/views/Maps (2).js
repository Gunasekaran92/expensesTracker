import React, { useEffect, useState } from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";

import { getSummaryData } from './dataservice';

import ChartistGraph from "react-chartist";

import Legend from "chartist-plugin-legend";

import { Doughnut } from 'react-chartjs-2';
import { chartColors } from "./colors";
import { Line } from "react-chartjs-2";

import { GridSheet, Renderer } from "react-gridsheet";



function Maps() {
    


    /*Summary*/

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getSummaryData()
            .then(result => {
     
                setItems(result)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])

    const summaryData = items.map(val => {
        return (
            val
        );
    })


    console.log("New Data");
    console.log(summaryData);


    return (
        <div>
            <h1>This is a table</h1>
            <p>{JSON.stringify(summaryData)}</p>

            <GridSheet>data = { items }
                options={{
                    headerHeight: "30px",
                    cells: {
                        A: { label: "Date", width: "200px" },
                        B: { label: "Grocery" },
                        C: { label: "Grocery Type", width: "200px" },
                        D: { label: "Amount", width: "300px" },
                        E: { label: "Who Paid", width: "200px" },
                        F: { label: "Consumers", style: { textAlign: "right" } }
                    }
                }}</GridSheet>*/
 
                              
                  
                  
        </div>)
}

export default Maps;


/*            <GridSheet>data = {{ items }}
                options={{
                    headerHeight: "30px",
                    cells: {
                        A: { label: "Date", width: "200px" },
                        B: { label: "Grocery" },
                        C: { label: "Grocery Type", width: "200px" },
                        D: { label: "Amount", width: "300px" },
                        E: { label: "Who Paid", width: "200px" },
                        F: { label: "Consumers", style: { textAlign: "right" } }
                    }
                }}</GridSheet>*/


/*
 const [list, setList] = useState([]);
    useEffect(() => {
        let mounted = true;
        getDonutData()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])


    const [list1, setList1] = useState([]);
    useEffect(() => {
        let mounted = true;
        getLineData()
            .then(items => {
                if (mounted) {
                    setList1(items)
                }
            })
        return () => mounted = false;
    }, [])




let cat = [];
let val = [];
const donutData = list.map(rec => {
    return (
        cat.push(rec.category),
        val.push(rec.value)
    );
});

const donut = {
    labels: cat,
    datasets: [
        {
            data: val,
            backgroundColor: chartColors
        }]
}



let val1 = [];
const donutData1 = list1.map(rec => {
    return (
        val1.push(rec.Amount)
    );
});

const donut1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            data: val1,
            label: "Monthly Expense Pattern",
            lineTension: 0,
            fill: true,
            backgroundColor: chartColors[Math.floor(Math.random() * 50)]
        }]
}



 
 */



/*
 * 
 * <GridSheet>data = {list2}
                options={{
                    headerHeight: "30px",
                    cells: {
                        A: { label: "Date", width: "200px" },
                        B: { label: "Grocery" },
                        C: { label: "Grocery Type", width: "200px" },
                        D: { label: "Amount", width: "300px" },
                        E: { label: "Who Paid", width: "200px" },
                        F: { label: "Consumers",  style: { textAlign: "right" }}
                    }
                }}</GridSheet>
 * 
 *
 * 
 * 
 * 
 * 
 * 
 * 
 *   <h1>Pie Chart</h1>


            <Doughnut data={donut}     />

            <h1>Line Chart</h1>
            <Line data={donut1} />




            <h2>Summary Data</h2>
            <p>{JSON.stringify(list2)}</p>

    let labels = [];
    let series = [];


    const donutData = list.map(val => {
        return (
            labels.push(val.category),
            series.push(val.value)
        );
    });

    const newData = {
        labels: labels,
        series: series
    };

    console.log("Donut");
    console.log(newData);

    let options = {
        showLabel: false,
        width: 400,
        height: 500,
        plugins: [
            Legend({  })
        ]
    };
 * 
 *  <ChartistGraph data={newData} type="Pie" options={{...options}}  />
 *     const arr = [];

    Object.keys(list1).forEach(key => arr.push({ name: key, value: list1[key] }));

    console.log(arr[0]);

 *    <ul><li>{arr[0]}</li></ul>
 * arr[0].value
             <ul>
                {Object.entries(list1.Amount).map(([key, record]) => <li key={key}>{record}</li>)}

            </ul>
 */



/*    const [list1, setList1] = useState([]);
    useEffect(() => {
        let mounted = true;
        getLine()
            .then(items => {
                if (mounted) {
                    console.log(items);
                    setList1(items)
                }
            })
        return () => mounted = false;
    }, [])*/





 /*           <h1>My Line data</h1>
            <ul>
                {list1.map(item => <li key={item.item}>{item.Amount}</li>)}
            </ul>*/











/*
function Maps() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </>
  );
}

export default Maps;
*/
