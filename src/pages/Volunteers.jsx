import { useState } from 'react'

export default function Volunteers() {
  const [volunteers] = useState([
    { id:1, name:'Priya Sharma', role:'Field Coordinator', region:'Tamil Nadu' },
    { id:2, name:'Rahul Mehta', role:'Logistics Manager', region:'Kerala' },
    { id:3, name:'John Paul', role:'Medical Aid', region:'Karnataka' },
    // duplicates
    { id:4, name:'Priya Sharma', role:'Field Coordinator', region:'Tamil Nadu' },
    { id:5, name:'Rahul Mehta', role:'Logistics Manager', region:'Kerala' },
  ])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Volunteer Coordination</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {volunteers.map(v=> (
          <div key={v.id} className="p-4 bg-white rounded shadow">
            <div className="font-medium">{v.name}</div>
            <div className="text-sm text-gray-600">{v.role} — {v.region}</div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 border rounded">Message</button>
              <button className="px-3 py-1 bg-sky-600 text-white rounded">Request</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
