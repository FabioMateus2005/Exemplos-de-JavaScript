# Exemplo de Javascript

Olá aqui são Mini exercicios de JavaScript para Praticar no Estudo

Repositório com exemplos práticos de JavaScript para estudo e referência.

## Estrutura do projeto

| Arquivo      | Descrição |
|-------------|-----------|
| `exemplo.js` | Variáveis e saída no console |
| `imc.js`     | Cálculo de IMC (Índice de Massa Corporal) |
| `notas.js`   | Sistema de notas/conceitos (aprovado, recuperação, reprovado) |
| `strings.js` | Exemplos de manipulação de strings |

---

## Arquivos

### `exemplo.js`

Exemplo básico com variáveis e `console.log`:

- **Variáveis:** `name`, `age`, `address`
- **Saída:** exibe nome, idade e endereço no console

```javascript
const name = "Fabio"
const age = 20
const address = "Rua Java Pintada - AM"
```

---

### `imc.js`

Calcula o **IMC** (Índice de Massa Corporal) a partir de peso (kg) e altura (m).

- **Fórmula:** `IMC = peso / (altura × altura)`
- **Variáveis:** `peso`, `altura`
- **Saída:** resultado numérico do IMC no console

```javascript
const peso = 83
const altura = 1.83
const resultado = peso / (altura * altura)
```

---

### `notas.js`

Sistema de conceitos baseado em nota (0 a 10):

| Nota   | Resultado           |
|--------|----------------------|
| 10     | Aprovado no Teste    |
| 7–9    | Aprovado             |
| 5–6    | Recuperação          |
| 0–4    | Reprovado            |
| Outro  | error                |

Usa `if`, `else if` e `else` para decidir a mensagem exibida.

---

### `strings.js`

Exemplos de **strings** em JavaScript:

1. Aspas simples e duplas  
2. **Template literals** (crases) com interpolação `${}` e múltiplas linhas  
3. Concatenação com `+`  
4. **Propriedades e métodos:**  
   - `length`  
   - Acesso por índice `[0]`  
   - `charAt()`  
   - `indexOf()` e `lastIndexOf()`  
   - `slice()` e `substring()`  
   - `replace()` (incluindo regex com flag `g`)  
   - `toUpperCase()` e `toLowerCase()`  
   - `trim()`  
   - `split()`  

---

## Como executar

Os scripts podem ser executados com **Node.js**:

```bash
node exemplo.js
node imc.js
node notas.js
node strings.js
```

Ou abra um arquivo HTML que importe o script e use o console do navegador (F12).

---

## Requisitos

- [Node.js](https://nodejs.org/) (opcional, para rodar no terminal)
