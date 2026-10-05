using System;

class Error4
{
    public static void Main(string[] args)
    {
        int[] a = { 5, 10 };
        int b = 5;

        try
        {
            int x = a[2] / b - a[1];
            Console.WriteLine("x = " + x);
        }
        catch (ArithmeticException)
        {
            Console.WriteLine("Division by zero");
        }
        catch (ArrayTypeMismatchException)
        {
            Console.WriteLine("Wrong data type");
        }
        catch (IndexOutOfRangeException)
        {
            Console.WriteLine("ARRAY INDEX ERROR");

            int y = a[1] / a[0];
            Console.WriteLine("y = " + y);
        }

        Console.ReadKey();
    }
}