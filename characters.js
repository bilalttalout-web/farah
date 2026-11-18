/* ============================================================
   CARTOON CHARACTERS & ANIMATED SCHOOL SERIES CONTROLLERS
   Complete Full-Body 3D Cartoon Characters:
   - The Principal (المديرة التيتزة) - Full Body, Elegant, Detailed
   - Bilal, Omar, Frayha, Taha, The Teacher
   ============================================================ */

class CharacterRenderer {
  // ============================================================
  // 1. THE PRINCIPAL (المديرة التيتزة) - COMPLETE FULL BODY
  // ============================================================
  static renderPrincipal() {
    return `
      <svg class="char-svg char-svg-principal" viewBox="0 0 130 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="prSkin" cx="42%" cy="36%" r="65%">
            <stop offset="0%" stop-color="#fff0ea"/>
            <stop offset="65%" stop-color="#fcd5c5"/>
            <stop offset="100%" stop-color="#f5b39b"/>
          </radialGradient>
          <radialGradient id="prHair" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#4a1505"/>
            <stop offset="75%" stop-color="#240b02"/>
            <stop offset="100%" stop-color="#0d0400"/>
          </radialGradient>
          <linearGradient id="prBlazer" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c026d3"/>
            <stop offset="50%" stop-color="#9333ea"/>
            <stop offset="100%" stop-color="#6b21a8"/>
          </linearGradient>
          <linearGradient id="prSkirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#581c87"/>
            <stop offset="100%" stop-color="#3b0764"/>
          </linearGradient>
          <linearGradient id="prBag" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#fb7185"/>
            <stop offset="100%" stop-color="#e11d48"/>
          </linearGradient>
          <linearGradient id="prHeels" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#db2777"/>
            <stop offset="100%" stop-color="#9d174d"/>
          </linearGradient>
        </defs>

        <!-- Ground 3D Shadow -->
        <ellipse cx="65" cy="194" rx="38" ry="6" fill="rgba(0,0,0,0.22)"/>

        <!-- High Heel Shoes & Shapely Legs -->
        <g id="pr-legs">
          <!-- Left Leg -->
          <path d="M52 135 L51 168 Q50 178 48 184" stroke="url(#prSkin)" stroke-width="8" stroke-linecap="round"/>
          <!-- Left Stiletto Heel -->
          <path d="M42 184 Q48 182 54 184 L53 190 Q48 193 42 190 Z" fill="url(#prHeels)"/>
          <line x1="43" y1="188" x2="43" y2="194" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="51" cy="183" r="2.5" fill="#ffd166"/>

          <!-- Right Leg -->
          <path d="M74 135 L75 168 Q76 178 78 184" stroke="url(#prSkin)" stroke-width="8" stroke-linecap="round"/>
          <!-- Right Stiletto Heel -->
          <path d="M72 184 Q78 182 84 184 L83 190 Q78 193 72 190 Z" fill="url(#prHeels)"/>
          <line x1="73" y1="188" x2="73" y2="194" stroke="#ffd166" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="81" cy="183" r="2.5" fill="#ffd166"/>
        </g>

        <!-- Tailored Pencil Skirt -->
        <g id="pr-skirt">
          <path d="M43 108 L83 108 L79 140 C79 142 47 142 47 140 Z" fill="url(#prSkirt)"/>
          <line x1="63" y1="110" x2="63" y2="139" stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
        </g>

        <!-- Torso, Belly & Chic Blazer -->
        <g id="pr-torso">
          <!-- White Silk Inner Blouse -->
          <polygon points="53,74 73,74 63,94" fill="#ffffff"/>
          <polygon points="58,74 68,74 63,86" fill="#fce7f3"/>

          <!-- Blazer Body -->
          <path d="M38 72 C38 68 88 68 88 72 L86 112 C86 114 40 114 40 112 Z" fill="url(#prBlazer)"/>
          <!-- Lapels -->
          <path d="M42 72 L54 94 L44 98 Z" fill="#7e22ce"/>
          <path d="M84 72 L72 94 L82 98 Z" fill="#7e22ce"/>

          <!-- Gold Buttons on Blazer -->
          <circle cx="63" cy="98" r="2.8" fill="#ffd166" stroke="#b45309" stroke-width="0.8"/>
          <circle cx="63" cy="106" r="2.8" fill="#ffd166" stroke="#b45309" stroke-width="0.8"/>

          <!-- Golden Pearl Necklace -->
          <path d="M52 74 Q63 84 74 74" fill="none" stroke="#ffd166" stroke-width="2.5" stroke-dasharray="3,2"/>
        </g>

        <!-- Left Arm holding Designer Handbag -->
        <g id="pr-arm-left">
          <path d="M38 75 Q24 88 28 108" stroke="url(#prBlazer)" stroke-width="11" stroke-linecap="round"/>
          <!-- Gold Watch/Bracelet -->
          <rect x="25" y="106" width="7" height="3" rx="1.5" fill="#ffd166"/>
          <!-- Hand with red manicured nails -->
          <circle cx="28" cy="112" r="4.5" fill="url(#prSkin)"/>
          <!-- Designer Red Handbag -->
          <g id="pr-handbag">
            <path d="M28 112 Q28 122 28 126" stroke="#ffd166" stroke-width="1.8" fill="none"/>
            <rect x="18" y="125" width="22" height="19" rx="4" fill="url(#prBag)"/>
            <polygon points="18,125 40,125 35,134 23,134" fill="#be123c"/>
            <circle cx="29" cy="134" r="2.2" fill="#ffd166"/>
          </g>
        </g>

        <!-- Right Arm with Hand Poised -->
        <g id="pr-arm-right">
          <path d="M88 75 Q102 88 98 106" stroke="url(#prBlazer)" stroke-width="11" stroke-linecap="round"/>
          <rect x="94" y="104" width="7" height="3" rx="1.5" fill="#ffd166"/>
          <circle cx="98" cy="110" r="4.5" fill="url(#prSkin)"/>
        </g>

        <!-- Head, Face & Hairstyle -->
        <g id="pr-head">
          <circle cx="38" cy="46" r="5.5" fill="url(#prSkin)"/>
          <circle cx="88" cy="46" r="5.5" fill="url(#prSkin)"/>
          <!-- Gold Hoop Earrings -->
          <circle cx="37" cy="51" r="3.5" fill="none" stroke="#ffd166" stroke-width="1.8"/>
          <circle cx="89" cy="51" r="3.5" fill="none" stroke="#ffd166" stroke-width="1.8"/>

          <!-- Beautiful Oval Face Shape -->
          <path d="M42 36 C40 22 86 22 84 36 C86 56 76 66 63 67 C50 66 40 56 42 36 Z" fill="url(#prSkin)"/>

          <!-- Rosy Makeup Cheeks -->
          <circle cx="49" cy="50" r="4.5" fill="#fb7185" opacity="0.5"/>
          <circle cx="77" cy="50" r="4.5" fill="#fb7185" opacity="0.5"/>

          <!-- Clearly Visible Nose -->
          <path d="M63 46 Q65 52 62 53" stroke="#e08365" stroke-width="1.8" fill="none" stroke-linecap="round"/>

          <!-- Glamorous Red Lips (Smirk) -->
          <path d="M54 59 Q63 67 72 58" stroke="#9f1239" stroke-width="2" fill="#e11d48" stroke-linecap="round"/>
          <path d="M57 60 Q63 64 69 60" fill="#ffffff"/>

          <!-- Expressive Eyes with Eyelashes & Eyeliner -->
          <g id="pr-eyes">
            <!-- Left Eye -->
            <path d="M46 42 Q52 38 58 43" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M45 40 L43 38" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse cx="52" cy="44" rx="4.5" ry="5.5" fill="#3b1d11"/>
            <circle cx="52" cy="44" r="2.8" fill="#0f172a"/>
            <circle cx="50.5" cy="42" r="1.5" fill="#ffffff"/>

            <!-- Right Eye -->
            <path d="M68 43 Q74 38 80 42" stroke="#0f172a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M81 40 L83 38" stroke="#0f172a" stroke-width="1.8" stroke-linecap="round"/>
            <ellipse cx="74" cy="44" rx="4.5" ry="5.5" fill="#3b1d11"/>
            <circle cx="74" cy="44" r="2.8" fill="#0f172a"/>
            <circle cx="72.5" cy="42" r="1.5" fill="#ffffff"/>

            <!-- Elegant Eyebrows -->
            <path d="M45 37 Q52 33 58 37" stroke="#451a03" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M68 37 Q74 33 81 37" stroke="#451a03" stroke-width="2.2" fill="none" stroke-linecap="round"/>
          </g>

          <!-- Voluminous Hair Bun & Waves -->
          <!-- Top High Bun -->
          <circle cx="63" cy="15" r="17" fill="url(#prHair)"/>
          <circle cx="63" cy="15" r="15" fill="none" stroke="#78350f" stroke-width="2" opacity="0.4"/>
          <!-- Hair Base -->
          <path d="M37 36 C34 14 55 12 63 12 C75 12 92 14 89 36 C82 24 74 20 63 20 C52 20 44 24 37 36 Z" fill="url(#prHair)"/>
          <!-- Side Curled Ringlets -->
          <path d="M37 36 Q32 52 38 64 Q42 54 40 44 Z" fill="url(#prHair)"/>
          <path d="M89 36 Q94 52 88 64 Q84 54 86 44 Z" fill="url(#prHair)"/>

          <!-- Chic Cat-Eye Sunglasses on Forehead / Hair -->
          <g id="pr-sunglasses">
            <polygon points="43,26 60,28 57,36 45,34" fill="#0f172a" stroke="#ffd166" stroke-width="1.6"/>
            <polygon points="66,28 83,26 81,34 69,36" fill="#0f172a" stroke="#ffd166" stroke-width="1.6"/>
            <line x1="58" y1="30" x2="68" y2="30" stroke="#ffd166" stroke-width="2"/>
            <line x1="47" y1="28" x2="52" y2="33" stroke="#ffffff" stroke-width="1.6" opacity="0.7"/>
            <line x1="72" y1="28" x2="77" y2="33" stroke="#ffffff" stroke-width="1.6" opacity="0.7"/>
          </g>
        </g>
      </svg>
    `;
  }

