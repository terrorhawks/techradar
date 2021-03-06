var radar_data = [
{"name":"HBase", "pc":{"r":240,"t":95},"movement":"c"},
{"name":"Apache Cassandra", "pc":{"r":240,"t":100},"movement":"c"},
{"name":"mongoDB", "pc":{"r":240,"t":105},"movement":"c"},
{"name":"Raik", "pc":{"r":240,"t":110},"movement":"c"},
{"name":"Redis", "pc":{"r":240,"t":115},"movement":"c"},
{"name":"Amazon DynamoDB", "pc":{"r":240,"t":120},"movement":"c"},
{"name":"Amazon SimpleDB", "pc":{"r":340,"t":125},"movement":"c"},
{"name":"couchdb", "pc":{"r":340,"t":130},"movement":"c"},
{"name":"Neo4j", "pc":{"r":240,"t":135},"movement":"c"},
{"name":"Apache Jackrabbit", "pc":{"r":340,"t":140},"movement":"c"},
{"name":"orientdb", "pc":{"r":340,"t":145},"movement":"c"},
{"name":"FlockDB", "pc":{"r":340,"t":150},"movement":"c"},
{"name":"InfiniteGraph", "pc":{"r":340,"t":155},"movement":"c"},
{"name":"Project Voldemort", "pc":{"r":340,"t":160},"movement":"c"},
{"name":"Apache Accumulo", "pc":{"r":340,"t":175},"movement":"c"},
{"name":"Hypertable", "pc":{"r":340,"t":93},"movement":"c"},
{"name":"Oracle NoSQL", "pc":{"r":340,"t":98},"movement":"c"},
{"name":"Azure Table Storage", "pc":{"r":340,"t":103},"movement":"c"},
{"name":"InfoGrid", "pc":{"r":340,"t":108},"movement":"c"},
{"name":"Datomic", "pc":{"r":340,"t":113},"movement":"c"},

{"name":"D3.js", "pc":{"r":240,"t":3},"movement":"c"},
{"name":"Processing.js", "pc":{"r":240,"t":16},"movement":"c"},
{"name":"Raphael.js", "pc":{"r":240,"t":29},"movement":"c"},
{"name":"Canvas", "pc":{"r":240,"t":35},"movement":"c"},
{"name":"Processing", "pc":{"r":240,"t":45},"movement":"c"},
{"name":"Leaflet", "pc":{"r":240,"t":60},"movement":"c"},
{"name":"arbor.js", "pc":{"r":340,"t":24},"movement":"c"},
{"name":"cartodb", "pc":{"r":240,"t":75},"movement":"c"},
{"name":"circos.ca", "pc":{"r":340,"t":30},"movement":"c"},
{"name":"cubism.js", "pc":{"r":340,"t":33},"movement":"c"},
{"name":"geocommons", "pc":{"r":340,"t":36},"movement":"c"},
{"name":"paper.js", "pc":{"r":340,"t":39},"movement":"c"},
{"name":"envision.js", "pc":{"r":340,"t":42},"movement":"c"},
{"name":"flare (flash)", "pc":{"r":340,"t":45},"movement":"c"},
{"name":"gephi (tool)", "pc":{"r":340,"t":48},"movement":"c"},
{"name":"Google chart tools", "pc":{"r":340,"t":51},"movement":"c"},
{"name":"Google Fusion Tables", "pc":{"r":340,"t":54},"movement":"c"},
{"name":"quadrigram", "pc":{"r":340,"t":57},"movement":"c"},
{"name":"InfoVis Toolkit", "pc":{"r":340,"t":60},"movement":"c"},
{"name":"kartograph.org", "pc":{"r":340,"t":63},"movement":"c"},
{"name":"tableau", "pc":{"r":340,"t":66},"movement":"c"},
{"name":"protovis", "pc":{"r":340,"t":70},"movement":"c"},
{"name":"sigmajs.js", "pc":{"r":340,"t":73},"movement":"c"},
{"name":"timeline.js", "pc":{"r":340,"t":76},"movement":"c"},
{"name":"rickshaw (d3)", "pc":{"r":340,"t":79},"movement":"c"},
{"name":"modestmaps", "pc":{"r":340,"t":82},"movement":"c"},
{"name":"jquery.peity.js", "pc":{"r":240,"t":85},"movement":"c"},
{"name":"polymaps.org", "pc":{"r":340,"t":88},"movement":"c"},
{"name":"prefuse.org", "pc":{"r":340,"t":3},"movement":"c"},
{"name":"recline.js", "pc":{"r":340,"t":6},"movement":"c"},
{"name":"flotcharts.org", "pc":{"r":340,"t":9},"movement":"c"},
{"name":"crossfilter.js", "pc":{"r":340,"t":12},"movement":"c"},
{"name":"polymaps.org", "pc":{"r":340,"t":15},"movement":"c"},
{"name":"openlayers.org", "pc":{"r":340,"t":18},"movement":"c"},
{"name":"Graphite", "pc":{"r":340,"t":21},"movement":"c"},
{"name":"Librato", "pc":{"r":340,"t":21},"movement":"c"},

{"name":"Mahout", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Weka", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"R", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"RapidMiner", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Knime", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Octave", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Matlab", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"PyBrain", "pc":{"r":0,"t":0},"movement":"c"},

{"name":"OpenRefine", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Datawrangler", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Hadoop", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Redshirft", "pc":{"r":0,"t":0},"movement":"c"},
{"name":"Hive", "pc":{"r":0,"t":0},"movement":"c"},
];

var radar_quadrants = [
{"name":"NoSQL", "start":0, "end":20},
{"name":"Visualisation", "start":20, "end":56},
{"name":"Machine learning", "start":56, "end":64},
{"name":"Data Analysis", "start":64, "end":70}
];

var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "Big Data Technology Radar - 2013";
