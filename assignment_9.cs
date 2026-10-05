using System;
using System.Drawing;
using System.Windows.Forms;

public class Form1 : Form
{
    Label label1;
    TextBox textBox1;
    Button button1;
    Button button2;
    Button button3;

    public Form1()
    {
        Text = "Label, TextBox and Button";
        Width = 500;
        Height = 250;

        label1 = new Label();
        label1.Text = "Original Label";
        label1.AutoSize = true;
        label1.Location = new Point(30, 30);

        textBox1 = new TextBox();
        textBox1.Text = "Original Text";
        textBox1.Location = new Point(30, 65);

        button1 = new Button();
        button1.Text = "Change Label";
        button1.Location = new Point(30, 110);
        button1.Click += button1_Click;

        button2 = new Button();
        button2.Text = "Red Label";
        button2.Location = new Point(150, 110);
        button2.Click += button2_Click;

        button3 = new Button();
        button3.Text = "Change All";
        button3.Location = new Point(250, 110);
        button3.Click += button3_Click;

        Controls.Add(label1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
    }

    private void button1_Click(object sender, EventArgs e)
    {
        label1.Text = "Hello";
    }

    private void button2_Click(object sender, EventArgs e)
    {
        label1.BackColor = Color.Red;
    }

    private void button3_Click(object sender, EventArgs e)
    {
        label1.Text = "Hello";
        textBox1.Text = "Hello";
        label1.BackColor = Color.Red;
        textBox1.BackColor = Color.Yellow;
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new Form1());
    }
}