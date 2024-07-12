function ts2js(tsCode: string) {
    const jsCode = tsCode
        .replace(/(export |import )?interface \w+ {[\s\S]+?}/g, '')
        .replace(/(export |import )?type .+/g, '')
        .replace(/<[\w]+>\(/g, '(')
        .replace(/ as [^;]+/g, '')
        .replace(/\)!/g, ')')
        .replace(/\??: (number|string|boolean|[A-Z][\w]*)/g, '')
    return jsCode
}

export default ts2js
