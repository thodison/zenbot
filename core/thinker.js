module.exports = function container (get, set, clear) {
  return function thinker (tick, cb) {
    var rs = get('run_state')
    get('logger').info('thinker', tick.id)
    cb()
  }
}