gdjs.Sample_32_40JP_41Code = {};
gdjs.Sample_32_40JP_41Code.GDSkor1Objects1= [];
gdjs.Sample_32_40JP_41Code.GDSkor1Objects2= [];
gdjs.Sample_32_40JP_41Code.GDSkor1Objects3= [];
gdjs.Sample_32_40JP_41Code.GDListAreaObjects1= [];
gdjs.Sample_32_40JP_41Code.GDListAreaObjects2= [];
gdjs.Sample_32_40JP_41Code.GDListAreaObjects3= [];
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1= [];
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects2= [];
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects3= [];
gdjs.Sample_32_40JP_41Code.GDIconObjects1= [];
gdjs.Sample_32_40JP_41Code.GDIconObjects2= [];
gdjs.Sample_32_40JP_41Code.GDIconObjects3= [];
gdjs.Sample_32_40JP_41Code.GDTitleObjects1= [];
gdjs.Sample_32_40JP_41Code.GDTitleObjects2= [];
gdjs.Sample_32_40JP_41Code.GDTitleObjects3= [];
gdjs.Sample_32_40JP_41Code.GDTextObjects1= [];
gdjs.Sample_32_40JP_41Code.GDTextObjects2= [];
gdjs.Sample_32_40JP_41Code.GDTextObjects3= [];

gdjs.Sample_32_40JP_41Code.conditionTrue_0 = {val:false};
gdjs.Sample_32_40JP_41Code.condition0IsTrue_0 = {val:false};
gdjs.Sample_32_40JP_41Code.condition1IsTrue_0 = {val:false};


gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDBackGroundObjects1Objects = Hashtable.newFrom({"BackGround": gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDIconObjects1Objects = Hashtable.newFrom({"Icon": gdjs.Sample_32_40JP_41Code.GDIconObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.Sample_32_40JP_41Code.GDTitleObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTextObjects1Objects = Hashtable.newFrom({"Text": gdjs.Sample_32_40JP_41Code.GDTextObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDBackGroundObjects1Objects = Hashtable.newFrom({"BackGround": gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDIconObjects1Objects = Hashtable.newFrom({"Icon": gdjs.Sample_32_40JP_41Code.GDIconObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.Sample_32_40JP_41Code.GDTitleObjects1});
gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTextObjects1Objects = Hashtable.newFrom({"Text": gdjs.Sample_32_40JP_41Code.GDTextObjects1});
gdjs.Sample_32_40JP_41Code.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Sample_32_40JP_41Code.GDListAreaObjects1, gdjs.Sample_32_40JP_41Code.GDListAreaObjects2);


gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sample_32_40JP_41Code.GDListAreaObjects2.length;i<l;++i) {
    if ( gdjs.Sample_32_40JP_41Code.GDListAreaObjects2[i].getBehavior("SimpleScrollableListBehavior").IsStringSelected("Icon", "2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = true;
        gdjs.Sample_32_40JP_41Code.GDListAreaObjects2[k] = gdjs.Sample_32_40JP_41Code.GDListAreaObjects2[i];
        ++k;
    }
}
gdjs.Sample_32_40JP_41Code.GDListAreaObjects2.length = k;}if (gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sample_32_40JP_41Code.GDListAreaObjects2 */
{runtimeScene.getVariables().get("サンプル変数").setString((( gdjs.Sample_32_40JP_41Code.GDListAreaObjects2.length === 0 ) ? "" :gdjs.Sample_32_40JP_41Code.GDListAreaObjects2[0].getBehavior("SimpleScrollableListBehavior").SelectedString("Title", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

/* Reuse gdjs.Sample_32_40JP_41Code.GDListAreaObjects1 */

gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length;i<l;++i) {
    if ( gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").IsIndexSelected(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = true;
        gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[k] = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i];
        ++k;
    }
}
gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length = k;}if (gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sample_32_40JP_41Code.GDListAreaObjects1 */
{runtimeScene.getVariables().get("サンプル変数").setNumber((( gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length === 0 ) ? 0 :gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[0].getBehavior("SimpleScrollableListBehavior").SelectedIndex((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


};gdjs.Sample_32_40JP_41Code.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = false;
{
gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.Sample_32_40JP_41Code.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListArea"), gdjs.Sample_32_40JP_41Code.GDListAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Sample_32_40JP_41Code.GDTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Sample_32_40JP_41Code.GDTitleObjects1);
{for(var i = 0, len = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length ;i < len;++i) {
    gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").AddItem("key", "Title1", "Text1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length ;i < len;++i) {
    gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").AddItem("puzzle", "Title2", "Text2", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length ;i < len;++i) {
    gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").AddItem("lock", "Title3", "Text3", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length ;i < len;++i) {
    gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").CreateList(gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDBackGroundObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDIconObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTitleObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTextObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Icon"), gdjs.Sample_32_40JP_41Code.GDIconObjects1);
gdjs.copyArray(runtimeScene.getObjects("ListArea"), gdjs.Sample_32_40JP_41Code.GDListAreaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.Sample_32_40JP_41Code.GDTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.Sample_32_40JP_41Code.GDTitleObjects1);
{for(var i = 0, len = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length ;i < len;++i) {
    gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").UpdateList(gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDBackGroundObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDIconObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTitleObjects1Objects, gdjs.Sample_32_40JP_41Code.mapOfGDgdjs_46Sample_9532_9540JP_9541Code_46GDTextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ListArea"), gdjs.Sample_32_40JP_41Code.GDListAreaObjects1);

gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length;i<l;++i) {
    if ( gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i].getBehavior("SimpleScrollableListBehavior").IsSelected((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val = true;
        gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[k] = gdjs.Sample_32_40JP_41Code.GDListAreaObjects1[i];
        ++k;
    }
}
gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length = k;}if (gdjs.Sample_32_40JP_41Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Sample_32_40JP_41Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Sample_32_40JP_41Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sample_32_40JP_41Code.GDSkor1Objects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDSkor1Objects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDSkor1Objects3.length = 0;
gdjs.Sample_32_40JP_41Code.GDListAreaObjects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDListAreaObjects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDListAreaObjects3.length = 0;
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDBackGroundObjects3.length = 0;
gdjs.Sample_32_40JP_41Code.GDIconObjects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDIconObjects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDIconObjects3.length = 0;
gdjs.Sample_32_40JP_41Code.GDTitleObjects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDTitleObjects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDTitleObjects3.length = 0;
gdjs.Sample_32_40JP_41Code.GDTextObjects1.length = 0;
gdjs.Sample_32_40JP_41Code.GDTextObjects2.length = 0;
gdjs.Sample_32_40JP_41Code.GDTextObjects3.length = 0;

gdjs.Sample_32_40JP_41Code.eventsList1(runtimeScene);
return;

}

gdjs['Sample_32_40JP_41Code'] = gdjs.Sample_32_40JP_41Code;
