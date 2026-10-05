using System;

class Program
{
    static void Main(string[] args)
    {
        int i, j;

        Console.Write("Enter the string: ");
        string s1 = Console.ReadLine();

        Console.Write("How many times to print: ");
        j = Convert.ToInt32(Console.ReadLine());

        for (i = 1; i <= j; i++)
        {
            Console.WriteLine(" " + s1);
        }

        Console.ReadKey();
    }
}