using System;

interface Info
{
    void GetInfo();
}

interface Marks
{
    void GetMarks();
}

class Student : Info, Marks
{
    int rno, sub1, sub2;
    string name;

    public void GetInfo()
    {
        Console.Write("Enter the Roll No: ");
        rno = int.Parse(Console.ReadLine());

        Console.Write("Enter the Name: ");
        name = Console.ReadLine();
    }

    public void GetMarks()
    {
        Console.Write("Enter the Marks of Subject 1: ");
        sub1 = int.Parse(Console.ReadLine());

        Console.Write("Enter the Marks of Subject 2: ");
        sub2 = int.Parse(Console.ReadLine());
    }

    public void Show()
    {
        Console.WriteLine("Roll No is: " + rno);
        Console.WriteLine("Name is: " + name);
        Console.WriteLine("Subject 1 is: " + sub1);
        Console.WriteLine("Subject 2 is: " + sub2);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Student d = new Student();

        d.GetInfo();
        d.GetMarks();
        d.Show();

        Console.ReadKey();
    }
}