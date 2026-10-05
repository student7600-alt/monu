using System;
using System.Drawing;
using System.Windows.Forms;

public class PictureBoxForm : Form
{
    PictureBox pictureBox1;

    public PictureBoxForm()
    {
        Text = "PictureBox";
        Width = 500;
        Height = 450;

        pictureBox1 = new PictureBox();
        pictureBox1.Location = new Point(10, 10);
        pictureBox1.Width = 400;
        pictureBox1.Height = 400;
        pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
        pictureBox1.Dock = DockStyle.Left;

        string path = @"C:\Users\Public\Pictures\Sample Pictures\Chrysanthemum.jpg";

        if (System.IO.File.Exists(path))
            pictureBox1.Image = Image.FromFile(path);
        else
            pictureBox1.BackColor = Color.LightGray;

        Controls.Add(pictureBox1);
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new PictureBoxForm());
    }
}