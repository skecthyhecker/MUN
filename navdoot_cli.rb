#!/usr/bin/env ruby
# NAVDOOT PARISHAD 1.0 -- CLI Companion (Ruby edition)
# AFGJI MUN Society
#
# Run: ruby navdoot_cli.rb

require "date"

BANNER = <<~BANNER

   _   _    ___     _  _ ____   ___     ___ _____
  | \\ | |  / \\ \\   / |/ |  _ \\ / _ \\   / _ |_   _|
  |  \\| | / _ \\ \\ / /| ||| |_) | | | | | | | || |
  | |\\  |/ ___ \\ V / | || |  __/ ___ \\| |_| || |
  |_| \\_/_/   \\_\\_/  |_||_|_|  \\_/  \\_\\\\___/ |_|

        NAVDOOT PARISHAD 1.0  ·  AFGJI MUN
BANNER

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
].freeze

COUNTRIES = [
  "France", "Japan", "Brazil", "Germany", "South Africa",
  "Russia", "United Kingdom", "Australia", "Pakistan",
  "Canada", "Egypt", "South Korea", "Indonesia", "Mexico",
].freeze

TIPS = [
  "A good delegate listens more than they speak.",
  "Placards up, points sharp, tone respectful.",
  "The best resolutions are the ones every bloc can live with.",
  "First-timer? Ask a senior for a 5-minute crash course before committee.",
  "A confident 'point of information' beats a nervous silence.",
  "Read the study guide twice. Skim it once, then read it slow.",
].freeze

CONFERENCE_DATE = Date.new(2026, 11, 16)

def countdown
  days = (CONFERENCE_DATE - Date.today).to_i
  if days > 0
    puts "  #{days} day(s) until Navdoot Parishad 1.0 (16 Nov 2026)."
  elsif days.zero?
    puts "  It's today. See you on the floor!"
  else
    puts "  Navdoot Parishad 1.0 has concluded. Until next year!"
  end
end

def main
  puts BANNER
  countdown
  puts
  puts "  Your practice portfolio for today:"
  puts "    Committee : #{COMMITTEES.sample}"
  puts "    Country   : #{COUNTRIES.sample}"
  puts
  puts "  Delegate tip: #{TIPS.sample}"
  puts
  puts "  Register  -> https://afgjimun.example/register.html"
  puts "  Fee       -> Rs 5 only, UPI / Card / Net Banking"
  puts
end

main if __FILE__ == $PROGRAM_NAME
