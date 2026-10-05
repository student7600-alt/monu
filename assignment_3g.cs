using System;

class Program
{
    static void Main(string[] args)
    {
        int[] arrayInt = { 11, 22, 33, 44 };

        foreach (int m in arrayInt)
        {
            Console.Write(" " + m);
        }

        Console.WriteLine();
        Console.ReadKey();
    }
}