: 'Para instalar uma biblioteca e seus tipos usando 
o npm, você pode seguir os seguintes passos.
Vou usar um exemplo com a biblioteca lodash:'

# Instalar a biblioteca:
npm install lodash

# Instalar os tipos da biblioteca:
npm install --save-dev @types/lodash

: 'O comando npm install lodash instala a biblioteca principal,
enquanto o comando npm install --save-dev @types/lodash instala os 
tipos TypeScript para a biblioteca. O --save-dev indica que os tipos 
são apenas para desenvolvimento, e não serão incluídos no código final 
quando você fizer o build para produção.'