var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    20,
        siblingSeparation:  15,
        subTeeSeparation:   15,
        rootOrientation: "NORTH",

        node: {
            HTMLclass: "tennis-draw",
            drawLineThrough: true
        },
        connectors: {
            type: "straight",
            style: {
                "stroke-width": 2,
                "stroke": "#ccc"
            }
        }
    },
    
    nodeStructure: {
text: {
name: "node",
desc: "split by[safety], infogain[0.263], ['low', 'medium', 'high'], sample[1236]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[429]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[persons], infogain[0.312], ['2', '4', '6'], sample[397]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[134]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.219], ['vhigh', 'high', 'medium', 'low'], sample[130]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.287], ['vhigh', 'high', 'medium', 'low'], sample[33]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[8]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[8]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.6], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[4]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.592], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.616], ['vhigh', 'high', 'medium', 'low'], sample[30]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[10]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.918], ['small', 'medium', 'big'], sample[6]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[1.0], ['small', 'medium', 'big'], sample[6]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[8]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.372], ['vhigh', 'high', 'medium', 'low'], sample[33]",
},
children: [
{
text: {
name: "node",
desc: "split by[trunk], infogain[1.0], ['small', 'medium', 'big'], sample[6]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.6], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[4]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[10]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[7]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.434], ['vhigh', 'high', 'medium', 'low'], sample[34]",
},
children: [
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.577], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[2]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.744], ['small', 'medium', 'big'], sample[11]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[4]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.725], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.918], ['small', 'medium', 'big'], sample[6]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[2]",
},
children: [
]
},
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.217], ['vhigh', 'high', 'medium', 'low'], sample[133]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.465], ['vhigh', 'high', 'medium', 'low'], sample[35]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[8]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[9]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.811], ['small', 'medium', 'big'], sample[8]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.695], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[4]",
},
children: [
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.367], ['vhigh', 'high', 'medium', 'low'], sample[35]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[10]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.685], ['small', 'medium', 'big'], sample[9]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.685], ['small', 'medium', 'big'], sample[9]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.918], ['2', '3', '4', '5'], sample[3]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[7]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.425], ['small', 'medium', 'big'], sample[29]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.704], ['vhigh', 'high', 'medium', 'low'], sample[8]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[2]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[12]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.49], ['vhigh', 'high', 'medium', 'low'], sample[34]",
},
children: [
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.667], ['small', 'medium', 'big'], sample[6]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[2]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[2]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.699], ['small', 'medium', 'big'], sample[11]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[4]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[0.811], ['2', '3', '4', '5'], sample[4]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.811], ['small', 'medium', 'big'], sample[8]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.809], ['small', 'medium', 'big'], sample[9]",
},
children: [
{
text: {
name: "node",
desc: "split by[doors], infogain[0.811], ['2', '3', '4', '5'], sample[4]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[doors], infogain[1.0], ['2', '3', '4', '5'], sample[2]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[no sample], sample[0]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[1]",
},
children: [
]
},
]
},
{
text: {
name: "leaf",
desc: "leaf[good], sample[3]",
},
children: [
]
},
]
},
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[persons], infogain[0.482], ['2', '4', '6'], sample[410]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[137]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.475], ['vhigh', 'high', 'medium', 'low'], sample[131]",
},
children: [
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.985], ['vhigh', 'high', 'medium', 'low'], sample[35]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[6]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[9]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[11]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.874], ['vhigh', 'high', 'medium', 'low'], sample[34]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[10]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[8]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[8]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[8]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.854], ['vhigh', 'high', 'medium', 'low'], sample[25]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[6]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[5]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.592], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[2]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.985], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[good], sample[4]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.781], ['vhigh', 'high', 'medium', 'low'], sample[37]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[10]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.725], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.577], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[good], sample[1]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.695], ['small', 'medium', 'big'], sample[10]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[good], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[4]",
},
children: [
]
},
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.356], ['vhigh', 'high', 'medium', 'low'], sample[142]",
},
children: [
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.752], ['vhigh', 'high', 'medium', 'low'], sample[39]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[9]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[poor], sample[11]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[10]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.466], ['vhigh', 'high', 'medium', 'low'], sample[36]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[poor], sample[7]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[10]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[10]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.719], ['vhigh', 'high', 'medium', 'low'], sample[35]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[11]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.954], ['small', 'medium', 'big'], sample[8]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[1]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[4]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.985], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
]
},
{
text: {
name: "node",
desc: "split by[maintenance], infogain[0.757], ['vhigh', 'high', 'medium', 'low'], sample[32]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[acceptable], sample[9]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.685], ['small', 'medium', 'big'], sample[9]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[4]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.592], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "leaf",
desc: "leaf[good], sample[2]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
{
text: {
name: "node",
desc: "split by[trunk], infogain[0.7], ['small', 'medium', 'big'], sample[7]",
},
children: [
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[2]",
},
children: [
]
},
{
text: {
name: "node",
desc: "split by[cost], infogain[0.0], [], sample[3]",
},
children: [
]
},
{
text: {
name: "leaf",
desc: "leaf[vgood], sample[2]",
},
children: [
]
},
]
},
]
},
]
},
]
},
]
},
};
