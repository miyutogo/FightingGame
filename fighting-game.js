function Fighter(hero) {
    const name = hero.name;
    const strength = hero.strength;
    const agility = hero.agility;
    const vitality = hero.vitality;
    const baseDmg = 10;
    const baseDef = 10;
    const baseHp = 50;
    let attack = baseDmg + (strength*5) + (agility*3);
    let health = baseHp + (vitality*10) + (strength*5) + (agility*3) ;
    let defense = baseDef + (agility*5) + (strength*3) + (vitality*1); 
    let hp = health + defense;
  
      return {
          getName: () => name,
          getHp: () => hp,
          takeDamage(amt) {
              let  currentHp = hp - amt; 
              currentHp < 0 ? currentHp = 0 : currentHp;
              hp = currentHp
          },
          dealDamage(opp) {
              opp.takeDamage(attack);
              console.log(`${name} attacked ${opp.getName()}! Total damage given: ${attack}! ${opp.getName()}'s hp is now ${opp.getHp()}`);
  
          },
      }
  }
  
  
  function Fight(player1,player2){
      console.log(`Let's welcome our players! ${player1.getName()} with ${player1.getHp()} life and ${player2.getName()} with ${player2.getHp()} life`)
      while (player1.getHp() > 0 && player2.getHp() > 0) {
          player1.dealDamage(player2);
          if (player2.getHp() > 0) {
              player2.dealDamage(player1);
          }
      } if (player1.getHp() > 0 && player2.getHp() <= 0) {
          console.log(`Victory for ${player1.getName()} `);
      } else {
          console.log(`Victory for  ${player2.getName()} `);
      }
  }
  
  const newFighter1 = new Fighter({name: 'Joji', strength: 20, agility: 5, vitality: 5}); //atk = 125 health = 315 (armor = 100
  const newFighter2 = new Fighter({name: 'Gumi', strength: 15, agility: 8, vitality: 7}); //atk =109 health = 321 (armor = 102
  
  
  
  //hero1.getHp();
  // hero1.takeDamage(84)
  // hero2.dealDamage(hero1)
   Fight(newFighter1, newFighter2)