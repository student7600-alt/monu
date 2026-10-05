using System;

class Program
{
    static void Main(string[] args)
    {
        int a, b, c;

        Console.Write("Enter the first value => ");
        a = int.Parse(Console.ReadLine());

        Console.Write("Enter the Second value => ");
        b = int.Parse(Console.ReadLine());

        try
        {
            if (b == 0)
            {
                throw new Exception("You cannot divide by zero");
            }

            c = a / b;
            Console.WriteLine("Result is => " + c);
        }
        catch (Exception obj)
        {
            Console.WriteLine(obj.Message);
            Console.WriteLine("Sorry, you entered a wrong value");
        }

        Console.ReadKey();
    }
}