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
        },
        color: [
            '#002C77'
        ]
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
        color: [
            '#002C77',
            '#009DE0',
            '#0077A0',
            '#00968F',
            '#76D3FF',
            '#00AC41',
            '#EE3D8B'
        ]
    },
    {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
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
        },
        color: [
            '#002C77',
            '#009DE0'
        ]
    },
    {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
            {
                data: [10, 22, 28, 23, 19],
                type: 'line',
                smooth: true
            }
        ],
        tooltip: {
            trigger: "axis"
        },
        color: [
            '#002C77'
        ]
    },
    {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
        },
        yAxis: {},
        series: [
            {
                data: [10, 22, 28, 43, 49],
                type: 'line',
                stack: 'x',
                areaStyle: {}
            },
            {
                data: [5, 4, 3, 5, 10],
                type: 'line',
                stack: 'x',
                areaStyle: {}
            }
        ],
        tooltip: {
            trigger: "axis"
        },
        color: [
            '#002C77',
            '#009DE0'
        ]
    },
    {
        grid: { top: 20, right: 40, bottom: 20, left: 40 },
        xAxis: {
            data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [
            {
                type: 'scatter',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ],
        tooltip: {
            trigger: "axis"
        },
        color: [
            '#002C77'
        ]
    },
    {
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 335,
                        name: 'Direct Visit'
                    },
                    {
                        value: 234,
                        name: 'Union Ad'
                    },
                    {
                        value: 1548,
                        name: 'Search Engine'
                    }
                ]
            }
        ],
        tooltip: {
            trigger: "item"
        },
        color: [
            '#002C77',
            '#009DE0',
            '#0077A0'
        ]
    },
    {
        series: [
            {
                type: 'pie',
                data: [
                    {
                        value: 335,
                        name: 'A'
                    },
                    {
                        value: 234,
                        name: 'B'
                    },
                    {
                        value: 1548,
                        name: 'C'
                    }
                ],
                radius: ['40%', '70%']
            }
        ],
        tooltip: {
            trigger: "item"
        },
        color: [
            '#002C77',
            '#009DE0',
            '#0077A0'
        ]
    }
]

export default options;