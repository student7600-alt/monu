using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10, b = 20;
        int number = 10;
        bool result;
        string result1;

        Console.WriteLine("a = " + a);
        Console.WriteLine("b = " + b);

        Console.WriteLine("\n1. Arithmetic Operators");
        Console.WriteLine("(a+b) = " + (a + b));
        Console.WriteLine("(a-b) = " + (a - b));
        Console.WriteLine("(a/b) = " + (a / b));
        Console.WriteLine("(a*b) = " + (a * b));
        Console.WriteLine("(a%b) = " + (a % b));

        Console.WriteLine("\n2. Relational Operators");
        Console.WriteLine("(a==b) = " + (a == b));
        Console.WriteLine("(a<b) = " + (a < b));
        Console.WriteLine("(a>b) = " + (a > b));
        Console.WriteLine("(a>=b) = " + (a >= b));
        Console.WriteLine("(a<=b) = " + (a <= b));
        Console.WriteLine("(a!=b) = " + (a != b));

        Console.WriteLine("\n3. Logical Operators");
        result = (a == b) || (a > b);
        Console.WriteLine("a==b || a>b = " + result);
        result = (a == b) && (a > b);
        Console.WriteLine("a==b && a>b = " + result);

        Console.WriteLine("\n4. Bitwise Operators");
        Console.WriteLine("(a&b) = " + (a & b));
        Console.WriteLine("(a|b) = " + (a | b));
        Console.WriteLine("(a^b) = " + (a ^ b));
        Console.WriteLine("(a<<1) = " + (a << 1));
        Console.WriteLine("(a>>1) = " + (a >> 1));

        Console.WriteLine("\n5. Ternary Operator");
        result1 = (number % 2 == 0) ? "Even Number" : "Odd Number";
        Console.WriteLine("{0} is {1}", number, result1);

        Console.ReadKey();
    }
}