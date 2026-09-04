# Treino 58

App pessoal de treino, cardio, nutrição, hábitos e registro de dor e ciclo menstrual — plano de 12 semanas com todas as sessões adaptadas para endometriose (sem exercício de assoalho pélvico, sem abdominal de flexão, sem impacto na rotina fixa).

Página única, sem build, sem dependências: HTML, CSS e JavaScript puro.

## Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | A página publicada. **Gerado — não edite à mão.** |
| `treino58.html` | O fonte. É aqui que se edita. |
| `build.js` | Gera `index.html` a partir do fonte (adiciona `<head>`, manifesto e ícone). |
| `manifest.webmanifest`, `icon.svg` | Instalação na tela inicial do celular. |

Depois de qualquer alteração em `treino58.html`:

```bash
node build.js
```

## Onde os dados ficam

Peso, cargas, hábitos, treinos finalizados e os registros de dor e ciclo são gravados no **`localStorage` do próprio navegador**. Não sobem para o GitHub, não vão para servidor nenhum e não aparecem no repositório.

Consequências práticas:

- Cada navegador e cada aparelho tem seus próprios dados — não sincronizam entre si.
- Limpar dados do site, usar aba anônima ou trocar de celular **apaga o histórico**.
- Publicar uma versão nova não apaga nada: o domínio é o mesmo, o `localStorage` continua.

## Publicar no GitHub Pages

1. Suba os arquivos para um repositório.
2. **Settings → Pages → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Em um ou dois minutos a página fica no ar em `https://<usuario>.github.io/<repositorio>/`.

No celular, abra esse endereço e use "Adicionar à tela de início" — ele abre em tela cheia, como aplicativo.

## Aviso

Conteúdo educativo de treino e hábitos, sem prescrição clínica. Endometriose exige acompanhamento médico.
