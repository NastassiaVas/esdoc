import {readDoc, assert, find} from './util.js';

describe('MyVariable:', ()=> {
  let doc = readDoc('@variable.html');
  let encode = encodeURIComponent;

  it('has summary.', ()=>{
    find(doc, '[data-ice="summary"]', (doc)=>{
      assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public static myVariable1: number this is myVariable1 desc.');
      assert.includes(doc, '[data-ice="target"]:nth-of-type(2)', 'public static myVariable2: number this is myVariable2 desc.');
      assert.includes(doc, '[data-ice="target"]:nth-of-type(3)', 'public static myVariable3: number this is myVariable3 desc.');

      assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', encode('@variable.html') + '#static-variable-myVariable1', 'href');
    });
  });

  it('has detail.', ()=> {
    find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc)=> {
      assert.includes(doc, '#static-variable-myVariable1', 'public static myVariable1: number');
      assert.includes(doc, '[data-ice="importPath"]', "import myVariable1 from 'esdoc-test-fixture/src/myVariable.js'");
    });

    find(doc, '[data-ice="detail"]:nth-of-type(2)', (doc)=> {
      assert.includes(doc, '#static-variable-myVariable2', 'public static myVariable2: number');
      assert.includes(doc, '[data-ice="importPath"]', "import {myVariable2} from 'esdoc-test-fixture/src/myVariable.js'");
    });

    find(doc, '[data-ice="detail"]:nth-of-type(3)', (doc)=> {
      assert.includes(doc, '#static-variable-myVariable3', 'public static myVariable3: number');
    });
  });
});