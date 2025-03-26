ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([673556.703842, 5921191.167563, 675957.825340, 5922909.844706]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_coord_UTM_1 = new ol.format.GeoJSON();
var features_coord_UTM_1 = format_coord_UTM_1.readFeatures(json_coord_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_coord_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_UTM_1.addFeatures(features_coord_UTM_1);
var lyr_coord_UTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coord_UTM_1, 
                style: style_coord_UTM_1,
                popuplayertitle: 'coord_UTM',
                interactive: true,
                title: '<img src="styles/legend/coord_UTM_1.png" /> coord_UTM'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_coord_UTM_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_coord_UTM_1];
lyr_coord_UTM_1.set('fieldAliases', {'id': 'id', 'T_Preg': 'T_Preg', 'porc_cor': 'porc_cor', 'porc_inc': 'porc_inc', 'N_preg_inc': 'N_preg_inc', 'N_preg_cor': 'N_preg_cor', 'Porc_Total': 'Porc_Total', 'Nombre': 'Nombre', 'Video': 'Video', });
lyr_coord_UTM_1.set('fieldImages', {'id': 'TextEdit', 'T_Preg': 'TextEdit', 'porc_cor': 'TextEdit', 'porc_inc': 'TextEdit', 'N_preg_inc': 'TextEdit', 'N_preg_cor': 'TextEdit', 'Porc_Total': 'TextEdit', 'Nombre': 'TextEdit', 'Video': 'TextEdit', });
lyr_coord_UTM_1.set('fieldLabels', {'id': 'no label', 'T_Preg': 'inline label - always visible', 'porc_cor': 'inline label - always visible', 'porc_inc': 'inline label - always visible', 'N_preg_inc': 'inline label - always visible', 'N_preg_cor': 'inline label - always visible', 'Porc_Total': 'inline label - always visible', 'Nombre': 'no label', 'Video': 'no label', });
lyr_coord_UTM_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});