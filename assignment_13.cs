using System;
using System.Data;
using System.Data.OleDb;
using System.Drawing;
using System.Windows.Forms;

public class DatabaseForm : Form
{
    DataGridView dataGridView1;

    public DatabaseForm()
    {
        Text = "Student Database";
        Width = 750;
        Height = 400;

        dataGridView1 = new DataGridView();
        dataGridView1.Dock = DockStyle.Fill;
        dataGridView1.AutoSizeColumnsMode =
            DataGridViewAutoSizeColumnsMode.Fill;

        Controls.Add(dataGridView1);
        Load += DatabaseForm_Load;
    }

    private void DatabaseForm_Load(object sender, EventArgs e)
    {
        string databasePath =
            @"C:\StudentDatabase\Database1.mdb";

        string connectionString =
            "Provider=Microsoft.Jet.OLEDB.4.0;" +
            "Data Source=" + databasePath + ";";

        string query =
            "SELECT StudentID, StudentName, StudentRollNo, Gender " +
            "FROM Student";

        try
        {
            using (OleDbConnection connection =
                new OleDbConnection(connectionString))
            {
                using (OleDbDataAdapter adapter =
                    new OleDbDataAdapter(query, connection))
                {
                    DataTable table = new DataTable();
                    adapter.Fill(table);
                    dataGridView1.DataSource = table;
                }
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show(
                "Database connection failed:\n" + ex.Message);
        }
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new DatabaseForm());
    }
}