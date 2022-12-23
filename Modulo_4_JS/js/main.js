const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img\pokebola.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeinfo = data.abilities;
            let pokeName = data.name;
            let pokeId = data.id;
            let pokeType = data.types;
            let pokeStat = data.stats;
            let pokeAlt = data.height;

            pokeImage(pokeImg);
            pokeData(pokeinfo, pokeName, pokeId, pokeType, pokeStat, pokeAlt);

            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("mainPantalla");
    pokePhoto.src = url;
}

const pokeData = (abilities, name, id, types, stats, altura) => {
    const pokeAbilities = document.getElementById("abilitiesPantalla");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = abilitiesName;

    const pokeName = document.getElementById("nomid");
    pokeName.innerHTML = id + "-" + name;

    const pokeType = document.getElementById("dato1");
    const type = types.map(item => item.type.name);
    pokeType.innerHTML = type;


    const stat = stats.map(item => item.base_stat);
    console.log(stat);

    const pokeVida = document.getElementById("pokeVida");
    pokeVida.innerHTML =  "HP: " + stat[0];
    const pokeAtaque = document.getElementById("pokeAtaque");
    pokeAtaque.innerHTML =  "Ata: " + stat[1];
    const pokeDefensa = document.getElementById("pokeDefensa");
    pokeDefensa.innerHTML =  "Def: " + stat[2];
    const pokeAtaEspecial = document.getElementById("pokeAtaEspecial");
    pokeAtaEspecial.innerHTML =  "AtaE: " + stat[3];
    const pokeDefEspecial = document.getElementById("pokeDefEspecial");
    pokeDefEspecial.innerHTML =  "DefE: " + stat[4];
    const pokeVelocidad = document.getElementById("pokeVelocidad");
    pokeVelocidad.innerHTML =  "Vel: " + stat[5];

    const pokeAlt = document.getElementById("dato2");
    pokeAlt.innerHTML = "Altura: " + altura;
}