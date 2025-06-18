function validarDataValidade(mm_aa) {
    if (!/^\d{2}\/\d{2}$/.test(mm_aa)) return false; 
    const [mm, aa] = mm_aa.split('/').map(Number);
    if (mm < 1 || mm > 12) return false; 
  
    const hoje = new Date();
    const anoAtual = hoje.getFullYear() % 100; 
    const mesAtual = hoje.getMonth() + 1; 
  
    if (aa < anoAtual) return false;
    if (aa === anoAtual && mm < mesAtual) return false; 
  
    return true;
  }
  