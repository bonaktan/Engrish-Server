'use client'

export default async function SiteApi(path, _data) {
    const data = JSON.stringify(_data)
    const res = await fetch("/api" + path, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: data
    })
    return res
}