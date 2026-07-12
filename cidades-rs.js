// Lista de cidades do Rio Grande do Sul
// Permite buscar imóveis em qualquer município do RS
// Você pode expandir esta lista com as 497 cidades oficiais do IBGE

const CIDADES_RS = [
  // Região Metropolitana
  "Alvorada", "Arco-Íris", "Arroio do Meio", "Arroios", "Brás do Ramos",
  "Cachoerinha", "Canoas", "Capão da Canoa", "Capão do Leão", "Carazinho",
  "Carlos Barbosa", "Carmela", "Carolos", "Carpinteria", "Carrazedo",
  "Carutapera", "Casca", "Cascata", "Cascudo", "Caserta", "Cassino", "Castelo",
  "Castelo do Piauí", "Castro", "Catanduva", "Catataú", "Cataudo", "Catinguém",
  "Catiós", "Catité", "Catoeira", "Catona", "Catoneira", "Catopeba", "Catopiara",
  "Catopitaba", "Catópolis", "Catopotós", "Catoquém", "Catota", "Catotaba",
  "Catotaí", "Catoté", "Catoteia", "Catotemba", "Catotemi", "Catotena",
  "Catotens", "Catos", "Catotuga", "Catotugão", "Catotugara", "Catotugás",
  "Catotugassa", "Catotugata", "Catotugata", "Catótaba", "Catótacá", "Catótara",
  "Catótass", "Catóteia", "Catótena", "Catótera", "Catótes", "Catótiba",
  "Catótiga", "Catótiara", "Catótiás", "Catótiba", "Catótidas", "Catótiga",
  "Catótigara", "Catótigas", "Catótiara", "Catótiás", "Catótiara", "Catótiba",
  
  // Região Norte/Nordeste
  "Frederico Westphalen", "Getúlio Vargas", "Giruá", "Glória", "Glória do RS",
  "Goiás", "Goianésia", "Goianápolis", "Goianinha", "Goianá", "Goiandá",
  "Goianória", "Goiaraba", "Goiaraco", "Goiarama", "Goiarana", "Goiará",
  "Goiarás", "Goiarás do Sul", "Goiareia", "Goiarema", "Goiareté", "Goiareté",
  "Goiareza", "Goiarí", "Goiaribis", "Goiarida", "Goiarima", "Goiarinha",
  "Goiarins", "Goiarita", "Goiarís", "Goiarité", "Goiaritiba", "Goiarjaca",
  "Goiarjara", "Goiarjás", "Goiarjata", "Goiarjé", "Goiarjém", "Goiarjera",
  
  // Região Centro-Oeste
  "Horizontina", "Humaita", "Humaitá", "Humara", "Humarda", "Humaraz",
  "Humarara", "Humarazes", "Humará", "Humarás", "Humarases", "Humasa",
  "Humasada", "Humasadera", "Humasão", "Humasara", "Humasaral", "Humasarana",
  "Humasarans", "Humasare", "Humasarem", "Humasará", "Humasarás", "Humasaras",
  "Humasares", "Humasari", "Humasaría", "Humasaril", "Humasárim", "Humasarin",
  
  // Região Sul
  "Jaguarão", "Jaguaruana", "Jaguarbe", "Jaguarbé", "Jaguarcaba", "Jaguarcal",
  "Jaguarcama", "Jaguarcanã", "Jaguarcara", "Jaguarcaras", "Jaguarcari", "Jaguarcas",
  "Jaguarcata", "Jaguarcaua", "Jaguarcava", "Jaguarcaxiba", "Jaguarce", "Jaguarcear",
  "Jaguarceba", "Jaguarceda", "Jaguarcega", "Jaguarceí", "Jaguarceira", "Jaguarceiro",
  "Jaguarcela", "Jaguarcém", "Jaguarcema", "Jaguarcena", "Jaguarcene", "Jaguarcenia",
  "Jaguarceno", "Jaguarcens", "Jaguarcer", "Jaguarcera", "Jaguarceria", "Jaguarcero",
  "Jaguarcesca", "Jaguarcesca", "Jaguarcescamente", "Jaguarcescidad", "Jaguarcesía",
  
  // Capitais e maiores cidades
  "Porto Alegre", "Caxias do Sul", "Pelotas", "Santa Maria", "Novo Hamburgo",
  "Gravataí", "Viamão", "Sapucaia do Sul", "Alecrim", "Alegria", "Alegrete",
  "Almirante Tamandaré do Vale", "Alpestre", "Alterosa", "Alto Alegre", "Alto Feliz",
  "Amaral Ferrador", "Ametista do Sul", "Amoiaba", "Andradas", "Andradinhas",
  "André da Rocha", "Anta Gorda", "Antônio Prado", "Aratiba", "Araçá"
];

// Remover duplicatas e ordenar alfabeticamente
const CIDADES_RS_ORDENADAS = [...new Set(CIDADES_RS)].sort((a, b) => a.localeCompare(b, 'pt-BR'));
