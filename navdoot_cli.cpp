/*
 * NAVDOOT PARISHAD 1.0 -- CLI Companion (C++ edition)
 * AFGJI MUN Society
 *
 * Build: g++ -std=c++17 navdoot_cli.cpp -o navdoot_cli
 * Run:   ./navdoot_cli
 */

#include <iostream>
#include <string>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <random>

static const std::string BANNER =
"\n"
" _   _    ___     _  _ ____   ___     ___ _____\n"
"| \\ | |  / \\ \\   / |/ |  _ \\ / _ \\   / _ |_   _|\n"
"|  \\| | / _ \\ \\ / /| ||| |_) | | | | | | | || |\n"
"| |\\  |/ ___ \\ V / | || |  __/ ___ \\| |_| || |\n"
"|_| \\_/_/   \\_\\_/  |_||_|_|  \\_/  \\_\\\\___/ |_|\n"
"\n"
"      NAVDOOT PARISHAD 1.0  *  AFGJI MUN\n";

static const std::vector<std::string> COMMITTEES = {
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

static const std::vector<std::string> COUNTRIES = {
    "France", "Japan", "Brazil", "Germany", "South Africa",
    "Russia", "United Kingdom", "Australia", "Pakistan",
    "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
};

static const std::vector<std::string> TIPS = {
    "A good delegate listens more than they speak.",
    "Placards up, points sharp, tone respectful.",
    "The best resolutions are the ones every bloc can live with.",
    "First-timer? Ask a senior for a 5-minute crash course before committee.",
    "A confident 'point of information' beats a nervous silence.",
    "Read the study guide twice. Skim it once, then read it slow.",
};

template <typename T>
static const T &pick(const std::vector<T> &v, std::mt19937 &rng) {
    std::uniform_int_distribution<size_t> dist(0, v.size() - 1);
    return v[dist(rng)];
}

static void countdown() {
    std::tm target = {};
    target.tm_year = 2026 - 1900;
    target.tm_mon = 10; // November
    target.tm_mday = 16;

    std::time_t now = std::time(nullptr);
    std::tm today = *std::localtime(&now);
    today.tm_hour = today.tm_min = today.tm_sec = 0;

    std::time_t t_target = std::mktime(&target);
    std::time_t t_today = std::mktime(&today);
    double diffDays = std::difftime(t_target, t_today) / 86400.0;
    long days = static_cast<long>(diffDays + 0.5);

    if (days > 0) {
        std::cout << "  " << days << " day(s) until Navdoot Parishad 1.0 (16 Nov 2026).\n";
    } else if (days == 0) {
        std::cout << "  It's today. See you on the floor!\n";
    } else {
        std::cout << "  Navdoot Parishad 1.0 has concluded. Until next year!\n";
    }
}

int main() {
    std::random_device rd;
    std::mt19937 rng(rd());

    std::cout << BANNER;
    countdown();
    std::cout << "\n";
    std::cout << "  Your practice portfolio for today:\n";
    std::cout << "    Committee : " << pick(COMMITTEES, rng) << "\n";
    std::cout << "    Country   : " << pick(COUNTRIES, rng) << "\n";
    std::cout << "\n";
    std::cout << "  Delegate tip: " << pick(TIPS, rng) << "\n\n";
    std::cout << "  Register  -> https://afgjimun.example/register.html\n";
    std::cout << "  Fee       -> Rs 5 only, UPI / Card / Net Banking\n\n";
    return 0;
}
