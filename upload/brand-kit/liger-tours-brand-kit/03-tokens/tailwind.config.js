// tailwind.config.js (only if the site uses Tailwind). Values mirror tokens.css.
module.exports = { theme: { extend: {
  colors: { rose: {"50": "#FBF4F2", "100": "#F6E8E4", "200": "#F0DAD5", "300": "#E3C3BE", "400": "#CDA9A4", "500": "#B58B88", "600": "#996660", "700": "#744642", "800": "#523431", "900": "#2F1E1C"}, night:'#1F1613', acacia:'#483E22', sunrise:'#F58A3A', sun:'#F8C808',
    brand:{DEFAULT:'#744642',hover:'#523431'}, ink:{DEFAULT:'#2F1E1C',muted:'#6B5450'} },
  fontFamily: { script:['Kaushan Script','cursive'], display:['Archivo','Helvetica Neue','Arial','sans-serif'], body:['Schibsted Grotesk','Helvetica Neue','Arial','sans-serif'] },
  borderRadius: { arch:'999px 999px 0 0' },
  screens: { sm:'480px', md:'768px', lg:'1024px', xl:'1280px', '2xl':'1536px' },
  maxWidth: { container:'1280px', narrow:'760px', prose:'62ch' }
}}};
