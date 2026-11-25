import json
from pathlib import Path
# keeping in git because version control could be helpful with this file if i change anything 
# but it's not really useful for other people sorry
# the output will say shit like 700 words in unami and when you look on the site the dialect has 100 something (example numbers)
# the extra 600 in that example are from my template. 
# i COULD modify this code to take unique words into account but 
# i don't really see the point for now 
# if i see the use case I will but for now it stays as is

SCRIPT_DIR = Path(__file__).resolve().parent
WORD_FILES = {
    "Unami": SCRIPT_DIR / "words.json",
    "Munsee": SCRIPT_DIR / "munsee-dialect" / "munsee-words.json",
}

def update_word_lengths():
    total_fixed = 0

    for dialect, word_file in WORD_FILES.items():
        entries = json.loads(word_file.read_text(encoding="utf-8"))
        fixed_count = 0

        for entry in entries:
            actual_length = len(entry["word"])

            if entry["length"] != actual_length:
                old_length = entry["length"]
                entry["length"] = actual_length
                fixed_count += 1
                total_fixed += 1
                print(
                    f"{dialect}: fixed {entry['word']!r} — "
                    f"{old_length} -> {actual_length}"
                )

        if fixed_count:
            word_file.write_text(
                json.dumps(entries, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )

        print(f"{dialect}: fixed {fixed_count} of {len(entries)} entries")

    print(
        f"\nUpdated {total_fixed} incorrect length(s)."
        if total_fixed
        else "\nAll word lengths already match."
    )

if __name__ == "__main__":
    update_word_lengths()