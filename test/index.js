const solver = require('../solver');
const { expect } = require('chai');

describe("Тестирование переливаний", () => {
  it(`Каждая красная в каждую синюю`, () => {
    const result = solver(
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
    );
    expect(result).to.be.an('array');

    result.forEach((transfusion, index) => {
      const bottleNumber = index + 1;
      expect(transfusion).to.deep.equal([{ 
        bottleNumber: bottleNumber,
        poured: 1
      }])
    })
  })

  it(`Красные полностью перелиты`, () => {
    const result = solver([1, 2, 3], [4, 5]);
    expect(result).to.be.an('array');
    expect(result[0]).to.deep.equal([ 
      { bottleNumber: 1, poured: 1 },
      { bottleNumber: 2, poured: 2 },
      { bottleNumber: 3, poured: 1 } 
    ]);
    expect(result[1]).to.deep.equal([
      { bottleNumber: 3, poured: 2 }  
    ])
  })

  it(`Синие бутылки полностью заполнены`, () => {
    const result = solver([1, 2, 3], [1]);
    expect(result).to.be.an('array');
    expect(result[0]).to.deep.equal([ 
      { bottleNumber: 1, poured: 1 }
    ]);
  })

  it(`Синие бутылки полностью заполнены`, () => {
    const result = solver([1, 6, 7, 8, 4, 65, 56], [100]);
    expect(result).to.be.an('array');
    expect(result[0].reduce((sum, current) => {
      return sum + current.poured; 
    }, 0)).to.be.equal(100);
  })

  it(`Синие бутылки полностью заполнены`, () => {
    const result = solver([1, 6, 7, 8, 4, 65, 56], [100, 47]);
    expect(result).to.be.an('array');
    const firstBlueBottleAmount = result[0].reduce((sum, current) => {
      return sum + current.poured; 
    }, 0);
    const secondBlueBottleAmount = result[1].reduce((sum, current) => {
      return sum + current.poured; 
    }, 0);
    expect(firstBlueBottleAmount + secondBlueBottleAmount).to.be.equal(147);
  })
})