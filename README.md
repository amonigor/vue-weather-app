# Vue Weather App

## Setup do projeto
Após fazer o clone do projeto, basta rodar o comando a seguir para instalar as dependências do projeto.
```bash
yarn install
```

### Chaves do .env
Antes de executar o projeto, é necessário criar um arquivo `.env`, há um `.env.example` então basta copiá-lo e mudar o nome do arquivo.
```env
VUE_APP_WEATHER_API_KEY=YOUR_API_KEY
VUE_APP_WEATHER_URL=https://api.openweathermap.org/data/2.5/onecall

VUE_APP_GEOCODING_API_KEY=YOUR_API_KEY
VUE_APP_GEOCODING_URL=https://maps.googleapis.com/maps/api/geocode/json
```
Note que há duas chaves com valor `"YOUR_API_KEY"`, essas chaves precisam ser geradas externamente, segue o link para a geração da [Open Weather API Key](https://openweathermap.org/api) (a chave da Open Weather pode demorar algumas horas para fazer a ativação, até lá o projeto pode não funcionar) e o da [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)

## Desenvolvimento e Produção
A seguir seguem os comandos para poder trabalhar em desenvolvimento e gerar também os arquivos para produção. Lembrando que só irão funcionar corretamente após a criação do arquivo de ambiente (`.env`)

### Compilação e hot-reloads para desenvolvimento
```
yarn serve
```

### Compilação e minificação para produção
```
yarn build
```
Os arquivos gerados pelo projeto estarão na pasta `dist` na raiz do seu projeto, são esses arquivos que você mandará para um servidor junto ao `.env`