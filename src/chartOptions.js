const options = [
    {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            type: "category",
            data: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: [400, 300, 350, 200, 280, 625, 410],
                type: "bar",
                smooth: true
            }
        ],
        tooltip: {
            trigger: "axis"
        }
    },
    {
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 400,
                        name: 'Monday'
                    },
                    {
                        value: 300,
                        name: 'Tuesday'
                    },
                    {
                        value: 350,
                        name: 'Wednesday'
                    },
                    {
                        value: 200,
                        name: 'Thursday'
                    },
                    {
                        value: 280,
                        name: 'Friday'
                    },
                    {
                        value: 625,
                        name: 'Saturday'
                    },
                    {
                        value: 410,
                        name: 'Sunday'
                    }
                ],
                roseType: 'area'
            }
        ],
        tooltip: {
            trigger: "item"
        },
    },
    {
        xAxis: {
            data: ['', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
            {
                data: [10, 22, 28, 43, 49],
                type: 'bar',
                stack: 'x'
            },
            {
                data: [5, 4, 3, 5, 10],
                type: 'bar',
                stack: 'x'
            }
        ],
        tooltip: {
            trigger: "axis"
        }
    }
]

export default options;