export default function RoleSwitcher({ role, setRole }) {
  return (
    <div className="mt-6">
      <label className="mr-2 font-medium">Role:</label>
      <select
        className="border p-2 rounded"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}