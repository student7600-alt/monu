using System;

class Item
{
    public void Company()
    {
        Console.WriteLine("Item code = XXX");
    }
}

class Fan : Item
{
    public void Model()
    {
        Console.WriteLine("Fan model: class");
    }
}

class SimpleInheritance
{
    static void Main(string[] args)
    {
        Item i = new Item();
        Fan f = new Fan();

        i.Company();
        f.Company();
        f.Model();

        Console.ReadKey();
    }
}