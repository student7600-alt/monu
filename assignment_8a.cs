using System;

class Error3
{
    public static void Main(string[] args)
    {
        int a = 10;
        int b = 10;
        int c = 5;
        int x = 0;
        int y;

        try
        {
            x = a / (b - c);
        }
        catch (Exception)
        {
            Console.WriteLine("Divide by zero");
        }

        y = a / (b + c);
        Console.WriteLine("y = " + y);

        Console.ReadKey();
    }
}