  // ============================================================
  // 2. OMAR - FULL BODY
  // ============================================================
  static renderOmar(expression = 'normal') {
    if (expression === 'defeated') {
      return `
        <svg class="char-svg" viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg" style="width: 125px; height: 90px;">
          <defs>
            <radialGradient id="omDefSkin" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stop-color="#ffe0bd"/><stop offset="100%" stop-color="#f5b987"/>
            </radialGradient>
            <linearGradient id="omDefHoodie" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ff6b6b"/><stop offset="100%" stop-color="#c0392b"/>
            </linearGradient>
          </defs>
          <ellipse cx="70" cy="88" rx="60" ry="10" fill="rgba(0,0,0,0.22)"/>
          <ellipse cx="65" cy="65" rx="42" ry="18" fill="url(#omDefHoodie)"/>
          <rect x="15" y="60" width="22" height="10" rx="4" fill="#2d3a4b" transform="rotate(-15 25 65)"/>
          <ellipse cx="12" cy="60" rx="8" ry="6" fill="#fff"/>
          <rect x="25" y="70" width="22" height="10" rx="4" fill="#2d3a4b" transform="rotate(20 35 75)"/>
          <ellipse cx="20" cy="78" rx="8" ry="6" fill="#fff"/>
          <circle cx="102" cy="55" r="22" fill="url(#omDefSkin)"/>
          <path d="M85 45 C85 30 115 30 122 45 C115 38 95 38 85 45 Z" fill="#451a03"/>
          <ellipse cx="114" cy="36" rx="7" ry="8" fill="#ff7675"/>
          <path d="M109 36 L119 36" stroke="#fff" stroke-width="2"/>
          <g stroke="#2d132c" stroke-width="2.6" stroke-linecap="round">
            <line x1="94" y1="50" x2="102" y2="58"/>
            <line x1="102" y1="50" x2="94" y2="58"/>
            <line x1="108" y1="50" x2="116" y2="58"/>
            <line x1="116" y1="50" x2="108" y2="58"/>
          </g>
          <path d="M100 66 Q106 74 112 66" stroke="#2d132c" stroke-width="2" fill="none"/>
          <path d="M103 68 Q106 76 109 68 Z" fill="#ff7675"/>
        </svg>
      `;
    }

    return `
      <svg class="char-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="omSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#ffe0bd"/><stop offset="70%" stop-color="#ffd1a4"/><stop offset="100%" stop-color="#f5b987"/>
          </radialGradient>
          <radialGradient id="omHair" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#78350f"/><stop offset="75%" stop-color="#451a03"/><stop offset="100%" stop-color="#260e02"/>
          </radialGradient>
          <linearGradient id="omHoodie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff6b6b"/><stop offset="60%" stop-color="#ee5253"/><stop offset="100%" stop-color="#c0392b"/>
          </linearGradient>
          <linearGradient id="omJeans" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#4b6584"/><stop offset="100%" stop-color="#2d3a4b"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="174" rx="36" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Full Legs & Sneakers -->
        <g id="omar-legs">
          <rect x="42" y="132" width="13" height="30" rx="5" fill="url(#omJeans)"/>
          <rect x="65" y="132" width="13" height="30" rx="5" fill="url(#omJeans)"/>
          <path d="M38 158 Q48 156 56 158 Q56 168 46 168 Q38 168 38 158 Z" fill="#ffffff"/>
          <path d="M41 164 L53 164" stroke="#ee5253" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M63 158 Q73 156 81 158 Q81 168 71 168 Q63 168 63 158 Z" fill="#ffffff"/>
          <path d="M66 164 L78 164" stroke="#ee5253" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <!-- Full Torso & Hoodie -->
        <g id="omar-torso">
          <path d="M34 84 C34 78 86 78 86 84 L88 136 C88 140 32 140 32 136 Z" fill="url(#omHoodie)"/>
          <path d="M46 112 C46 106 74 106 74 112 L72 130 C72 132 48 132 48 130 Z" fill="#d63031" opacity="0.4"/>
          <path d="M54 84 L53 98" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M66 84 L67 98" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <!-- Left Arm with Hand -->
        <g id="omar-arm-left">
          <path d="M34 86 Q20 100 24 118" stroke="url(#omHoodie)" stroke-width="14" stroke-linecap="round"/>
          <circle cx="24" cy="118" r="7" fill="url(#omSkin)"/>
        </g>
        <!-- Head, Face & Features -->
        <g id="omar-head">
          <circle cx="34" cy="52" r="7" fill="url(#omSkin)"/>
          <circle cx="86" cy="52" r="7" fill="url(#omSkin)"/>
          <circle cx="60" cy="52" r="28" fill="url(#omSkin)"/>
          <circle cx="45" cy="58" r="5" fill="#ff7675" opacity="0.5"/>
          <circle cx="75" cy="58" r="5" fill="#ff7675" opacity="0.5"/>
          <path d="M60 50 Q62 55 59 56" stroke="#e08365" stroke-width="1.8" fill="none"/>
          ${
            expression === 'whisper'
              ? `
              <ellipse cx="52" cy="50" rx="5" ry="6" fill="#1e272e"/>
              <ellipse cx="76" cy="50" rx="5" ry="6" fill="#1e272e"/>
              <circle cx="53" cy="48" r="2" fill="#fff"/>
              <circle cx="77" cy="48" r="2" fill="#fff"/>
              <path d="M44 43 L54 44" stroke="#451a03" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M68 44 L78 43" stroke="#451a03" stroke-width="2.5" stroke-linecap="round"/>
              <ellipse cx="60" cy="65" rx="5" ry="7" fill="#2d132c"/>
              <path d="M84 42 Q86 36 89 40 Q90 44 87 45 Q84 46 84 42 Z" fill="#38bdf8"/>
            `
              : expression === 'shock'
              ? `
              <circle cx="48" cy="49" r="8" fill="#fff" stroke="#1e272e" stroke-width="2"/>
              <circle cx="72" cy="49" r="8" fill="#fff" stroke="#1e272e" stroke-width="2"/>
              <circle cx="48" cy="49" r="3" fill="#1e272e"/>
              <circle cx="72" cy="49" r="3" fill="#1e272e"/>
              <ellipse cx="60" cy="67" rx="8" ry="11" fill="#2d132c"/>
            `
              : expression === 'laugh'
              ? `
              <path d="M42 48 Q48 42 54 48" stroke="#1e272e" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M66 48 Q72 42 78 48" stroke="#1e272e" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M48 60 Q60 76 72 60 Z" fill="#2d132c"/>
              <path d="M53 68 Q60 74 67 68" stroke="#ff7675" stroke-width="3" fill="none"/>
            `
              : `
              <ellipse cx="48" cy="49" rx="5" ry="6.5" fill="#1e272e"/>
              <ellipse cx="72" cy="49" rx="5" ry="6.5" fill="#1e272e"/>
              <circle cx="46" cy="47" r="2.2" fill="#fff"/>
              <circle cx="70" cy="47" r="2.2" fill="#fff"/>
              <path d="M43 40 Q49 37 54 40" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M66 40 Q71 37 77 40" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M50 63 Q60 72 70 63" stroke="#2d132c" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            `
          }
          <path d="M32 46 C30 24 50 16 60 16 C75 16 90 25 88 46 C84 34 76 30 68 32 C60 27 48 30 42 36 C36 40 33 46 32 46 Z" fill="url(#omHair)"/>
          <path d="M57 16 Q63 6 72 12 Q64 16 61 20 Z" fill="url(#omHair)"/>
        </g>
        <!-- Right Arm with Hand -->
        <g id="omar-arm-right">
          <path d="M86 86 Q100 100 94 118" stroke="url(#omHoodie)" stroke-width="14" stroke-linecap="round"/>
          <circle cx="94" cy="118" r="7" fill="url(#omSkin)"/>
        </g>
      </svg>
    `;
  }

  // ============================================================
  // 3. BILAL - FULL BODY
  // ============================================================
  static renderBilal(expression = 'normal') {
    return `
      <svg class="char-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="biSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fed7aa"/><stop offset="70%" stop-color="#fdba74"/><stop offset="100%" stop-color="#f97316"/>
          </radialGradient>
          <radialGradient id="biHair" cx="45%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#334155"/><stop offset="80%" stop-color="#0f172a"/><stop offset="100%" stop-color="#020617"/>
          </radialGradient>
          <linearGradient id="biJacket" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#38bdf8"/><stop offset="60%" stop-color="#0284c7"/><stop offset="100%" stop-color="#0369a1"/>
          </linearGradient>
          <linearGradient id="biPants" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="174" rx="36" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Full Legs & Sneakers -->
        <g id="bilal-legs">
          ${
            expression === 'running'
              ? `
              <rect x="36" y="132" width="13" height="30" rx="5" fill="url(#biPants)" transform="rotate(22 42 132)"/>
              <rect x="70" y="132" width="13" height="30" rx="5" fill="url(#biPants)" transform="rotate(-25 70 132)"/>
              <path d="M30 162 Q40 160 48 162 Q48 172 38 172 Q30 172 30 162 Z" fill="#facc15"/>
              <path d="M72 154 Q82 152 90 154 Q90 164 80 164 Q72 164 72 154 Z" fill="#facc15"/>
            `
              : `
              <rect x="42" y="132" width="13" height="30" rx="5" fill="url(#biPants)"/>
              <rect x="65" y="132" width="13" height="30" rx="5" fill="url(#biPants)"/>
              <path d="M38 158 Q48 156 56 158 Q56 168 46 168 Q38 168 38 158 Z" fill="#facc15"/>
              <path d="M40 164 L54 164" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
              <path d="M63 158 Q73 156 81 158 Q81 168 71 168 Q63 168 63 158 Z" fill="#facc15"/>
              <path d="M65 164 L79 164" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
            `
          }
        </g>
        <!-- Full Torso & Cool Jacket -->
        <g id="bilal-torso">
          <path d="M34 84 C34 78 86 78 86 84 L88 136 C88 140 32 140 32 136 Z" fill="url(#biJacket)"/>
          <polygon points="50,84 70,84 60,104" fill="#ffffff"/>
          <line x1="60" y1="104" x2="60" y2="136" stroke="#facc15" stroke-width="2.5"/>
        </g>
        <!-- Left Arm with Hand -->
        <g id="bilal-arm-left">
          ${
            expression === 'scared' || expression === 'running'
              ? `
              <path d="M34 86 Q16 64 22 46" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="22" cy="46" r="7" fill="url(#biSkin)"/>
            `
              : expression === 'bribing'
              ? `
              <path d="M34 86 Q18 80 24 74" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <!-- Chocolate Box -->
              <rect x="12" y="70" width="20" height="20" rx="3" fill="#78350f" stroke="#451a03" stroke-width="1.2"/>
              <rect x="12" y="78" width="20" height="3" fill="#ef4444"/>
              <rect x="20" y="70" width="3" height="20" fill="#ef4444"/>
            `
              : `
              <path d="M34 86 Q20 100 24 118" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="24" cy="118" r="7" fill="url(#biSkin)"/>
            `
          }
        </g>
        <!-- Head, Face & Features -->
        <g id="bilal-head">
          <circle cx="34" cy="52" r="7" fill="url(#biSkin)"/>
          <circle cx="86" cy="52" r="7" fill="url(#biSkin)"/>
          <circle cx="60" cy="52" r="28" fill="url(#biSkin)"/>
          <path d="M60 52 Q62 56 59 57" stroke="#ea580c" stroke-width="1.8" fill="none"/>
          <g id="bilal-glasses">
            <rect x="38" y="44" width="20" height="13" rx="4" fill="#0f172a" stroke="#facc15" stroke-width="1.8"/>
            <rect x="62" y="44" width="20" height="13" rx="4" fill="#0f172a" stroke="#facc15" stroke-width="1.8"/>
            <line x1="57" y1="48" x2="63" y2="48" stroke="#facc15" stroke-width="2"/>
            <polygon points="40,46 45,46 42,54 39,54" fill="#ffffff" opacity="0.6"/>
            <polygon points="64,46 69,46 66,54 63,54" fill="#ffffff" opacity="0.6"/>
          </g>
          ${
            expression === 'blush'
              ? `
              <path d="M52 65 Q60 69 68 65" stroke="#2d132c" stroke-width="2.8" fill="none" stroke-linecap="round"/>
              <ellipse cx="44" cy="58" rx="8" ry="5" fill="#f43f5e" opacity="0.7"/>
              <ellipse cx="76" cy="58" rx="8" ry="5" fill="#f43f5e" opacity="0.7"/>
            `
              : expression === 'scared' || expression === 'running'
              ? `
              <path d="M50 68 Q60 76 70 68 Z" fill="#2d132c"/>
              <path d="M84 44 Q86 38 88 44" stroke="#38bdf8" stroke-width="3" fill="none"/>
              <circle cx="86" cy="48" r="2" fill="#38bdf8"/>
            `
              : expression === 'laugh'
              ? `
              <path d="M48 60 Q60 76 72 60 Z" fill="#2d132c"/>
              <circle cx="44" cy="62" r="4" fill="#fb923c" opacity="0.4"/>
              <circle cx="76" cy="62" r="4" fill="#fb923c" opacity="0.4"/>
            `
              : `
              <path d="M52 64 Q62 68 70 61" stroke="#2d132c" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            `
          }
          <path d="M32 46 C30 22 52 14 62 14 C78 14 90 22 88 46 C82 30 72 26 62 26 C52 26 40 32 32 46 Z" fill="url(#biHair)"/>
          <path d="M46 18 Q55 8 68 14 Q60 22 52 20 Z" fill="url(#biHair)"/>
        </g>
        <!-- Right Arm with Hand -->
        <g id="bilal-arm-right">
          ${
            expression === 'snitch'
              ? `
              <path d="M84 86 Q98 50 90 22" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="90" cy="22" r="8" fill="url(#biSkin)"/>
              <line x1="90" y1="22" x2="90" y2="10" stroke="url(#biSkin)" stroke-width="5" stroke-linecap="round"/>
            `
              : expression === 'scared' || expression === 'running'
              ? `
              <path d="M86 86 Q104 64 98 46" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="98" cy="46" r="7" fill="url(#biSkin)"/>
            `
              : expression === 'bribing'
              ? `
              <path d="M84 86 Q102 82 92 74" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <!-- 200 Dirham Banknote -->
              <rect x="86" y="68" width="24" height="13" rx="2" fill="#86efac" stroke="#16a34a" stroke-width="1.2"/>
              <rect x="88" y="70" width="20" height="9" fill="none" stroke="#22c55e" stroke-width="0.8"/>
            `
              : expression === 'victory'
              ? `
              <path d="M84 86 Q98 68 94 52" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="94" cy="52" r="8" fill="url(#biSkin)"/>
            `
              : `
              <path d="M84 86 Q98 100 94 118" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
              <circle cx="94" cy="118" r="7" fill="url(#biSkin)"/>
            `
          }
        </g>
      </svg>
    `;
  }

