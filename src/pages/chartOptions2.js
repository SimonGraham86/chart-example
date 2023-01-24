const options = [
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
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: 'center',
            left: 0,
            orient: 'vertical'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['30%', '70%'],
                roseType: 'angle',
                itemStyle: {
                    borderRadius: [20, 5, 5, 10],
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false
                },
                data: [
                    { value: 800, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 400, name: 'Video Ads' }
                ]
            }
        ],
        color: [
            '#002C77',
            '#009DE0',
            '#0077A0',
            '#00968F',
            '#76D3FF'
        ]
    }
]

export default options;