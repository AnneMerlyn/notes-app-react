import SignIn from "../components/SignIn";
import { useUsers } from "../context/context";

function SignInPage() {
    const userSate = useUsers();
    console.log(userSate);

    return (
        <div>
            <SignIn />
        </div>
    );
}

export default SignInPage;