  // ============================================================
  // 4. FRAYHA - FULL BODY
  // ============================================================
  static renderFrayha(expression = 'normal') {
    return `
      <svg class="char-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="frSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fff1e6"/><stop offset="70%" stop-color="#fde2e4"/><stop offset="100%" stop-color="#fad2e1"/>
          </radialGradient>
          <radialGradient id="frHair" cx="40%" cy="30%" r="70%">
            <stop offset="0%" stop-color="#5c3d2e"/><stop offset="80%" stop-color="#2d1b14"/><stop offset="100%" stop-color="#140a06"/>
          </radialGradient>
          <linearGradient id="frDress" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f472b6"/><stop offset="70%" stop-color="#ec4899"/><stop offset="100%" stop-color="#db2777"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="174" rx="34" ry="5.5" fill="rgba(0,0,0,0.2)"/>
        <!-- Full Legs & Shoes -->
        <g id="frayha-legs">
          ${
            expression === 'running_chase'
              ? `
              <rect x="38" y="132" width="11" height="32" rx="4" fill="#fed7aa" transform="rotate(24 42 132)"/>
              <rect x="70" y="132" width="11" height="32" rx="4" fill="#fed7aa" transform="rotate(-24 70 132)"/>
              <ellipse cx="44" cy="164" rx="9" ry="6" fill="#f43f5e"/>
              <ellipse cx="78" cy="158" rx="9" ry="6" fill="#f43f5e"/>
            `
              : `
              <rect x="44" y="132" width="11" height="32" rx="4" fill="#fed7aa"/>
              <rect x="66" y="132" width="11" height="32" rx="4" fill="#fed7aa"/>
              <ellipse cx="49" cy="164" rx="9" ry="6" fill="#f43f5e"/>
              <ellipse cx="71" cy="164" rx="9" ry="6" fill="#f43f5e"/>
            `
          }
        </g>
        <!-- Full Pastel Dress -->
        <path d="M36 84 C36 78 84 78 84 84 L92 136 C92 138 28 138 28 136 Z" fill="url(#frDress)"/>
        <circle cx="60" cy="86" r="4.5" fill="#fdf2f8"/>
        <!-- School Tote Bag if Tired -->
        ${
          expression === 'tired'
            ? `<path d="M26 86 L18 116 L34 116 Z" fill="#9333ea" stroke="#6b21a8" stroke-width="1.5"/>`
            : ''
        }
        <!-- Arms -->
        ${
          expression === 'crying'
            ? `
            <path d="M38 86 Q30 72 45 68" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <path d="M82 86 Q90 72 75 68" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
          `
            : expression === 'clapping'
            ? `
            <path d="M38 86 Q50 68 56 60" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <path d="M82 86 Q70 68 64 60" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="60" cy="58" r="8" fill="url(#frSkin)"/>
          `
            : expression === 'shocked_happy'
            ? `
            <path d="M36 86 Q26 70 32 58" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="32" cy="58" r="6" fill="url(#frSkin)"/>
            <path d="M84 86 Q94 70 88 58" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="88" cy="58" r="6" fill="url(#frSkin)"/>
          `
            : expression === 'slipper' || expression === 'running_chase'
            ? `
            <!-- Left hand on hip / forward -->
            <path d="M36 86 Q20 84 28 72" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="28" cy="72" r="6" fill="url(#frSkin)"/>
            <!-- Right arm raised high wielding Moroccan Slipper (البلغة) -->
            <path d="M84 86 Q106 60 96 32" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="96" cy="32" r="6" fill="url(#frSkin)"/>
            <g transform="translate(94, 18) rotate(-35)">
              <path d="M0 0 C14 -8 30 -2 34 10 C36 18 22 22 10 20 C2 18 -4 8 0 0 Z" fill="#facc15" stroke="#b45309" stroke-width="1.6"/>
              <ellipse cx="16" cy="10" rx="9" ry="4.5" fill="#fef08a"/>
              <circle cx="28" cy="10" r="2" fill="#b45309"/>
            </g>
          `
            : expression === 'chocolate'
            ? `
            <path d="M36 86 Q46 76 52 74" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="52" cy="74" r="5" fill="url(#frSkin)"/>
            <path d="M84 86 Q74 76 68 74" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="68" cy="74" r="5" fill="url(#frSkin)"/>
            <!-- Chocolate Bar -->
            <rect x="46" y="66" width="28" height="16" rx="3" fill="#78350f" stroke="#451a03" stroke-width="1.5"/>
            <rect x="46" y="74" width="28" height="8" fill="#e2e8f0"/>
          `
            : `
            <path d="M36 86 Q20 70 24 54" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="24" cy="54" r="6.5" fill="url(#frSkin)"/>
            <path d="M84 86 Q100 70 96 54" stroke="url(#frDress)" stroke-width="12" stroke-linecap="round"/>
            <circle cx="96" cy="54" r="6.5" fill="url(#frSkin)"/>
          `
        }
        <!-- Head, Face & Features -->
        <g id="frayha-head">
          <circle cx="34" cy="52" r="6.5" fill="url(#frSkin)"/>
          <circle cx="86" cy="52" r="6.5" fill="url(#frSkin)"/>
          <circle cx="60" cy="52" r="27" fill="url(#frSkin)"/>
          <circle cx="45" cy="57" r="5" fill="#f472b6" opacity="0.6"/>
          <circle cx="75" cy="57" r="5" fill="#f472b6" opacity="0.6"/>
          <path d="M60 51 Q62 55 59 56" stroke="#f472b6" stroke-width="1.6" fill="none"/>
          ${
            expression === 'tired'
              ? `
              <path d="M42 49 Q48 53 54 49" stroke="#1e272e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M66 49 Q72 53 78 49" stroke="#1e272e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <ellipse cx="60" cy="65" rx="4" ry="5" fill="#2d132c"/>
              <ellipse cx="70" cy="62" rx="6" ry="4" fill="#e2e8f0" opacity="0.8"/>
            `
              : expression === 'shocked_happy'
              ? `
              <ellipse cx="48" cy="49" rx="6" ry="7.5" fill="#1e272e"/>
              <ellipse cx="72" cy="49" rx="6" ry="7.5" fill="#1e272e"/>
              <circle cx="46" cy="46" r="2.5" fill="#fff"/>
              <circle cx="70" cy="46" r="2.5" fill="#fff"/>
              <ellipse cx="60" cy="65" rx="5" ry="7" fill="#db2777"/>
            `
              : expression === 'angry' || expression === 'slipper' || expression === 'running_chase'
              ? `
              <line x1="42" y1="41" x2="54" y2="45" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>
              <line x1="66" y1="45" x2="78" y2="41" stroke="#451a03" stroke-width="3" stroke-linecap="round"/>
              <ellipse cx="48" cy="50" rx="5" ry="6" fill="#1e272e"/>
              <ellipse cx="72" cy="50" rx="5" ry="6" fill="#1e272e"/>
              <path d="M48 62 Q60 72 72 62 Z" fill="#881337"/>
            `
              : expression === 'chocolate'
              ? `
              <ellipse cx="48" cy="49" rx="5.5" ry="7" fill="#1e272e"/>
              <ellipse cx="72" cy="49" rx="5.5" ry="7" fill="#1e272e"/>
              <circle cx="46" cy="46" r="2.4" fill="#fff"/>
              <circle cx="70" cy="46" r="2.4" fill="#fff"/>
              <path d="M51 63 Q60 74 69 63" stroke="#831843" stroke-width="2.8" fill="#fda4af" stroke-linecap="round"/>
            `
              : expression === 'crying'
              ? `
              <line x1="42" y1="46" x2="54" y2="46" stroke="#2d132c" stroke-width="3" stroke-linecap="round"/>
              <line x1="66" y1="46" x2="78" y2="46" stroke="#2d132c" stroke-width="3" stroke-linecap="round"/>
              <path d="M46 50 Q44 68 32 96" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.85"/>
              <path d="M74 50 Q76 68 88 96" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round" opacity="0.85"/>
              <path d="M50 68 Q60 60 70 68" stroke="#831843" stroke-width="3" fill="none" stroke-linecap="round"/>
            `
              : expression === 'laugh'
              ? `
              <path d="M42 47 Q48 41 54 47" stroke="#1e272e" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M66 47 Q72 41 78 47" stroke="#1e272e" stroke-width="3" fill="none" stroke-linecap="round"/>
              <path d="M49 60 Q60 76 71 60 Z" fill="#db2777"/>
            `
              : `
              <ellipse cx="48" cy="49" rx="5.5" ry="7" fill="#1e272e"/>
              <ellipse cx="72" cy="49" rx="5.5" ry="7" fill="#1e272e"/>
              <circle cx="46" cy="46" r="2.4" fill="#fff"/>
              <circle cx="70" cy="46" r="2.4" fill="#fff"/>
              <circle cx="50" cy="52" r="1.3" fill="#fff"/>
              <circle cx="74" cy="52" r="1.3" fill="#fff"/>
              <path d="M51 63 Q60 74 69 63" stroke="#831843" stroke-width="2.8" fill="#fda4af" stroke-linecap="round"/>
            `
          }
          <path d="M30 46 C28 18 52 14 62 14 C78 14 92 18 90 46 C84 28 72 26 62 26 C52 26 40 28 30 46 Z" fill="url(#frHair)"/>
          <path d="M22 45 C15 55 18 78 28 82 C24 72 25 56 30 48 Z" fill="url(#frHair)"/>
          <path d="M98 45 C105 55 102 78 92 82 C96 72 95 56 90 48 Z" fill="url(#frHair)"/>
          <circle cx="32" cy="28" r="4.5" fill="#f43f5e"/>
          <circle cx="88" cy="28" r="4.5" fill="#f43f5e"/>
        </g>
      </svg>
    `;
  }

