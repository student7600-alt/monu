using System;

class Program
{
    static void Main(string[] args)
    {
        int i = 0;

        do
        {
            Console.WriteLine("Value of i: {0}", i);

            int j = i;

            do
            {
                Console.WriteLine("Value of j: {0}", j);
                j++;
            }
            while (j < 2);

            i++;
        }
        while (i < 2);

        Console.ReadKey();
    }
}