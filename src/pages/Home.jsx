import { useQuery } from "react-query";
export default function Home({ updateUser }) {
    const { isLoading, error, data } = useQuery("users", () =>
        fetch("https://reqres.in/api/users?page=1").then((res) => res.json())
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const logout = () => {
        localStorage.setItem("login-user-token", JSON.stringify(undefined));
        updateUser();
    };

    console.log(data);
    return (
        <div>
            <button onClick={logout}>Log out</button>
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
