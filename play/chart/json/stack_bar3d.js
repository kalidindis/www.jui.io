var chart = jui.include("chart.builder");

chart("#result", {
    axis : {
        x : {
            type : "range",
            domain : function(d) {
                return d.sales + d.profit + d.total;
            }
        },
        y : {
            type : "block",
            domain : [ "Q1", "Q2", "Q3", "Q4" ]
        },
        c : {
            type : "grid3d"
        },
        data : [
            { sales: 12, profit: 10, total: 20 },
            { sales: 15, profit: 6, total: 20 },
            { sales: 8, profit: 10, total: 20 },
            { sales: 18, profit: 5, total: 20 }
        ],
        depth : 20,
        degree : 30
    },
    brush : {
        type : "stackbar3d",
        outerPadding : 10
    },
    widget : [{
        type : "tooltip"
    }, {
        type : "title",
        text : "3D Bar Sample"
    }]
});
