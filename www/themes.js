/* Theme list + applier. Loaded in <head>; the choice itself is saved by the app in its data store. */
window.LedgerThemes = (function(){
  var LIST = [
    {id:'atelier', group:'Designs', design:'refined', name:'Atelier', desc:'Ivory, ink and terracotta', bg:'#F4F1EA', sw:['#FBF9F4','#1D1B16','#9A4A32'], meta:'#F4F1EA'},
    {id:'graphite', group:'Designs', design:'refined', name:'Graphite', desc:'Charcoal with sage', bg:'#0F1012', sw:['#17181B','#ECE9E1','#A9C1A8'], meta:'#0F1012'},
    {id:'porcelain', group:'Designs', design:'refined', name:'Porcelain', desc:'Cool white, deep navy', bg:'#EDF0F3', sw:['#FFFFFF','#0F1B2D','#1F6F78'], meta:'#EDF0F3'},
    {id:'classic', group:'Colour themes', name:'Classic Paper', desc:'The original ledger', bg:'#1B2430', sw:['#F3EAD9','#33553B','#B9863C'], meta:'#1B2430'},
    {id:'midnight', group:'Colour themes', name:'Midnight Gold', desc:'Black and burnished gold', bg:'#08080B', sw:['#17171E','#D9B672','#F3ECDD'], meta:'#08080B'},
    {id:'emerald', group:'Colour themes', name:'Emerald Luxe', desc:'Deep green, champagne', bg:'#03201A', sw:['#0C3429','#E6D09A','#F3EDD8'], meta:'#03201A'},
    {id:'sapphire', group:'Colour themes', name:'Royal Sapphire', desc:'Navy with platinum', bg:'#060D24', sw:['#111C42','#B5C8F6','#EEF2FF'], meta:'#060D24'},
    {id:'rose', group:'Colour themes', name:'Rose Noir', desc:'Dark wine, rose gold', bg:'#130609', sw:['#271019','#EDB9A4','#FAEBE4'], meta:'#130609'},
    {id:'ivory', group:'Colour themes', name:'Ivory & Gold', desc:'Light, marble and gold', bg:'#ECE5D6', sw:['#FFFEFA','#A57A28','#1F1B14'], meta:'#ECE5D6'}
  ];
  function get(id){ for(var i=0;i<LIST.length;i++) if(LIST[i].id===id) return LIST[i]; return LIST[0]; }
  function apply(id){
    var t = get(id), de = document.documentElement;
    if(t.id==='classic') de.removeAttribute('data-theme'); else de.setAttribute('data-theme', t.id);
    if(t.design) de.setAttribute('data-design', t.design); else de.removeAttribute('data-design');
    var m = document.querySelector('meta[name="theme-color"]'); if(m) m.setAttribute('content', t.meta);
    return t.id;
  }
  return { list: LIST, get: get, apply: apply, defaultId: 'atelier' };
})();
