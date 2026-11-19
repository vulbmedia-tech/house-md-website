(function(){
  var siteRoot=new URL('../../',document.currentScript.src);
  var CATS={face:"Face",body:"Body",laser:"Laser & Hair Removal",hair:"Hair & Scalp",skin:"Skin Conditions"};
  var DOCS={
    cymon:{name:"Dr. Cymon Aries A. Castillo",role:"MD, FPAAAMMI · Founder & Physician",img:"assets/images/dr-cymon.jpeg"},
    aira:{name:"Dr. Aira Pampolina",role:"MD, DPDS · Dermatologist",img:"assets/images/dra-aira.png"}
  };
  var BEFORE=["Book a consultation first so your doctor can check this treatment suits you.","Tell us about any medicines, allergies or recent treatments."];
  var AFTER=["Follow the aftercare your doctor gives you.","Wear sunscreen every day."];
  var INJ_AFTER=["Don't rub or massage the treated area.","Skip heavy exercise for the rest of the day.","Follow your doctor's advice on lying down after treatment."];
  var T=[
    {id:"co2",name:"CO2 Fractional Laser",cats:["face","laser"],img:"assets/images/Services/C02 Fractional Laser.png",short:"Laser resurfacing for acne scars, rough texture and enlarged pores.",
     good:["Acne scars","Uneven, bumpy texture","Enlarged pores","Mixed scars, as part of a combination plan"],
     expect:"The laser creates tiny treatment zones in the skin to trigger repair and new collagen. Numbing cream is applied first. Expect redness and some peeling for several days as the skin renews.",
     before:["Avoid sun exposure and tanning in the weeks before.","Tell your doctor about any medicines, skin products or history of cold sores."],
     after:["Use the gentle cleanser and moisturiser your doctor recommends.","Wear sunscreen daily and stay out of direct sun.","Don't pick at peeling skin."],
     note:"Many patients plan CO2 in the rainy season, when it's easier to stay out of the sun.",concerns:["acne"]},
    {id:"skinpen",name:"SkinPen Microneedling",cats:["face"],img:"assets/images/Services/Microneedling.png",short:"Microneedling that helps the skin repair scars, texture and pores.",
     good:["Acne scars","Rough or uneven texture","Enlarged pores","Dull skin"],
     expect:"Fine needles create tiny channels in the skin to start its natural repair process. Numbing cream keeps it comfortable. Skin is usually pink for a day or two.",
     after:["Keep skincare gentle for a few days.","Wear sunscreen daily.","Skip makeup and strong actives until your doctor says it's okay."],concerns:["acne"]},
    {id:"cosmelan",name:"Cosmelan",cats:["face"],img:"assets/images/Services/Cosmelan.png",short:"Professional depigmentation treatment for melasma, dark spots and uneven tone.",
     good:["Melasma","Sun spots and dark marks","Uneven skin tone"],
     expect:"The Cosmelan mask is applied in clinic, then continued with a home-care routine. Expect redness and peeling in the first days as the skin renews. Home care is a big part of the result.",
     before:["Have a consultation first so your doctor can check Cosmelan fits your skin.","Plan a few low-key days after the in-clinic step."],
     after:["Follow your home-care routine exactly as instructed.","Use sunscreen every day and avoid the sun.","Let peeling skin shed on its own."],
     note:"Dr. Cymon learned Cosmelan directly from mesoestetic's key opinion leaders from Spain.",concerns:["pigment"]},
    {id:"pdrn",name:"PDRN Facial (Mermaid Glow)",cats:["face"],img:"assets/images/Services/PDRN Facial Glow.png",short:"A hydrating, skin-repairing facial for a fresh, glassy glow.",
     good:["Dull or tired skin","Dehydrated skin","Skin recovering from breakouts"],
     expect:"PDRN is known for supporting skin repair and hydration. The facial is comfortable and suits patients who want visible glow with little downtime.",concerns:["pigment","acne"]},
    {id:"luxe",name:"Premium Luxe Facial",cats:["face"],img:"assets/images/Services/Premium Luxxe Facial.png",short:"A doctor-curated facial for clean, hydrated, glowing skin.",
     good:["Congested skin","Dullness","Regular skin maintenance"],
     expect:"Deep cleansing and hydration steps chosen for your skin type. A relaxing visit with no real downtime.",concerns:["pigment"]},
    {id:"skinbooster",name:"Skinbooster / Rejuran",cats:["face"],img:"assets/images/Services/Skin Booster _ Rejuran.png",short:"Injectable treatments that improve hydration and overall skin quality.",
     good:["Dry, dull skin","Fine texture lines","Skin that looks tired"],
     expect:"Small injections deliver hydrating or skin-repairing ingredients across the face. You may see small bumps or redness for a day or so.",
     after:["Don't touch or rub the area on the day.","Skip makeup until the next day.","Wear sunscreen daily."],concerns:["lines","pigment"]},
    {id:"jetpeel",name:"Jetpeel",cats:["face"],img:"assets/images/Services/Jet Peel.png",short:"A needle-free facial that cleanses and infuses the skin.",
     good:["Dull skin","Clogged pores","A quick refresh before an event"],
     expect:"A gentle jet of air and liquid cleanses the skin and helps serums absorb. No needles and little to no downtime.",concerns:["pigment"]},
    {id:"pdt",name:"Photodynamic Therapy",cats:["face"],img:"assets/images/Services/Photodynamic Theraphy.png",short:"Light-based treatment often used for acne-prone skin.",
     good:["Acne-prone skin","Oily, congested skin"],
     expect:"A light-sensitive solution may be applied, then the skin is exposed to a specific light. Your doctor will explain sun precautions for after the session.",
     after:["Avoid sun exposure as advised after the session.","Keep skincare gentle."],concerns:["acne"]},
    {id:"rfwand",name:"RF Wand Facial",cats:["face"],img:"assets/images/Services/RF Wannd.png",short:"Radiofrequency facial for firmer, lifted-looking skin.",
     good:["Mild skin laxity","Fine lines","Dull skin"],
     expect:"A radiofrequency wand gently warms the deeper layers of the skin. Most patients find it relaxing, and you can go back to your day after.",concerns:["lines"]},
    {id:"botox",name:"Botox",cats:["face"],img:"assets/images/Services/Botox.png",short:"Softens expression lines on the forehead, frown area and around the eyes.",
     good:["Forehead lines","Frown lines","Crow's feet"],
     expect:"Quick injections with a fine needle. Results appear gradually and settle in about two weeks. The goal is a natural look that still lets you express yourself.",
     before:["Tell your doctor about any medicines or supplements you take.","Plan around big events, since results take time to settle."],after:INJ_AFTER,concerns:["lines"]},
    {id:"preventive",name:"Preventive Botox",cats:["face"],img:"assets/images/Services/Preventive Botox.png",short:"A lighter Botox approach for early lines, before they set in.",
     good:["Early expression lines","Patients starting prevention in their 20s and 30s"],
     expect:"A lighter dose relaxes the muscles behind early lines. Results settle in about two weeks.",after:INJ_AFTER,concerns:["lines"]},
    {id:"jawtox",name:"Jawtox",cats:["face"],img:"assets/images/Services/Jawtox.png",short:"Botox for the jaw muscles to slim a wide jaw and ease teeth grinding.",
     good:["Square or wide jawline","Teeth clenching or grinding","Facial contouring"],
     expect:"Injections into the jaw (masseter) muscles. Slimming happens gradually over the following weeks as the muscle relaxes.",after:INJ_AFTER,concerns:["jaw"]},
    {id:"alartox",name:"Alartox",cats:["face"],img:"assets/images/Services/Alartox.png",short:"Botox for the sides of the nose to soften nose flaring.",
     good:["Nose flaring when smiling or talking"],
     expect:"A few small injections at the sides of the nose. Your doctor will check if this suits your features first.",after:INJ_AFTER,concerns:["jaw"]},
    {id:"procontour",name:"Pro Contour Slimming",cats:["body"],img:"assets/images/Services/Pro Contour Slimming.png",short:"Non-surgical body contouring for stubborn areas.",
     good:["Tummy, arms, thighs and other stubborn areas","Patients close to their goal weight"],
     expect:"Sessions focus on areas that don't respond to diet and exercise. Results build over a series of sessions planned by your doctor.",concerns:["fat"]},
    {id:"ultimaterf",name:"Ultimate RF",cats:["body"],img:"assets/images/Services/Ultimate RF.png",short:"Radiofrequency treatment for firmer, smoother-looking skin.",
     good:["Loose or crepey skin","Areas after weight loss","Skin tightening"],
     expect:"Radiofrequency energy warms the skin to support firmness. Comfortable, with no real downtime.",concerns:["fat"]},
    {id:"sweatox",name:"Sweatox",cats:["body"],img:"assets/images/Services/Sweatox.png",short:"Botox for heavy sweating on the underarms, palms and feet.",
     good:["Excess underarm sweating","Sweaty palms","Sweaty feet"],
     expect:"Small injections across the treated area reduce sweat production. The effect builds over the following days.",
     after:["Avoid heavy exercise and hot showers on the day.","Skip deodorant on the day of treatment unless your doctor says otherwise."],concerns:["sweat"]},
    {id:"diode",name:"Diode Laser Hair Removal",cats:["laser","body"],img:"assets/images/Services/Laser Hair Removal.png",short:"Long-term hair reduction for underarms, legs, bikini area and more.",
     good:["Underarms","Legs","Bikini area","Other body areas"],
     expect:"The laser targets the hair root. Hair reduces over a series of sessions, because hair grows in cycles.",
     before:["Shave the area a day before.","Don't wax or pluck, since the laser needs the root.","Avoid sun and tanning before your session."],
     after:["Avoid sun exposure on treated areas.","Skip hot showers and heavy exercise on the day."],concerns:["hair"]},
    {id:"nourkrin",name:"Hair Regrowth Program (Nourkrin)",cats:["hair"],img:"assets/images/Services/Nourskin.png",short:"A doctor-guided program for thinning hair, including postpartum hair loss.",
     good:["Thinning hair","Postpartum hair loss","A widening part or hairline"],
     expect:"Your doctor checks your scalp and plans a program that includes Nourkrin. Progress is tracked over months, not days.",
     note:'See a patient’s 3-month journey <a href="https://www.instagram.com/reel/Dc0cNLpjcGi/" target="_blank" rel="noopener">on our Instagram</a>.',concerns:["hairloss"]},
    {id:"prp",name:"PRP for Hair",cats:["hair"],img:"assets/images/Services/PRP for  Hair.png",short:"Uses your own platelet-rich plasma to support hair growth.",
     good:["Thinning hair","Early hair loss"],
     expect:"A small blood sample is processed to concentrate the platelets, which are then injected into the scalp. Usually done as a series of sessions.",
     after:["Don't wash your hair on the day unless advised.","Avoid hair dye and harsh scalp products for a few days."],concerns:["hairloss"]},
    {id:"derma",name:"Dermatology Consultation",cats:["skin"],img:"assets/images/dra-aira.png",doc:"aira",short:"See Dr. Aira Pampolina, MD, DPDS for skin, hair and nail conditions.",
     good:["Psoriasis","Warts (kulugo)","Alopecia","Other skin, hair and nail conditions"],
     expect:"Dr. Aira assesses your skin, explains the diagnosis and builds a treatment plan with you.",
     before:["Bring a list of the medicines and skin products you use.","Note when the condition started and what makes it better or worse."],
     after:["Follow your treatment plan and come back for follow-ups as scheduled."],concerns:["skin","hairloss"]}
  ];
  var C={
    acne:{name:"Acne & Acne Scars",img:"assets/images/Services/Acne Scar.png",main:1,book:"Scars & skin texture",short:"Active breakouts, the marks they leave and textured scars.",
      signs:["Recurring breakouts or clogged pores","Dark marks after pimples heal","Rolling, boxcar or ice-pick scars","Uneven, bumpy texture"],
      causes:["Excess oil and clogged pores","Hormonal changes","Inflammation that marks the skin as it heals","Picking or squeezing pimples"],
      approach:"Active acne is calmed first, then scars are treated once the skin has settled. Many patients do best with a combination plan, such as CO2 Fractional Laser with SkinPen.",
      tx:["co2","skinpen","pdt","pdrn","derma"]},
    pigment:{name:"Pigmentation & Uneven Tone",img:"assets/images/Services/Hyperpigmentation.png",main:1,book:"Pigmentation & glow",short:"Melasma, sun spots, dark marks and dullness.",
      signs:["Brown or grey-brown patches on the cheeks, forehead or upper lip","Spots from sun exposure","Dark marks after acne","Skin that looks dull or uneven"],
      causes:["Sun exposure and heat","Hormonal changes","Inflammation from acne or irritation","Genetics"],
      approach:"Pigmentation needs a steady plan and daily sun protection. Stubborn pigment is often treated with Cosmelan, supported by facials that keep skin hydrated and bright.",
      tx:["cosmelan","pdrn","luxe","jetpeel","skinbooster"]},
    lines:{name:"Fine Lines & Wrinkles",img:"assets/images/Services/Fine Lines and wrinkles.png",main:1,book:"Fine lines & jawline",short:"Expression lines, early creases and skin that feels less firm.",
      signs:["Forehead and frown lines","Crow's feet when you smile","Lines that stay when your face is relaxed","Skin that feels less firm"],
      causes:["Repeated facial expressions","Natural collagen loss with age","Sun exposure","Dehydrated skin"],
      approach:"Expression lines respond well to Botox, while skin quality and firmness improve with skinboosters and radiofrequency. The goal is to look refreshed, not frozen.",
      tx:["botox","preventive","skinbooster","rfwand"]},
    hairloss:{name:"Hair Thinning & Hair Loss",img:"assets/images/Services/Hair Thinning.png",book:"Hair loss & sweating",short:"Thinning hair, a widening part and postpartum shedding.",
      signs:["More hair on your pillow or in the shower","A widening part or receding hairline","A thinner ponytail","Patches of hair loss"],
      causes:["Postpartum and hormonal changes","Stress","Genetics","Scalp and medical conditions such as alopecia"],
      approach:"We check what's behind the hair loss first. Thinning hair is often treated with our Hair Regrowth Program and PRP, while conditions like alopecia are seen by Dr. Aira.",
      tx:["nourkrin","prp","derma"]},
    sweat:{name:"Excess Sweating",img:"assets/images/Services/Sweatox.png",book:"Hair loss & sweating",short:"Heavy sweating on the underarms, palms or feet.",
      signs:["Sweat marks on clothes","Sweaty palms that get in the way of daily tasks","Sweaty feet"],
      causes:["Overactive sweat glands","Heat and humidity","Stress"],
      approach:"Sweatox reduces sweat production in the treated area, so you can stop planning outfits around sweat marks.",tx:["sweatox"]},
    fat:{name:"Stubborn Fat & Loose Skin",img:"assets/images/Services/Body Contouring.png",book:"Body contouring",short:"Areas that don't shift with diet and exercise.",
      signs:["Stubborn tummy, arm or thigh fat","Loose or crepey skin","Skin laxity after weight loss"],
      causes:["Genetics and where your body stores fat","Collagen loss with age","Weight changes"],
      approach:"Body contouring and radiofrequency sessions target stubborn areas and firmness. Results build over a series planned by your doctor.",tx:["procontour","ultimaterf"]},
    hair:{name:"Unwanted Body Hair",img:"assets/images/Services/Laser Hair Removal.png",book:"Laser hair removal",short:"Shaving, waxing and ingrown hairs on repeat.",
      signs:["Frequent shaving or waxing","Ingrown hairs","A shadow from regrowth"],
      causes:["Genetics","Hormones"],
      approach:"Diode laser reduces hair over a series of sessions, so you spend less time shaving.",tx:["diode"]},
    jaw:{name:"Wide Jaw & Facial Contour",img:"assets/images/Services/Fine lines and Jawline.png",book:"Fine lines & jawline",short:"A square jawline, clenching or nose flaring.",
      signs:["Square or bulky jawline","Teeth clenching or grinding","Nose flaring when smiling"],
      causes:["Strong or overworked jaw muscles","Genetics"],
      approach:"Jawtox relaxes the jaw muscles for a slimmer, softer jawline, and Alartox softens nose flaring.",tx:["jawtox","alartox"]},
    skin:{name:"Skin Conditions",img:"assets/images/dra-aira.png",book:"Skin condition (Dr. Aira)",doc:"aira",short:"Psoriasis, warts (kulugo), alopecia and other skin, hair and nail conditions.",
      signs:["Scaly, itchy patches","Warts or growths on the skin","Patchy hair loss","Rashes that keep coming back"],
      causes:["Skin conditions have many causes, from immune and genetic factors to infections, so a proper diagnosis comes first."],
      approach:"Dr. Aira Pampolina, MD, DPDS, diagnoses and treats medical skin conditions and works with you on a treatment plan.",tx:["derma"]}
  };
  function byId(id){for(var i=0;i<T.length;i++)if(T[i].id===id)return T[i];return null;}
  function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
  function list(a){return '<ul class="creds">'+a.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';}
  function card(href,img,cat,name,short,cta){href=new URL(href,siteRoot).href;img=new URL(img,siteRoot).href;return '<a class="tcard" href="'+href+'"><div class="ph"><img src="'+img+'" alt="" loading="lazy"'+(/\/dr-/.test(img)?' style="object-position:50% 15%"':'')+'></div><div class="tb"><span class="tcat">'+esc(cat)+'</span><h3>'+esc(name)+'</h3><p>'+esc(short)+'</p><span class="more">'+cta+' →</span></div></a>';}
  function tCard(t){return card('pages/treatments/'+t.id+'.html',t.img,t.cats.map(function(c){return CATS[c];}).join(' · '),t.name,t.short,'View treatment').replace('class="tcard"','class="tcard treatment-card"').replace('View treatment →','<span>View treatment</span><span class="card-action-arrow" aria-hidden="true">↗</span>');}
  function cCard(id){var c=C[id];return card('pages/concerns/'+id+'.html',c.img,'Skin concern',c.name,c.short,'See treatments').replace('class="tcard"','class="tcard concern-card"').replace('See treatments →','<span>See treatments</span><span class="concern-action-arrow" aria-hidden="true">↗</span>');}
  var tgrid=document.getElementById('tgrid'), filter='all';
  function renderGrid(){if(!tgrid)return;tgrid.innerHTML=T.filter(function(t){return filter==='all'||t.cats.indexOf(filter)>-1;}).map(tCard).join('');}
  document.querySelectorAll('.tab').forEach(function(b){b.addEventListener('click',function(){filter=b.getAttribute('data-filter');document.querySelectorAll('.tab').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});renderGrid();});});
  renderGrid();
  if(document.getElementById('cmain'))document.getElementById('cmain').innerHTML=Object.keys(C).filter(function(k){return C[k].main;}).map(cCard).join('');
  if(document.getElementById('cmore'))document.getElementById('cmore').innerHTML=Object.keys(C).filter(function(k){return !C[k].main;}).map(cCard).join('');

  var nav=document.getElementById('siteNav'), btn=document.getElementById('menuBtn');
  function closeMenu(){nav.setAttribute('data-open','false');btn.setAttribute('aria-expanded','false');}
  btn.addEventListener('click',function(){var o=nav.getAttribute('data-open')==='true';nav.setAttribute('data-open',o?'false':'true');btn.setAttribute('aria-expanded',o?'false':'true');});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu();});

  document.addEventListener('click',function(e){var a=e.target.closest('[data-book]');if(!a)return;var sel=document.getElementById('f-concern');sel.value=a.getAttribute('data-book');});

  document.querySelectorAll('.copy').forEach(function(b){
    b.addEventListener('click',function(){
      var el=document.getElementById(b.getAttribute('data-copy')); var t=el.textContent;
      function done(){b.textContent='Copied';setTimeout(function(){b.textContent='Copy';},1600);}
      function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent='Selected';setTimeout(function(){b.textContent='Copy';},1600);}
      try{navigator.clipboard.writeText(t).then(done,fallback);}catch(e){fallback();}
    });
  });

  var form=document.getElementById('enquiry'), st=document.getElementById('formStatus');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('f-name'), p=document.getElementById('f-phone');
    st.hidden=false;
    if(!n.value.trim()||!p.value.trim()){st.textContent='Add your name and mobile number so the clinic can reach you.';(n.value.trim()?p:n).focus();return;}
    var c=document.getElementById('f-concern').value, d=document.getElementById('f-date').value;
    st.innerHTML='<b>Request received (preview)</b><br>'+n.value.trim().split(' ')[0]+', this form isn\u2019t connected yet, so nothing was sent. Your request: '+c+(d?' on '+d:'')+'. To book now, message @housemd_aesthetics or call 0969 109 2286.';
  });
})();