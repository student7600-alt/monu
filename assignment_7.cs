using System;

class Indexing
{
    private string[] range = new string[5];

    public string this[int index]
    {
        get
        {
            return range[index];
        }
        set
        {
            range[index] = value;
        }
    }
}

class PropertyDemo
{
    private int x;

    public PropertyDemo(int i)
    {
        x = i;
    }

    public int Z
    {
        get
        {
            return x;
        }
        set
        {
            x = value;
        }
    }
}

class Disp
{
    static void Main(string[] args)
    {
        Indexing id = new Indexing();

        Console.WriteLine("INDEXING");
        Console.WriteLine("---------------------");

        id[0] = "Gaurav";
        id[1] = "Vikas";
        id[2] = "Ashish";
        id[3] = "Prabhat";
        id[4] = "Vickey";

        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine(id[i]);
        }

        Console.WriteLine();
        Console.WriteLine("PROPERTY");
        Console.WriteLine("---------------------");

        PropertyDemo p = new PropertyDemo(40);
        Console.WriteLine("p.Z = " + p.Z);

        Console.ReadKey();
    }
}