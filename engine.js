// C# Interactive Execution & Windows Forms Visualizer Engine
// Supports all 29 programs across Assignments 1 to 13

class CSharpEngine {
    constructor(canvasContainerId, logContainerId) {
        this.canvas = document.getElementById(canvasContainerId);
        this.logEl = document.getElementById(logContainerId);
        this.currentProgram = null;
        this.activeTimer = null;
        this.timerSeconds = 0;
    }

    log(msg, type = 'info') {
        if (!this.logEl) return;
        const entry = document.createElement('div');
        entry.className = `log-entry log-${type}`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        entry.innerHTML = `<span class="log-time">[${time}]</span> <span class="log-msg">${msg}</span>`;
        this.logEl.appendChild(entry);
        this.logEl.scrollTop = this.logEl.scrollHeight;
    }

    clearLog() {
        if (this.logEl) this.logEl.innerHTML = '';
    }

    showDialog(msg, title = "Microsoft Visual C# Application") {
        const dialog = document.createElement('div');
        dialog.className = 'winforms-msgbox-overlay';
        dialog.innerHTML = `
            <div class="winforms-msgbox">
                <div class="winforms-msgbox-header">
                    <span>${title}</span>
                    <button class="winforms-msgbox-close">&times;</button>
                </div>
                <div class="winforms-msgbox-body">
                    <span class="msgbox-icon">ℹ️</span>
                    <div class="msgbox-text">${msg}</div>
                </div>
                <div class="winforms-msgbox-footer">
                    <button class="win-btn win-btn-default msgbox-ok-btn">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);

        const closeBtn = dialog.querySelector('.winforms-msgbox-close');
        const okBtn = dialog.querySelector('.msgbox-ok-btn');
        const dismiss = () => {
            if (dialog.parentNode) dialog.parentNode.removeChild(dialog);
        };
        closeBtn.onclick = dismiss;
        okBtn.onclick = dismiss;
    }

    loadProgram(program) {
        this.currentProgram = program;
        this.clearLog();
        if (this.activeTimer) {
            clearInterval(this.activeTimer);
            this.activeTimer = null;
        }

        if (program.type === 'winform') {
            this.renderWinFormsUI(program.id);
        } else {
            this.renderConsoleUI(program.id);
        }
    }

    // -----------------------------------------------------------------
    // CONSOLE PROGRAMS RENDERER (Assignments 1 to 8)
    // -----------------------------------------------------------------
    renderConsoleUI(pid) {
        if (!this.canvas) return;
        const p = this.currentProgram;

        let controlsHtml = '';
        switch (pid) {
            case 1: // Print string N times
                controlsHtml = `
                    <div class="input-group">
                        <label>String (s1):</label>
                        <input type="text" id="csInputStr" value="Visual Studio 2008 C#" class="app-input" />
                    </div>
                    <div class="input-group">
                        <label>Count (j):</label>
                        <input type="number" id="csInputCount" value="4" min="1" max="50" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 2: // Arithmetic Operators
                controlsHtml = `
                    <div class="input-group">
                        <label>1st Number (a):</label>
                        <input type="number" id="csInputA" value="25" class="app-input" style="width: 100px;" />
                    </div>
                    <div class="input-group">
                        <label>2nd Number (b):</label>
                        <input type="number" id="csInputB" value="5" class="app-input" style="width: 100px;" />
                    </div>
                `;
                break;
            case 3: // All Operators
                controlsHtml = `
                    <div class="input-group">
                        <label>a:</label>
                        <input type="number" id="csInputA" value="10" class="app-input" style="width: 80px;" />
                    </div>
                    <div class="input-group">
                        <label>b:</label>
                        <input type="number" id="csInputB" value="20" class="app-input" style="width: 80px;" />
                    </div>
                    <div class="input-group">
                        <label>number (ternary check):</label>
                        <input type="number" id="csInputNum" value="10" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 4: // Multiplication table
                controlsHtml = `
                    <div class="input-group">
                        <label>Number (n):</label>
                        <input type="number" id="csInputN" value="7" class="app-input" style="width: 90px;" />
                    </div>
                `;
                break;
            case 5: // Star pattern
                controlsHtml = `
                    <div class="input-group">
                        <label>Rows (i = 1 to 5):</label>
                        <input type="number" id="csInputRows" value="5" min="1" max="15" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 6: // While loop
            case 8: // Do-While loop
                controlsHtml = `
                    <div class="input-group">
                        <label>Start Value (a):</label>
                        <input type="number" id="csInputStart" value="10" class="app-input" style="width: 80px;" />
                    </div>
                    <div class="input-group">
                        <label>Upper Bound:</label>
                        <input type="number" id="csInputLimit" value="20" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 7: // Nested while loop (5 down to 1)
                controlsHtml = `
                    <div class="input-group">
                        <label>Max Number (i):</label>
                        <input type="number" id="csInputMax" value="5" min="2" max="9" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 10: // Foreach loop
                controlsHtml = `
                    <div class="input-group" style="flex: 2;">
                        <label>Array Elements (comma separated):</label>
                        <input type="text" id="csInputArray" value="11, 22, 33, 44, 55" class="app-input" />
                    </div>
                `;
                break;
            case 12: // Rectangle constructor
                controlsHtml = `
                    <div class="input-group">
                        <label>Length (x):</label>
                        <input type="number" id="csInputLen" value="15" class="app-input" style="width: 90px;" />
                    </div>
                    <div class="input-group">
                        <label>Width (y):</label>
                        <input type="number" id="csInputWid" value="10" class="app-input" style="width: 90px;" />
                    </div>
                `;
                break;
            case 13: // Demo constructor overloading
                controlsHtml = `
                    <div class="input-group">
                        <label>Param a:</label>
                        <input type="number" id="csInputP1" value="10" class="app-input" style="width: 70px;" />
                    </div>
                    <div class="input-group">
                        <label>Param b:</label>
                        <input type="number" id="csInputP2" value="20" class="app-input" style="width: 70px;" />
                    </div>
                    <div class="input-group">
                        <label>Param c:</label>
                        <input type="number" id="csInputP3" value="30" class="app-input" style="width: 70px;" />
                    </div>
                `;
                break;
            case 16: // Multiple interface Student
                controlsHtml = `
                    <div class="input-group">
                        <label>Roll No:</label>
                        <input type="number" id="csRno" value="101" class="app-input" style="width: 80px;" />
                    </div>
                    <div class="input-group">
                        <label>Name:</label>
                        <input type="text" id="csName" value="Alex Smith" class="app-input" style="width: 120px;" />
                    </div>
                    <div class="input-group">
                        <label>Subject 1:</label>
                        <input type="number" id="csSub1" value="85" class="app-input" style="width: 80px;" />
                    </div>
                    <div class="input-group">
                        <label>Subject 2:</label>
                        <input type="number" id="csSub2" value="92" class="app-input" style="width: 80px;" />
                    </div>
                `;
                break;
            case 21: // Exception handling throw
                controlsHtml = `
                    <div class="input-group">
                        <label>First Value (a):</label>
                        <input type="number" id="csValA" value="50" class="app-input" style="width: 90px;" />
                    </div>
                    <div class="input-group">
                        <label>Second Value (b) [try 0]:</label>
                        <input type="number" id="csValB" value="0" class="app-input" style="width: 110px;" />
                    </div>
                `;
                break;
            default:
                controlsHtml = `<div class="meta-pill">Program uses predefined test values as in Assignment source.</div>`;
                break;
        }

