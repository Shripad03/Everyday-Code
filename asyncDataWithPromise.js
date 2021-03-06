const mockData = [
    {
        id: "id1",
        type: "co2",
        value: "120",
        online: true,
        location: "Floor 1"
    },
    {
        id: "id2",
        type: "temp",
        value: "20",
        online: true,
        location: "Floor 1"
    },
    {
        id: "id3",
        type: "temp",
        value: "20",
        online: true,
        location: "Floor 3"
    },
    {
        id: "id4",
        type: "co2",
        value: "250",
        online: false,
        location: "Floor 1"
    },
    {
        id: "id5",
        type: "devices",
        value: "20",
        online: true,
        location: "Floor 3"
    },
    {
        id: "id6",
        type: "devices",
        value: "17",
        online: true,
        location: "Basement"
    },
    {
        id: "id7",
        type: "devices",
        value: "2",
        online: true,
        location: "Warehouse"
    },
    {
        id: "id8",
        type: "co2",
        value: "110",
        online: true,
        location: "Warehouse"
    },
    {
        id: "id9",
        type: "temp",
        value: "22.5",
        online: false,
        location: "Basement"
    },
    {
        id: "id10",
        type: "co2",
        value: "475",
        online: false,
        location: "Floor 3"
    },
    {
        id: "id11",
        type: "co2",
        value: "519",
        online: true,
        location: "Basement"
    },
    {
        id: "id12",
        type: "temp",
        value: "14",
        online: true,
        location: "Warehouse"
    }
];

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(mockData);
        }, 1000 * Math.random());
    });
}

// console.log(getData());

async function getResult() {
    let result = await getData();
    getData.then(response => console.log(response));

    // document.getElementById('tableData').innerHTML = result;
}



getResult();