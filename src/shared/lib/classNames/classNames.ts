type Mods = Record<string, boolean | string>


/**
 * Unites classNames in one string (for assigment to element)
 * @param cls
 * @param mods
 * @param additional
 * @returns {string}
 */
export function classNames(cls: string, mods? : Mods, additional?: string[]) : string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([key, value]) => Boolean(value))
            .map(([key, value]) => key)
            .join(' ')
    ].join(' ')
}

// Пример использования:
// classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
// output: 'remove-btn hovered selectable red pdg'
