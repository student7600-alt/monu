using System;
using System.Drawing;
using System.Windows.Forms;

public class ListBoxForm : Form
{
    ListBox listBox1;
    TextBox textBox1;
    Button button1, button2, button3, button4, button5;

    public ListBoxForm()
    {
        Text = "ListBox Program";
        Width = 500;
        Height = 350;

        listBox1 = new ListBox();
        listBox1.Location = new Point(30, 30);
        listBox1.Items.Add("A");
        listBox1.Items.Add("B");

        textBox1 = new TextBox();
        textBox1.Location = new Point(200, 30);

        button1 = MakeButton("Show", 200, 70, button1_Click);
        button2 = MakeButton("Add", 200, 110, button2_Click);
        button3 = MakeButton("Remove", 200, 150, button3_Click);
        button4 = MakeButton("Red", 200, 190, button4_Click);
        button5 = MakeButton("Exit", 200, 230, button5_Click);

        Controls.Add(listBox1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
        Controls.Add(button4);
        Controls.Add(button5);
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
        MessageBox.Show(listBox1.Text);
    }

    void button2_Click(object sender, EventArgs e)
    {
        listBox1.Items.Add(textBox1.Text);
        textBox1.Text = "";
    }

    void button3_Click(object sender, EventArgs e)
    {
        int n = listBox1.SelectedIndex;
        if (n >= 0)
            listBox1.Items.RemoveAt(n);
    }

    void button4_Click(object sender, EventArgs e)
    {
        listBox1.BackColor = Color.Red;
    }

    void button5_Click(object sender, EventArgs e)
    {
        Application.Exit();
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ListBoxForm());
    }
}