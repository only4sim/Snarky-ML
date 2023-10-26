translations = {
    "field ": "new Field(",  # Translates a field declaration
    " = ": ").add(",         # Translates an assignment and addition
    ";\n": ")\n",           # Closes the Field declaration
}

def translate_to_o1js(code, translations):
    for key, value in translations.items():
        code = code.replace(key, value)
    return code

source_code = """
field a = 5;
field b = 10;
field result = a + b;
"""

translated_code = translate_to_o1js(source_code, translations)
print(translated_code)
