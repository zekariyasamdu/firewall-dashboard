import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { useNavigate} from 'react-router-dom';

const LoginSchema = z.object({
  username: z
    .string()
    .min(4, "Username field has to have more than 4 characters"),
  password: z
    .string()
    .min(8, "Password field needs to have more than 5 charachters"),
});

function LoginForm() {
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (data) => {
    await new Promise((res) => {
      setTimeout(res, 4000);
    });
    console.log(data);
  };

  const navToSignup = () =>{
    navigate("/signup", {replace: true})
  }

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="ml-auto mr-auto">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="form-login" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>username</FieldLabel>
                  <Input
                    {...field}
                    autoComplete="off"
                    placeholder="root"
                    required
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel>password</FieldLabel>
                  <Input
                    {...field}
                    required 
                    autoComplete="off"
                    type="password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="mb-0 mt-3">
        <CardAction className="w-full flex flex-col gap-4">
          <Button
            form="form-login"
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full"
          >
            Login
          </Button>
          <Button
            variant={"outline"}id="form-login"
            disabled={form.formState.isSubmitting}
            className="w-full"
            onClick={()=> (navToSignup())}
          >
            Signup
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