  // ============================================================
  // 5. THE TEACHER - FULL BODY
  // ============================================================
  static renderTeacher(expression = 'normal') {
    return `
      <svg class="char-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="teaSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#f97316"/>
          </radialGradient>
          <linearGradient id="teaSuit" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#1e293b"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="174" rx="36" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Full Legs & Shoes -->
        <rect x="42" y="132" width="13" height="30" rx="4" fill="#334155"/>
        <rect x="65" y="132" width="13" height="30" rx="4" fill="#334155"/>
        <ellipse cx="48" cy="164" rx="9" ry="5.5" fill="#0f172a"/>
        <ellipse cx="72" cy="164" rx="9" ry="5.5" fill="#0f172a"/>
        <!-- Full Suit Torso -->
        <path d="M34 84 C34 76 86 76 86 84 L90 136 C90 138 30 138 30 136 Z" fill="url(#teaSuit)"/>
        <polygon points="52,84 68,84 60,105" fill="#ffffff"/>
        <polygon points="58,90 62,90 64,115 60,120 56,115" fill="#ef4444"/>
        <!-- Left Arm with Exam Sheets -->
        <path d="M34 86 Q20 98 26 118" stroke="url(#teaSuit)" stroke-width="14" stroke-linecap="round"/>
        <rect x="15" y="112" width="18" height="24" rx="2" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
        <line x1="18" y1="118" x2="30" y2="118" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="18" y1="124" x2="30" y2="124" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Head, Mustache & Glasses -->
        <circle cx="34" cy="52" r="7" fill="url(#teaSkin)"/>
        <circle cx="86" cy="52" r="7" fill="url(#teaSkin)"/>
        <circle cx="60" cy="52" r="28" fill="url(#teaSkin)"/>
        <path d="M48 64 Q60 68 72 64 Q60 61 48 64 Z" fill="#334155"/>
        <path d="M60 50 Q63 56 59 58" stroke="#ea580c" stroke-width="2" fill="none"/>
        ${
          expression === 'shock'
            ? `
            <ellipse cx="46" cy="46" rx="9" ry="11" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
            <ellipse cx="74" cy="46" rx="9" ry="11" fill="#fff" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="46" cy="46" r="3.5" fill="#0f172a"/>
            <circle cx="74" cy="46" r="3.5" fill="#0f172a"/>
            <rect x="36" y="45" width="20" height="15" rx="3" fill="none" stroke="#ca8a04" stroke-width="2"/>
            <rect x="64" y="45" width="20" height="15" rx="3" fill="none" stroke="#ca8a04" stroke-width="2"/>
            <line x1="56" y1="52" x2="64" y2="52" stroke="#ca8a04" stroke-width="2"/>
            <ellipse cx="60" cy="74" rx="7" ry="10" fill="#2d132c"/>
          `
            : `
            <rect x="38" y="44" width="18" height="13" rx="3" fill="rgba(255,255,255,0.4)" stroke="#ca8a04" stroke-width="2"/>
            <rect x="64" y="44" width="18" height="13" rx="3" fill="rgba(255,255,255,0.4)" stroke="#ca8a04" stroke-width="2"/>
            <line x1="56" y1="50" x2="64" y2="50" stroke="#ca8a04" stroke-width="2"/>
            <circle cx="47" cy="50" r="3" fill="#1e293b"/>
            <circle cx="73" cy="50" r="3" fill="#1e293b"/>
            <line x1="52" y1="70" x2="68" y2="70" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
          `
        }
        <path d="M30 48 C28 32 38 25 45 28 C40 38 32 46 30 48 Z" fill="#64748b"/>
        <path d="M90 48 C92 32 82 25 75 28 C80 38 88 46 90 48 Z" fill="#64748b"/>
        <!-- Right arm pointing angrily -->
        <path d="M86 86 Q105 80 114 65" stroke="url(#teaSuit)" stroke-width="14" stroke-linecap="round"/>
        <circle cx="114" cy="65" r="7" fill="url(#teaSkin)"/>
      </svg>
    `;
  }

  // ============================================================
  // 6. TAHA - FULL BODY
  // ============================================================
  static renderTaha(expression = 'normal') {
    return `
      <svg class="char-svg" viewBox="0 0 120 180" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="taSkin" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#fed7aa"/><stop offset="100%" stop-color="#ea580c"/>
          </radialGradient>
          <linearGradient id="taHoodie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/>
          </linearGradient>
        </defs>
        <ellipse cx="60" cy="174" rx="36" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Full Legs & Sneakers -->
        <g id="taha-legs">
          ${
            expression === 'running'
              ? `
              <rect x="36" y="132" width="13" height="30" rx="4" fill="#1e293b" transform="rotate(22 42 132)"/>
              <rect x="70" y="132" width="13" height="30" rx="4" fill="#1e293b" transform="rotate(-24 70 132)"/>
              <ellipse cx="44" cy="164" rx="9" ry="5.5" fill="#f97316"/>
              <ellipse cx="78" cy="158" rx="9" ry="5.5" fill="#f97316"/>
            `
              : `
              <rect x="42" y="132" width="13" height="30" rx="4" fill="#1e293b"/>
              <rect x="65" y="132" width="13" height="30" rx="4" fill="#1e293b"/>
              <ellipse cx="48" cy="164" rx="9" ry="5.5" fill="#f97316"/>
              <ellipse cx="72" cy="164" rx="9" ry="5.5" fill="#f97316"/>
            `
          }
        </g>
        <!-- Full Torso & Hoodie -->
        <path d="M34 84 C34 78 86 78 86 84 L88 136 C88 140 32 140 32 136 Z" fill="url(#taHoodie)"/>
        <!-- Head -->
        <circle cx="60" cy="52" r="28" fill="url(#taSkin)"/>
        ${
          expression === 'panicked' || expression === 'running'
            ? `
            <ellipse cx="48" cy="48" rx="7" ry="9" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
            <ellipse cx="72" cy="48" rx="7" ry="9" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>
            <circle cx="48" cy="48" r="3" fill="#1e293b"/>
            <circle cx="72" cy="48" r="3" fill="#1e293b"/>
            <ellipse cx="60" cy="68" rx="8" ry="11" fill="#2d132c"/>
            <path d="M84 42 Q88 34 92 40" stroke="#38bdf8" stroke-width="3" fill="none" stroke-linecap="round"/>
          `
            : expression === 'innocent'
            ? `
            <ellipse cx="48" cy="49" rx="5" ry="6" fill="#1e293b"/>
            <ellipse cx="72" cy="49" rx="5" ry="6" fill="#1e293b"/>
            <circle cx="46" cy="47" r="1.8" fill="#fff"/>
            <circle cx="70" cy="47" r="1.8" fill="#fff"/>
            <path d="M44 42 Q50 38 54 42" stroke="#ea580c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M66 42 Q70 38 76 42" stroke="#ea580c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M52 65 Q60 70 68 65" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          `
            : expression === 'relieved'
            ? `
            <path d="M44 48 Q50 42 56 48" stroke="#1e293b" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M64 48 Q70 42 76 48" stroke="#1e293b" stroke-width="2.8" fill="none" stroke-linecap="round"/>
            <path d="M50 63 Q60 74 70 63 Z" fill="#2d132c"/>
            <path d="M84 44 Q86 38 88 44" stroke="#38bdf8" stroke-width="3" fill="none"/>
          `
            : `
            <circle cx="48" cy="50" r="4.5" fill="#1e293b"/>
            <circle cx="72" cy="50" r="4.5" fill="#1e293b"/>
            <path d="M52 64 Q60 74 70 64" stroke="#1e293b" stroke-width="2.8" fill="#fff" stroke-linecap="round"/>
          `
        }
        <!-- Sporty Backwards Cap -->
        <path d="M32 40 C32 20 50 16 60 16 C75 16 88 20 88 40 Z" fill="#0f172a"/>
        <rect x="45" y="38" width="30" height="7" rx="3" fill="#f97316"/>
        <!-- Arms -->
        ${
          expression === 'panicked' || expression === 'running'
            ? `
            <path d="M34 86 Q14 62 20 44" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="20" cy="44" r="6.5" fill="url(#taSkin)"/>
            <path d="M86 86 Q106 62 100 44" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="100" cy="44" r="6.5" fill="url(#taSkin)"/>
          `
            : expression === 'innocent'
            ? `
            <path d="M34 86 Q22 84 38 76" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="38" cy="76" r="6.5" fill="url(#taSkin)"/>
            <path d="M86 86 Q98 84 82 76" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="82" cy="76" r="6.5" fill="url(#taSkin)"/>
          `
            : `
            <path d="M34 86 Q18 72 24 58" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="24" cy="58" r="6.5" fill="url(#taSkin)"/>
            <path d="M86 86 Q102 72 96 58" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
            <circle cx="96" cy="58" r="6.5" fill="url(#taSkin)"/>
          `
        }
      </svg>
    `;
  }

