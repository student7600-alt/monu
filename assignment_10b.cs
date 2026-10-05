using System;
using System.Drawing;
using System.Windows.Forms;

public class ComboBoxForm : Form
{
    ComboBox comboBox1;
    TextBox textBox1;

    public ComboBoxForm()
    {
        Text = "ComboBox Program";
        Width = 500;
        Height = 300;

        comboBox1 = new ComboBox();
        comboBox1.Location = new Point(30, 30);
        comboBox1.Items.Add("A");
        comboBox1.Items.Add("B");

        textBox1 = new TextBox();
        textBox1.Location = new Point(200, 30);

        Button button1 = MakeButton("Show", 200, 70, button1_Click);
        Button button2 = MakeButton("Add", 200, 110, button2_Click);
        Button button3 = MakeButton("Remove", 200, 150, button3_Click);
        Button button4 = MakeButton("Yellow", 200, 190, button4_Click);

        Controls.Add(comboBox1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
        Controls.Add(button4);
    }

    Button MakeButton(string text, int x, int y, EventHandler handler)
    {
        Button b = new Button();
        b.Text = text;
        b.Location = new Point(x, y);
        b.Click += handler;
        return b;
    }

    void button1_Click(object sender, EventArgs e)
    {
        MessageBox.Show(comboBox1.Text);
    }

    void button2_Click(object sender, EventArgs e)
    {
        comboBox1.Items.Add(textBox1.Text);
        textBox1.Text = "";
    }

    void button3_Click(object sender, EventArgs e)
    {
        int n = comboBox1.SelectedIndex;
        if (n >= 0)
            comboBox1.Items.RemoveAt(n);
    }

    void button4_Click(object sender, EventArgs e)
    {
        comboBox1.BackColor = Color.Yellow;
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ComboBoxForm());
    }
}