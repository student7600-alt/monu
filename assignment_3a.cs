using System;

class Program
{
    static void Main(string[] args)
    {
        int i, n;

        Console.Write("Enter the number: ");
        n = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Multiplication table:");

        for (i = 1; i <= 10; i++)
        {
            Console.WriteLine(n + " x " + i + " = " + (n * i));
        }

        Console.ReadLine();
    }
}