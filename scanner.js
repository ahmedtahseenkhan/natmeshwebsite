/* ═══════════════════════════════════════════════════════════════
   NatMesh · TERMINAL & SCANNER ANIMATIONS
═══════════════════════════════════════════════════════════════ */

/* ─── Translator (provided by i18n.js; safe fallback) ───────── */
const t = (typeof window !== 'undefined' && window.t) ? window.t : (s => s);

/* ─── Sample configs + findings ─────────────────────────────── */
const CONFIGS = {
  'edge-fw-01.cfg': {
    label: 'edge-fw-01.cfg',
    vendor: 'CISCO IOS-XE',
    sha: '0xa3f49c218c2b',
    lines: [
      ['', '! ─── edge-fw-01 · running-config · sanitized ───'],
      ['', '!'],
      ['k', 'version', 'v', '15.4'],
      ['k', 'hostname', 'v', 'edge-fw-01'],
      ['', '!'],
      ['k', 'enable password', 'v', 'cisco123', 'crit', 'rule:auth-001', 'Plain-text Type 0 enable password', ['CVE-2023-20269', 'PCI-DSS 8.3', 'STIG CAT I']],
      ['', '!'],
      ['k', 'service', 'v', 'password-encryption'],
      ['k', 'no service', 'v', 'pad'],
      ['', '!'],
      ['k', 'aaa', 'v', 'new-model'],
      ['k', 'aaa authentication', 'v', 'login default local', 'high', 'rule:auth-014', 'Local-only auth · no fallback', ['NIST 800-53 IA-2']],
      ['', '!'],
      ['k', 'line vty', 'v', '0 4'],
      ['k', ' transport input', 'v', 'telnet ssh', 'crit', 'rule:svc-002', 'Telnet enabled on VTY lines', ['CVE-2018-0101','STIG CAT I','PCI-DSS 2.3']],
      ['k', ' password', 'v', 'cisco'],
      ['', '!'],
      ['k', 'snmp-server community', 'v', 'public RO', 'crit', 'rule:snmp-001', 'Default SNMP community "public"', ['STIG CAT I','PCI-DSS 2.1']],
      ['k', 'snmp-server community', 'v', 'private RW', 'crit', 'rule:snmp-002', 'Default SNMP "private" with RW', ['STIG CAT I']],
      ['', '!'],
      ['k', 'ip ssh version', 'v', '1', 'high', 'rule:svc-008', 'SSHv1 protocol enabled', ['CVE-2018-0101','NIST 800-53 SC-8']],
      ['k', 'ip http', 'v', 'server', 'med',  'rule:svc-011', 'HTTP server enabled', ['STIG CAT II']],
      ['', '!'],
      ['k', 'ntp server', 'v', '0.0.0.0'],
      ['', '!'],
      ['k', 'interface', 'v', 'GigabitEthernet0/0'],
      ['k', ' description', 'v', 'WAN_UPLINK'],
      ['k', ' ip address', 'v', '203.0.113.4 255.255.255.0'],
      ['', '!'],
      ['k', 'access-list 101', 'v', 'permit ip any any', 'crit', 'rule:acl-001', 'Implicit permit-any-any on ACL 101', ['ZeroTrust','CMMC AC.L2-3.1.3']],
      ['', '!']
    ]
  },
  'dc-router-12.cfg': {
    label: 'dc-router-12.cfg',
    vendor: 'JUNIPER JUNOS',
    sha: '0x7b21e8f04a91',
    lines: [
      ['', '/* dc-router-12 · junos · sanitized */'],
      ['k', 'system {', '', ''],
      ['k', '  host-name', 'v', 'dc-router-12;'],
      ['k', '  root-authentication {', '', ''],
      ['k', '    encrypted-password', 's', '"$1$abc"', 'crit', 'rule:auth-007', 'Type-5 (MD5) password hash detected', ['CVE-2022-21762','NIST IA-5']],
      ['k', '  }', '', ''],
      ['k', '  services {', '', ''],
      ['k', '    telnet;', '', '', 'crit', 'rule:svc-002', 'Telnet service enabled', ['STIG CAT I','PCI-DSS 2.3']],
      ['k', '    ssh', 'v', 'protocol-version v1;', 'high', 'rule:svc-008', 'SSHv1 explicitly enabled', ['NIST SC-8']],
      ['k', '  }', '', ''],
      ['k', '  ntp {', '', ''],
      ['k', '    boot-server', 'v', '0.0.0.0;'],
      ['k', '  }', '', ''],
      ['k', '}', '', ''],
      ['k', 'snmp {', '', ''],
      ['k', '  community', 's', '"public" {', 'crit', 'rule:snmp-001', 'Default SNMP community "public"', ['STIG CAT I']],
      ['k', '    authorization read-only;', '', ''],
      ['k', '  }', '', ''],
      ['k', '}', '', ''],
      ['k', 'security {', '', ''],
      ['k', '  zones {', '', ''],
      ['k', '    security-zone trust { interfaces ge-0/0/0.0; }', '', ''],
      ['k', '    security-zone untrust { interfaces ge-0/0/1.0; }', '', ''],
      ['k', '  }', '', ''],
      ['k', '  policies {', '', ''],
      ['k', '    from-zone untrust to-zone trust {', '', ''],
      ['k', '      policy permit-all { match { source-address any; destination-address any; application any; } then permit; }', '', '', 'crit', 'rule:zt-003', 'permit-any-any from untrust→trust', ['ZeroTrust','CMMC AC.L2-3.1.3']],
      ['k', '    }', '', ''],
      ['k', '  }', '', ''],
      ['k', '}', '', '']
    ]
  },
  'dmz-asa-02.cfg': {
    label: 'dmz-asa-02.cfg',
    vendor: 'CISCO ASA',
    sha: '0xfe12c098d3b4',
    lines: [
      ['', ': dmz-asa-02 · ASA running-config'],
      ['k', 'hostname', 'v', 'dmz-asa-02'],
      ['k', 'enable password', 'v', '8Ry2YjIyt7RRXU24 encrypted', 'med', 'rule:auth-003', 'Type-7 (reversible) password', ['STIG CAT II','NIST IA-5']],
      ['k', 'no names', '', ''],
      ['k', '!', '', ''],
      ['k', 'interface GigabitEthernet0/0', '', ''],
      ['k', ' nameif', 'v', 'outside'],
      ['k', ' security-level', 'v', '0'],
      ['k', ' ip address', 'v', '198.51.100.1 255.255.255.0'],
      ['k', '!', '', ''],
      ['k', 'banner motd', 's', '"WELCOME"', 'high', 'rule:banner-001', 'Banner lacks DOD warning', ['STIG CAT II','CMMC AC.L1-3.1.9']],
      ['k', '!', '', ''],
      ['k', 'crypto ikev1 policy 10', '', ''],
      ['k', ' authentication', 'v', 'pre-share'],
      ['k', ' encryption', 'v', '3des', 'high', 'rule:crypto-004', 'Weak cipher 3DES in IKEv1', ['CVE-2016-2183','PCI-DSS 4.2']],
      ['k', ' hash', 'v', 'sha'],
      ['k', ' group', 'v', '2', 'med', 'rule:crypto-007', 'DH Group 2 (1024-bit MODP)', ['NIST SC-12']],
      ['k', '!', '', ''],
      ['k', 'access-list outside_acl', 'v', 'permit ip any any', 'crit', 'rule:acl-001', 'permit-any-any on outside ACL', ['ZeroTrust','PCI-DSS 1.2.1']],
      ['k', '!', '', ''],
      ['k', 'snmp-server community', 's', 'public', 'crit', 'rule:snmp-001', 'Default community "public"', ['STIG CAT I']],
      ['k', 'logging buffered', 'v', 'debugging'],
      ['k', 'no logging timestamp', '', '', 'med', 'rule:log-002', 'Missing log timestamps', ['NIST AU-8']]
    ]
  }
};