        this.canvas.innerHTML = `
            <div class="interactive-panel">
                <div class="controls-ribbon">
                    ${controlsHtml}
                    <button class="action-btn btn-primary" id="btnRunConsole">
                        <span class="btn-icon">▶️</span> Execute C# Program
                    </button>
                    <button class="action-btn btn-outline" id="btnResetConsole">
                        <span class="btn-icon">🔄</span> Reset
                    </button>
                </div>

                <div class="visualizer-stage cs-console-stage">
                    <div class="cs-terminal-card">
                        <div class="cs-terminal-head">
                            <span class="terminal-dot red"></span>
                            <span class="terminal-dot yellow"></span>
                            <span class="terminal-dot green"></span>
                            <span class="terminal-title">C:\\Windows\\System32\\cmd.exe (Visual Studio 2008 Debug Console)</span>
                        </div>
                        <pre class="cs-terminal-output" id="csConsoleOutput">Click "Execute C# Program" to run the code...</pre>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('btnRunConsole').onclick = () => this.runConsoleProgram(pid);
        document.getElementById('btnResetConsole').onclick = () => {
            const out = document.getElementById('csConsoleOutput');
            if (out) out.textContent = 'Console screen cleared. Ready to execute.';
            this.clearLog();
        };

        // Auto execute on initial load
        this.runConsoleProgram(pid);
    }

    runConsoleProgram(pid) {
        const out = document.getElementById('csConsoleOutput');
        if (!out) return;
        this.clearLog();
        let logBuffer = [];
        const print = (text = '') => {
            logBuffer.push(text);
        };

        this.log(`Compiling and running ${this.currentProgram.title}...`, 'info');

        switch (pid) {
            case 1: {
                const s1 = document.getElementById('csInputStr').value;
                const j = parseInt(document.getElementById('csInputCount').value, 10) || 1;
                print(`Enter the string: ${s1}`);
                print(`How many times to print: ${j}`);
                for (let i = 1; i <= j; i++) {
                    print(` ${s1}`);
                }
                break;
            }
            case 2: {
                const a = parseInt(document.getElementById('csInputA').value, 10) || 0;
                const b = parseInt(document.getElementById('csInputB').value, 10) || 0;
                print("---------- Arithmetic Operator ----------");
                print(`Enter the 1st Number: ${a}`);
                print(`Enter the 2nd Number: ${b}`);
                print("---------- Arithmetic Operations ----------");
                print(`Addition is: ${a + b}`);
                print(`Subtraction is: ${a - b}`);
                print(`Multiplication is: ${a * b}`);
                if (b !== 0) {
                    print(`Division is: ${Math.floor(a / b)}`);
                } else {
                    print("Division by zero is not allowed.");
                }
                break;
            }
            case 3: {
                const a = parseInt(document.getElementById('csInputA').value, 10) || 10;
                const b = parseInt(document.getElementById('csInputB').value, 10) || 20;
                const number = parseInt(document.getElementById('csInputNum').value, 10) || 10;
                print(`a = ${a}`);
                print(`b = ${b}`);
                print("\n1. Arithmetic Operators");
                print(`(a+b) = ${a + b}`);
                print(`(a-b) = ${a - b}`);
                print(`(a/b) = ${Math.floor(a / b)}`);
                print(`(a*b) = ${a * b}`);
                print(`(a%b) = ${a % b}`);
                print("\n2. Relational Operators");
                print(`(a==b) = ${a === b}`);
                print(`(a<b) = ${a < b}`);
                print(`(a>b) = ${a > b}`);
                print(`(a>=b) = ${a >= b}`);
                print(`(a<=b) = ${a <= b}`);
                print(`(a!=b) = ${a !== b}`);
                print("\n3. Logical Operators");
                const res1 = (a === b) || (a > b);
                print(`a==b || a>b = ${res1}`);
                const res2 = (a === b) && (a > b);
                print(`a==b && a>b = ${res2}`);
                print("\n4. Bitwise Operators");
                print(`(a&b) = ${a & b}`);
                print(`(a|b) = ${a | b}`);
                print(`(a^b) = ${a ^ b}`);
                print(`(a<<1) = ${a << 1}`);
                print(`(a>>1) = ${a >> 1}`);
                print("\n5. Ternary Operator");
                const resTernary = (number % 2 === 0) ? "Even Number" : "Odd Number";
                print(`${number} is ${resTernary}`);
                break;
            }
            case 4: {
                const n = parseInt(document.getElementById('csInputN').value, 10) || 7;
                print(`Enter the number: ${n}`);
                print("Multiplication table:");
                for (let i = 1; i <= 10; i++) {
                    print(`${n} x ${i} = ${n * i}`);
                }
                break;
            }
            case 5: {
                const rows = parseInt(document.getElementById('csInputRows').value, 10) || 5;
                for (let i = 1; i <= rows; i++) {
                    let starLine = '';
                    for (let j = 1; j <= i; j++) starLine += '*';
                    print(starLine);
                }
                break;
            }
            case 6: {
                let a = parseInt(document.getElementById('csInputStart').value, 10) || 10;
                const limit = parseInt(document.getElementById('csInputLimit').value, 10) || 20;
                while (a < limit) {
                    print(`Value of a: ${a}`);
                    a++;
                }
                break;
            }
            case 7: {
                const max = parseInt(document.getElementById('csInputMax').value, 10) || 5;
                let i = max;
                while (i >= 1) {
                    let j = max;
                    let line = '';
                    while (j >= i) {
                        line += j;
                        j--;
                    }
                    print(line);
                    i--;
                }
                break;
            }
            case 8: {
                let a = parseInt(document.getElementById('csInputStart').value, 10) || 10;
                const limit = parseInt(document.getElementById('csInputLimit').value, 10) || 20;
                do {
                    print(`Value of a: ${a}`);
                    a++;
                } while (a < limit);
                break;
            }
            case 9: {
                let i = 0;
                do {
                    print(`Value of i: ${i}`);
                    let j = i;
                    do {
                        print(`Value of j: ${j}`);
                        j++;
                    } while (j < 2);
                    i++;
                } while (i < 2);
                break;
            }
            case 10: {
                const arrVal = document.getElementById('csInputArray').value;
                const arrayInt = arrVal.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
                let outputStr = '';
                for (const m of arrayInt) {
                    outputStr += ` ${m}`;
                }
                print(outputStr);
                break;
            }
            case 11: {
                print("// Executing Taxi class constructor:");
                print("Taxi t = new Taxi();");
                print("True");
                break;
            }
            case 12: {
                const len = parseInt(document.getElementById('csInputLen').value, 10) || 15;
                const wid = parseInt(document.getElementById('csInputWid').value, 10) || 10;
                print(`Rectangle r = new Rectangle(${len}, ${wid});`);
                print(`Area of rectangle is ${len * wid}`);
                break;
            }
            case 13: {
                const a = parseInt(document.getElementById('csInputP1').value, 10) || 10;
                const b = parseInt(document.getElementById('csInputP2').value, 10) || 20;
                const c = parseInt(document.getElementById('csInputP3').value, 10) || 30;
                print("The Constructor with no Parameter:");
                print(`\nConstructor With One Parameter x = ${a}`);
                print(`Square of x is ${a * a}`);
                print("\nConstructor With Two Parameter:");
                print(`A = ${a}`);
                print(`B = ${b}`);
                print(`Addition is a+b = ${a + b}`);
                print("\nConstructor With Three Parameter:");
                print(`A = ${a}`);
                print(`B = ${b}`);
                print(`C = ${c}`);
                print(`Addition is a+b+c = ${a + b + c}`);
                print("\nPress any key...");
                break;
            }
            case 14: {
                print("Item code = XXX");
                print("Item code = XXX");
                print("Fan model: class");
                break;
            }
            case 15: {
                print("Marks of Student is: 60");
                print("Rollno of student is: 31");
                print("Percentage of student is: 70%");
                break;
            }
            case 16: {
                const rno = document.getElementById('csRno').value;
                const name = document.getElementById('csName').value;
                const sub1 = document.getElementById('csSub1').value;
                const sub2 = document.getElementById('csSub2').value;
                print(`Enter the Roll No: ${rno}`);
                print(`Enter the Name: ${name}`);
                print(`Enter the Marks of Subject 1: ${sub1}`);
                print(`Enter the Marks of Subject 2: ${sub2}`);
                print(`Roll No is: ${rno}`);
                print(`Name is: ${name}`);
                print(`Subject 1 is: ${sub1}`);
                print(`Subject 2 is: ${sub2}`);
                break;
            }
            case 17: {
                print("BOXING");
                print("Value type = 10");
                print("Object type value = biral");
                print("UNBOXING");
                print("Value i = 30");
                print("Final b = 125");
                print("Press any key...");
                break;
            }
            case 18: {
                print("INDEXING");
                print("---------------------");
                const names = ["Gaurav", "Vikas", "Ashish", "Prabhat", "Vickey"];
                names.forEach(n => print(n));
                print("");
                print("PROPERTY");
                print("---------------------");
                print("p.Z = 40");
                break;
            }
            case 19: {
                print("// Executing Error3:");
                print("// try: x = a / (b - c) where b=10, c=5 -> x = 10 / 5 = 2");
                print("// y = a / (b + c) -> y = 10 / 15 = 0");
                print("y = 0");
                break;
            }
            case 20: {
                print("// Executing Error4:");
                print("// int[] a = { 5, 10 }; b = 5;");
                print("// a[2] / b throws IndexOutOfRangeException");
                print("ARRAY INDEX ERROR");
                print("y = 2");
                break;
            }
            case 21: {
                const a = parseInt(document.getElementById('csValA').value, 10);
                const b = parseInt(document.getElementById('csValB').value, 10);
                print(`Enter the first value => ${a}`);
                print(`Enter the Second value => ${b}`);
                if (b === 0) {
                    print("You cannot divide by zero");
                    print("Sorry, you entered a wrong value");
                    this.log("Exception caught: 'You cannot divide by zero'", 'warn');
                } else {
                    const c = Math.floor(a / b);
                    print(`Result is => ${c}`);
                    this.log(`Calculated result c = ${c}`, 'success');
                }
                break;
            }
        }

        out.textContent = logBuffer.join('\n');
        this.log("Execution finished successfully.", 'success');
    }

    // -----------------------------------------------------------------
    // WINDOWS FORMS SIMULATOR (Assignments 9 to 13)
    // -----------------------------------------------------------------
    renderWinFormsUI(pid) {
        if (!this.canvas) return;

        let formHtml = '';
        switch (pid) {
            case 22: // Assignment 9: Label, TextBox & Button
                formHtml = this.getForm1Html();
                break;
            case 23: // Assignment 10a: ListBox
                formHtml = this.getListBoxFormHtml();
                break;
            case 24: // Assignment 10b: ComboBox
                formHtml = this.getComboBoxFormHtml();
                break;
            case 25: // Assignment 11: Timer
                formHtml = this.getTimerFormHtml();
                break;
            case 26: // Assignment 12a: PictureBox
                formHtml = this.getPictureBoxFormHtml();
                break;
            case 27: // Assignment 12b: ScrollBar RGB
                formHtml = this.getScrollBarFormHtml(false);
                break;
            case 28: // Assignment 12c: ScrollBar + PictureBox
                formHtml = this.getScrollBarFormHtml(true);
                break;
            case 29: // Assignment 13: Database Form
                formHtml = this.getDatabaseFormHtml();
                break;
        }

        this.canvas.innerHTML = `
            <div class="interactive-panel">
                <div class="winforms-container-stage">
                    <div class="winforms-desktop">
                        ${formHtml}
                    </div>
                </div>
            </div>
        `;

        this.bindWinFormsEvents(pid);
    }

    getForm1Html() {
        return `
            <div class="win-window" style="width: 520px; height: 260px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">🪟</span> Label, TextBox and Button</div>
                    <div class="win-controls">
                        <span class="win-ctrl-btn min">_</span>
                        <span class="win-ctrl-btn max">□</span>
                        <span class="win-ctrl-btn close">✕</span>
                    </div>
                </div>
                <div class="win-body" style="padding: 25px; position: relative;">
                    <div id="wfLabel1" class="wf-label" style="position: absolute; left: 30px; top: 25px; padding: 4px 8px; font-weight: 500;">Original Label</div>
                    <input type="text" id="wfTextBox1" class="wf-textbox" value="Original Text" style="position: absolute; left: 30px; top: 65px; width: 180px;" />
                    
