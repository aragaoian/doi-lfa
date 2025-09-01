// busca char em vetor e retorna indice
function get_char_ref(vet: string[], ref: string): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] === ref) {
            return i;
        }
    }
    return -1;
}

// busca string em vetor e retorna indice
function get_string_ref(vet: string[], ref: string): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] === ref) {
            return i;
        }
    }
    return -1;
}

// retorna o próximo estado, dado o estado atual e o símbolo lido
function proximo_estado(alfabeto: string[], matriz: number[][], estado_atual: number, simbolo: string): number {
    const simbol_indice = get_char_ref(alfabeto, simbolo);
    if (simbol_indice !== -1) {
        return matriz[estado_atual]![simbol_indice]!;
    } else {
        return -1;
    }
}

async function main() {
    // const response = await fetch("https://link.springer.com/");
    const response = await fetch("https://link.springer.com/book/10.1007/978-3-030-05387-1");
    const codigoHTML = await response.text();
    const alfabeto: string[] = [
        "1",
        "0",
        ".",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9", // resto do 0-9
        "/",
        "(",
        ")",
        ";",
        "-", // símbolos
        // A-Z
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        // a-z
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    const estados: string[] = ["q0", "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];

    const estado_inicial = "q0";
    const estados_finais: string[] = ["q10"];
    // --- matriz ---
    const matriz: number[][] = Array.from({ length: estados.length }, () => new Array(alfabeto.length).fill(-1));

    // q0: '1' -> q1
    matriz[get_string_ref(estados, "q0")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q1");

    // q1: '1' -> q2
    matriz[get_string_ref(estados, "q1")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q2");

    // q2: '0' -> q3
    matriz[get_string_ref(estados, "q2")][get_char_ref(alfabeto, ".")] = get_string_ref(estados, "q3");

    // // q3: dígitos -> q4
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q4");
    matriz[get_string_ref(estados, "q3")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q4");

    // q4: dígitos -> q5
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q5");
    matriz[get_string_ref(estados, "q4")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q5");

    // q5: dígitos -> q6
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q6");
    matriz[get_string_ref(estados, "q5")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q6");

    // q6: dígitos -> q7
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q6")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q7");

    // // q7: '.' -> q8, dígitos -> q7, '/' -> q9
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, ".")] = get_string_ref(estados, "q8");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q7")][get_char_ref(alfabeto, "/")] = get_string_ref(estados, "q9");

    // q8: dígitos -> q7
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q7");
    matriz[get_string_ref(estados, "q8")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q7");

    // // q9: letras/dígitos/símbolos -> q10
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "A")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "B")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "C")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "D")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "E")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "F")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "G")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "H")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "I")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "J")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "K")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "L")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "M")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "N")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "O")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "P")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "Q")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "R")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "S")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "T")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "U")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "V")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "W")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "X")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "Y")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "Z")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "a")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "b")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "c")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "d")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "e")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "f")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "g")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "h")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "i")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "j")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "k")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "l")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "m")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "n")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "o")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "p")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "q")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "r")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "s")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "t")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "u")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "v")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "w")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "x")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "y")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "z")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, ".")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "/")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "(")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, ")")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, ";")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q9")][get_char_ref(alfabeto, "-")] = get_string_ref(estados, "q10");

    // // q10: letras/dígitos/símbolos -> q10
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "A")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "B")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "C")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "D")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "E")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "F")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "G")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "H")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "I")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "J")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "K")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "L")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "M")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "N")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "O")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "P")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "Q")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "R")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "S")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "T")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "U")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "V")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "W")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "X")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "Y")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "Z")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "a")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "b")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "c")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "d")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "e")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "f")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "g")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "h")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "i")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "j")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "k")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "l")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "m")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "n")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "o")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "p")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "q")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "r")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "s")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "t")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "u")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "v")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "w")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "x")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "y")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "z")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "0")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "1")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "2")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "3")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "4")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "5")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "6")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "7")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "8")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "9")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, ".")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "/")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "(")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, ")")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, ";")] = get_string_ref(estados, "q10");
    matriz[get_string_ref(estados, "q10")][get_char_ref(alfabeto, "-")] = get_string_ref(estados, "q10");

    // variável que guarda o estado atual
    let estado: number = get_string_ref(estados, estado_inicial);
    let estado_anterior: number = -1;
    const palavras_reconhecidas: string[] = [];

    let palavra = "";

    // varre o código-fonte
    for (let i = 0; i < codigoHTML.length; i++) {
        estado_anterior = estado;
        estado = proximo_estado(alfabeto, matriz, estado, codigoHTML.charAt(i));

        // se não há transição
        if (estado === -1) {
            // pega estado inicial
            estado = get_string_ref(estados, estado_inicial);

            // se o estado anterior foi um estado final
            if (get_string_ref(estados_finais, estados[estado_anterior]!) !== -1) {
                // se a palavra não é vazia adiciona palavra reconhecida
                if (palavra !== "") {
                    palavras_reconhecidas.push(palavra);
                }
                // se ao analisar este caracter não houve transição
                // teste-o novamente, considerando que o estado seja inicial
                i--;
            }
            // zera palavra
            palavra = "";
        } else {
            // se houver transição válida, adiciona caracter à palavra
            palavra += codigoHTML.charAt(i);
        }
    }

    // foreach no TypeScript
    for (const p of palavras_reconhecidas) {
        console.log(p);
    }
}

main();
