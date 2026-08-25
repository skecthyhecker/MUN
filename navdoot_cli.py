#!/usr/bin/env python3
"""
NAVDOOT PARISHAD 1.0 -- CLI Companion (Python edition)
AFGJI MUN Society

Run:  python3 navdoot_cli.py
"""

import random
from datetime import datetime, date

BANNER = r"""
 _   _    ___     _  _ ____   ___     ___ _____
| \ | |  / \ \   / |/ |  _ \ / _ \   / _ |_   _|
|  \| | / _ \ \ / /| ||| |_) | | | | | | | || |
| |\  |/ ___ \ V / | || |  __/ ___ \| |_| || |
|_| \_/_/   \_\_/  |_||_|_|  \_/  \_\\___/ |_|

      NAVDOOT PARISHAD 1.0  ·  AFGJI MUN
"""

COMMITTEES = [
    "UNGA -- United Nations General Assembly",
    "UNSC -- United Nations Security Council",
    "UNHRC -- United Nations Human Rights Council",
    "DISEC -- Disarmament and International Security",
    "ECOSOC -- Economic and Social Council",
    "AIPPM -- All India Political Parties Meet",
    "Lok Sabha -- Indian Parliament Simulation",
    "IP -- International Press",
    "Historical Crisis Committee",
]

COUNTRIES = [
    "France", "Japan", "Brazil", "Germany", "South Africa",
    "Russia", "United Kingdom", "Australia", "Pakistan",
    "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
]

TIPS = [
    "A good delegate listens more than they speak.",
    "Placards up, points sharp, tone respectful.",
    "The best resolutions are the ones every bloc can live with.",
    "First-timer? Ask a senior for a 5-minute crash course before committee.",
    "A confident 'point of information' beats a nervous silence.",
    "Read the study guide twice. Skim it once, then read it slow.",
]

CONFERENCE_DATE = date(2026, 11, 16)


def countdown():
    today = date.today()
    delta = (CONFERENCE_DATE - today).days
    if delta > 0:
        print(f"  {delta} day(s) until Navdoot Parishad 1.0 (16 Nov 2026).")
    elif delta == 0:
        print("  It's today. See you on the floor!")
    else:
        print("  Navdoot Parishad 1.0 has concluded. Until next year!")


def main():
    print(BANNER)
    countdown()
    print()
    print("  Your practice portfolio for today:")
    print(f"    Committee : {random.choice(COMMITTEES)}")
    print(f"    Country   : {random.choice(COUNTRIES)}")
    print()
    print(f"  Delegate tip: {random.choice(TIPS)}")
    print()
    print("  Register  -> https://afgjimun.example/register.html")
    print("  Fee       -> Rs 5 only, UPI / Card / Net Banking")
    print()


if __name__ == "__main__":
    main()