/* ═══════════════════════════════════════════════════════════════
   HERO TERMINAL — boot → scroll → flag → loop
═══════════════════════════════════════════════════════════════ */
(function heroTerminal() {
  const body = document.getElementById('hero-term-body');
  const file = document.getElementById('hero-term-file');
  const stat = document.getElementById('hero-term-stat');
  const prog = document.getElementById('hero-term-prog');
  const found = document.getElementById('hero-term-found');
  if (!body) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const renderReady = () => { body.innerHTML = '<div class="term-line sys">' + t('engine_ready') + '</div>'; };
    renderReady();
    document.addEventListener('nm:langchange', renderReady);
    return;
  }

  let heroToken = 0;

  const SCRIPTS = [
    {
      file: 'edge-fw-01.cfg',
      boot: [
        ['› natmesh-csc v1.4.2 · initializing', 'sys', 250],
        ['› loading rule packs … 16/16 [OK]', 'sys-dim', 320],
        ['› parsers ready · 28 vendors registered', 'sys-dim', 280],
        ['› ingesting edge-fw-01.cfg · 1,247 lines · sha=0xa3f4', 'sys', 320],
        ['› vendor identified: cisco-ios-xe 15.4 · role: BORDER-FW', 'sys', 360],
        ['› audit start · 2026-05-18T14:22:08Z', 'sys', 380]
      ],
      lines: CONFIGS['edge-fw-01.cfg'].lines.slice(0, 22)
    }
  ];

  let foundCount = 0;
  let progress = 0;
  let totalSteps = 0;

  function addLine(html, cls = '') {
    const el = document.createElement('div');
    el.className = 'term-line ' + cls;
    el.innerHTML = html;
    body.appendChild(el);
    // scroll up
    while (body.scrollHeight > body.clientHeight + 24) {
      body.firstChild.remove();
    }
  }

  function fmt(arr) {
    // [class, key, '', val, sev, rule, msg, refs]
    let html = '';
    if (arr[0]) html += `<span class="${arr[0]}">${arr[1]}</span>`;
    else html += arr[1];
    if (arr[2]) html += ` <span class="${arr[2]}">${arr[3]}</span>`;
    return html;
  }

  function tagFor(sev) {
    return `<span class="tag tag-${sev}">[${sev.toUpperCase()}]</span>`;
  }

  async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function runOnce() {
    const my = ++heroToken;
    body.innerHTML = '';
    foundCount = 0; progress = 0;
    found.textContent = '0';
    stat.textContent = t('BOOT');
    stat.style.color = 'var(--amber)';
    prog.style.width = '0%';

    const script = SCRIPTS[0];
    file.textContent = script.file;
    totalSteps = script.boot.length + script.lines.length + 4;
    let step = 0;
    const tick = () => { step++; prog.style.width = Math.min(100, (step / totalSteps) * 100) + '%'; };

    // boot lines
    stat.textContent = t('INITIALIZING');
    for (const [txt, cls, dur] of script.boot) {
      addLine(t(txt), cls);
      tick();
      await sleep(dur);
      if (my !== heroToken) return;
    }
    addLine('', '');

    stat.textContent = t('SCANNING');
    stat.style.color = 'var(--amber)';

    // config lines
    for (const ln of script.lines) {
      if (my !== heroToken) return;
      // ['k','keyword','v','value',(sev,rule,msg,refs)?]
      let html = `<span class="c">${ln[1] || ''}</span>`;
      if (ln[0]) {
        html = `<span class="k">${ln[1]}</span>`;
        if (ln[2]) html += ` <span class="${ln[2]}">${ln[3]}</span>`;
      }
      const sev = ln[4];
      const cls = sev ? `flag${sev==='crit'?'':'-'+sev[0]}` : '';
      // Map: crit→flag, high→flag-h, med→flag-m
      const flagCls = sev === 'crit' ? 'flag' : sev === 'high' ? 'flag flag-h' : sev === 'med' ? 'flag flag-m' : '';
      addLine(html, flagCls);

      if (sev) {
        foundCount++;
        found.textContent = String(foundCount);
        // annotation line below
        const ref = ln[5];
        const msg = ln[6];
        const refs = ln[7] || [];
        await sleep(220);
        addLine(
          `   ↳ ${tagFor(sev)} <span style="color:var(--amber)">${ref}</span> · <span style="color:var(--txt)">${t(msg)}</span> <span style="color:var(--txt-3)">· ${refs.join(' · ')}</span>`,
          'sys-dim'
        );
      }
      tick();
      await sleep(sev ? 380 : 130);
    }

    // final summary
    stat.textContent = t('COMPLETE');
    stat.style.color = 'var(--ok)';
    addLine('', '');
    addLine(`<span class="sys">${t('audit_complete').replace('{n}', foundCount)}</span>`, 'sys');
    tick();
    await sleep(400);
    if (my !== heroToken) return;
    addLine(`<span class="sys-dim">${t('risk_summary')}</span>`, 'sys-dim');
    tick();
    await sleep(400);
    if (my !== heroToken) return;
    addLine(`<span class="sys">${t('report_exported')}</span>`, 'sys');
    tick();
    prog.style.width = '100%';
    await sleep(2400);
    if (my !== heroToken) return;

    // restart
    runOnce();
  }
  runOnce();
  // Re-render immediately in the new language on toggle.
  document.addEventListener('nm:langchange', () => runOnce());
})();


