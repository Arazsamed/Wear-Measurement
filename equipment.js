// Equipment data
var EQUIPMENT = {
  "641CV01": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:26.8, dir:"min"},
    {id:"B", label:"B", nominal:10, limit:8, dir:"min"},
    {id:"C", label:"C", nominal:10, limit:8, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:152.5, dir:"max"}
  ]},
  "642CV01": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:26.8, dir:"min"},
    {id:"B", label:"B", nominal:10, limit:8, dir:"min"},
    {id:"C", label:"C", nominal:10, limit:8, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:152.5, dir:"max"}
  ]},
  "643CV01": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:26.8, dir:"min"},
    {id:"B", label:"B", nominal:10, limit:8, dir:"min"},
    {id:"C", label:"C", nominal:10, limit:8, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:152.5, dir:"max"}
  ]},
  "644CV01": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:26.8, dir:"min"},
    {id:"B", label:"B", nominal:10, limit:8, dir:"min"},
    {id:"C", label:"C", nominal:10, limit:8, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:152.5, dir:"max"}
  ]},
  "491CV01": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:33.5, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185.5, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185.6, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:150, dir:"min"},
    {id:"N", label:"N", nominal:10, limit:null, dir:"min"}
  ]},
  "491CV02": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:36, limit:33.5, dir:"min"},
    {id:"D", label:"D", nominal:188, limit:185.5, dir:"min"},
    {id:"E", label:"E", nominal:188, limit:185.6, dir:"min"},
    {id:"E1", label:"E1", nominal:152, limit:150, dir:"min"},
    {id:"N", label:"N", nominal:10, limit:null, dir:"min"}
  ]},
  "491CV03": { type: "Chain Conveyor", params: [
    {id:"A", label:"A", nominal:45, limit:41.4, dir:"min"},
    {id:"D", label:"D", nominal:245, limit:241.8, dir:"min"},
    {id:"E", label:"E", nominal:245, limit:241.7, dir:"min"},
    {id:"E1", label:"E1", nominal:200, limit:192.8, dir:"min"},
    {id:"N", label:"N", nominal:20, limit:null, dir:"min"}
  ]}
};

console.log("Equipment loaded:", Object.keys(EQUIPMENT).length, "units");