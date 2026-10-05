import json
import os

programs = [
    {
        "id": 1,
        "assignment": "Assignment 1",
        "title": "Print a Given String N Times",
        "category": "Basic I/O & Loops",
        "type": "console",
        "aim": "Write a C# program to read a string and a count from the user, then print the string that number of times.",
        "timeComplexity": "O(j)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int i, j;

        Console.Write("Enter the string: ");
        string s1 = Console.ReadLine();

        Console.Write("How many times to print: ");
        j = Convert.ToInt32(Console.ReadLine());

        for (i = 1; i <= j; i++)
        {
            Console.WriteLine(" " + s1);
        }

        Console.ReadKey();
    }
}""",
        "description": "Reads a string and integer j from standard input, using a for loop from 1 to j to repeatedly output the string.",
        "sampleInput": "Hello C#, 4"
    },
    {
        "id": 2,
        "assignment": "Assignment 2a",
        "title": "Arithmetic Operators (+, -, *, /)",
        "category": "Operators",
        "type": "console",
        "aim": "Write a C# program to perform basic arithmetic operations (addition, subtraction, multiplication, division) on two user-supplied integers with division-by-zero protection.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int a, b, c;

        Console.WriteLine("---------- Arithmetic Operator ----------");
        Console.Write("Enter the 1st Number: ");
        a = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter the 2nd Number: ");
        b = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("---------- Arithmetic Operations ----------");

        c = a + b;
        Console.WriteLine("Addition is: " + c);

        c = a - b;
        Console.WriteLine("Subtraction is: " + c);

        c = a * b;
        Console.WriteLine("Multiplication is: " + c);

        if (b != 0)
            Console.WriteLine("Division is: " + (a / b));
        else
            Console.WriteLine("Division by zero is not allowed.");

        Console.ReadKey();
    }
}""",
        "description": "Demonstrates addition (+), subtraction (-), multiplication (*), and safe integer division (/ with zero guard).",
        "sampleInput": "20, 5"
    },
    {
        "id": 3,
        "assignment": "Assignment 2b",
        "title": "All C# Operators Demonstration",
        "category": "Operators",
        "type": "console",
        "aim": "Write a C# program to demonstrate Arithmetic, Relational, Logical, Bitwise, and Ternary operators.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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

        Console.WriteLine("\\n1. Arithmetic Operators");
        Console.WriteLine("(a+b) = " + (a + b));
        Console.WriteLine("(a-b) = " + (a - b));
        Console.WriteLine("(a/b) = " + (a / b));
        Console.WriteLine("(a*b) = " + (a * b));
        Console.WriteLine("(a%b) = " + (a % b));

        Console.WriteLine("\\n2. Relational Operators");
        Console.WriteLine("(a==b) = " + (a == b));
        Console.WriteLine("(a<b) = " + (a < b));
        Console.WriteLine("(a>b) = " + (a > b));
        Console.WriteLine("(a>=b) = " + (a >= b));
        Console.WriteLine("(a<=b) = " + (a <= b));
        Console.WriteLine("(a!=b) = " + (a != b));

        Console.WriteLine("\\n3. Logical Operators");
        result = (a == b) || (a > b);
        Console.WriteLine("a==b || a>b = " + result);
        result = (a == b) && (a > b);
        Console.WriteLine("a==b && a>b = " + result);

        Console.WriteLine("\\n4. Bitwise Operators");
        Console.WriteLine("(a&b) = " + (a & b));
        Console.WriteLine("(a|b) = " + (a | b));
        Console.WriteLine("(a^b) = " + (a ^ b));
        Console.WriteLine("(a<<1) = " + (a << 1));
        Console.WriteLine("(a>>1) = " + (a >> 1));

        Console.WriteLine("\\n5. Ternary Operator");
        result1 = (number % 2 == 0) ? "Even Number" : "Odd Number";
        Console.WriteLine("{0} is {1}", number, result1);

        Console.ReadKey();
    }
}""",
        "description": "Examines all 5 categories of operators in C#: Arithmetic (+,-,*,/,%), Relational (==,<,>,>=,<=,!=), Logical (||, &&), Bitwise (&, |, ^, <<, >>), and Ternary conditional operator (? :).",
        "sampleInput": "10, 20"
    },
    {
        "id": 4,
        "assignment": "Assignment 3a",
        "title": "Multiplication Table (for loop)",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to print the multiplication table of a given number using a for loop from 1 to 10.",
        "timeComplexity": "O(10) = O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int i, n;

        Console.Write("Enter the number: ");
        n = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Multiplication table:");

        for (i = 1; i <= 10; i++)
        {
            Console.WriteLine(n + " x " + i + " = " + (n * i));
        }

        Console.ReadLine();
    }
}""",
        "description": "Prints a mathematical multiplication table from 1 to 10 using a standard for loop.",
        "sampleInput": "7"
    },
    {
        "id": 5,
        "assignment": "Assignment 3b",
        "title": "Star Pattern (Nested for loop)",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to print a right-angled triangle star pattern using nested for loops.",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        for (int i = 1; i <= 5; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                Console.Write("*");
            }

            Console.WriteLine();
        }

        Console.ReadLine();
    }
}""",
        "description": "Uses an outer loop for rows (1 to 5) and an inner loop for columns (1 to i) to output a star triangle.",
        "sampleInput": "5"
    },
    {
        "id": 6,
        "assignment": "Assignment 3c",
        "title": "While Loop (Iterate 10 to 20)",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to print values from 10 to 19 using a while loop.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10;

        while (a < 20)
        {
            Console.WriteLine("Value of a: {0}", a);
            a++;
        }

        Console.ReadLine();
    }
}""",
        "description": "Initializes a=10, repeatedly executes while a < 20 and increments a.",
        "sampleInput": "10"
    },
    {
        "id": 7,
        "assignment": "Assignment 3d",
        "title": "Nested While Loop (Number Pattern)",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to display an inverted number pattern using nested while loops.",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int i = 5;

        while (i >= 1)
        {
            int j = 5;

            while (j >= i)
            {
                Console.Write(j);
                j--;
            }

            Console.WriteLine();
            i--;
        }

        Console.ReadKey();
    }
}""",
        "description": "Prints decreasing number rows (5, 54, 543, 5432, 54321) using nested while loops.",
        "sampleInput": "5"
    },
    {
        "id": 8,
        "assignment": "Assignment 3e",
        "title": "Do-While Loop",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to illustrate the do-while loop structure.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int a = 10;

        do
        {
            Console.WriteLine("Value of a: {0}", a);
            a++;
        }
        while (a < 20);

        Console.ReadLine();
    }
}""",
        "description": "The do-while loop guarantees at least one execution of the body prior to evaluating the condition.",
        "sampleInput": "10"
    },
    {
        "id": 9,
        "assignment": "Assignment 3f",
        "title": "Nested Do-While Loop",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to demonstrate nested do-while loops.",
        "timeComplexity": "O(n²)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Executes nested do-while loops displaying values of i and j.",
        "sampleInput": "0"
    },
    {
        "id": 10,
        "assignment": "Assignment 3g",
        "title": "Foreach Loop (Array Traversal)",
        "category": "Loops & Iterations",
        "type": "console",
        "aim": "Write a C# program to traverse and display elements of an integer array using a foreach loop.",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int[] arrayInt = { 11, 22, 33, 44 };

        foreach (int m in arrayInt)
        {
            Console.Write(" " + m);
        }

        Console.WriteLine();
        Console.ReadKey();
    }
}""",
        "description": "The foreach construct provides simple, readable, forward-only enumeration over collections.",
        "sampleInput": "11, 22, 33, 44"
    },
    {
        "id": 11,
        "assignment": "Assignment 4a",
        "title": "Zero-Argument Constructor (Taxi)",
        "category": "Constructors & OOP",
        "type": "console",
        "aim": "Write a C# program to demonstrate a default (zero-argument) constructor.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "When instantiated with new Taxi(), the default parameterless constructor initializes the Taxi instance.",
        "sampleInput": "None"
    },
    {
        "id": 12,
        "assignment": "Assignment 4b",
        "title": "Two-Argument Constructor (Rectangle)",
        "category": "Constructors & OOP",
        "type": "console",
        "aim": "Write a C# program to calculate the area of a rectangle using a parameterized constructor.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Initializes length and width via the 2-argument constructor, then computes area with RectArea().",
        "sampleInput": "15, 10"
    },
    {
        "id": 13,
        "assignment": "Assignment 4c",
        "title": "Constructor Overloading (Demo Class)",
        "category": "Constructors & OOP",
        "type": "console",
        "aim": "Write a C# program to demonstrate constructor overloading with 0, 1, 2, and 3 parameters.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Demo
{
    public Demo()
    {
        Console.WriteLine("\\nThe Constructor with no Parameter:");
    }

    public Demo(int a)
    {
        int x = a;
        Console.WriteLine("\\nConstructor With One Parameter x = " + x);
        Console.WriteLine("Square of x is " + (x * x));
    }

    public Demo(int a, int b)
    {
        Console.WriteLine("\\nConstructor With Two Parameter:");
        Console.WriteLine("A = " + a);
        Console.WriteLine("B = " + b);

        int c = a + b;
        Console.WriteLine("Addition is a+b = " + c);
    }

    public Demo(int a, int b, int c)
    {
        Console.WriteLine("\\nConstructor With Three Parameter:");
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
}""",
        "description": "Demonstrates compile-time constructor polymorphism: selecting constructor based on argument signature.",
        "sampleInput": "10, 20, 30"
    },
    {
        "id": 14,
        "assignment": "Assignment 5a",
        "title": "Single Inheritance (Item -> Fan)",
        "category": "Inheritance",
        "type": "console",
        "aim": "Write a C# program to demonstrate single inheritance.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Derived class Fan inherits method Company() from base class Item and adds its own Model() method.",
        "sampleInput": "None"
    },
    {
        "id": 15,
        "assignment": "Assignment 5b",
        "title": "Multilevel Inheritance (StudScience -> StudCommerce -> Stud)",
        "category": "Inheritance",
        "type": "console",
        "aim": "Write a C# program to demonstrate multilevel inheritance across 3 levels.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class StudScience
{
    public void Marks()
    {
        Console.WriteLine("Marks of Student is: 60");
    }
}

class StudCommerce : StudScience
{
    public void RollNo()
    {
        Console.WriteLine("Rollno of student is: 31");
    }
}

class Stud : StudCommerce
{
    public void Percentage()
    {
        Console.WriteLine("Percentage of student is: 70%");
    }
}

class Display
{
    static void Main(string[] args)
    {
        Stud student = new Stud();

        student.Marks();
        student.RollNo();
        student.Percentage();

        Console.ReadKey();
    }
}""",
        "description": "Stud inherits from StudCommerce which in turn inherits from StudScience, forming an inheritance chain.",
        "sampleInput": "None"
    },
    {
        "id": 16,
        "assignment": "Assignment 5c",
        "title": "Multiple Interface Inheritance (Info, Marks)",
        "category": "Inheritance",
        "type": "console",
        "aim": "Write a C# program to implement multiple inheritance using C# interfaces (Info and Marks).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

interface Info
{
    void GetInfo();
}

interface Marks
{
    void GetMarks();
}

class Student : Info, Marks
{
    int rno, sub1, sub2;
    string name;

    public void GetInfo()
    {
        Console.Write("Enter the Roll No: ");
        rno = int.Parse(Console.ReadLine());

        Console.Write("Enter the Name: ");
        name = Console.ReadLine();
    }

    public void GetMarks()
    {
        Console.Write("Enter the Marks of Subject 1: ");
        sub1 = int.Parse(Console.ReadLine());

        Console.Write("Enter the Marks of Subject 2: ");
        sub2 = int.Parse(Console.ReadLine());
    }

    public void Show()
    {
        Console.WriteLine("Roll No is: " + rno);
        Console.WriteLine("Name is: " + name);
        Console.WriteLine("Subject 1 is: " + sub1);
        Console.WriteLine("Subject 2 is: " + sub2);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Student d = new Student();

        d.GetInfo();
        d.GetMarks();
        d.Show();

        Console.ReadKey();
    }
}""",
        "description": "C# does not allow multiple class inheritance, but allows a class to implement multiple interfaces.",
        "sampleInput": "101, Alex, 85, 92"
    },
    {
        "id": 17,
        "assignment": "Assignment 6",
        "title": "Boxing and Unboxing",
        "category": "Type System",
        "type": "console",
        "aim": "Write a C# program to demonstrate Boxing (converting value type to object) and Unboxing (extracting value type from object).",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Boxing wraps a value type into a System.Object on the managed heap. Unboxing explicitly casts it back to stack value type.",
        "sampleInput": "None"
    },
    {
        "id": 18,
        "assignment": "Assignment 7",
        "title": "Properties and Indexers",
        "category": "Language Features",
        "type": "console",
        "aim": "Write a C# program to implement an Indexer on an internal array and a Property with get and set accessors.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(n)",
        "code": """using System;

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
}""",
        "description": "Indexers allow instances of a class to be indexed just like arrays using 'this[int index]'. Properties encapsulate private fields.",
        "sampleInput": "None"
    },
    {
        "id": 19,
        "assignment": "Assignment 8a",
        "title": "Exception Handling (Single Catch)",
        "category": "Exception Handling",
        "type": "console",
        "aim": "Write a C# program to catch runtime division by zero using a try-catch block.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Guards against arithmetic exceptions within try block, gracefully handling errors with catch (Exception).",
        "sampleInput": "None"
    },
    {
        "id": 20,
        "assignment": "Assignment 8b",
        "title": "Multiple Catch Blocks",
        "category": "Exception Handling",
        "type": "console",
        "aim": "Write a C# program demonstrating multiple catch blocks to intercept Arithmetic, ArrayMismatch, and IndexOutOfRange exceptions.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

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
}""",
        "description": "Accessing a[2] on an array of length 2 triggers IndexOutOfRangeException, falling into the specific catch handler.",
        "sampleInput": "None"
    },
    {
        "id": 21,
        "assignment": "Assignment 8c",
        "title": "Exception Handling using throw Statement",
        "category": "Exception Handling",
        "type": "console",
        "aim": "Write a C# program to explicitly throw a custom Exception using the 'throw' keyword when a divisor is zero.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;

class Program
{
    static void Main(string[] args)
    {
        int a, b, c;

        Console.Write("Enter the first value => ");
        a = int.Parse(Console.ReadLine());

        Console.Write("Enter the Second value => ");
        b = int.Parse(Console.ReadLine());

        try
        {
            if (b == 0)
            {
                throw new Exception("You cannot divide by zero");
            }

            c = a / b;
            Console.WriteLine("Result is => " + c);
        }
        catch (Exception obj)
        {
            Console.WriteLine(obj.Message);
            Console.WriteLine("Sorry, you entered a wrong value");
        }

        Console.ReadKey();
    }
}""",
        "description": "Tests b == 0 and manually triggers an exception object with 'throw new Exception(...)'.",
        "sampleInput": "50, 0"
    },
    {
        "id": 22,
        "assignment": "Assignment 9",
        "title": "Windows Forms: Label, TextBox & Button",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Create a Windows Form containing Label, TextBox, and three interactive Buttons (Change Label, Red Label, Change All).",
        "timeComplexity": "Event-driven",
        "spaceComplexity": "O(1)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class Form1 : Form
{
    Label label1;
    TextBox textBox1;
    Button button1;
    Button button2;
    Button button3;

    public Form1()
    {
        Text = "Label, TextBox and Button";
        Width = 500;
        Height = 250;

        label1 = new Label();
        label1.Text = "Original Label";
        label1.AutoSize = true;
        label1.Location = new Point(30, 30);

        textBox1 = new TextBox();
        textBox1.Text = "Original Text";
        textBox1.Location = new Point(30, 65);

        button1 = new Button();
        button1.Text = "Change Label";
        button1.Location = new Point(30, 110);
        button1.Click += button1_Click;

        button2 = new Button();
        button2.Text = "Red Label";
        button2.Location = new Point(150, 110);
        button2.Click += button2_Click;

        button3 = new Button();
        button3.Text = "Change All";
        button3.Location = new Point(250, 110);
        button3.Click += button3_Click;

        Controls.Add(label1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
    }

    private void button1_Click(object sender, EventArgs e)
    {
        label1.Text = "Hello";
    }

    private void button2_Click(object sender, EventArgs e)
    {
        label1.BackColor = Color.Red;
    }

    private void button3_Click(object sender, EventArgs e)
    {
        label1.Text = "Hello";
        textBox1.Text = "Hello";
        label1.BackColor = Color.Red;
        textBox1.BackColor = Color.Yellow;
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new Form1());
    }
}""",
        "description": "Interactive Windows Forms application where button click events modify the Text and BackColor of controls.",
        "sampleInput": "Interactive click events"
    },
    {
        "id": 23,
        "assignment": "Assignment 10a",
        "title": "Windows Forms: ListBox Control",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Create a Windows Form containing a ListBox and controls to Show selected, Add item, Remove item, and set Red background.",
        "timeComplexity": "Event-driven",
        "spaceComplexity": "O(n)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class ListBoxForm : Form
{
    ListBox listBox1;
    TextBox textBox1;
    Button button1, button2, button3, button4, button5;

    public ListBoxForm()
    {
        Text = "ListBox Program";
        Width = 500;
        Height = 350;

        listBox1 = new ListBox();
        listBox1.Location = new Point(30, 30);
        listBox1.Items.Add("A");
        listBox1.Items.Add("B");

        textBox1 = new TextBox();
        textBox1.Location = new Point(200, 30);

        button1 = MakeButton("Show", 200, 70, button1_Click);
        button2 = MakeButton("Add", 200, 110, button2_Click);
        button3 = MakeButton("Remove", 200, 150, button3_Click);
        button4 = MakeButton("Red", 200, 190, button4_Click);
        button5 = MakeButton("Exit", 200, 230, button5_Click);

        Controls.Add(listBox1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
        Controls.Add(button4);
        Controls.Add(button5);
    }

    Button MakeButton(string text, int x, int y, EventHandler handler)
    {
        Button b = new Button();
        b.Text = text;
        b.Location = new Point(x, y);
        b.Click += handler;
        return b;
    }

    void button1_Click(object sender, EventArgs e)
    {
        MessageBox.Show(listBox1.Text);
    }

    void button2_Click(object sender, EventArgs e)
    {
        listBox1.Items.Add(textBox1.Text);
        textBox1.Text = "";
    }

    void button3_Click(object sender, EventArgs e)
    {
        int n = listBox1.SelectedIndex;
        if (n >= 0)
            listBox1.Items.RemoveAt(n);
    }

    void button4_Click(object sender, EventArgs e)
    {
        listBox1.BackColor = Color.Red;
    }

    void button5_Click(object sender, EventArgs e)
    {
        Application.Exit();
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ListBoxForm());
    }
}""",
        "description": "Manipulates items in System.Windows.Forms.ListBox (Items.Add, Items.RemoveAt) with interactive message box feedback.",
        "sampleInput": "Interactive list manipulation"
    },
    {
        "id": 24,
        "assignment": "Assignment 10b",
        "title": "Windows Forms: ComboBox Control",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Create a Windows Form containing a ComboBox to Show, Add, Remove, and set Yellow background color.",
        "timeComplexity": "Event-driven",
        "spaceComplexity": "O(n)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class ComboBoxForm : Form
{
    ComboBox comboBox1;
    TextBox textBox1;

    public ComboBoxForm()
    {
        Text = "ComboBox Program";
        Width = 500;
        Height = 300;

        comboBox1 = new ComboBox();
        comboBox1.Location = new Point(30, 30);
        comboBox1.Items.Add("A");
        comboBox1.Items.Add("B");

        textBox1 = new TextBox();
        textBox1.Location = new Point(200, 30);

        Button button1 = MakeButton("Show", 200, 70, button1_Click);
        Button button2 = MakeButton("Add", 200, 110, button2_Click);
        Button button3 = MakeButton("Remove", 200, 150, button3_Click);
        Button button4 = MakeButton("Yellow", 200, 190, button4_Click);

        Controls.Add(comboBox1);
        Controls.Add(textBox1);
        Controls.Add(button1);
        Controls.Add(button2);
        Controls.Add(button3);
        Controls.Add(button4);
    }

    Button MakeButton(string text, int x, int y, EventHandler handler)
    {
        Button b = new Button();
        b.Text = text;
        b.Location = new Point(x, y);
        b.Click += handler;
        return b;
    }

    void button1_Click(object sender, EventArgs e)
    {
        MessageBox.Show(comboBox1.Text);
    }

    void button2_Click(object sender, EventArgs e)
    {
        comboBox1.Items.Add(textBox1.Text);
        textBox1.Text = "";
    }

    void button3_Click(object sender, EventArgs e)
    {
        int n = comboBox1.SelectedIndex;
        if (n >= 0)
            comboBox1.Items.RemoveAt(n);
    }

    void button4_Click(object sender, EventArgs e)
    {
        comboBox1.BackColor = Color.Yellow;
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ComboBoxForm());
    }
}""",
        "description": "Demonstrates drop-down ComboBox control item management and style properties in Windows Forms.",
        "sampleInput": "Interactive combo dropdown"
    },
    {
        "id": 25,
        "assignment": "Assignment 11",
        "title": "Windows Forms: Timer Control",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Write a Windows Forms program using a Timer control to update the live system DateTime every second up to 10 seconds.",
        "timeComplexity": "O(1) / tick",
        "spaceComplexity": "O(1)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class TimerForm : Form
{
    Label label1;
    Timer timer1;
    int second = 0;

    public TimerForm()
    {
        Text = "Timer Control";
        Width = 500;
        Height = 180;

        label1 = new Label();
        label1.AutoSize = true;
        label1.Location = new Point(30, 30);

        timer1 = new Timer();
        timer1.Interval = 1000;
        timer1.Tick += timer1_Tick;
        timer1.Start();

        Controls.Add(label1);
    }

    void timer1_Tick(object sender, EventArgs e)
    {
        label1.Text = DateTime.Now.ToString();
        second++;

        if (second >= 10)
        {
            timer1.Stop();
            MessageBox.Show("Exiting form timer");
        }
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new TimerForm());
    }
}""",
        "description": "Demonstrates Timer with 1000ms tick interval, updating DateTime.Now string and stopping automatically after 10 ticks.",
        "sampleInput": "Timer tick events"
    },
    {
        "id": 26,
        "assignment": "Assignment 12a",
        "title": "Windows Forms: PictureBox Control",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Write a Windows Forms program to display an image with PictureBox using StretchImage size mode.",
        "timeComplexity": "O(1)",
        "spaceComplexity": "O(1)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class PictureBoxForm : Form
{
    PictureBox pictureBox1;

    public PictureBoxForm()
    {
        Text = "PictureBox";
        Width = 500;
        Height = 450;

        pictureBox1 = new PictureBox();
        pictureBox1.Location = new Point(10, 10);
        pictureBox1.Width = 400;
        pictureBox1.Height = 400;
        pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
        pictureBox1.Dock = DockStyle.Left;

        string path = @"C:\\Users\\Public\\Pictures\\Sample Pictures\\Chrysanthemum.jpg";

        if (System.IO.File.Exists(path))
            pictureBox1.Image = Image.FromFile(path);
        else
            pictureBox1.BackColor = Color.LightGray;

        Controls.Add(pictureBox1);
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new PictureBoxForm());
    }
}""",
        "description": "Displays an image inside a PictureBox control with PictureBoxSizeMode.StretchImage docking left.",
        "sampleInput": "Image render"
    },
    {
        "id": 27,
        "assignment": "Assignment 12b",
        "title": "Windows Forms: ScrollBar RGB Color Mixer",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Write a Windows Forms program using three vertical ScrollBars (0 to 255) to mix RGB colors live into a TextBox background.",
        "timeComplexity": "O(1) / event",
        "spaceComplexity": "O(1)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class ScrollBarForm : Form
{
    TextBox textBox1;
    VScrollBar vScrollBar1, vScrollBar2, vScrollBar3;
    int r = 0, g = 0, b = 0;

    public ScrollBarForm()
    {
        Text = "ScrollBar Control";
        Width = 450;
        Height = 300;

        textBox1 = new TextBox();
        textBox1.Location = new Point(30, 30);
        textBox1.Width = 200;
        textBox1.Height = 80;
        textBox1.Multiline = true;

        vScrollBar1 = MakeBar(260);
        vScrollBar2 = MakeBar(310);
        vScrollBar3 = MakeBar(360);

        vScrollBar1.Scroll += vScrollBar1_Scroll;
        vScrollBar2.Scroll += vScrollBar2_Scroll;
        vScrollBar3.Scroll += vScrollBar3_Scroll;

        Controls.Add(textBox1);
        Controls.Add(vScrollBar1);
        Controls.Add(vScrollBar2);
        Controls.Add(vScrollBar3);
    }

    VScrollBar MakeBar(int x)
    {
        VScrollBar bar = new VScrollBar();
        bar.Location = new Point(x, 30);
        bar.Height = 150;
        bar.Minimum = 0;
        bar.Maximum = 255;
        bar.Value = 25;
        return bar;
    }

    void UpdateColor()
    {
        textBox1.BackColor = Color.FromArgb(r, g, b);
    }

    void vScrollBar1_Scroll(object sender, ScrollEventArgs e)
    {
        r = vScrollBar1.Value;
        UpdateColor();
    }

    void vScrollBar2_Scroll(object sender, ScrollEventArgs e)
    {
        g = vScrollBar2.Value;
        UpdateColor();
    }

    void vScrollBar3_Scroll(object sender, ScrollEventArgs e)
    {
        b = vScrollBar3.Value;
        UpdateColor();
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ScrollBarForm());
    }
}""",
        "description": "Three VScrollBar controls correspond to Red, Green, and Blue channels. Scroll events call Color.FromArgb(r, g, b).",
        "sampleInput": "Drag RGB sliders"
    },
    {
        "id": 28,
        "assignment": "Assignment 12c",
        "title": "Windows Forms: ScrollBar + PictureBox",
        "category": "Windows Forms GUI",
        "type": "winform",
        "aim": "Integrate PictureBox, Multiline TextBox, and three VScrollBars in a single Windows Form.",
        "timeComplexity": "O(1) / event",
        "spaceComplexity": "O(1)",
        "code": """using System;
using System.Drawing;
using System.Windows.Forms;

public class ScrollPictureForm : Form
{
    PictureBox pictureBox1;
    TextBox textBox1;
    VScrollBar vScrollBar1, vScrollBar2, vScrollBar3;
    int r = 0, g = 0, b = 0;

    public ScrollPictureForm()
    {
        Text = "ScrollBar and PictureBox";
        Width = 700;
        Height = 350;

        pictureBox1 = new PictureBox();
        pictureBox1.Location = new Point(10, 10);
        pictureBox1.Width = 240;
        pictureBox1.Height = 240;
        pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;

        string path = @"C:\\Users\\Public\\Pictures\\Sample Pictures\\Chrysanthemum.jpg";
        if (System.IO.File.Exists(path))
            pictureBox1.Image = Image.FromFile(path);

        textBox1 = new TextBox();
        textBox1.Location = new Point(280, 30);
        textBox1.Width = 200;
        textBox1.Height = 70;
        textBox1.Multiline = true;

        vScrollBar1 = MakeBar(500);
        vScrollBar2 = MakeBar(550);
        vScrollBar3 = MakeBar(600);

        vScrollBar1.Scroll += vScrollBar1_Scroll;
        vScrollBar2.Scroll += vScrollBar2_Scroll;
        vScrollBar3.Scroll += vScrollBar3_Scroll;

        Controls.Add(pictureBox1);
        Controls.Add(textBox1);
        Controls.Add(vScrollBar1);
        Controls.Add(vScrollBar2);
        Controls.Add(vScrollBar3);
    }

    VScrollBar MakeBar(int x)
    {
        VScrollBar bar = new VScrollBar();
        bar.Location = new Point(x, 30);
        bar.Height = 180;
        bar.Minimum = 0;
        bar.Maximum = 255;
        bar.Value = 25;
        return bar;
    }

    void UpdateColor()
    {
        textBox1.BackColor = Color.FromArgb(r, g, b);
    }

    void vScrollBar1_Scroll(object sender, ScrollEventArgs e)
    {
        r = vScrollBar1.Value;
        UpdateColor();
    }

    void vScrollBar2_Scroll(object sender, ScrollEventArgs e)
    {
        g = vScrollBar2.Value;
        UpdateColor();
    }

    void vScrollBar3_Scroll(object sender, ScrollEventArgs e)
    {
        b = vScrollBar3.Value;
        UpdateColor();
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new ScrollPictureForm());
    }
}""",
        "description": "Combines a PictureBox graphic component with interactive vertical RGB sliders affecting the text background in real time.",
        "sampleInput": "Interactive RGB + image"
    },
    {
        "id": 29,
        "assignment": "Assignment 13",
        "title": "Windows Forms: Database Connectivity & DataGridView",
        "category": "Database (ADO.NET)",
        "type": "winform",
        "aim": "Connect to an Access Database (Database1.mdb) using OleDbConnection, query Student records, and populate a DataGridView.",
        "timeComplexity": "O(N) rows query",
        "spaceComplexity": "O(N)",
        "code": """using System;
using System.Data;
using System.Data.OleDb;
using System.Drawing;
using System.Windows.Forms;

public class DatabaseForm : Form
{
    DataGridView dataGridView1;

    public DatabaseForm()
    {
        Text = "Student Database";
        Width = 750;
        Height = 400;

        dataGridView1 = new DataGridView();
        dataGridView1.Dock = DockStyle.Fill;
        dataGridView1.AutoSizeColumnsMode =
            DataGridViewAutoSizeColumnsMode.Fill;

        Controls.Add(dataGridView1);
        Load += DatabaseForm_Load;
    }

    private void DatabaseForm_Load(object sender, EventArgs e)
    {
        string databasePath =
            @"C:\\StudentDatabase\\Database1.mdb";

        string connectionString =
            "Provider=Microsoft.Jet.OLEDB.4.0;" +
            "Data Source=" + databasePath + ";";

        string query =
            "SELECT StudentID, StudentName, StudentRollNo, Gender " +
            "FROM Student";

        try
        {
            using (OleDbConnection connection =
                new OleDbConnection(connectionString))
            {
                using (OleDbDataAdapter adapter =
                    new OleDbDataAdapter(query, connection))
                {
                    DataTable table = new DataTable();
                    adapter.Fill(table);
                    dataGridView1.DataSource = table;
                }
            }
        }
        catch (Exception ex)
        {
            MessageBox.Show(
                "Database connection failed:\\n" + ex.Message);
        }
    }

    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.Run(new DatabaseForm());
    }
}""",
        "description": "Uses ADO.NET OleDbConnection and OleDbDataAdapter to query Access MDB database and bind rows to DataGridView.",
        "sampleInput": "SELECT StudentID, StudentName, StudentRollNo, Gender FROM Student"
    }
]

# Write to programs-data.js inside csharp folder
output_js = "const CSHARP_PROGRAMS_DATA = " + json.dumps(programs, indent=2) + ";\n"
with open("csharp/programs-data.js", "w", encoding="utf-8") as f:
    f.write(output_js)

# Also create individual .cs files in csharp/src
os.makedirs("csharp/src", exist_ok=True)
for p in programs:
    safe_name = p['assignment'].lower().replace(' ', '_').replace('(', '').replace(')', '')
    filename = f"csharp/src/{safe_name}.cs"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(p['code'])

print(f"Generated csharp/programs-data.js with {len(programs)} programs and saved individual .cs files in csharp/src/")
