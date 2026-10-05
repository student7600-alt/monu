using System;

class Demo
{
    public Demo()
    {
        Console.WriteLine("\nThe Constructor with no Parameter:");
    }

    public Demo(int a)
    {
        int x = a;
        Console.WriteLine("\nConstructor With One Parameter x = " + x);
        Console.WriteLine("Square of x is " + (x * x));
    }

    public Demo(int a, int b)
    {
        Console.WriteLine("\nConstructor With Two Parameter:");
        Console.WriteLine("A = " + a);
        Console.WriteLine("B = " + b);

        int c = a + b;
        Console.WriteLine("Addition is a+b = " + c);
    }

    public Demo(int a, int b, int c)
    {
        Console.WriteLine("\nConstructor With Three Parameter:");
        Console.WriteLine("A = " + a);
        Console.WriteLine("B = " + b);
        Console.WriteLine("C = " + c);

        int d = a + b + c;
        Console.WriteLine("Addition is a+b+c = " + d);
    }
}

class Display
{
    static void Main(string[] args)
    {
        Demo d1 = new Demo();
        Demo d2 = new Demo(10);
        Demo d3 = new Demo(10, 20);
        Demo d4 = new Demo(10, 20, 30);

        Console.WriteLine("Press any key...");
        Console.ReadKey();
    }
}