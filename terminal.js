// Visual Studio .NET / C# Interactive Console Simulator

class CSharpTerminal {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.outputEl = null;
        this.inputEl = null;
        this.currentProgram = null;
        this.init();
    }

    init() {
        if (!this.container) return;
        this.container.innerHTML = `
            <div class="vs-terminal-window">
                <div class="vs-terminal-header">
                    <div class="vs-tabs">
                        <span class="vs-tab active">Command Prompt - Visual Studio 2008</span>
                        <span class="vs-tab">Debug Output</span>
                    </div>
                    <button class="vs-clear-btn" id="vsClearBtn">cls</button>
                </div>
                <div class="vs-terminal-body" id="vsOutput"></div>
                <div class="vs-input-line">
                    <span class="vs-prompt">C:\\Projects\\CSharpLab&gt;</span>
                    <input type="text" id="vsInput" class="vs-input" placeholder="Type input and press Enter..." autocomplete="off" spellcheck="false" />
                    <button class="vs-send-btn" id="vsSendBtn">Send Input</button>
                </div>
            </div>
        `;

        this.outputEl = document.getElementById('vsOutput');
        this.inputEl = document.getElementById('vsInput');

        document.getElementById('vsClearBtn').addEventListener('click', () => this.clearScreen());
        this.inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleInput(this.inputEl.value);
                this.inputEl.value = '';
            }
        });
        document.getElementById('vsSendBtn').addEventListener('click', () => {
            this.handleInput(this.inputEl.value);
            this.inputEl.value = '';
        });
    }

    clearScreen() {
        if (this.outputEl) {
            this.outputEl.innerHTML = '';
            this.printLine('Microsoft Windows [Version 6.1.7601]', 'vs-dim');
            this.printLine('Visual Studio 2008 Command Prompt - .NET Framework v3.5 / C# 3.0', 'vs-dim');
            this.printLine('------------------------------------------------------------------', 'vs-dim');
        }
    }

    printLine(text, className = '') {
        if (!this.outputEl) return;
        const div = document.createElement('div');
        if (className) div.className = className;
        div.textContent = text;
        this.outputEl.appendChild(div);
        this.outputEl.scrollTop = this.outputEl.scrollHeight;
    }

    loadProgram(program) {
        this.currentProgram = program;
        this.clearScreen();
        this.printLine(`csc ${program.assignment.toLowerCase().replace(/[^a-z0-9]/g, '_')}.cs`, 'vs-command');
        this.printLine(`Microsoft (R) Visual C# 2008 Compiler version 3.5.30729.1`, 'vs-dim');
        this.printLine(`Compilation successful. Running ${program.title}...`, 'vs-success');
        this.printLine('');

        if (program.type === 'winform') {
            this.printLine(`[Windows Forms Application Launched]`, 'vs-cyan');
            this.printLine(`Form: ${program.title}`);
            this.printLine(`Notice: Switch to the 'Interactive Windows Forms / Visualizer' tab to interact with the live graphical window!`, 'vs-yellow');
        } else {
            this.printLine(`Console application initialized. Ready for input.`, 'vs-info');
            if (program.sampleInput) {
                this.printLine(`Suggested input: ${program.sampleInput}`, 'vs-dim');
            }
        }
    }

    handleInput(val) {
        val = val.trim();
        if (!val) return;
        this.printLine(`> ${val}`, 'vs-user');

        if (!this.currentProgram) return;

        // Route to console runner if appropriate
        this.printLine(`Console.ReadLine() received: "${val}"`, 'vs-info');
    }
}

window.CSharpTerminal = CSharpTerminal;
