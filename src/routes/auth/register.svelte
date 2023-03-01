<script>
    import SignUp from "../../components/auth/sign_up.svelte";
    import { Link } from "carbon-components-svelte";
</script>
<div>
    <div class="header">
        <h4>Sign Up</h4>
    </div>
    <div class="form-container">
        <SignUp/>
        <div>Already have an account? <Link href="/auth/login">Sign In</Link></div>
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
     .form-container {
         min-height: 80vh;
         display: grid;
         place-items: center;
     }
</style>