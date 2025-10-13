import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

/* 
  Card components -> Card, CardHeader, CardFooter,CardTitle, CardAction, CardDescription, CardContent,
  Form componets -> Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldContent, FieldTitle,
  */

const LoginSchema = z.object({
  username: z
    .string()
    .min(4, "Username field has to have more than 4 characters"),
  password: z
    .string()
    .min(8, "Password field needs to have more than 5 charachters"),
});

function LoginForm() {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof LoginSchema>> = async (data) =>{
    await new Promise((res)=> {setTimeout(res, 4000)})
    console.log(data)
  }

  return(
  <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>
          Login
        </CardTitle>
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter>
        <Button>Login</Button>
        
      </CardFooter>
    </Card>

  )


}

export default LoginForm;
