// NAVDOOT PARISHAD 1.0 -- CLI Companion (C# edition)
// AFGJI MUN Society
//
// Build: csc navdoot_cli.cs   (or: dotnet run, in a console project)
// Run:   navdoot_cli.exe

using System;

class NavdootCli
{
    static readonly string Banner = "\n" +
        " _   _    ___     _  _ ____   ___     ___ _____\n" +
        "| \\ | |  / \\ \\   / |/ |  _ \\ / _ \\   / _ |_   _|\n" +
        "|  \\| | / _ \\ \\ / /| ||| |_) | | | | | | | || |\n" +
        "| |\\  |/ ___ \\ V / | || |  __/ ___ \\| |_| || |\n" +
        "|_| \\_/_/   \\_\\_/  |_||_|_|  \\_/  \\_\\\\___/ |_|\n\n" +
        "      NAVDOOT PARISHAD 1.0  *  AFGJI MUN\n";

    static readonly string[] Committees = {
        "UNGA -- United Nations General Assembly",
        "UNSC -- United Nations Security Council",
        "UNHRC -- United Nations Human Rights Council",
        "DISEC -- Disarmament and International Security",
        "ECOSOC -- Economic and Social Council",
        "AIPPM -- All India Political Parties Meet",
        "Lok Sabha -- Indian Parliament Simulation",
        "IP -- International Press",
        "Historical Crisis Committee",
    };

    static readonly string[] Countries = {
        "France", "Japan", "Brazil", "Germany", "South Africa",
        "Russia", "United Kingdom", "Australia", "Pakistan",
        "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
    };

    static readonly string[] Tips = {
        "A good delegate listens more than they speak.",
        "Placards up, points sharp, tone respectful.",
        "The best resolutions are the ones every bloc can live with.",
        "First-timer? Ask a senior for a 5-minute crash course before committee.",
        "A confident 'point of information' beats a nervous silence.",
        "Read the study guide twice. Skim it once, then read it slow.",
    };

    static void Countdown()
    {
        var conferenceDate = new DateTime(2026, 11, 16);
        var today = DateTime.Today;
        int days = (conferenceDate - today).Days;

        if (days > 0)
            Console.WriteLine($"  {days} day(s) until Navdoot Parishad 1.0 (16 Nov 2026).");
        else if (days == 0)
            Console.WriteLine("  It's today. See you on the floor!");
        else
            Console.WriteLine("  Navdoot Parishad 1.0 has concluded. Until next year!");
    }

    static void Main()
    {
        var rng = new Random();

        Console.WriteLine(Banner);
        Countdown();
        Console.WriteLine();
        Console.WriteLine("  Your practice portfolio for today:");
        Console.WriteLine($"    Committee : {Committees[rng.Next(Committees.Length)]}");
        Console.WriteLine($"    Country   : {Countries[rng.Next(Countries.Length)]}");
        Console.WriteLine();
        Console.WriteLine($"  Delegate tip: {Tips[rng.Next(Tips.Length)]}");
        Console.WriteLine();
        Console.WriteLine("  Register  -> https://afgjimun.example/register.html");
        Console.WriteLine("  Fee       -> Rs 5 only, UPI / Card / Net Banking");
        Console.WriteLine();
    }
}
