<script>
    import SignIn from "../../components/auth/sign_in.svelte";
    import { Link } from "carbon-components-svelte";
</script>
<div>
    <div class="header">
        <h4>Login</h4>
    </div>
    <div class="signin-form">
        <SignIn />
        <div>Already have an account? <Link href="/auth/register">Sign Up</Link></div>
    </div>
</div>
<style>
     .header {
         width: 100vw;
         padding: 2em 0;
         min-height: 20vh;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: #E5F0FF;
     }
     .header h4 {
         color: black;
         font-weight: 600;
         font-size: 3rem;
     }
     .signin-form {
         min-height: 80vh;
         display: grid;
         place-items: center;
     }
</style>

