using System;

class Taxi
{
    public bool isInitialized;

    public Taxi()
    {
        isInitialized = true;
    }
}

class TestTaxi
{
    static void Main(string[] args)
    {
        Taxi t = new Taxi();
        Console.WriteLine(t.isInitialized);
        Console.ReadKey();
    }
}