/* ═══════════════════════════════════════════════════════════════
   LIVE SCANNER DEMO — the showstopper
═══════════════════════════════════════════════════════════════ */
(function scannerDemo() {
  const body = document.getElementById('scanner-config-body');
  const list = document.getElementById('scanner-findings-list');
  const fileEl = document.getElementById('scanner-file');
  const vendorEl = document.getElementById('scanner-vendor');
  const shaEl = document.getElementById('scanner-sha');
  const countEl = document.getElementById('scanner-finding-count');
  const beam = document.getElementById('scan-beam');
  const fill = document.getElementById('scanner-progress-fill');
  const pctEl = document.getElementById('scanner-pct');
  const linesEl = document.getElementById('scanner-lines');
  const findEl = document.getElementById('scanner-find');
  const critEl = document.getElementById('scanner-crit');
  const tabs = document.querySelectorAll('.scanner-tab');
  if (!body || !list) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentKey = 'edge-fw-01.cfg';
  let abortFlag = 0;

  function renderLines(key) {
    const c = CONFIGS[key];
    body.innerHTML = '';
    c.lines.forEach((ln, i) => {
      const row = document.createElement('div');
      row.className = 'scanner-config-line';
      row.dataset.idx = i;
      let html = `<span class="ln">${String(i+1).padStart(3,'0')}</span><span class="content">`;
      if (!ln[0]) {
        html += `<span style="color:var(--txt-4);font-style:italic">${(ln[1] || '').replace(/</g,'&lt;')}</span>`;
      } else {
        html += `<span class="k" style="color:#8ec5ff">${ln[1].replace(/</g,'&lt;')}</span>`;
        if (ln[2]) {
          const valColor = ln[2] === 's' ? '#fcd34d' : '#fafaf9';
          html += ` <span style="color:${valColor}">${(ln[3] || '').replace(/</g,'&lt;')}</span>`;
        }
      }
      html += '</span>';
      row.innerHTML = html;
      body.appendChild(row);
    });
  }

  function fillHead(key) {
    const c = CONFIGS[key];
    fileEl.textContent = c.label;
    vendorEl.textContent = c.vendor;
    shaEl.textContent = c.sha;
    linesEl.textContent = c.lines.length;
  }

  function clearList() { list.innerHTML = ''; }

  function findingCard(ln, sev, ref, msg, refs, lineNum) {
    const div = document.createElement('div');
    div.className = `finding-card ${sev}`;
    div.innerHTML = `
      <div class="finding-row1">
        <span class="sev ${sev}">${sev.toUpperCase()}</span>
        <span class="ref">${ref}</span>
        <span class="line">L${lineNum}</span>
      </div>
      <div class="finding-title">${t(msg)}</div>
      <div class="finding-meta">
        ${(refs || []).map((r, i) => `<span class="finding-chip ${r.startsWith('CVE')?'cve':'cmp'}">${r}</span>`).join('')}
      </div>
    `;
    list.appendChild(div);
    // keep max 8 visible
    while (list.children.length > 8) list.firstChild.remove();
  }

  async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function run(key) {
    abortFlag++;
    const myToken = abortFlag;
    currentKey = key;
    renderLines(key);
    fillHead(key);
    clearList();

    const c = CONFIGS[key];
    let findings = 0, crits = 0;
    countEl.textContent = t('findings_n').replace('{n}', 0);
    findEl.textContent = '0';
    critEl.textContent = '0';

    if (reduce) {
      // just flag all findings instantly
      c.lines.forEach((ln, i) => {
        if (!ln[4]) return;
        const row = body.querySelector(`[data-idx="${i}"]`);
        if (row) {
          row.classList.add('flagged');
          if (ln[4] === 'high') row.classList.add('high');
          else if (ln[4] === 'med') row.classList.add('med');
        }
        findings++;
        if (ln[4] === 'crit') crits++;
        findingCard(ln, ln[4], ln[5], ln[6], ln[7], i+1);
      });
      countEl.textContent = t('findings_n').replace('{n}', findings);
      findEl.textContent = findings;
      critEl.textContent = crits;
      fill.style.width = '100%';
      pctEl.textContent = '100%';
      return;
    }

    const rows = body.querySelectorAll('.scanner-config-line');
    const total = rows.length;

    for (let i = 0; i < total; i++) {
      if (myToken !== abortFlag) return;
      const row = rows[i];
      const ln = c.lines[i];

      // scan beam to this row
      const rect = row.getBoundingClientRect();
      const parentRect = body.getBoundingClientRect();
      const top = row.offsetTop;
      beam.style.opacity = '1';
      beam.style.transform = `translateY(${top - 8}px)`;
      beam.style.transition = 'transform .15s linear';

      row.classList.add('scanning');
      await sleep(60);

      if (ln[4]) {
        const sev = ln[4];
        // flagging
        row.classList.remove('scanning');
        row.classList.add('flagged');
        if (sev === 'high') row.classList.add('high');
        else if (sev === 'med') row.classList.add('med');
        findingCard(ln, sev, ln[5], ln[6], ln[7], i+1);
        findings++;
        if (sev === 'crit') crits++;
        countEl.textContent = t('findings_n').replace('{n}', findings);
        findEl.textContent = findings;
        critEl.textContent = crits;
        await sleep(300);
      } else {
        row.classList.remove('scanning');
      }

      const pct = Math.round(((i+1) / total) * 100);
      fill.style.width = pct + '%';
      pctEl.textContent = pct + '%';
    }

    beam.style.opacity = '0';
    await sleep(1800);
    // loop again
    if (myToken === abortFlag) run(currentKey);
  }

  // Tab clicks
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      run(t.dataset.key);
    });
  });

  // Boot
  run('edge-fw-01.cfg');

  // Re-run the active config in the new language on toggle.
  document.addEventListener('nm:langchange', () => run(currentKey));
})();
