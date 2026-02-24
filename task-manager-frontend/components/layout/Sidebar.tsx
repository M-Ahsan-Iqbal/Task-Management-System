export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/tasks">Tasks</a></li>
        <li><a href="/auth/profile">Profile</a></li>
      </ul>
    </aside>
  );
}