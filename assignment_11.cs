using System;
using System.Drawing;
using System.Windows.Forms;

public class TimerForm : Form
{
    Label label1;
    Timer timer1;
    int second = 0;

    public TimerForm()
    {
        Text = "Timer Control";
        Width = 500;
        Height = 180;

        label1 = new Label();
        label1.AutoSize = true;
        label1.Location = new Point(30, 30);

        timer1 = new Timer();
        timer1.Interval = 1000;
        timer1.Tick += timer1_Tick;
        timer1.Start();

        Controls.Add(label1);
    }

    void timer1_Tick(object sender, EventArgs e)
    {
        label1.Text = DateTime.Now.ToString();
        second++;

        if (second >= 10)
        {
            timer1.Stop();
            MessageBox.Show("Exiting form timer");
        }
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new TimerForm());
    }
}