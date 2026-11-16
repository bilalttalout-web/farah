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
          <rect x="42" y="132" width="13" height="30" rx="5" fill="url(#biPants)"/>
          <rect x="65" y="132" width="13" height="30" rx="5" fill="url(#biPants)"/>
          <path d="M38 158 Q48 156 56 158 Q56 168 46 168 Q38 168 38 158 Z" fill="#facc15"/>
          <path d="M40 164 L54 164" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
          <path d="M63 158 Q73 156 81 158 Q81 168 71 168 Q63 168 63 158 Z" fill="#facc15"/>
          <path d="M65 164 L79 164" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        </g>
        <!-- Full Torso & Cool Jacket -->
        <g id="bilal-torso">
          <path d="M34 84 C34 78 86 78 86 84 L88 136 C88 140 32 140 32 136 Z" fill="url(#biJacket)"/>
          <polygon points="50,84 70,84 60,104" fill="#ffffff"/>
          <line x1="60" y1="104" x2="60" y2="136" stroke="#facc15" stroke-width="2.5"/>
        </g>
        <!-- Left Arm with Hand -->
        <g id="bilal-arm-left">
          <path d="M34 86 Q20 100 24 118" stroke="url(#biJacket)" stroke-width="14" stroke-linecap="round"/>
          <circle cx="24" cy="118" r="7" fill="url(#biSkin)"/>
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
          <rect x="44" y="132" width="11" height="32" rx="4" fill="#fed7aa"/>
          <rect x="66" y="132" width="11" height="32" rx="4" fill="#fed7aa"/>
          <ellipse cx="49" cy="164" rx="9" ry="6" fill="#f43f5e"/>
          <ellipse cx="71" cy="164" rx="9" ry="6" fill="#f43f5e"/>
        </g>
        <!-- Full Pastel Dress -->
        <path d="M36 84 C36 78 84 78 84 84 L92 136 C92 138 28 138 28 136 Z" fill="url(#frDress)"/>
        <circle cx="60" cy="86" r="4.5" fill="#fdf2f8"/>
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
            expression === 'crying'
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
  static renderTaha() {
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
          <rect x="42" y="132" width="13" height="30" rx="4" fill="#1e293b"/>
          <rect x="65" y="132" width="13" height="30" rx="4" fill="#1e293b"/>
          <ellipse cx="48" cy="164" rx="9" ry="5.5" fill="#f97316"/>
          <ellipse cx="72" cy="164" rx="9" ry="5.5" fill="#f97316"/>
        </g>
        <!-- Full Torso & Hoodie -->
        <path d="M34 84 C34 78 86 78 86 84 L88 136 C88 140 32 140 32 136 Z" fill="url(#taHoodie)"/>
        <!-- Head -->
        <circle cx="60" cy="52" r="28" fill="url(#taSkin)"/>
        <circle cx="48" cy="50" r="4.5" fill="#1e293b"/>
        <circle cx="72" cy="50" r="4.5" fill="#1e293b"/>
        <path d="M52 64 Q60 74 70 64" stroke="#1e293b" stroke-width="2.8" fill="#fff" stroke-linecap="round"/>
        <!-- Sporty Backwards Cap -->
        <path d="M32 40 C32 20 50 16 60 16 C75 16 88 20 88 40 Z" fill="#0f172a"/>
        <rect x="45" y="38" width="30" height="7" rx="3" fill="#f97316"/>
        <!-- Arms waving -->
        <path d="M34 86 Q18 72 24 58" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
        <circle cx="24" cy="58" r="6.5" fill="url(#taSkin)"/>
        <path d="M86 86 Q102 72 96 58" stroke="url(#taHoodie)" stroke-width="13" stroke-linecap="round"/>
        <circle cx="96" cy="58" r="6.5" fill="url(#taSkin)"/>
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

// Global Exports
window.CharacterRenderer = CharacterRenderer;
window.CartoonFightController = CartoonFightController;
window.ClassroomExamController = ClassroomExamController;
window.CourtyardController = CourtyardController;
window.DialogueSceneController = DialogueSceneController;
