import requests
from bs4 import BeautifulSoup

palavra = "igw"
pagina = 1
todas_paginas = []

while True:
    url = f"https://www.bing.com/search?q={palavra}&first={pagina}"
    
    try:
        html = requests.get(url, timeout=2).text
        soup = BeautifulSoup(html, "html.parser")
        texto = soup.get_text().lower()
        
        if palavra in texto:
            todas_paginas.append(texto)
            print(f"Página {pagina} encontrada!")
        else:
            break
        
        pagina += 10  # Bing usa incrementos de 10
        
    except requests.exceptions.RequestException as e:
        print(f"Erro na requisição: {e}")
        print(f"Erro na página {pagina}: {e}")
        break

comentarios = []

for pagina in todas_paginas:
    soup = BeautifulSoup(pagina, "html.parser")
    for comentario in soup.find_all("div", class_="comentario"):  # Ajuste a classe conforme necessário
        comentarios.append(comentario.get_text())

print(f"Total de comentários coletados: {len(comentarios)}")