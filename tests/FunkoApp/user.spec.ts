import 'mocha'
import { expect } from 'chai'
import chalk from "chalk"
import { FunkoType } from '../../src/FunkoAPP/Type/Type.js'
import { FunkoGenre } from '../../src/FunkoAPP/Genre/Genre.js'
import { FunkoPop } from '../../src/FunkoAPP/FunkoPop/FunkoPop.js'
import { User } from '../../src/FunkoAPP/User/user.js'


const Oswald_The_Lucky_Rabbit = new FunkoPop(
  0,
  'Oswald The Lucky Rabbit',
  'First character of Walt Disney',
  FunkoType.POP_BLACK_AND_WHITE,
  FunkoGenre.ANIMATION,
  'Disney',
  0
)

const Mickey_Mouse = new FunkoPop(
  1, 
  'Mickey Mouse',
  'Most famous character of Walt Disney',
  FunkoType.POP_BLACK_AND_WHITE,
  FunkoGenre.ANIMATION,
  'Disney',
  1
)

const Donald_Duck = new FunkoPop(
  2,
  'Donald Duck',
  'Second most famous character of Walt Disney',
  FunkoType.POP,
  FunkoGenre.ANIMATION,
  'Disney',
  2
)

const Goofy = new FunkoPop(
  3,
  'Goofy',
  'Third most famous character of Walt Disney',
  FunkoType.POP,
  FunkoGenre.ANIMATION,
  'Disney',
  3
)

const Minnie_Mouse = new FunkoPop(4, 'Minnie Mouse', 'Wife of Mickey Mouse', FunkoType.POP, FunkoGenre.ANIMATION, 'Disney', 4)

Oswald_The_Lucky_Rabbit.marketPrice = 40
Mickey_Mouse.marketPrice = 35
Donald_Duck.marketPrice = 20
Goofy.marketPrice = 15
Minnie_Mouse.marketPrice = 5

const user = new User('Walt Disney', Mickey_Mouse, Donald_Duck, Goofy)

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
    expect(user.addFunko(Oswald_The_Lucky_Rabbit)).to.be.equal(chalk.green(Oswald_The_Lucky_Rabbit.name + ' added to ' + user.name + '\'s collection'))
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
    expect(user.modifyFunko(Minnie_Mouse)).to.be.equal(chalk.red('Funko Pop with id ' + Minnie_Mouse.id + ' not in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(4)
  });
  it('Users should be able to remove Funkos from their collection', () => {
    expect(user.removeFunko(Mickey_Mouse)).to.be.equal(chalk.green(Mickey_Mouse.name + ' removed from ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(3)
  });
  it('Users should be informed if they try to remove a Funko that is not in their collection', () => {
    expect(user.removeFunko(Minnie_Mouse)).to.be.equal(chalk.red('Funko Pop with id ' + Minnie_Mouse.id + ' not in ' + user.name + '\'s collection'))
    expect(user.collection).to.have.lengthOf(3)
  });
  it('Users should be able to search for Funkos in their collection', () => {
    expect(user.searchFunko(Donald_Duck)).to.be.equal(chalk.green(Donald_Duck.name + ' found in ' + user.name + '\'s collection'))
    expect(user.searchFunko(Minnie_Mouse)).to.be.equal(chalk.red(Minnie_Mouse.name + ' not in ' + user.name + '\'s collection'))
  });
});