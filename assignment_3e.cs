using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10;

        do
        {
            Console.WriteLine("Value of a: {0}", a);
            a++;
        }
        while (a < 20);

        Console.ReadLine();
    }
}