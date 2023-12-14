'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Criação da tabela
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPokemon: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Inserção de dados
    const pokemonData = [
      { idPokemon: 1, name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 2, name: 'Ivysaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 3, name: 'Venusaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 4, name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 5, name: 'Charmeleon', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 6, name: 'Charizard', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 7, name: 'Squirtle', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 8, name: 'Wartortle', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif', createdAt: new Date(), updatedAt: new Date() },
      { idPokemon: 9, name: 'Blastoise', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif', createdAt: new Date(), updatedAt: new Date() }
    ];

    await queryInterface.bulkInsert('Items', pokemonData);
  },

  async down(queryInterface, Sequelize) {
    // Remoção da tabela
    await queryInterface.dropTable('Items');
  }
};