# Alline Silvestre — site V3

Reformulação visual do site institucional de **Alline Silvestre**, nutricionista funcional, com Next.js, TypeScript, CSS responsivo e fotografias originais.

## Abrir no computador (Windows)

1. Extraia o ZIP em `D:\alline-silvestre-site-v3` (não coloque dentro da pasta da V2).
2. No VS Code, use **Arquivo > Abrir Pasta** e escolha `D:\alline-silvestre-site-v3`.
3. Se a V2 ainda estiver rodando, pare o servidor com **Ctrl+C**.
4. Execute no terminal:

```powershell
npm install
npm run dev
```

5. Abra **http://localhost:3000** ou a porta informada no terminal.

**Prévia rápida**: abra `preview.html` no navegador para visualizar a versão estática, sem instalar o Next.js. A prévia é auxiliar: o site oficial é o projeto Next.js.

## Mudanças da V3

- Tipografia renovada: Manrope para títulos, Inter para interface e textos (com fontes do sistema como fallback).
- Hero com maior destaque para foto original e texto sem excesso de itálicos.
- Seis especialidades com cards padronizados, com saúde intestinal em primeiro plano sem card desproporcional.
- Seção profissional valorizando a segunda foto original.
- Metodologia com etapas, planos de consulta e FAQ simplificados.
- Botões reais de WhatsApp com mensagens preenchidas e ícone identificável, inclusive no botão flutuante.
- Correção das qualidades das imagens em `next.config.ts`; `metadataBase` configurado para localhost por padrão.

## Ajustes antes de publicar

- Informe a URL de produção via `NEXT_PUBLIC_SITE_URL=https://seudominio.com.br` antes do build; `http://localhost:3000` é somente valor de desenvolvimento.
- Confirme a região da inscrição profissional **CRN 7793** e grafia das pós-graduações.
- Confirme as regras de reserva, formas de pagamento e condições dos serviços diretamente com a clínica, sem publicar preços no site.
- Confirme a inclusão da bioimpedância InBody 120 em cada modalidade.
- A identidade atual é tipográfica, sem monograma provisório, até aprovação de um logotipo definitivo.
- Revise a Política de Privacidade antes de publicar, conforme LGPD e infraestrutura escolhida.

Nenhum depoimento de paciente ou promessa de cura foi inventado. Fotografias mantidas originais (somente enquadramento via CSS).
