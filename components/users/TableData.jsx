import Link from "next/link";

const TableData = ({ id, name, email, company }) => {
  return (
    <tr className="[&>td]:py-4 border-b border-[#F2F2F2] [&>td]:p-2">
      <td>{name}</td>
      <td>{email}</td>
      <td>{company.name}</td>
      <td>
        <Link href={`/users/${id}`}>View Posts</Link>
      </td>
    </tr>
  );
};

export default TableData;
