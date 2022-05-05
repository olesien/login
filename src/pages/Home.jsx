import { useMemo } from "react";
import { useQuery } from "react-query";
import { useTable } from "react-table";
import Navbar from "../components/Navbar";
import RenderTable from "../components/RenderTable";
export default function Home({ updateUser }) {
    const {
        isLoading,
        error,
        data: users,
    } = useQuery("users", () =>
        fetch("https://reqres.in/api/users?page=1").then((res) => res.json())
    );

    const data = useMemo(() => {
        if (!users) {
            return [
                {
                    avatar: "Loading..",
                    first_name: "Loading..",
                    last_name: "Loading..",
                    emai: "Loading..",
                },
            ];
        } else {
            return users.data.map((user) => ({
                avatar: user.avatar,

                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            }));
        }
    }, [users]);

    const columns = useMemo(
        () => [
            {
                Header: "Avatar",
                accessor: "avatar",
                Cell: (tableProps) => (
                    <div>
                        <img
                            className="w-16 h-auto rounded-md"
                            src={tableProps.row.original.avatar}
                            alt="Avatar"
                        />
                    </div>
                ),
            },
            {
                Header: "First name",
                accessor: "first_name",
                Cell: (tableProps) => (
                    <p>{tableProps.row.original.first_name}</p>
                ),
            },
            {
                Header: "Last name",
                accessor: "last_name",
                Cell: (tableProps) => (
                    <p>{tableProps.row.original.last_name}</p>
                ),
            },
            {
                Header: "Email",
                accessor: "email",
                Cell: (tableProps) => <p>{tableProps.row.original.email}</p>,
            },
        ],

        []
    );

    const tableInstance = useTable({ columns, data });

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    const logout = () => {
        localStorage.setItem("login-user-token", JSON.stringify(undefined));
        updateUser();
    };

    //console.log(data);
    return (
        <div>
            <Navbar logout={logout} />
            {/* {data.data.map((user) => (
                <RenderUser user={user} />
            ))} */}
            <div className="flex justify-center mt-8">
                <RenderTable tableInstance={tableInstance} />
            </div>
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