  // ============================================================
  // 7. BILAL'S LUXURIOUS PORSCHE SPORTS CAR (GUARDS RED 911 GT3)
  // ============================================================
  static renderPorsche(options = {}) {
    const { state = 'alone', lightsOn = true, wheelsSpinning = false, exhaustSmoke = false } = options;
    return `
      <svg class="porsche-svg ${wheelsSpinning ? 'wheels-active' : ''}" viewBox="0 0 350 140" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="poGuardsRed" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#fb7185"/>
            <stop offset="25%" stop-color="#f43f5e"/>
            <stop offset="60%" stop-color="#e11d48"/>
            <stop offset="90%" stop-color="#be123c"/>
            <stop offset="100%" stop-color="#881337"/>
          </linearGradient>

          <linearGradient id="poHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.85)"/>
            <stop offset="30%" stop-color="rgba(255,255,255,0.4)"/>
            <stop offset="70%" stop-color="rgba(255,255,255,0.7)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
          </linearGradient>

          <linearGradient id="poTintGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#64748b" stop-opacity="0.85"/>
            <stop offset="40%" stop-color="#334155" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
          </linearGradient>

          <linearGradient id="poCarbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#334155"/>
            <stop offset="100%" stop-color="#090d16"/>
          </linearGradient>

          <linearGradient id="poGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="50%" stop-color="#eab308"/>
            <stop offset="100%" stop-color="#854d0e"/>
          </linearGradient>

          <radialGradient id="poBrakeDisc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#94a3b8"/>
            <stop offset="75%" stop-color="#cbd5e1"/>
            <stop offset="100%" stop-color="#64748b"/>
          </radialGradient>
        </defs>

        <!-- 3D Ground Shadow Under Vehicle -->
        <ellipse cx="175" cy="132" rx="155" ry="7" fill="rgba(0,0,0,0.35)"/>

        <!-- Dual Sport Center Exhaust Pipes -->
        <g id="po-exhaust">
          <rect x="306" y="112" width="16" height="7" rx="3.5" fill="#94a3b8" stroke="#334155" stroke-width="1.2"/>
          <circle cx="310" cy="115.5" r="2.2" fill="#0f172a"/>
          <circle cx="318" cy="115.5" r="2.2" fill="#0f172a"/>
          ${
            exhaustSmoke
              ? `
            <g class="porsche-exhaust-puff">
              <circle cx="328" cy="114" r="5" fill="#f87171" opacity="0.6"/>
              <circle cx="338" cy="111" r="8" fill="#e2e8f0" opacity="0.5"/>
              <circle cx="346" cy="108" r="10" fill="#cbd5e1" opacity="0.35"/>
            </g>
          `
              : ''
          }
        </g>

        <!-- Carbon Aerodynamic Rear Diffuser -->
        <path d="M292 110 L318 110 L316 118 L290 118 Z" fill="url(#poCarbon)"/>
        <line x1="298" y1="110" x2="298" y2="117" stroke="#475569" stroke-width="1.5"/>
        <line x1="304" y1="110" x2="304" y2="117" stroke="#475569" stroke-width="1.5"/>

        <!-- Front Aerodynamic Splitter Lip -->
        <path d="M18 108 L48 108 L46 114 L15 114 Z" fill="url(#poCarbon)"/>

        <!-- MAIN PORSCHE AERODYNAMIC CHASSIS (Iconic 911 GT3 Flyline) -->
        <path d="M18 106
                 C18 100 24 92 46 90
                 C68 88 84 88 98 74
                 C118 56 150 42 196 42
                 C246 42 272 55 288 74
                 C300 82 314 86 320 90
                 C326 96 326 102 320 106
                 L294 106
                 C290 86 248 86 244 106
                 L136 106
                 C132 86 90 86 86 106
                 L28 106
                 C20 106 18 104 18 106 Z"
                 fill="url(#poGuardsRed)" stroke="#881337" stroke-width="1.6"/>

        <!-- Front Lower Air Intake Grille -->
        <path d="M22 98 L56 98 C58 104 54 107 48 107 L24 107 Z" fill="#090d16"/>
        <line x1="28" y1="102" x2="52" y2="102" stroke="#334155" stroke-width="1.2"/>

        <!-- Aerodynamic GT Rear Wing Spoiler -->
        <g id="po-gt-wing">
          <line x1="286" y1="70" x2="284" y2="78" stroke="#0f172a" stroke-width="3"/>
          <line x1="300" y1="68" x2="298" y2="76" stroke="#0f172a" stroke-width="3"/>
          <path d="M276 64 L318 60 C322 60 324 64 321 68 L284 72 Z" fill="#4c0519" stroke="#0f172a" stroke-width="1.2"/>
          <polygon points="274,58 278,58 280,68 274,68" fill="#1e293b"/>
          <polygon points="318,54 322,54 323,64 317,64" fill="#1e293b"/>
        </g>

        <!-- Driver & Passenger Inside Cockpit -->
        <!-- Driver Bilal -->
        <g id="po-bilal-driver" transform="translate(142, 45)">
          <circle cx="20" cy="18" r="14" fill="#fed7aa"/>
          <path d="M6 14 C4 4 16 0 24 0 C32 0 38 4 36 14 C32 6 26 4 20 4 C14 4 8 8 6 14 Z" fill="#0f172a"/>
          <rect x="14" y="13" width="11" height="8" rx="2.5" fill="#0f172a" stroke="#facc15" stroke-width="1.2"/>
          <polygon points="16,14 19,14 17,19 15,19" fill="#ffffff" opacity="0.6"/>
          <path d="M18 24 Q22 27 26 24" stroke="#ea580c" stroke-width="1.5" fill="none"/>
          <path d="M8 28 C8 24 34 24 34 28 L34 38 L4 38 Z" fill="#0284c7"/>
          <ellipse cx="38" cy="28" rx="3.5" ry="4.5" fill="#fed7aa"/>
          <path d="M37 20 Q42 28 37 36" stroke="#0f172a" stroke-width="3" fill="none"/>
        </g>

        ${
          state === 'bilal_and_farah'
            ? `
          <!-- Passenger Farah Smiling Beside Bilal -->
          <g id="po-farah-passenger" transform="translate(182, 47)">
            <circle cx="16" cy="16" r="12" fill="#fff1e6"/>
            <path d="M4 14 C2 4 12 0 18 0 C24 0 30 4 28 14 C24 6 20 4 16 4 C12 4 6 8 4 14 Z" fill="#2d1b14"/>
            <ellipse cx="18" cy="14" rx="2.8" ry="3.5" fill="#1e272e"/>
            <circle cx="17.5" cy="13" r="1" fill="#fff"/>
            <circle cx="19" cy="18" r="2.5" fill="#f472b6" opacity="0.5"/>
            <path d="M16 21 Q19 24 22 21" stroke="#db2777" stroke-width="1.5" fill="none"/>
            <path d="M6 26 C6 22 26 22 26 26 L26 34 L6 34 Z" fill="#ec4899"/>
            <circle cx="24" cy="10" r="3" fill="#f43f5e"/>
          </g>
        `
            : ''
        }

        <!-- Cabin Window Frame & Flush Aerodynamic Pillars -->
        <path d="M102 74 C122 54 158 45 198 45 C242 45 264 57 276 74 Z" fill="none" stroke="#0f172a" stroke-width="3.5"/>

        <!-- Tinted Glass Canopy with Luxury Reflections -->
        <path d="M104 73 C124 55 158 47 196 47 L196 73 Z" fill="url(#poTintGlass)"/>
        <path d="M201 47 C238 47 258 57 272 73 L201 73 Z" fill="url(#poTintGlass)"/>

        <!-- High-Gloss White Windshield Glare Stripe -->
        <polygon points="126,50 148,48 116,72 108,72" fill="url(#poHighlight)" opacity="0.55"/>
        <polygon points="214,48 232,48 244,72 232,72" fill="url(#poHighlight)" opacity="0.4"/>

        <!-- Aerodynamic Sport Side Mirror with Amber LED Strip -->
        <g id="po-mirror">
          <path d="M116 75 C104 70 102 78 114 80 Z" fill="#be123c" stroke="#881337" stroke-width="1"/>
          <line x1="106" y1="76" x2="114" y2="76" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round"/>
        </g>

        <!-- Door Panel Contour & Flush Recessed Handle -->
        <path d="M136 78 L134 104" stroke="#881337" stroke-width="1.4" stroke-linecap="round"/>
        <rect x="174" y="80" width="18" height="3.5" rx="1.5" fill="#9f1239" stroke="#4c0519" stroke-width="0.8"/>
        <!-- Side Intake Vent (Porsche Carrera / Turbo Stance) -->
        <path d="M232 86 C228 92 228 98 230 104" stroke="#881337" stroke-width="2.5" fill="none" stroke-linecap="round"/>

        <!-- Upper Shoulder High-Gloss Reflection Line -->
        <path d="M48 88 C90 85 180 74 286 78" stroke="url(#poHighlight)" stroke-width="2.2" stroke-linecap="round" fill="none"/>

        <!-- Iconic 4-Point Crystal LED Headlights -->
        <g id="po-headlights">
          <ellipse cx="45" cy="85" rx="15" ry="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" transform="rotate(-15 45 85)"/>
          ${
            lightsOn
              ? `
            <rect x="38" y="81" width="3.2" height="3.2" rx="0.8" fill="#38bdf8" filter="drop-shadow(0 0 4px #0284c7)"/>
            <rect x="46" y="79" width="3.2" height="3.2" rx="0.8" fill="#38bdf8" filter="drop-shadow(0 0 4px #0284c7)"/>
            <rect x="40" y="88" width="3.2" height="3.2" rx="0.8" fill="#38bdf8" filter="drop-shadow(0 0 4px #0284c7)"/>
            <rect x="48" y="86" width="3.2" height="3.2" rx="0.8" fill="#38bdf8" filter="drop-shadow(0 0 4px #0284c7)"/>
            <circle cx="44" cy="84" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 6px #38bdf8)"/>
            <polygon points="35,84 0,72 0,102" fill="rgba(56,189,248,0.22)" filter="blur(3px)"/>
          `
              : `<circle cx="44" cy="84" r="2.5" fill="#64748b"/>`
          }
        </g>

        <!-- Gold Porsche Hood Crest -->
        <g id="po-crest">
          <polygon points="33,93 37,91 37,97 33,99 29,97 29,91" fill="url(#poGold)" stroke="#b45309" stroke-width="0.8"/>
          <line x1="33" y1="92" x2="33" y2="98" stroke="#dc2626" stroke-width="0.7"/>
        </g>

        <!-- Red Full-Width LED Taillight Strip -->
        <path d="M304 88 L321 91 C324 93 323 96 320 97 L304 94 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="1"/>
        <line x1="305" y1="91" x2="320" y2="94" stroke="#ffffff" stroke-width="1.2" opacity="0.85"/>

        <!-- ================= WHEELS ================= -->
        <!-- Front Wheel (Center at 111, 106) -->
        <g id="po-front-wheel" class="porsche-wheel" transform="translate(111, 106)">
          <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#090d16" stroke-width="3"/>
          <circle cx="0" cy="0" r="21" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="0" cy="0" r="16" fill="url(#poBrakeDisc)"/>
          <path d="M-12 -10 A14 14 0 0 1 8 -13" stroke="#e11d48" stroke-width="4.5" stroke-linecap="round" fill="none"/>
          <g class="wheel-rim-spokes">
            <line x1="0" y1="0" x2="0" y2="-17" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="16" y2="-5" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="10" y2="14" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="-10" y2="14" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="-16" y2="-5" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
          </g>
          <circle cx="0" cy="0" r="5" fill="#facc15" stroke="#854d0e" stroke-width="1"/>
          <circle cx="0" cy="0" r="2" fill="#0f172a"/>
        </g>

        <!-- Rear Wheel (Center at 269, 106) -->
        <g id="po-rear-wheel" class="porsche-wheel" transform="translate(269, 106)">
          <circle cx="0" cy="0" r="23" fill="#1e293b" stroke="#090d16" stroke-width="3"/>
          <circle cx="0" cy="0" r="21" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="0" cy="0" r="16" fill="url(#poBrakeDisc)"/>
          <path d="M-12 -10 A14 14 0 0 1 8 -13" stroke="#e11d48" stroke-width="4.5" stroke-linecap="round" fill="none"/>
          <g class="wheel-rim-spokes">
            <line x1="0" y1="0" x2="0" y2="-17" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="16" y2="-5" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="10" y2="14" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="-10" y2="14" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
            <line x1="0" y1="0" x2="-16" y2="-5" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
          </g>
          <circle cx="0" cy="0" r="5" fill="#facc15" stroke="#854d0e" stroke-width="1"/>
          <circle cx="0" cy="0" r="2" fill="#0f172a"/>
        </g>

        <!-- Wheel Arch Moldings -->
        <path d="M86 106 A25 25 0 0 1 136 106" stroke="#881337" stroke-width="2" fill="none"/>
        <path d="M244 106 A25 25 0 0 1 294 106" stroke="#881337" stroke-width="2" fill="none"/>
      </svg>
    `;
  }

  // ============================================================
  // 8. THE MARRAKECH DONKEY CART (كرويلة مراكش - COMEDIC TWIST)
  // ============================================================
  static renderDonkeyCart() {
    return `
      <svg class="donkey-cart-svg" viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cartWood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#b45309"/>
            <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>
          <linearGradient id="donkeyGray" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#94a3b8"/>
            <stop offset="100%" stop-color="#64748b"/>
          </linearGradient>
        </defs>
        <!-- Ground Shadow -->
        <ellipse cx="100" cy="122" rx="90" ry="6" fill="rgba(0,0,0,0.25)"/>

        <!-- Wooden Cart -->
        <g id="wooden-cart">
          <rect x="75" y="70" width="85" height="28" rx="4" fill="url(#cartWood)" stroke="#451a03" stroke-width="2"/>
          <line x1="75" y1="84" x2="160" y2="84" stroke="#451a03" stroke-width="1.5"/>
          <line x1="102" y1="70" x2="102" y2="98" stroke="#451a03" stroke-width="1.5"/>
          <line x1="132" y1="70" x2="132" y2="98" stroke="#451a03" stroke-width="1.5"/>
          
          <!-- Baskets of Fresh Moroccan Mint & Oranges -->
          <path d="M80 70 Q95 50 115 70 Z" fill="#16a34a"/>
          <circle cx="95" cy="58" r="4" fill="#22c55e"/>
          <circle cx="104" cy="54" r="5" fill="#4ade80"/>
          <circle cx="88" cy="62" r="4.5" fill="#22c55e"/>
          
          <rect x="120" y="60" width="36" height="15" rx="3" fill="#d97706" stroke="#92400e" stroke-width="1.2"/>
          <circle cx="127" cy="58" r="5.5" fill="#f97316"/>
          <circle cx="136" cy="56" r="6" fill="#f97316"/>
          <circle cx="145" cy="57" r="5.5" fill="#f97316"/>
          <circle cx="132" cy="52" r="5" fill="#ea580c"/>
          <circle cx="140" cy="51" r="5" fill="#ea580c"/>

          <!-- Cart Wooden Shaft -->
          <line x1="82" y1="84" x2="48" y2="76" stroke="#92400e" stroke-width="4" stroke-linecap="round"/>

          <!-- Large Wooden Spoke Cartwheel -->
          <g id="cartwheel" transform="translate(118, 102)">
            <circle cx="0" cy="0" r="18" fill="#451a03" stroke="#1e293b" stroke-width="2.5"/>
            <circle cx="0" cy="0" r="14" fill="none" stroke="#b45309" stroke-width="2"/>
            <circle cx="0" cy="0" r="4.5" fill="#ffd166"/>
            <line x1="0" y1="-14" x2="0" y2="14" stroke="#fcd34d" stroke-width="2"/>
            <line x1="-14" y1="0" x2="14" y2="0" stroke="#fcd34d" stroke-width="2"/>
            <line x1="-10" y1="-10" x2="10" y2="10" stroke="#fcd34d" stroke-width="2"/>
            <line x1="-10" y1="10" x2="10" y2="-10" stroke="#fcd34d" stroke-width="2"/>
          </g>
        </g>

        <!-- Cute Cartoon Donkey -->
        <g id="cute-donkey">
          <rect x="52" y="88" width="7" height="32" rx="3" fill="#475569"/>
          <rect x="52" y="116" width="9" height="4" rx="1.5" fill="#0f172a"/>
          <rect x="22" y="88" width="7" height="32" rx="3" fill="#64748b"/>
          <rect x="20" y="116" width="9" height="4" rx="1.5" fill="#0f172a"/>
          <ellipse cx="42" cy="80" rx="22" ry="14" fill="url(#donkeyGray)"/>
          <ellipse cx="40" cy="84" rx="16" ry="8" fill="#e2e8f0" opacity="0.4"/>
          <path d="M64 78 Q72 86 70 96" stroke="#475569" stroke-width="3" fill="none"/>
          <circle cx="70" cy="98" r="4" fill="#0f172a"/>
          <path d="M26 80 L18 56 L30 52 L36 76 Z" fill="url(#donkeyGray)"/>
          <circle cx="18" cy="50" r="13" fill="url(#donkeyGray)"/>
          <ellipse cx="10" cy="54" rx="8" ry="6" fill="#f1f5f9"/>
          <circle cx="8" cy="53" r="1.5" fill="#0f172a"/>
          <circle cx="11" cy="55" r="1.5" fill="#0f172a"/>
          <path d="M8 57 Q11 60 14 57" stroke="#475569" stroke-width="1.2" fill="none"/>
          <circle cx="19" cy="46" r="4.5" fill="#ffffff" stroke="#1e293b" stroke-width="1.2"/>
          <circle cx="18" cy="46" r="2.5" fill="#1e293b"/>
          <circle cx="17" cy="44.5" r="1" fill="#ffffff"/>
          <path d="M18 40 C14 24 16 18 20 18 C24 18 24 26 22 40 Z" fill="#64748b"/>
          <path d="M19 38 C17 26 18 22 20 22 C22 22 22 28 20 38 Z" fill="#fda4af"/>
          <path d="M26 42 C28 26 32 20 36 22 C38 24 36 32 30 42 Z" fill="#64748b"/>
          <path d="M10 50 L22 44 L20 54 Z" fill="none" stroke="#dc2626" stroke-width="2"/>
          <circle cx="16" cy="48" r="2" fill="#ffd166"/>
        </g>
      </svg>
    `;
  }
}

