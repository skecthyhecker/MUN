/*
 * NAVDOOT PARISHAD 1.0 -- CLI Companion (C edition)
 * AFGJI MUN Society
 *
 * Build: gcc navdoot_cli.c -o navdoot_cli
 * Run:   ./navdoot_cli
 */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

static const char *BANNER =
"\n"
" _   _    ___     _  _ ____   ___     ___ _____\n"
"| \\ | |  / \\ \\   / |/ |  _ \\ / _ \\   / _ |_   _|\n"
"|  \\| | / _ \\ \\ / /| ||| |_) | | | | | | | || |\n"
"| |\\  |/ ___ \\ V / | || |  __/ ___ \\| |_| || |\n"
"|_| \\_/_/   \\_\\_/  |_||_|_|  \\_/  \\_\\\\___/ |_|\n"
"\n"
"      NAVDOOT PARISHAD 1.0  *  AFGJI MUN\n";

static const char *COMMITTEES[] = {
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
static const int N_COMMITTEES = 9;

static const char *COUNTRIES[] = {
    "France", "Japan", "Brazil", "Germany", "South Africa",
    "Russia", "United Kingdom", "Australia", "Pakistan",
    "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
};
static const int N_COUNTRIES = 14;

static const char *TIPS[] = {
    "A good delegate listens more than they speak.",
    "Placards up, points sharp, tone respectful.",
    "The best resolutions are the ones every bloc can live with.",
    "First-timer? Ask a senior for a 5-minute crash course before committee.",
    "A confident 'point of information' beats a nervous silence.",
    "Read the study guide twice. Skim it once, then read it slow.",
};
static const int N_TIPS = 6;

static void countdown(void) {
    struct tm target = {0};
    target.tm_year = 2026 - 1900;
    target.tm_mon = 10; /* November, 0-indexed */
    target.tm_mday = 16;

    time_t now = time(NULL);
    struct tm today = *localtime(&now);
    today.tm_hour = today.tm_min = today.tm_sec = 0;

    time_t t_target = mktime(&target);
    time_t t_today = mktime(&today);
    double diff_days = difftime(t_target, t_today) / 86400.0;
    long days = (long)(diff_days + 0.5);

    if (days > 0) {
        printf("  %ld day(s) until Navdoot Parishad 1.0 (16 Nov 2026).\n", days);
    } else if (days == 0) {
        printf("  It's today. See you on the floor!\n");
    } else {
        printf("  Navdoot Parishad 1.0 has concluded. Until next year!\n");
    }
}

int main(void) {
    srand((unsigned int)time(NULL));
    printf("%s", BANNER);
    countdown();
    printf("\n");
    printf("  Your practice portfolio for today:\n");
    printf("    Committee : %s\n", COMMITTEES[rand() % N_COMMITTEES]);
    printf("    Country   : %s\n", COUNTRIES[rand() % N_COUNTRIES]);
    printf("\n");
    printf("  Delegate tip: %s\n", TIPS[rand() % N_TIPS]);
    printf("\n");
    printf("  Register  -> https://afgjimun.example/register.html\n");
    printf("  Fee       -> Rs 5 only, UPI / Card / Net Banking\n\n");
    return 0;
}
