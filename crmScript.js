  (function({d=document,s='script',id='bacrmtrk', cKey, oKey}){
    let n, p = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    n = d.createElement(s); n.id = id;
    n.src = "https://crm-api.eb4us.com/js/tracking.min.js";
    n.onload = function(){__baCRMTracking.init({cKey, oKey})};
    p.parentNode.insertBefore(n, p);
  }({
      cKey:'964d1775b722eff11b8ecd9e9ed5bd9e',
      oKey:'05937557e73824dd7d288c19f8597a77'
  }));