using System;

class StudScience
{
    public void Marks()
    {
        Console.WriteLine("Marks of Student is: 60");
    }
}

class StudCommerce : StudScience
{
    public void RollNo()
    {
        Console.WriteLine("Rollno of student is: 31");
    }
}

class Stud : StudCommerce
{
    public void Percentage()
    {
        Console.WriteLine("Percentage of student is: 70%");
    }
}

class Display
{
    static void Main(string[] args)
    {
        Stud student = new Stud();

        student.Marks();
        student.RollNo();
        student.Percentage();

        Console.ReadKey();
    }
}