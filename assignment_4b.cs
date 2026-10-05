using System;

class Rectangle
{
    public int length, width;

    public Rectangle(int x, int y)
    {
        length = x;
        width = y;
    }

    public int RectArea()
    {
        return length * width;
    }
}

class RectArea
{
    static void Main()
    {
        Rectangle r = new Rectangle(15, 10);
        int a = r.RectArea();

        Console.WriteLine("Area of rectangle is " + a);
        Console.ReadKey();
    }
}