/* ============================================================
   SCENE CONTROLLERS
   ============================================================ */

// SCENE 1: OMAR VS BILAL CARTOON FIGHT
class CartoonFightController {
  constructor() {
    this.omarBox = document.getElementById('char-box-omar');
    this.bilalBox = document.getElementById('char-box-bilal');
    this.frayhaBox = document.getElementById('char-box-frayha');

    this.omarBubble = document.getElementById('omar-bubble');
    this.bilalBubble = document.getElementById('bilal-bubble');
    this.frayhaBubble = document.getElementById('frayha-bubble');
    this.bilalBubbleRoast = document.getElementById('bilal-bubble-roast');

    this.dustCloud = document.getElementById('massive-dust-cloud');
    this.animeSpeedLines = document.getElementById('anime-speed-lines');

    this.comicBurstPow = document.getElementById('burst-pow');
    this.comicBurstBoom = document.getElementById('burst-boom');
    this.comicBurstWow = document.getElementById('burst-wow');
    this.dizzyStars = document.getElementById('dizzy-stars-omar');
    this.fightResultBox = document.getElementById('fight-result-box');
    this.ring = document.querySelector('.cartoon-ring');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;
    window.soundEngine.stopBrawlLoop();

    const omarWrap = document.getElementById('omar-svg-wrap');
    if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('normal');

    const bilalWrap = document.getElementById('bilal-svg-wrap');
    if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');

    const frayhaWrap = document.getElementById('frayha-svg-wrap');
    if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('cheering');

    if (this.omarBox) {
      this.omarBox.style.display = 'flex';
      this.omarBox.style.animation = 'characterIdleBounce 2.4s ease-in-out infinite';
      this.omarBox.style.transform = 'translate(0, 0) rotate(0deg)';
      this.omarBox.style.opacity = '1';
    }
    if (this.bilalBox) {
      this.bilalBox.style.display = 'flex';
      this.bilalBox.style.animation = 'characterIdleBounce 2.4s ease-in-out infinite 0.3s';
      this.bilalBox.style.transform = 'translate(0, 0) rotate(0deg)';
      this.bilalBox.style.opacity = '1';
    }
    if (this.frayhaBox) {
      this.frayhaBox.classList.remove('active');
      this.frayhaBox.style.display = 'none';
    }

    if (this.omarBubble) this.omarBubble.classList.remove('active');
    if (this.bilalBubble) this.bilalBubble.classList.remove('active');
    if (this.frayhaBubble) this.frayhaBubble.classList.remove('active');
    if (this.bilalBubbleRoast) this.bilalBubbleRoast.classList.remove('active');

    if (this.dustCloud) {
      this.dustCloud.classList.remove('active', 'vanish');
      this.dustCloud.style.display = 'none';
      this.dustCloud.style.opacity = '0';
    }
    if (this.animeSpeedLines) this.animeSpeedLines.classList.remove('active');
    if (this.fightResultBox) this.fightResultBox.classList.remove('show');
    if (this.dizzyStars) this.dizzyStars.style.display = 'none';
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  showBurst(el) {
    if (!el) return;
    el.style.display = 'block';
    el.style.animation = 'comicPopIn 0.5s forwards';
    this.schedule(() => { el.style.display = 'none'; }, 600);
  }

  startFightTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    this.omarBox.style.animation = 'characterTauntOmar 1.8s ease-in-out infinite';
    this.bilalBox.style.animation = 'characterTauntBilal 1.8s ease-in-out infinite 0.2s';

    this.schedule(() => {
      this.omarBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 700);

    this.schedule(() => {
      this.omarBubble.classList.remove('active');
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 2800);

    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.omarBox.style.animation = 'omarChargeToCenter 0.55s ease-in forwards';
      this.bilalBox.style.animation = 'bilalChargeToCenter 0.55s ease-in forwards';
      window.soundEngine.playTap();
    }, 4700);

    this.schedule(() => {
      this.omarBox.style.opacity = '0';
      this.bilalBox.style.opacity = '0';
      this.animeSpeedLines.classList.add('active');
      this.ring.style.animation = 'violentGroundShake 0.25s infinite ease-in-out';
      window.soundEngine.playAnimeClash();
      window.soundEngine.startRapidBrawlLoop(3800);
      this.dustCloud.style.display = 'block';
      this.dustCloud.classList.add('active');
    }, 5250);

    this.schedule(() => this.showBurst(this.comicBurstPow), 5900);
    this.schedule(() => this.showBurst(this.comicBurstWow), 6700);
    this.schedule(() => {
      this.showBurst(this.comicBurstBoom);
      window.soundEngine.playBoom();
    }, 7600);

    this.schedule(() => {
      window.soundEngine.playSilence();
      this.ring.style.animation = 'none';
      this.animeSpeedLines.classList.remove('active');
      this.dustCloud.classList.add('vanish');
    }, 9000);

    this.schedule(() => {
      this.dustCloud.style.display = 'none';
      const omarWrap = document.getElementById('omar-svg-wrap');
      if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('defeated');
      this.omarBox.style.opacity = '1';
      this.omarBox.style.animation = 'omarDefeatedFloor 0.9s forwards';
      if (this.dizzyStars) this.dizzyStars.style.display = 'block';
      window.soundEngine.playSlideFall();

      const bilalWrap = document.getElementById('bilal-svg-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('victory');
      this.bilalBox.style.opacity = '1';
      this.bilalBox.style.animation = 'bilalVictoryEmergence 0.9s forwards';
    }, 10000);

    this.schedule(() => {
      this.frayhaBox.style.display = 'flex';
      this.frayhaBox.classList.add('active');
      this.frayhaBubble.classList.add('active');
      window.soundEngine.playCuteCheer();
    }, 11000);

    this.schedule(() => {
      this.bilalBubbleRoast.classList.add('active');
      window.soundEngine.playVictoryFanfare();
    }, 12600);

    this.schedule(() => {
      this.fightResultBox.classList.add('show');
    }, 14200);
  }
}

// SCENE 2: CLASSROOM EXAM CONTROLLER
class ClassroomExamController {
  constructor() {
    this.omarBubble = document.getElementById('c2-omar-bubble');
    this.bilalBubble = document.getElementById('c2-bilal-bubble');
    this.teacherBubble = document.getElementById('c2-teacher-bubble');
    this.frayhaBubble = document.getElementById('c2-frayha-bubble');
    this.frayhaBox = document.getElementById('c2-frayha-box');
    this.teacherBox = document.getElementById('c2-teacher-box');
    this.omarBox = document.getElementById('c2-omar-box');
    this.bilalBox = document.getElementById('c2-bilal-box');
    this.resultBox = document.getElementById('c2-result-box');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;

    const omarWrap = document.getElementById('c2-omar-wrap');
    if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('whisper');

    const bilalWrap = document.getElementById('c2-bilal-wrap');
    if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');

    const teacherWrap = document.getElementById('c2-teacher-wrap');
    if (teacherWrap) teacherWrap.innerHTML = CharacterRenderer.renderTeacher('normal');

    const frayhaWrap = document.getElementById('c2-frayha-wrap');
    if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('clapping');

    if (this.omarBubble) this.omarBubble.classList.remove('active');
    if (this.bilalBubble) this.bilalBubble.classList.remove('active');
    if (this.teacherBubble) this.teacherBubble.classList.remove('active');
    if (this.frayhaBubble) this.frayhaBubble.classList.remove('active');

    if (this.frayhaBox) {
      this.frayhaBox.style.display = 'none';
      this.frayhaBox.classList.remove('active');
    }
    if (this.resultBox) this.resultBox.classList.remove('show');
    if (this.teacherBox) this.teacherBox.style.animation = 'teacherScanning 4s infinite ease-in-out';
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  startTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    // 1. Omar whispers: "بلال، شناهو تعريف اناتومي؟"
    this.schedule(() => {
      this.omarBox.style.animation = 'omarWhispering 1s infinite ease-in-out';
      this.omarBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 1000);

    // 2. Bilal snitches: "أستاذ! أستاذ! هذا كينقل مني، عفاك نوضو من حدايا! 😂"
    this.schedule(() => {
      this.omarBubble.classList.remove('active');
      const bilalWrap = document.getElementById('c2-bilal-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('snitch');
      this.bilalBox.style.animation = 'bilalSnitchHandRaise 0.6s forwards';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playSnitchBell();
    }, 3200);

    // 3. Teacher reacts with surprise shock!
    this.schedule(() => {
      const teacherWrap = document.getElementById('c2-teacher-wrap');
      if (teacherWrap) teacherWrap.innerHTML = CharacterRenderer.renderTeacher('shock');
      this.teacherBox.style.animation = 'teacherSurprisedShock 0.8s forwards';
      this.teacherBubble.classList.add('active');

      const omarWrap = document.getElementById('c2-omar-wrap');
      if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('shock');
      window.soundEngine.playTeacherGasp();
    }, 5500);

    // 4. Frayha appears clapping for Bilal!
    this.schedule(() => {
      this.frayhaBox.style.display = 'flex';
      this.frayhaBox.classList.add('active');
      this.frayhaBox.style.animation = 'frayhaClappingHappy 0.6s infinite ease-in-out';
      this.frayhaBubble.classList.add('active');
      window.soundEngine.playApplause();
    }, 7200);

    // 5. Result
    this.schedule(() => {
      this.resultBox.classList.add('show');
    }, 9000);
  }
}

// SCENE 3: SCHOOL COURTYARD CONTROLLER
class CourtyardController {
  constructor() {
    this.principalBox = document.getElementById('c3-principal-box');
    this.principalWrap = document.getElementById('c3-principal-wrap');
    this.boysGroup = document.getElementById('c3-boys-group');
    this.frayhaBox = document.getElementById('c3-frayha-box');

    this.boysBubble = document.getElementById('c3-boys-bubble');
    this.principalBubble = document.getElementById('c3-principal-bubble');
    this.frayhaBubble = document.getElementById('c3-frayha-bubble');
    this.bilalComfortBubble = document.getElementById('c3-comfort-bubble');
    this.resultBox = document.getElementById('c3-result-box');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;

    // Render characters
    if (this.principalWrap) {
      this.principalWrap.innerHTML = CharacterRenderer.renderPrincipal();
      this.principalWrap.style.transform = 'scaleX(1)';
      this.principalWrap.style.animation = 'none';
    }

    const bilalWrap = document.getElementById('c3-bilal-wrap');
    if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');

    const tahaWrap = document.getElementById('c3-taha-wrap');
    if (tahaWrap) tahaWrap.innerHTML = CharacterRenderer.renderTaha();

    const omarWrap = document.getElementById('c3-omar-wrap');
    if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('normal');

    const frayhaWrap = document.getElementById('c3-frayha-wrap');
    if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('normal');

    if (this.boysBubble) this.boysBubble.classList.remove('active');
    if (this.principalBubble) this.principalBubble.classList.remove('active');
    if (this.frayhaBubble) this.frayhaBubble.classList.remove('active');
    if (this.bilalComfortBubble) this.bilalComfortBubble.classList.remove('active');

    if (this.principalBox) {
      this.principalBox.style.animation = 'none';
      this.principalBox.style.transform = 'translateX(130%)';
    }
    if (this.resultBox) this.resultBox.classList.remove('show');
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  startTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    // 1. Principal walks in with catwalk stride
    this.schedule(() => {
      this.principalBox.style.animation = 'principalCatwalk 3.5s forwards ease-in-out';
      window.soundEngine.playCatwalkBeats();
    }, 600);

    // 2. Bilal and Taha follow: "مديرة! مديرة! ممكن النمرة؟ 😂"
    this.schedule(() => {
      this.boysGroup.style.animation = 'boysFollowHop 1s infinite ease-in-out';
      this.boysBubble.classList.add('active');
      window.soundEngine.playCatcallWhistle();
    }, 3800);

    // 3. Principal turns around & delivers burn: "سيرو عند فرح، راه هي المديرة، كتجي تحل المدرسة مع 8 ديال الصباح! 😂"
    // CRITICAL: We turn the character wrapper ONLY, keeping speech bubble perfectly unmirrored & readable!
    this.schedule(() => {
      this.boysBubble.classList.remove('active');
      if (this.principalWrap) {
        this.principalWrap.style.animation = 'principalCharacterTurn 0.5s forwards ease-in-out';
      }
      this.principalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 6000);

    // 4. Everyone laughs, Frayha starts crying comically!
    this.schedule(() => {
      const frayhaWrap = document.getElementById('c3-frayha-wrap');
      if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('crying');
      this.frayhaBox.style.animation = 'frayhaAnimeCryingFountain 0.6s infinite ease-in-out';
      this.frayhaBubble.classList.add('active');

      const omarWrap = document.getElementById('c3-omar-wrap');
      if (omarWrap) omarWrap.innerHTML = CharacterRenderer.renderOmar('laugh');

      const bilalWrap = document.getElementById('c3-bilal-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('laugh');

      window.soundEngine.playCrowdLaughter();
      window.soundEngine.playAnimeCrying();
    }, 8500);

    // 5. Bilal comforts Frayha: "وااا فرح، متبكيش، غا كنضحكو! 😂"
    this.schedule(() => {
      this.principalBubble.classList.remove('active');
      this.frayhaBubble.classList.remove('active');
      this.boysGroup.style.animation = 'none';
      const bilalWrap = document.getElementById('c3-bilal-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');
      this.bilalComfortBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 11200);

    // 6. Navigation
    this.schedule(() => {
      this.resultBox.classList.add('show');
    }, 13000);
  }
}

// SCENE 4: BILAL AND FRAYHA CONTROLLER
class DialogueSceneController {
  constructor() {
    this.bilalBox = document.getElementById('c4-bilal-box');
    this.frayhaBox = document.getElementById('c4-frayha-box');

    this.b1 = document.getElementById('c4-b1');
    this.f1 = document.getElementById('c4-f1');
    this.b2 = document.getElementById('c4-b2');
    this.f2 = document.getElementById('c4-f2');
    this.b3 = document.getElementById('c4-b3');
    this.f3 = document.getElementById('c4-f3');
    this.b4 = document.getElementById('c4-b4');

    this.resultBox = document.getElementById('c4-result-box');
    this.confettiLayer = document.getElementById('c4-confetti');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;

    const bilalWrap = document.getElementById('c4-bilal-wrap');
    if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');

    const frayhaWrap = document.getElementById('c4-frayha-wrap');
    if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('normal');

    const bubbles = [this.b1, this.f1, this.b2, this.f2, this.b3, this.f3, this.b4];
    bubbles.forEach((b) => { if (b) b.classList.remove('active'); });

    if (this.bilalBox) {
      this.bilalBox.style.animation = 'characterIdleBounce 2.4s infinite ease-in-out';
    }
    if (this.frayhaBox) {
      this.frayhaBox.style.animation = 'characterIdleBounce 2.4s infinite ease-in-out 0.3s';
    }
    if (this.resultBox) this.resultBox.classList.remove('show');
    if (this.confettiLayer) this.confettiLayer.style.display = 'none';
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  startTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    // 1. Bilal: "فرح، بغيت ليك شي حاجة."
    this.schedule(() => {
      this.b1.classList.add('active');
      window.soundEngine.playTap();
    }, 700);

    // 2. Frayha: "نعام دبا؟"
    this.schedule(() => {
      this.b1.classList.remove('active');
      this.f1.classList.add('active');
      this.frayhaBox.style.animation = 'frayhaCuriousHeadTilt 2s infinite ease-in-out';
      window.soundEngine.playTap();
    }, 2500);

    // 3. Bilal: "أنا حشمان منك." (Blushing)
    this.schedule(() => {
      this.f1.classList.remove('active');
      const bilalWrap = document.getElementById('c4-bilal-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('blush');
      this.bilalBox.style.animation = 'bilalShyFidget 1.6s infinite ease-in-out';
      this.b2.classList.add('active');
      window.soundEngine.playTap();
    }, 4200);

    // 4. Frayha: "غنقول أزمر! 😂"
    this.schedule(() => {
      this.b2.classList.remove('active');
      this.f2.classList.add('active');
      window.soundEngine.playTap();
    }, 5800);

    // 5. Bilal: "دبا أنا بحالا وليت كنحس بشي حاجة." (Dramatic anime swell)
    this.schedule(() => {
      this.f2.classList.remove('active');
      this.bilalBox.style.animation = 'dramaticAnimeSpotlight 1.8s infinite ease-in-out';
      this.b3.classList.add('active');
      window.soundEngine.playRomanticSwell();
    }, 7600);

    // 6. Frayha: "باش كتحس مثلا بالقطعة؟ 😂"
    this.schedule(() => {
      this.b3.classList.remove('active');
      this.f3.classList.add('active');
      window.soundEngine.playTap();
    }, 10000);

    // 7. Bilal: "لا لا، كنحس بالجوع! 😂😂"
    this.schedule(() => {
      this.f3.classList.remove('active');
      const bilalWrap = document.getElementById('c4-bilal-wrap');
      if (bilalWrap) bilalWrap.innerHTML = CharacterRenderer.renderBilal('laugh');

      const frayhaWrap = document.getElementById('c4-frayha-wrap');
      if (frayhaWrap) frayhaWrap.innerHTML = CharacterRenderer.renderFrayha('laugh');

      this.bilalBox.style.animation = 'bigBellyLaughBurst 0.6s infinite ease-in-out';
      this.frayhaBox.style.animation = 'bigBellyLaughBurst 0.6s infinite ease-in-out 0.15s';
      this.b4.classList.add('active');

      window.soundEngine.playComedyRimshot();
      window.soundEngine.playCrowdLaughter();
      if (this.confettiLayer) this.confettiLayer.style.display = 'block';
    }, 12200);

    // 8. Result Card
    this.schedule(() => {
      this.resultBox.classList.add('show');
    }, 14500);
  }
}

// ============================================================
// SCENE 5: FARAH AND BILAL'S PORSCHE IN MARRAKECH CONTROLLER
// ============================================================
class MarrakechPorscheController {
  constructor() {
    this.farahBox = document.getElementById('porsche-char-farah');
    this.farahWrap = document.getElementById('porsche-farah-wrap');
    this.porscheBox = document.getElementById('porsche-car-box');
    this.porscheWrap = document.getElementById('porsche-car-wrap');
    this.donkeyBox = document.getElementById('porsche-donkey-box');
    this.donkeyWrap = document.getElementById('porsche-donkey-wrap');

    this.farahBubble = document.getElementById('porsche-farah-bubble');
    this.bilalBubble = document.getElementById('porsche-bilal-bubble');
    this.resultBox = document.getElementById('porsche-result-box');
    this.roadArena = document.querySelector('.porsche-arena');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;

    if (this.farahWrap) {
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('tired');
    }
    if (this.farahBox) {
      this.farahBox.style.display = 'flex';
      this.farahBox.style.transform = 'translateX(0)';
      this.farahBox.style.opacity = '1';
      this.farahBox.style.animation = 'characterIdleBounce 2.5s infinite ease-in-out';
    }

    if (this.porscheWrap) {
      this.porscheWrap.innerHTML = CharacterRenderer.renderPorsche({ state: 'alone', lightsOn: true });
    }
    if (this.porscheBox) {
      this.porscheBox.style.display = 'block';
      this.porscheBox.style.transform = 'translateX(130%)';
      this.porscheBox.style.animation = 'none';
    }

    if (this.donkeyWrap) {
      this.donkeyWrap.innerHTML = CharacterRenderer.renderDonkeyCart();
    }
    if (this.donkeyBox) {
      this.donkeyBox.style.display = 'none';
      this.donkeyBox.style.transform = 'translateX(120%)';
    }

    if (this.farahBubble) {
      this.farahBubble.classList.remove('active');
      this.farahBubble.textContent = '';
    }
    if (this.bilalBubble) {
      this.bilalBubble.classList.remove('active');
      this.bilalBubble.textContent = '';
    }
    if (this.resultBox) {
      this.resultBox.classList.remove('show');
    }
    if (this.roadArena) {
      this.roadArena.classList.remove('driving-mode');
    }
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  startTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    // Scene 1: Farah at the bus stop, exhausted, talking to herself
    this.schedule(() => {
      this.farahBubble.textContent = 'آش هاد الحياة هادي؟ كل نهار طوبيس وطوبيس! طلع ليا طوبيس فراسي! بغيت طونبيل، غير شي طونبيل وشوية!';
      this.farahBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 700);

    // Scene 2: Bilal arrives in his luxury Porsche!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      window.soundEngine.playPorscheAcceleration(2.2);
      this.porscheBox.style.animation = 'porscheArriveAndBrake 2.6s forwards cubic-bezier(0.25, 1, 0.5, 1)';
    }, 4500);

    this.schedule(() => {
      window.soundEngine.playPorscheBrake();
      window.soundEngine.playPorscheHorn();
      window.soundEngine.playWindowRollDown();
    }, 6600);

    // Bilal: "آ فرح! فين غادية؟"
    this.schedule(() => {
      this.bilalBubble.textContent = 'آ فرح! فين غادية؟';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 7400);

    // Farah: "غادية نقلب على شي طوبيس، ولكن صافي عييت منو!"
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('tired');
      this.farahBubble.textContent = 'غادية نقلب على شي طوبيس، ولكن صافي عييت منو!';
      this.farahBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 9600);

    // Bilal: "آجي طلعي، اليوم غادي نوصلك أنا."
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalBubble.textContent = 'آجي طلعي، اليوم غادي نوصلك أنا.';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 12200);

    // Farah sees the Porsche up close and is amazed!
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('shocked_happy');
      this.farahBubble.textContent = 'واااا بلال! واش هادي طونبيلك؟ بورش؟ الله يعطينا بحالها!';
      this.farahBubble.classList.add('active');
      window.soundEngine.playRomanticSwell();
    }, 14500);

    // Bilal: "إييه، طلعي آ فرح، اليوم غادي نوصلك فالبورش!"
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalBubble.textContent = 'إييه، طلعي آ فرح، اليوم غادي نوصلك فالبورش!';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 17800);

    // Farah: "واخا، غير زيد شوية فالسرعة!"
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.farahBubble.textContent = 'واخا، غير زيد شوية فالسرعة!';
      this.farahBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 20300);

    // Scene 3: Farah gets into the Porsche!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      window.soundEngine.playCarDoor();
      this.farahBox.style.display = 'none'; // Farah enters car
      this.porscheWrap.innerHTML = CharacterRenderer.renderPorsche({ state: 'bilal_and_farah', lightsOn: true, exhaustSmoke: true });
      window.soundEngine.playPorscheStartup();
    }, 22800);

