const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Configuração do Sequelize
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'pokeapp.postgres.database.azure.com',
  port: 5432,
  username: 'pokeadm',
  password: '#Pikachu22',
  database: 'pokemonprod',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// Modelo Sequelize
const Item = sequelize.define('Item', {
  idPokemon: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Rota para listar itens
app.get('/list', async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do banco de dados.' });
  }
});

// Inicia a aplicação
sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados com o banco de dados');
    app.listen(port, () => {
      console.log(`Servidor Express em execução na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar modelos:', err);
  });
