/**
 * Author:  Davide Alocci
 * Version: 0.0.1
 */

import GlycosidicLinkage from "../../../js/glycomics/linkages/GlycosidicLinkage";
import AnomerCarbon from "../../../js/glycomics/dictionary/AnomerCarbon";
import LinkedCarbon from "../../../js/glycomics/dictionary/LinkedCarbon";

QUnit.module("Test GlycosidicLinkage object", {
});

QUnit.test( "Create new glycosidic linkage" , function( assert ) {

    var edge = new GlycosidicLinkage('test','source1','target1',AnomerCarbon.ONE,LinkedCarbon.TWO);
    assert.ok(edge.anomerCarbon === AnomerCarbon.ONE,"Correct AnomerCarbon");
    assert.ok(edge.linkedCarbon === LinkedCarbon.TWO,"Correct LinkedCarbon");
    assert.ok(edge.anomerCarbon.value === 1,"Correct value");
    assert.ok(edge.linkedCarbon.value === 2,"Correct value");
    assert.notOk(edge.linkedCarbon.value === 3,"Uncorrect value ok");
    assert.notOk(edge.anomerCarbon.value === 5,"Uncorrect value ok");

    var edge2 = new GlycosidicLinkage('test','source1','target1',AnomerCarbon.ONE,LinkedCarbon.TWO);
    assert.ok(edge2.anomerCarbon === AnomerCarbon.ONE,"Correct AnomerCarbon");
    assert.ok(edge2.linkedCarbon === LinkedCarbon.TWO,"Correct LinkedCarbon");
    assert.ok(edge2.anomerCarbon.value === 1,"Correct value");
    assert.ok(edge2.linkedCarbon.value === 2,"Correct value");
    assert.notOk(edge2.linkedCarbon.value === 3,"Uncorrect value ok");
    assert.notOk(edge2.anomerCarbon.value === 5,"Uncorrect value ok");

    edge2.anomerCarbon = AnomerCarbon.THREE;
    edge2.linkedCarbon = LinkedCarbon.FOUR;

    assert.ok(edge2.anomerCarbon === AnomerCarbon.THREE,"Correct AnomerCarbon");
    assert.ok(edge2.linkedCarbon === LinkedCarbon.FOUR,"Correct LinkedCarbon");
    assert.ok(edge2.anomerCarbon.value === 3,"Correct value");
    assert.ok(edge2.linkedCarbon.value === 4,"Correct value");
    assert.notOk(edge2.linkedCarbon === LinkedCarbon.ONE,"Uncorrect value ok");
    assert.notOk(edge2.anomerCarbon === AnomerCarbon.ONE,"Uncorrect value ok");
    assert.notOk(edge2.linkedCarbon.value === 3,"Uncorrect value ok");
    assert.notOk(edge2.anomerCarbon.value === 5,"Uncorrect value ok");

    var edgeUndefined = new GlycosidicLinkage('test','source1','target1');
    assert.ok(edgeUndefined.anomerCarbon === AnomerCarbon.UNDEFINED,"Correct AnomerCarbon");
    assert.ok(edgeUndefined.linkedCarbon === LinkedCarbon.UNDEFINED,"Correct LinkedCarbon");
    assert.ok(edgeUndefined.anomerCarbon.value === 'undefined',"Correct value");
    assert.ok(edgeUndefined.linkedCarbon.value === 'undefined',"Correct value");
    assert.notOk(edgeUndefined.linkedCarbon.value === 3,"Uncorrect value ok");
    assert.notOk(edgeUndefined.anomerCarbon.value === 5,"Uncorrect value ok");

    edgeUndefined.anomerCarbon = AnomerCarbon.FIVE;
    edgeUndefined.linkedCarbon = LinkedCarbon.SIX;

    assert.ok(edgeUndefined.anomerCarbon === AnomerCarbon.FIVE,"Correct AnomerCarbon");
    assert.ok(edgeUndefined.linkedCarbon === LinkedCarbon.SIX,"Correct LinkedCarbon");
    assert.ok(edgeUndefined.anomerCarbon.value === 5,"Correct value");
    assert.ok(edgeUndefined.linkedCarbon.value === 6,"Correct value");
    assert.notOk(edgeUndefined.linkedCarbon.value === 1,"Uncorrect value ok");
    assert.notOk(edgeUndefined.anomerCarbon.value === 2,"Uncorrect value ok");
    assert.notOk(edgeUndefined.anomerCarbon === AnomerCarbon.THREE,"Correct AnomerCarbon");
    assert.notOk(edgeUndefined.linkedCarbon === LinkedCarbon.ONE,"Correct LinkedCarbon");
});

QUnit.test( "Create new glycosidic linkage Error Linakge" , function(assert) {
    assert.raises(function(){
        new GlycosidicLinkage('test','source1','target1',8,1);
    });

    assert.raises(function(){
        new GlycosidicLinkage('test','source1','target1',1,7);
    });

    assert.raises(function(){
        new GlycosidicLinkage('test','source1','target1','error',1);
    });

    assert.raises(function(){
        new GlycosidicLinkage('test','source1','target1',1,'error');
    });


    assert.raises(function(){
        var g = new GlycosidicLinkage('test','source1','target1');
        g.anomerCarbon = 'set';
    });


    assert.raises(function(){
        var g = new GlycosidicLinkage('test','source1','target1');
        g.linkedCarbon = 'set';
    });
});


