using System;
using System.Drawing;
using System.Windows.Forms;

public class ScrollBarForm : Form
{
    TextBox textBox1;
    VScrollBar vScrollBar1, vScrollBar2, vScrollBar3;
    int r = 0, g = 0, b = 0;

    public ScrollBarForm()
    {
        Text = "ScrollBar Control";
        Width = 450;
        Height = 300;

        textBox1 = new TextBox();
        textBox1.Location = new Point(30, 30);
        textBox1.Width = 200;
        textBox1.Height = 80;
        textBox1.Multiline = true;

        vScrollBar1 = MakeBar(260);
        vScrollBar2 = MakeBar(310);
        vScrollBar3 = MakeBar(360);

        vScrollBar1.Scroll += vScrollBar1_Scroll;
        vScrollBar2.Scroll += vScrollBar2_Scroll;
        vScrollBar3.Scroll += vScrollBar3_Scroll;

        Controls.Add(textBox1);
        Controls.Add(vScrollBar1);
        Controls.Add(vScrollBar2);
        Controls.Add(vScrollBar3);
    }

    VScrollBar MakeBar(int x)
    {
        VScrollBar bar = new VScrollBar();
        bar.Location = new Point(x, 30);
        bar.Height = 150;
        bar.Minimum = 0;
        bar.Maximum = 255;
        bar.Value = 25;
        return bar;
    }

    void UpdateColor()
    {
        textBox1.BackColor = Color.FromArgb(r, g, b);
    }

    void vScrollBar1_Scroll(object sender, ScrollEventArgs e)
    {
        r = vScrollBar1.Value;
        UpdateColor();
    }

    void vScrollBar2_Scroll(object sender, ScrollEventArgs e)
    {
        g = vScrollBar2.Value;
        UpdateColor();
    }

    void vScrollBar3_Scroll(object sender, ScrollEventArgs e)
    {
        b = vScrollBar3.Value;
        UpdateColor();
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ScrollBarForm());
    }
}