                    <button id="wfBtn1" class="win-btn" style="position: absolute; left: 30px; top: 120px; width: 100px;">Change Label</button>
                    <button id="wfBtn2" class="win-btn" style="position: absolute; left: 145px; top: 120px; width: 90px;">Red Label</button>
                    <button id="wfBtn3" class="win-btn" style="position: absolute; left: 250px; top: 120px; width: 100px;">Change All</button>
                </div>
            </div>
        `;
    }

    getListBoxFormHtml() {
        return `
            <div class="win-window" style="width: 520px; height: 360px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">📋</span> ListBox Program</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 25px; position: relative;">
                    <select id="wfListBox1" class="wf-listbox" size="8" style="position: absolute; left: 30px; top: 30px; width: 140px; height: 240px;">
                        <option value="A" selected>A</option>
                        <option value="B">B</option>
                    </select>
                    
                    <input type="text" id="wfListTxt" class="wf-textbox" placeholder="New item..." style="position: absolute; left: 200px; top: 30px; width: 180px;" />
                    
                    <button id="wfListShow" class="win-btn" style="position: absolute; left: 200px; top: 70px; width: 110px;">Show</button>
                    <button id="wfListAdd" class="win-btn" style="position: absolute; left: 200px; top: 110px; width: 110px;">Add</button>
                    <button id="wfListRemove" class="win-btn" style="position: absolute; left: 200px; top: 150px; width: 110px;">Remove</button>
                    <button id="wfListRed" class="win-btn" style="position: absolute; left: 200px; top: 190px; width: 110px;">Red</button>
                    <button id="wfListExit" class="win-btn" style="position: absolute; left: 200px; top: 230px; width: 110px;">Exit</button>
                </div>
            </div>
        `;
    }

    getComboBoxFormHtml() {
        return `
            <div class="win-window" style="width: 500px; height: 310px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">🔽</span> ComboBox Program</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 25px; position: relative;">
                    <select id="wfCombo1" class="wf-combobox" style="position: absolute; left: 30px; top: 30px; width: 140px;">
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>

