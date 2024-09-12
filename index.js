exports.NetworkMod = function reee(d) {
    d.game.initialize('inventory')
    d.hook('S_ABNORMALITY_BEGIN', '*', { order: -999999 }, (e) => {
        if (!d.game.me.is(e.target) || e.id !== 301807) return
        setCd(Number(e.duration))
    })
    d.hook('S_ABNORMALITY_END', '*', { order: -999999 }, (e) => {
        if (!d.game.me.is(e.target) || e.id !== 301807) return
        setCd(0)
    })

    function setCd(duration) {
        d.send('S_START_COOLTIME_SKILL', '*', {
            skill: { reserved: 0, npc: false, type: 1, huntingZoneId: 0, id: 98150023 },
            cooldown: duration
        })
        d.send('S_START_COOLTIME_ITEM', '*', {
            item: d.game.inventory.equipment.slots['20'].id,
            cooldown: Math.floor(duration / 1000)
        })
    }
}