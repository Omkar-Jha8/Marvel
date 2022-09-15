
//search code
let input = document.querySelector('.main-2');
let char = document.querySelector('.char');
let info = document.querySelector('.info');
let direct = document.getElementById('direct');
input.addEventListener('keypress',cap=(e)=>{
    input.value=input.value.toUpperCase();
    if(e.keyCode==13){
        if(input.value =="THOR"){
            char.src="img/thor1.png";
            info.innerHTML="Thor, son of Gods, has enhanced longevity, augmented by the Golden Apples of Idunn. He also possesses superhuman strength, speed, agility, durability and immunity to most diseases.";
            direct.href="https://www.marvel.com/characters/thor-thor-odinson/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
            
        }
        else if(input.value=="IRON MAN"){
            char.src="img/iron-man.png";
            info.innerHTML="Genius level intellect. Proficient scientist and engineer. Powered armor suit: Superhuman strength, speed, durability, agility, reflexes, and senses. Supersonic flight. Energy repulsor and missile projection. Regenerative life support.";
            direct.href="https://www.marvel.com/characters/iron-man-tony-stark";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="CAPTAIN AMERICA"){
            char.src="img/ca.png";
            info.innerHTML="Superhuman Agility. Superhuman Stamina. Superhuman Durability. Superhuman Reflexes. Superhuman Strength.";
            direct.href="https://www.marvel.com/characters/captain-america-steve-rogers/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="HULK"){
            char.src="img/hulk.png";
            info.innerHTML="Superhuman strength, speed, stamina, and durability Anger empowerment Regeneration Shockwave generation Gamma ray emission and manipulation";
            direct.href="https://www.marvel.com/characters/hulk-bruce-banner/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="SPIDER MAN"){
            char.src="img/spiderman.png";
            info.innerHTML="Superhuman Strength. Superhuman Speed. Superhuman Reflexes. Superhuman Durability. Healing Factor. 'Spider-Sense' Alert. Heightened Senses.Wallcrawling.";
            direct.href="https://www.marvel.com/characters/spider-man-peter-parker/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="HAWKEYE" || input.value=="HAWK EYE"){
            char.src="img/hawk.png";
            info.innerHTML="Master archer and marksman Expert tactician, acrobat, martial artist, and hand-to-hand combatant Uses a variety of trick arrows";
            direct.href="https://www.marvel.com/characters/hawkeye-clint-barton/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="MOON KNIGHT"){
            char.src="img/moon.png";
            info.innerHTML="Over his years as Moon Knight, Spector has also exhibited periodic demonstrations of supernatural powers such as enhanced strength during nights with full moons, prophetic visions and dreams, and the ability to drain another person's life energies through physical contact.";
            direct.href="https://www.marvel.com/characters/moon-knight-marc-spector/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="DOCTOR STRANGE"){
            char.src="img/doctor.png";
            info.innerHTML="With it, Strange can alter time around objects, locations or other beings, moving forward and backward through their existence. It can also be used to trap enemies in time loops, as well as giving Strange the ability to look forward into potential futures.";
            direct.href="https://www.marvel.com/characters/doctor-strange-stephen-strange/on-screen";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="GROOT"){
            char.src="img/groot.webp";
            info.innerHTML="Groot's abilities are all-natural and stem from the dendronic wood that makes up his entire body. The extraterrestrial bark he was born with makes him invulnerable to most projectiles and even fire. He can control all plant life via psychokinesis, absorbing it into his body and making himself stronger.";
            direct.href="https://www.marvel.com/characters/groot/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="DEADPOOL"){
            char.src="img/dead.png";
            info.innerHTML="Deadpool's superpower is an accelerated healing factor that lets him survive almost any physical injury. In the first movie, he quickly recovers from broken bones, gunshot wounds and even manages to regrow a missing hand.";
            direct.href="https://www.marvel.com/characters/deadpool-wade-wilson/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="BLACKPANTHER"){
            char.src="img/black.png";
            info.innerHTML="Black Panther's Powers and Abilities: Heightened strength, speed, stamina agility and reflexes; master of martial arts, acrobatics & hand-held weaponry. Utilizes highly advanced Wakandan technology, including energy daggers, vibranium-woven body armor & stealth aircraft.";
            direct.href="https://www.marvel.com/characters/black-panther-t-challa/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="THANOS"){
            char.src="img/thanos.webp";
            info.innerHTML="Superhuman strength, speed, stamina, durability, and agility Superhuman physiology of Eternals Skilled hand-to-hand combatant Genius-level tactician Plasma energy projection Immortality Nigh-invulnerability Possessed access to nearly all powerful mystical artifacts and weapons.";
            direct.href="https://www.marvel.com/characters/thanos";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="WOLVERINE"){
            char.src="img/wolv.png";
            info.innerHTML="Wolverine's reinforced skeleton allowing him to withstand high levels of physical pressure. His strength is also boosted to superhuman levels, allowing him to briefly lift over 800 lbs.";
            direct.href="https://www.marvel.com/characters/wolverine-james-howlett/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="LOKI"){
            char.src="img/loki.webp";
            info.innerHTML="Loki possesses strength, durability, and longevity far superior to humans. The most powerful sorcerer in all of Asgard, Loki's magical abilities include astral projection, shape-shifting, hypnosis, molecular rearrangement, energy blasts, levitating, conjuration, cryokinesis, telekinesis and teleportation.";
            direct.href="https://www.marvel.com/characters/loki/on-screen";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
        }
        else if(input.value=="ANT MAN"){
            char.src="img/ant-man.webp";
            info.innerHTML="One of the most well-known features of ants is that they are incredibly strong relative to their size. Ants can even carry loads several times their own weight. Ant-Man maintains the strength of a regular person even when he is miniaturized, explained by Pym particle magic.";
            direct.href="https://www.marvel.com/characters/ant-man-scott-lang/in-comics";
            direct.innerHTML="READ MORE ABOUT "+ input.value ;
            
            
        }
        else{
            char.src="img/op.png";
            info.innerHTML="SOMETHING WENT WRONG...";
        }
        
        
    }
})
//image change code

    let imgfunction = ()=>{

        let image = [
            "img/black.png",
            "img/ant-man.webp",
            "img/ca.png",
            "img/dead.png",
            "img/doctor.png",
            "img/groot.webp",
            "img/hawk.png",
            "img/hulk.png",
            "img/iron-man.png",
            "img/loki.webp",
            "img/moon.png",
            "img/spiderman.png",
            "img/thanos.webp",
            "img/thor1.png",
            "img/wolv.png",
         ]
         let i=0;
         var img = document.querySelector('#change-img');
         setInterval(() => {
             
             if(input.value){
                cap()
            }
            else if(i<image.length){
                let img = document.querySelector('#change-img');
            img.src=image[i++]
            }
            else{
                
                img.src="img/avengerlogo.png"
                i=0;
            }
         }, 2000);
}
imgfunction()