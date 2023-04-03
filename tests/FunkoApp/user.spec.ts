import 'mocha'
import { expect } from 'chai'
import chalk from "chalk"
import { FunkoType } from '../../src/FunkoAPP/Type/Type.js'
import { FunkoGenre } from '../../src/FunkoAPP/Genre/Genre.js'
import { FunkoPop } from '../../src/FunkoAPP/FunkoPop/FunkoPop.js'
import { User } from '../../src/FunkoAPP/User/user.js'


const Chucky = new FunkoPop(
  0,
  'Chucky',
  'Chucky Muñeco Diabolico',
  FunkoType.POP,
  FunkoGenre.MOVIES_AND_TV,
  'Miedo',
  0
)

const Mickey_Mouse = new FunkoPop(
  1, 
  'Mickey Mouse',
  'The most famous character of Walt Disney',
  FunkoType.POP_BLACK_AND_WHITE,
  FunkoGenre.ANIMATION,
  'Disney',
  1
)

const Darth_Vader = new FunkoPop(
  2,
  'Darth Vader',
  'The most famous character of Star Wars',
  FunkoType.POP,
  FunkoGenre.MOVIES_AND_TV,
  'Star Wars',
  2
)

const The_Mandalorian = new FunkoPop(
  3,
  'The Mandalorian',
  'Important character of Starr Wars',
  FunkoType.POP,
  FunkoGenre.MOVIES_AND_TV,
  'Star Wars',
  3
)

const Michelangelo = new FunkoPop(
  4,
  'Michelangelo',
  'Wife of Mickey Mouse',
  FunkoType.POP,
  FunkoGenre.ANIMATION,
  'Tortugas Ninja',
  4)

Chucky.marketPrice = 40
Mickey_Mouse.marketPrice = 35
Darth_Vader.marketPrice = 50
The_Mandalorian.marketPrice = 15
Michelangelo.marketPrice = 5

const user = new User('Walt Disney', Mickey_Mouse, Darth_Vader, The_Mandalorian)

describe('User class tests', () => {
  it('Users should have a name', () => {
    expect(user.name).to.be.a('string')
    expect(user.name).to.equal('Walt Disney')
  });
  it('Users should have a collection of Funkos', () => {
    expect(user.collection).to.be.a('array')
    expect(user.collection).to.have.lengthOf(3)
  });
  it('Users should be able to add Funkos to their collection', () => {
    expect(user.addFunko(Chucky)).to.be.equal(chalk.green(Chucky.name + ' added to ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(4)
  });
  it('Users should be informed if they try to add a Funko that is already in their collection', () => {
    expect(user.addFunko(Mickey_Mouse)).to.be.equal(chalk.red('Already exists a Funko Pop with id ' + Mickey_Mouse.id + ' in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(4)
  });
  it('Users should be able to modify a Funko if its id is in their collection', () => {
    Mickey_Mouse.name = 'Mickey Mouse modified'
    expect(user.modifyFunko(Mickey_Mouse)).to.be.equal(chalk.green('Funko Pop with id ' + Mickey_Mouse.id + ' modified in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(4)
  });
  it('Users should be informed if they try to modify a Funko that is not in their collection', () => {
    expect(user.modifyFunko(Michelangelo)).to.be.equal(chalk.red('Funko Pop with id ' + Michelangelo.id + ' not in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(4)
  });
  it('Users should be able to remove Funkos from their collection', () => {
    expect(user.removeFunko(Mickey_Mouse)).to.be.equal(chalk.green(Mickey_Mouse.name + ' removed from ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(3)
  });
  it('Users should be informed if they try to remove a Funko that is not in their collection', () => {
    expect(user.removeFunko(Michelangelo)).to.be.equal(chalk.red('Funko Pop with id ' + Michelangelo.id + ' not in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(3)
  });
  it('Users should be able to search for Funkos in their collection', () => {
    expect(user.searchFunko(Darth_Vader)).to.be.equal(chalk.green(Darth_Vader.name + ' found in ' + user.name + '\'s collection'))
    expect(user.searchFunko(Michelangelo)).to.be.equal(chalk.red(Michelangelo.name + ' not in ' + user.name + '\'s collection'))
  });
});