using System;

class Boxing
{
    public void DoBoxing()
    {
        int a = 10;
        object obj1 = a;

        string str = "biral";
        object obj = str;

        Console.WriteLine("BOXING");
        Console.WriteLine("Value type = {0}", obj1);
        Console.WriteLine("Object type value = {0}", obj);
    }
}

class Unboxing
{
    public void DoUnboxing()
    {
        Console.WriteLine("UNBOXING");

        object o = 30;
        int i = (int)o;
        Console.WriteLine("Value i = {0}", i);

        object obj2 = 125;
        int b = (int)obj2;
        Console.WriteLine("Final b = {0}", b);
    }
}

class Display
{
    static void Main(string[] args)
    {
        Boxing b = new Boxing();
        b.DoBoxing();

        Unboxing u = new Unboxing();
        u.DoUnboxing();

        Console.WriteLine("Press any key...");
        Console.ReadKey();
    }
}