    // Bilal revs the engine!
    this.schedule(() => {
      window.soundEngine.playPorscheRev(1.2);
    }, 24500);

    // High Speed Cruise through Marrakech Boulevard!
    this.schedule(() => {
      window.soundEngine.playPorscheAcceleration(3.5);
      if (this.roadArena) this.roadArena.classList.add('driving-mode');
      this.porscheBox.style.animation = 'porscheFastDriving 3.8s infinite ease-in-out';
      this.porscheWrap.innerHTML = CharacterRenderer.renderPorsche({ state: 'bilal_and_farah', lightsOn: true, wheelsSpinning: true, exhaustSmoke: true });
      this.bilalBubble.textContent = 'شوفي التيربو كيفاش كيطير! بورش هادي ماشي لعب! 😎🏎️';
      this.bilalBubble.classList.add('active');
    }, 26000);

    // Farah holds on screaming laughing!
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.farahBubble.textContent = 'واااا ناري راه غادي طاااير، بشوية على عباد الله! 😂💨';
      this.farahBubble.classList.add('active');
    }, 29200);

    // THE FUNNY MARRAKECH TWIST: The Donkey Cart blocks the road!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      if (this.roadArena) this.roadArena.classList.remove('driving-mode');
      window.soundEngine.playPorscheBrake();
      window.soundEngine.playSlideWhistle('down');
      this.porscheBox.style.animation = 'porscheSlamBrakes 0.8s forwards ease-out';
      this.porscheWrap.innerHTML = CharacterRenderer.renderPorsche({ state: 'bilal_and_farah', lightsOn: true, wheelsSpinning: false, exhaustSmoke: false });

      // Show Donkey Cart blocking the lane
      this.donkeyBox.style.display = 'block';
      this.donkeyBox.style.animation = 'donkeyCartEnter 1.2s forwards cubic-bezier(0.25, 1, 0.5, 1)';
    }, 32200);

    // Farah bursts out laughing at the Donkey Cart!
    this.schedule(() => {
      this.farahBubble.textContent = 'ههههههههه بورش بملاين صحيحة ومحبوس ورا كرويلة، سير آ بلال الله يعطيك شي عقل! 😂🐴';
      this.farahBubble.classList.add('active');
      window.soundEngine.playCrowdLaughter();
    }, 34000);

    // Bilal replies laughing:
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalBubble.textContent = 'وا هاد الكرويلة دايرة لينا بوشون فكليز! مكيحشمش هدا ههههه! 😂😂';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playComedyRimshot();
    }, 37500);

    // Result Card
    this.schedule(() => {
      this.resultBox.classList.add('show');
    }, 40800);
  }
}

