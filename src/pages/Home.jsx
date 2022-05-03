import { useQuery } from "react-query";
export default function Home() {
    const { isLoading, error, data } = useQuery("users", () =>
        fetch("https://reqres.in/api/users?page=1").then((res) => res.json())
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    console.log(data);
    return (
        <div>
            {data.data.map((user) => (
                <RenderUser user={user} />
            ))}
        </div>
    );
}

function RenderUser({ user }) {
    return (
        <>
            <h1>{user.email}</h1>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <img src={user.avatar} alt="avatar!" />
        </>
    );
}
