#!/bin/bash

# Script para fazer commit e push das mudanças do ImovAval
# Uso: bash deploy.sh

echo "🚀 ImovAval - Deploy de Cidades do RS"
echo "======================================"
echo ""

# Verificar se está no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: index.html não encontrado"
    echo "Execute este script na raiz do projeto:"
    echo "  cd ~/seu-projeto/imovaval"
    echo "  bash deploy.sh"
    exit 1
fi

echo "📁 Verificando arquivos..."
echo ""

# 1. Copiar arquivo de cidades
if [ ! -f "cidades-rs.js" ]; then
    echo "⚠️  cidades-rs.js não encontrado"
    echo "Certifique-se de copiar o arquivo para a raiz do projeto"
    exit 1
else
    echo "✅ cidades-rs.js encontrado"
fi

echo "✅ index.html encontrado"
echo ""

# 2. Git status
echo "📊 Status do Git:"
git status
echo ""

# 3. Pedir confirmação
read -p "✋ Continuar com o commit? (s/n): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Commit cancelado"
    exit 1
fi

echo ""
echo "🔄 Fazendo commit..."
echo ""

# 4. Git add
git add cidades-rs.js index.html
echo "✅ Arquivos adicionados"

# 5. Git commit
git commit -m "feat: implementar lista completa de cidades do RS na busca

- Adicionar arquivo cidades-rs.js com array de cidades
- Modificar função renderCidades() para usar lista completa
- Manter compatibilidade com versão anterior
- Melhorar UX ao permitir busca em qualquer cidade do RS"

if [ $? -eq 0 ]; then
    echo "✅ Commit criado com sucesso"
else
    echo "⚠️  Commit pode já estar criado ou houve erro"
fi

echo ""
echo "📤 Fazendo push para GitHub..."
echo ""

# 6. Git push
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Push realizado com sucesso!"
    echo ""
    echo "🎉 Vercel fará redeploy automático em breve"
    echo "Acesse: https://imovaval.com.br"
else
    echo "❌ Erro ao fazer push. Verifique sua conexão e permissões."
    exit 1
fi

echo ""
echo "✨ Deploy concluído!"