// ============================================================
// SCENE 6: FARAH GETS ANGRY AT BILAL AND TAHA CONTROLLER
// ============================================================
class FarahAngryController {
  constructor() {
    this.farahBox = document.getElementById('angry-char-farah');
    this.farahWrap = document.getElementById('angry-farah-wrap');
    this.bilalBox = document.getElementById('angry-char-bilal');
    this.bilalWrap = document.getElementById('angry-bilal-wrap');
    this.tahaBox = document.getElementById('angry-char-taha');
    this.tahaWrap = document.getElementById('angry-taha-wrap');

    this.farahBubble = document.getElementById('angry-farah-bubble');
    this.bilalBubble = document.getElementById('angry-bilal-bubble');
    this.tahaBubble = document.getElementById('angry-taha-bubble');
    this.resultBox = document.getElementById('angry-result-box');

    this.isPlaying = false;
    this.timelineTimeouts = [];
  }

  init() {
    this.reset();
  }

  reset() {
    this.timelineTimeouts.forEach((t) => clearTimeout(t));
    this.timelineTimeouts = [];
    this.isPlaying = false;

    if (this.farahWrap) this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('angry');
    if (this.bilalWrap) this.bilalWrap.innerHTML = CharacterRenderer.renderBilal('normal');
    if (this.tahaWrap) this.tahaWrap.innerHTML = CharacterRenderer.renderTaha('innocent');

    if (this.farahBox) {
      this.farahBox.style.animation = 'characterIdleBounce 2.5s infinite ease-in-out';
      this.farahBox.style.transform = 'translateX(0)';
    }
    if (this.bilalBox) {
      this.bilalBox.style.animation = 'characterIdleBounce 2.5s infinite ease-in-out 0.2s';
      this.bilalBox.style.transform = 'translateX(0)';
    }
    if (this.tahaBox) {
      this.tahaBox.style.animation = 'characterIdleBounce 2.5s infinite ease-in-out 0.4s';
      this.tahaBox.style.transform = 'translateX(0)';
    }

    if (this.farahBubble) this.farahBubble.classList.remove('active');
    if (this.bilalBubble) this.bilalBubble.classList.remove('active');
    if (this.tahaBubble) this.tahaBubble.classList.remove('active');
    if (this.resultBox) this.resultBox.classList.remove('show');
  }

  schedule(fn, delay) {
    const t = setTimeout(fn, delay);
    this.timelineTimeouts.push(t);
    return t;
  }

  startTimeline() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.reset();

    // Scene 1: The Meeting - Farah confronts them
    this.schedule(() => {
      this.farahBubble.textContent = 'نتوما بجوج! واش ما عندكم ما تديرو غير المشاكل؟';
      this.farahBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 700);

    // Bilal: "آ فرح، مالك؟ آش وقع؟"
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalBubble.textContent = 'آ فرح، مالك؟ آش وقع؟';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 3200);

    // Taha: "والله حتى حنا ما درنا والو!"
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.tahaBubble.textContent = 'والله حتى حنا ما درنا والو!';
      this.tahaBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 5400);

    // Farah: "ما درتو والو؟ نتا وياه ديما كتجيبو ليا الصداع!"
    this.schedule(() => {
      this.tahaBubble.classList.remove('active');
      this.farahBubble.textContent = 'ما درتو والو؟ نتا وياه ديما كتجيبو ليا الصداع!';
      this.farahBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 7800);

    // Scene 2: Farah gets really angry & pulls out the Moroccan Slipper!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      window.soundEngine.playFarahAngryFume();
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('slipper');
      this.farahBox.style.animation = 'characterAngryFume 0.5s infinite ease-in-out';
      this.farahBubble.textContent = 'وقفو بجوج! باقي ما ساليتش معاكم!';
      this.farahBubble.classList.add('active');
    }, 10500);

    // Bilal & Taha freak out!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalWrap.innerHTML = CharacterRenderer.renderBilal('scared');
      this.bilalBubble.textContent = 'آآآآ فرح! صافي صافي! سمحي لينا!';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playSlideWhistle('up');
    }, 13200);

    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.tahaWrap.innerHTML = CharacterRenderer.renderTaha('panicked');
      this.tahaBubble.textContent = 'بلال هرب! راه اليوم ما غاديش تفوت على خير!';
      this.tahaBubble.classList.add('active');
    }, 15500);

    this.schedule(() => {
      this.tahaBubble.classList.remove('active');
      this.bilalBubble.textContent = 'علاش أنا؟ نتا اللي بديتي!';
      this.bilalBubble.classList.add('active');
    }, 17800);

    // Scene 2 & 3: Crazy Cartoon Chase!
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      window.soundEngine.playCartoonChaseScramble(4.5);

      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('running_chase');
      this.bilalWrap.innerHTML = CharacterRenderer.renderBilal('running');
      this.tahaWrap.innerHTML = CharacterRenderer.renderTaha('running');

      this.bilalBox.style.animation = 'cartoonChaseRunBilal 4s infinite linear';
      this.tahaBox.style.animation = 'cartoonChaseRunTaha 4s infinite linear 0.15s';
      this.farahBox.style.animation = 'cartoonChaseRunFarah 4s infinite linear 0.35s';
    }, 20000);

    // Playful cartoon slipper hits / bonks during the chase!
    this.schedule(() => {
      window.soundEngine.playCartoonBonk();
    }, 21200);
    this.schedule(() => {
      window.soundEngine.playCartoonBonk();
      window.soundEngine.playSlideWhistle('down');
    }, 22500);
    this.schedule(() => {
      window.soundEngine.playCartoonBonk();
    }, 23800);

    // Scene 3: The Funny Twist Ending - Bilal & Taha cornered!
    this.schedule(() => {
      this.bilalBox.style.animation = 'none';
      this.tahaBox.style.animation = 'none';
      this.farahBox.style.animation = 'none';

      this.tahaWrap.innerHTML = CharacterRenderer.renderTaha('panicked');
      this.bilalWrap.innerHTML = CharacterRenderer.renderBilal('bribing');
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('slipper');

      this.tahaBubble.textContent = 'بلال، جبد شي حل دبا راه غاتسلخنا بالبلغة!';
      this.tahaBubble.classList.add('active');
    }, 25000);

    // Bilal pulls out 200 DH & chocolate!
    this.schedule(() => {
      this.tahaBubble.classList.remove('active');
      this.bilalBubble.textContent = 'فرح! هاكي هاد 200 درهم سيري تقداي بيها الشكلاط وكاسكروط وسمحي لينا!';
      this.bilalBubble.classList.add('active');
      window.soundEngine.playTap();
    }, 27500);

    // Farah instantly drops the slipper, starry eyes, happy!
    this.schedule(() => {
      this.bilalBubble.classList.remove('active');
      this.farahWrap.innerHTML = CharacterRenderer.renderFrayha('chocolate');
      this.farahBubble.textContent = 'وايلي؟ كاسكروط وشكلاط؟ وا قولوها من الصباح! مسامحة دنيا وآخرة هههههههه! 😂🍫';
      this.farahBubble.classList.add('active');
      window.soundEngine.playRomanticSwell();
    }, 31000);

    // Bilal & Taha laugh in relief!
    this.schedule(() => {
      this.farahBubble.classList.remove('active');
      this.bilalWrap.innerHTML = CharacterRenderer.renderBilal('laugh');
      this.tahaWrap.innerHTML = CharacterRenderer.renderTaha('relieved');

      this.bilalBubble.textContent = 'ههههههههه كنا عارفين نقطة الضعف! طيحات السلاح فالبلصة! 😂😂';
      this.bilalBubble.classList.add('active');

      window.soundEngine.playComedyRimshot();
      window.soundEngine.playCrowdLaughter();
    }, 35000);

    // Result Card
    this.schedule(() => {
      this.resultBox.classList.add('show');
    }, 38500);
  }
}

// Global Exports
window.CharacterRenderer = CharacterRenderer;
window.CartoonFightController = CartoonFightController;
window.ClassroomExamController = ClassroomExamController;
window.CourtyardController = CourtyardController;
window.DialogueSceneController = DialogueSceneController;
window.MarrakechPorscheController = MarrakechPorscheController;
window.FarahAngryController = FarahAngryController;