                    <input type="text" id="wfComboTxt" class="wf-textbox" placeholder="Item name..." style="position: absolute; left: 200px; top: 30px; width: 180px;" />

                    <button id="wfComboShow" class="win-btn" style="position: absolute; left: 200px; top: 70px; width: 100px;">Show</button>
                    <button id="wfComboAdd" class="win-btn" style="position: absolute; left: 200px; top: 110px; width: 100px;">Add</button>
                    <button id="wfComboRemove" class="win-btn" style="position: absolute; left: 200px; top: 150px; width: 100px;">Remove</button>
                    <button id="wfComboYellow" class="win-btn" style="position: absolute; left: 200px; top: 190px; width: 100px;">Yellow</button>
                </div>
            </div>
        `;
    }

    getTimerFormHtml() {
        return `
            <div class="win-window" style="width: 500px; height: 220px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">⏱️</span> Timer Control</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 30px;">
                    <div id="wfTimerLabel" style="font-size: 1.15rem; font-weight: bold; font-family: 'Consolas', monospace; color: #0f172a; margin-bottom: 1.25rem;">
                        ${new Date().toLocaleString()}
                    </div>
                    <div style="font-size: 0.85rem; color: #475569; margin-bottom: 1rem;">
                        Timer Interval = 1000ms &bull; Elapsed Ticks: <strong id="wfTickCount" style="color: #2563eb;">0</strong> / 10s
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button id="wfTimerStart" class="win-btn" style="width: 110px;">Restart Timer</button>
                        <button id="wfTimerStop" class="win-btn" style="width: 90px;">Stop</button>
                    </div>
                </div>
            </div>
        `;
    }

    getPictureBoxFormHtml() {
        return `
            <div class="win-window" style="width: 520px; height: 440px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">🖼️</span> PictureBox</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 15px;">
                    <div class="wf-picturebox-frame" style="width: 100%; height: 340px; background: #e2e8f0; border: 2px inset #94a3b8; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                        <img src="https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=600&auto=format&fit=crop&q=80" alt="Chrysanthemum" style="width: 100%; height: 100%; object-fit: fill;" />
                        <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 8px; font-size: 0.72rem; border-radius: 4px;">
                            SizeMode: StretchImage
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getScrollBarFormHtml(withPicture = false) {
        return `
            <div class="win-window" style="width: ${withPicture ? '680px' : '480px'}; height: 350px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">🎨</span> ${withPicture ? 'ScrollBar and PictureBox' : 'ScrollBar Control'}</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 20px; display: flex; gap: 20px; align-items: flex-start;">
                    ${withPicture ? `
                        <div style="width: 200px; height: 240px; border: 2px inset #94a3b8; background: #cbd5e1; overflow: hidden;">
                            <img src="https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?w=400&auto=format&fit=crop&q=80" style="width: 100%; height: 100%; object-fit: fill;" />
                        </div>
                    ` : ''}

                    <div>
                        <textarea id="wfColorTextBox" class="wf-textbox" style="width: 190px; height: 80px; font-size: 0.85rem; font-family: monospace; resize: none; background: rgb(0,0,0); color: white; padding: 8px;" readonly>
Color.FromArgb(0, 0, 0)
RGB: 0, 0, 0
                        </textarea>
                        <div style="margin-top: 15px; font-size: 0.78rem; color: #475569;">
                            Adjust vertical sliders (0-255) to mix RGB colors.
                        </div>
                    </div>

                    <div style="display: flex; gap: 16px; margin-left: auto;">
                        <div class="win-scrollbar-col">
                            <span class="scroll-tag red">R: <strong id="rVal">0</strong></span>
                            <input type="range" orient="vertical" id="wfScrollR" min="0" max="255" value="0" class="win-vscroll" />
                        </div>
                        <div class="win-scrollbar-col">
                            <span class="scroll-tag green">G: <strong id="gVal">0</strong></span>
                            <input type="range" orient="vertical" id="wfScrollG" min="0" max="255" value="0" class="win-vscroll" />
                        </div>
                        <div class="win-scrollbar-col">
                            <span class="scroll-tag blue">B: <strong id="bVal">0</strong></span>
                            <input type="range" orient="vertical" id="wfScrollB" min="0" max="255" value="0" class="win-vscroll" />
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getDatabaseFormHtml() {
        return `
            <div class="win-window" style="width: 720px; height: 420px;">
                <div class="win-titlebar">
                    <div class="win-title"><span class="win-icon">🗄️</span> Student Database (OLE DB Connection + DataGridView)</div>
                    <div class="win-controls"><span class="win-ctrl-btn close">✕</span></div>
                </div>
                <div class="win-body" style="padding: 16px; display: flex; flex-direction: column; gap: 12px; height: 100%;">
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <input type="text" id="dbSearchInput" class="wf-textbox" placeholder="Search student name or roll no..." style="flex: 1;" />
                        <button id="dbAddRowBtn" class="win-btn" style="width: 120px;">+ Add Student</button>
                    </div>

                    <div class="wf-datagridview-wrap">
                        <table class="wf-datagridview" id="wfStudentGrid">
                            <thead>
                                <tr>
                                    <th>StudentID</th>
                                    <th>StudentName</th>
                                    <th>StudentRollNo</th>
                                    <th>Gender</th>
                                </tr>
                            </thead>
                            <tbody id="dbTableBody">
                                <tr><td>1</td><td>John Doe</td><td>101</td><td>Male</td></tr>
                                <tr><td>2</td><td>Emily Watson</td><td>102</td><td>Female</td></tr>
                                <tr><td>3</td><td>Michael Chang</td><td>103</td><td>Male</td></tr>
                                <tr><td>4</td><td>Sophia Patel</td><td>104</td><td>Female</td></tr>
                                <tr><td>5</td><td>David Miller</td><td>105</td><td>Male</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div style="font-size: 0.72rem; color: #475569; display: flex; justify-content: space-between;">
                        <span>Data Source: C:\\StudentDatabase\\Database1.mdb</span>
                        <span id="dbRowCountLbl">5 record(s) loaded via OleDbDataAdapter</span>
                    </div>
                </div>
            </div>
        `;
    }

    bindWinFormsEvents(pid) {
        this.log(`Mounted Windows Forms Form for Program ${pid}.`, 'info');

        if (pid === 22) { // Label, TextBox & Button
            const lbl = document.getElementById('wfLabel1');
            const txt = document.getElementById('wfTextBox1');
            document.getElementById('wfBtn1').onclick = () => {
                lbl.textContent = "Hello";
                this.log("button1_Click: label1.Text = 'Hello'", 'success');
            };
            document.getElementById('wfBtn2').onclick = () => {
                lbl.style.backgroundColor = "red";
                lbl.style.color = "white";
                this.log("button2_Click: label1.BackColor = Color.Red", 'success');
            };
            document.getElementById('wfBtn3').onclick = () => {
                lbl.textContent = "Hello";
                txt.value = "Hello";
                lbl.style.backgroundColor = "red";
                lbl.style.color = "white";
                txt.style.backgroundColor = "yellow";
                this.log("button3_Click: Changed all texts to 'Hello', label Red, textbox Yellow.", 'success');
            };
        } else if (pid === 23) { // ListBox Form
            const list = document.getElementById('wfListBox1');
            const txt = document.getElementById('wfListTxt');

            document.getElementById('wfListShow').onclick = () => {
                const selected = list.value || "(None selected)";
                this.showDialog(selected, "ListBox1 Selection");
                this.log(`button1_Click: MessageBox.Show("${selected}")`, 'info');
            };
            document.getElementById('wfListAdd').onclick = () => {
                const val = txt.value.trim();
                if (!val) return;
                const opt = document.createElement('option');
                opt.value = val;
                opt.textContent = val;
                list.appendChild(opt);
                txt.value = "";
                this.log(`button2_Click: Added '${val}' to ListBox`, 'success');
            };
            document.getElementById('wfListRemove').onclick = () => {
                if (list.selectedIndex >= 0) {
                    const removed = list.options[list.selectedIndex].text;
                    list.remove(list.selectedIndex);
                    this.log(`button3_Click: Removed item '${removed}'`, 'warn');
                }
            };
            document.getElementById('wfListRed').onclick = () => {
                list.style.backgroundColor = "red";
                list.style.color = "white";
                this.log("button4_Click: listBox1.BackColor = Color.Red", 'success');
            };
            document.getElementById('wfListExit').onclick = () => {
                this.log("button5_Click: Application.Exit() called.", 'info');
                this.showDialog("Application.Exit() executed successfully.", "Exit");
            };
        } else if (pid === 24) { // ComboBox Form
            const combo = document.getElementById('wfCombo1');
            const txt = document.getElementById('wfComboTxt');

            document.getElementById('wfComboShow').onclick = () => {
                const selected = combo.value || "(None)";
                this.showDialog(selected, "ComboBox1 Selection");
                this.log(`button1_Click: MessageBox.Show("${selected}")`, 'info');
            };
            document.getElementById('wfComboAdd').onclick = () => {
                const val = txt.value.trim();
                if (!val) return;
                const opt = document.createElement('option');
                opt.value = val;
                opt.textContent = val;
                combo.appendChild(opt);
                combo.value = val;
                txt.value = "";
                this.log(`button2_Click: Added '${val}' to ComboBox`, 'success');
            };
            document.getElementById('wfComboRemove').onclick = () => {
                if (combo.selectedIndex >= 0) {
                    const removed = combo.options[combo.selectedIndex].text;
                    combo.remove(combo.selectedIndex);
                    this.log(`button3_Click: Removed item '${removed}'`, 'warn');
                }
            };
            document.getElementById('wfComboYellow').onclick = () => {
                combo.style.backgroundColor = "yellow";
                this.log("button4_Click: comboBox1.BackColor = Color.Yellow", 'success');
            };
        } else if (pid === 25) { // Timer Form
            const lbl = document.getElementById('wfTimerLabel');
            const tickLbl = document.getElementById('wfTickCount');
            this.timerSeconds = 0;

            const startTimer = () => {
                if (this.activeTimer) clearInterval(this.activeTimer);
                this.timerSeconds = 0;
                tickLbl.textContent = '0';
                this.log("Timer started. (Interval = 1000ms)", 'info');

                this.activeTimer = setInterval(() => {
                    lbl.textContent = new Date().toLocaleString();
                    this.timerSeconds++;
                    tickLbl.textContent = this.timerSeconds;
                    this.log(`Timer tick: second = ${this.timerSeconds}`, 'info');

                    if (this.timerSeconds >= 10) {
                        clearInterval(this.activeTimer);
                        this.activeTimer = null;
                        this.log("second >= 10 reached: Timer stopped. Exiting form timer.", 'warn');
                        this.showDialog("Exiting form timer", "Timer Form");
                    }
                }, 1000);
            };

            document.getElementById('wfTimerStart').onclick = () => startTimer();
            document.getElementById('wfTimerStop').onclick = () => {
                if (this.activeTimer) {
                    clearInterval(this.activeTimer);
                    this.activeTimer = null;
                    this.log("Timer stopped manually.", 'info');
                }
            };
            startTimer();
        } else if (pid === 27 || pid === 28) { // ScrollBars RGB
            const txt = document.getElementById('wfColorTextBox');
            const sR = document.getElementById('wfScrollR');
            const sG = document.getElementById('wfScrollG');
            const sB = document.getElementById('wfScrollB');
            const rVal = document.getElementById('rVal');
            const gVal = document.getElementById('gVal');
            const bVal = document.getElementById('bVal');

            const updateColor = () => {
                const r = sR.value;
                const g = sG.value;
                const b = sB.value;
                rVal.textContent = r;
                gVal.textContent = g;
                bVal.textContent = b;
                txt.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                // Text color contrast
                const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                txt.style.color = brightness > 128 ? '#000000' : '#ffffff';
                txt.value = `Color.FromArgb(${r}, ${g}, ${b})\nRGB: ${r}, ${g}, ${b}`;
            };

            sR.oninput = () => { updateColor(); this.log(`vScrollBar1_Scroll: Red = ${sR.value}`, 'info'); };
            sG.oninput = () => { updateColor(); this.log(`vScrollBar2_Scroll: Green = ${sG.value}`, 'info'); };
            sB.oninput = () => { updateColor(); this.log(`vScrollBar3_Scroll: Blue = ${sB.value}`, 'info'); };
            updateColor();
        } else if (pid === 29) { // Database Form
            const tbody = document.getElementById('dbTableBody');
            const countLbl = document.getElementById('dbRowCountLbl');
            const search = document.getElementById('dbSearchInput');
            let students = [
                { id: 1, name: "John Doe", roll: 101, gender: "Male" },
                { id: 2, name: "Emily Watson", roll: 102, gender: "Female" },
                { id: 3, name: "Michael Chang", roll: 103, gender: "Male" },
                { id: 4, name: "Sophia Patel", roll: 104, gender: "Female" },
                { id: 5, name: "David Miller", roll: 105, gender: "Male" }
            ];

            const renderGrid = (filter = '') => {
                tbody.innerHTML = '';
                const rows = students.filter(s => 
                    s.name.toLowerCase().includes(filter.toLowerCase()) || 
                    s.roll.toString().includes(filter)
                );
                rows.forEach(s => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `<td>${s.id}</td><td>${s.name}</td><td>${s.roll}</td><td>${s.gender}</td>`;
                    tbody.appendChild(tr);
                });
                countLbl.textContent = `${rows.length} record(s) loaded via OleDbDataAdapter`;
            };

            search.oninput = (e) => renderGrid(e.target.value.trim());

            document.getElementById('dbAddRowBtn').onclick = () => {
                const nextId = students.length + 1;
                const newStud = {
                    id: nextId,
                    name: `Student ${nextId}`,
                    roll: 100 + nextId,
                    gender: nextId % 2 === 0 ? "Female" : "Male"
                };
                students.push(newStud);
                renderGrid(search.value.trim());
                this.log(`Inserted new record: ID ${newStud.id}, ${newStud.name}, Roll ${newStud.roll}`, 'success');
            };
        }
    }
}

window.CSharpEngine = CSharpEngine;
