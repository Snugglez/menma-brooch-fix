exports.NetworkMod = function reee(d) {
    d.hook('S_ABNORMALITY_BEGIN', '*', { order: -999999 }, (e) => {
        if (!d.game.me.is(e.target) || e.id !== 301807) return
        d.send('S_START_COOLTIME_SKILL', '*', {
            skill: { reserved: 0, npc: false, type: 1, huntingZoneId: 0, id: 98150023 },
            cooldown: Number(e.duration)
        })
    })
}