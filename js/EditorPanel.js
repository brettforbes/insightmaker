
var EditorPanel = function() {

    return (
        {
            stateful: is_editor && (! is_embed),
            collapseFirst: false,
            tools:[
            ],
            stateId: "editor_panel",
            region: 'west',
            width: editorConfig.sideBarWidth,
            split: true,
            autoScroll: true,
            listeners: {beforeexpand:function(p){setSelected([])}, beforecollapse:function(){

            }},
            collapsible: ! mxClient.IS_TOUCH,
            header: ! is_embed,
            title: getText("Editor"),
            border: false,
            layout: {
                type: "vbox",
                align: "stretch"
            }
        });


};




