new Chart(
document.getElementById("categoryChart"),
{
type:"bar",
data:{
labels:[
"Beverages",
"Condiments",
"Produce",
"Seafood"
],
datasets:[{
label:"Revenue",
data:[36452,24470,15073,10312]
}]
}
});

new Chart(
document.getElementById("productChart"),
{
type:"bar",
data:{
labels:[
"Chai",
"Chang",
"Aniseed Syrup"
],
datasets:[{
label:"Sales",
data:[17710,15102,7049]
}]
}
});

new Chart(
document.getElementById("customerChart"),
{
type:"pie",
data:{
labels:[
"Alfreds",
"Ana Trujillo",
"Around The Horn"
],
datasets:[{
data:[
20617,
16585,
10371
]
}]
}
});

new Chart(
document.getElementById("employeeChart"),
{
type:"bar",
data:{
labels:[
"Nancy",
"Andrew",
"Janet"
],
datasets:[{
label:"Sales",
data:[
34793,
32681,
14299
]
}]
}
});
