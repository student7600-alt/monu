// C# Lab Workbench Controller

document.addEventListener('DOMContentLoaded', () => {
    let activeProgram = CSHARP_PROGRAMS_DATA[0];
    let activeCategory = 'All';
    let searchQuery = '';

    const engine = new CSharpEngine('visualizerCanvas', 'executionLog');
    window.csEngine = engine;

    const terminal = new CSharpTerminal('terminalContainer');
    window.csTerminal = terminal;

    // DOM Elements
    const programListEl = document.getElementById('programList');
    const searchInput = document.getElementById('searchPrograms');
    const categoryFiltersEl = document.getElementById('categoryFilters');
    const currentTitleEl = document.getElementById('currentTitle');
    const currentAssignmentEl = document.getElementById('currentAssignment');
    const currentAimEl = document.getElementById('currentAim');
    const currentCategoryBadge = document.getElementById('currentCategoryBadge');
    const currentTypeBadge = document.getElementById('currentTypeBadge');
    const csCodeBlock = document.getElementById('csCodeBlock');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const downloadCsBtn = document.getElementById('downloadCsBtn');
    const clearLogBtn = document.getElementById('clearLogBtn');

    const categories = [
        'All',
        'Basic I/O & Loops',
        'Operators',
        'Loops & Iterations',
        'Constructors & OOP',
        'Inheritance',
        'Type System',
        'Language Features',
        'Exception Handling',
        'Windows Forms GUI',
        'Database (ADO.NET)'
    ];

    function renderCategoryFilters() {
        categoryFiltersEl.innerHTML = '';
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = `filter-pill ${cat === activeCategory ? 'active' : ''}`;
            btn.textContent = cat;
            btn.onclick = () => {
                activeCategory = cat;
                renderCategoryFilters();
                renderProgramList();
            };
            categoryFiltersEl.appendChild(btn);
        });
    }

    function renderProgramList() {
        programListEl.innerHTML = '';
        const filtered = CSHARP_PROGRAMS_DATA.filter(p => {
            const matchesCat = activeCategory === 'All' || p.category === activeCategory;
            const matchesSearch = searchQuery === '' ||
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.assignment.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.aim.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            programListEl.innerHTML = `<div class="sidebar-empty">No C# assignments found matching "${searchQuery}"</div>`;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = `prog-sidebar-card ${p.id === activeProgram.id ? 'active' : ''}`;
            card.id = `sidebar-prog-${p.id}`;
            card.innerHTML = `
                <div class="sidebar-card-top">
                    <span class="prog-tag-num">${p.assignment}</span>
                    <span class="prog-cat-tag ${p.type === 'winform' ? 'type-winform' : 'type-console'}">${p.type === 'winform' ? 'WinForms' : 'Console'}</span>
                </div>
                <div class="prog-card-title">${p.title}</div>
                <div class="prog-card-complexity">📁 ${p.category}</div>
            `;
            card.onclick = () => {
                selectProgram(p);
                document.body.classList.remove('sidebar-open');
            };
            programListEl.appendChild(card);
        });
    }

    function selectProgram(p) {
        activeProgram = p;
        renderProgramList();

        currentAssignmentEl.textContent = p.assignment.toUpperCase();
        currentTitleEl.textContent = p.title;
        currentAimEl.textContent = p.aim;
        currentCategoryBadge.textContent = p.category;
        currentTypeBadge.textContent = p.type === 'winform' ? '🪟 Windows Forms Application' : '💻 Console Application';
        currentTypeBadge.className = `badge ${p.type === 'winform' ? 'badge-winform' : 'badge-console'}`;

        renderSyntaxHighlitCode(p.code);
        renderTheoryView(p);

        engine.loadProgram(p);
        terminal.loadProgram(p);

        document.querySelector('.main-content').scrollTop = 0;
    }

    function renderSyntaxHighlitCode(rawCode) {
        const lines = rawCode.split('\n');
        let html = '';
        lines.forEach((line, idx) => {
            let highlighted = escapeHtml(line);
            // Keywords
            highlighted = highlighted.replace(/\b(using|class|interface|static|void|int|string|bool|object|new|public|private|return|while|for|foreach|in|do|if|else|switch|case|break|default|try|catch|throw|get|set|this)\b/g, '<span class="cs-keyword">$1</span>');
            // Types & Namespaces
            highlighted = highlighted.replace(/\b(System|Drawing|Windows|Forms|Data|OleDb|Console|Convert|DateTime|Point|Color|Size|Application|MessageBox|Timer|PictureBox|VScrollBar|TextBox|Label|Button|ListBox|ComboBox|DataGridView|DataTable|OleDbConnection|OleDbDataAdapter|Exception|ArithmeticException|ArrayTypeMismatchException|IndexOutOfRangeException)\b/g, '<span class="cs-type">$1</span>');
            // Strings
            highlighted = highlighted.replace(/(&quot;.*?&quot;)/g, '<span class="cs-str">$1</span>');
            // Numbers
            highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="cs-num">$1</span>');
            // Comments
            highlighted = highlighted.replace(/(\/\/.*$)/g, '<span class="cs-comment">$1</span>');

            html += `<span class="line-num">${(idx + 1).toString().padStart(2, ' ')}</span> <span class="line-code">${highlighted}</span>\n`;
        });
        csCodeBlock.innerHTML = html;
    }

    function escapeHtml(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function renderTheoryView(p) {
        const descEl = document.getElementById('theoryDescription');
        const notesEl = document.getElementById('theoryNotes');
        const codeSampleEl = document.getElementById('theoryCodeSample');

        if (descEl) descEl.textContent = p.description || p.aim;
        if (notesEl) {
            notesEl.innerHTML = `
                <li><strong>Assignment Title:</strong> ${p.assignment} - ${p.title}</li>
                <li><strong>Application Model:</strong> ${p.type === 'winform' ? 'Graphical User Interface (System.Windows.Forms)' : 'Command Line Interface (System.Console)'}</li>
                <li><strong>Runtime Environment:</strong> Visual Studio 2008 &bull; .NET Framework 3.5 &bull; C# 3.0</li>
                <li><strong>Execution Pattern:</strong> ${p.type === 'winform' ? 'Event-Driven (Click, Tick, Scroll, Load event handlers)' : 'Sequential / Procedural (Main entry point)'}</li>
            `;
        }
        if (codeSampleEl) {
            codeSampleEl.textContent = p.sampleInput || 'Standard execution';
        }
    }

    // Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const targetPane = document.getElementById(btn.dataset.tab);
            if (targetPane) targetPane.classList.add('active');

            if (btn.dataset.tab === 'tabTerminal') {
                const vsIn = document.getElementById('vsInput');
                if (vsIn) vsIn.focus();
            }
        });
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderProgramList();
    });

    clearLogBtn.addEventListener('click', () => {
        engine.clearLog();
    });

    copyCodeBtn.addEventListener('click', () => {
        if (!activeProgram) return;
        navigator.clipboard.writeText(activeProgram.code).then(() => {
            const orig = copyCodeBtn.innerHTML;
            copyCodeBtn.innerHTML = '<span>✅</span> Copied C#!';
            setTimeout(() => copyCodeBtn.innerHTML = orig, 2000);
        });
    });

    downloadCsBtn.addEventListener('click', () => {
        if (!activeProgram) return;
        const blob = new Blob([activeProgram.code], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const safeName = activeProgram.assignment.toLowerCase().replace(/[^a-z0-9]/g, '_');
        a.download = `${safeName}.cs`;
        a.click();
        URL.revokeObjectURL(url);
    });

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            document.body.classList.toggle('sidebar-open');
        });
    }

    renderCategoryFilters();
    renderProgramList();
    selectProgram(CSHARP_PROGRAMS_DATA[0]);
});
