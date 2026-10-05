using System;

class Program
{
    static void Main(string[] args)
    {
        int a, b, c;

        Console.WriteLine("---------- Arithmetic Operator ----------");
        Console.Write("Enter the 1st Number: ");
        a = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter the 2nd Number: ");
        b = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("---------- Arithmetic Operations ----------");

        c = a + b;
        Console.WriteLine("Addition is: " + c);

        c = a - b;
        Console.WriteLine("Subtraction is: " + c);

        c = a * b;
        Console.WriteLine("Multiplication is: " + c);

        if (b != 0)
            Console.WriteLine("Division is: " + (a / b));
        else
            Console.WriteLine("Division by zero is not allowed.");

        Console.ReadKey();
    }
}