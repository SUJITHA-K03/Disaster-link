import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

function LocationSelector({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng])
    }
  })
  return null
}

export default function Report() {
  const [position, setPosition] = useState(null)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [type, setType] = useState('medical')

  useEffect(()=>{
    // try to use geolocation to set default center
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        setPosition([pos.coords.latitude, pos.coords.longitude])
      }, ()=>{})
    }
  },[])

  function submit(e) {
    e.preventDefault()
    const report = { title, desc, type, position, createdAt:new Date().toISOString() }
    // save to localStorage (mock API)
    const arr = JSON.parse(localStorage.getItem('disaster_reports')||'[]')
    arr.unshift(report)
    localStorage.setItem('disaster_reports', JSON.stringify(arr))
    alert('Report submitted. It will appear in local storage (mock API).')
    setTitle(''); setDesc(''); setType('medical')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Report an Incident</h2>
        <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-3">
          <input value={title} onChange={e=>setTitle(e.target.value)} required placeholder="Title" className="w-full p-2 border rounded" />
          <select value={type} onChange={e=>setType(e.target.value)} className="w-full p-2 border rounded">
            <option value="medical">Medical</option>
            <option value="shelter">Shelter</option>
            <option value="food">Food & Water</option>
            <option value="rescue">Rescue</option>
          </select>
          <textarea value={desc} onChange={e=>setDesc(e.target.value)} required placeholder="Describe the situation" className="w-full p-2 border rounded h-28" />
          <div className="text-sm text-gray-600">Click on the map to choose the location (or use geolocation).</div>
          <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded">Submit Report</button>
        </form>
      </div>
      <div>
        <div className="bg-white rounded shadow p-2">
          <MapContainer center={position||[20.5937,78.9629]} zoom={6} style={{ height: 400 }} whenCreated={()=>{}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <LocationSelector position={position} setPosition={setPosition} />
            {position && <Marker position={position}><Popup>Selected location</Popup></Marker>}
          </MapContainer>
        </div>
      </div>
    </div>
  )
}
