/* istanbul ignore file */

// From https://svelte.dev/repl/abce342ed248428ab6d67d4ee64033b9?version=3.35.0

import { tweened as nativeTweened } from 'svelte/motion'
import { get } from 'svelte/store'

export function tweened(initial, options={}) {
	const store = nativeTweened(initial, options)
	const set = store.set
	store.lastSet = initial
	
	store.pause = () => {
		const value = get(store)
		return set(value, {duration: 0})
	}
	
	store.reset = () => {
		return set(initial, {duration: 0})
	}
	
	store.continue = () => {
		const value = get(store)
		const percentageCompleted = (value - initial) / (store.lastSet - initial)
		const remaining = options.duration - (options.duration * percentageCompleted)

		return set(store.lastSet, {duration: remaining})
	}
	
	store.replay = async () => {
		await store.reset()
		return set(store.lastSet, options)
	}
	
	store.set = (newValue, options) => {
		store.lastSet = newValue
		return set(newValue, options)
	}
	
	return store
}