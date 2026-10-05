using System;
using System.Drawing;
using System.Windows.Forms;

public class ScrollPictureForm : Form
{
    PictureBox pictureBox1;
    TextBox textBox1;
    VScrollBar vScrollBar1, vScrollBar2, vScrollBar3;
    int r = 0, g = 0, b = 0;

    public ScrollPictureForm()
    {
        Text = "ScrollBar and PictureBox";
        Width = 700;
        Height = 350;

        pictureBox1 = new PictureBox();
        pictureBox1.Location = new Point(10, 10);
        pictureBox1.Width = 240;
        pictureBox1.Height = 240;
        pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;

        string path = @"C:\Users\Public\Pictures\Sample Pictures\Chrysanthemum.jpg";
        if (System.IO.File.Exists(path))
            pictureBox1.Image = Image.FromFile(path);

        textBox1 = new TextBox();
        textBox1.Location = new Point(280, 30);
        textBox1.Width = 200;
        textBox1.Height = 70;
        textBox1.Multiline = true;

        vScrollBar1 = MakeBar(500);
        vScrollBar2 = MakeBar(550);
        vScrollBar3 = MakeBar(600);

        vScrollBar1.Scroll += vScrollBar1_Scroll;
        vScrollBar2.Scroll += vScrollBar2_Scroll;
        vScrollBar3.Scroll += vScrollBar3_Scroll;

        Controls.Add(pictureBox1);
        Controls.Add(textBox1);
        Controls.Add(vScrollBar1);
        Controls.Add(vScrollBar2);
        Controls.Add(vScrollBar3);
    }

    VScrollBar MakeBar(int x)
    {
        VScrollBar bar = new VScrollBar();
        bar.Location = new Point(x, 30);
        bar.Height = 180;
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
        Application.Run(new ScrollPictureForm());
    }
}