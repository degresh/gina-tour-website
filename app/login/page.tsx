import { Card, CardActionArea } from "@mui/material";

export default async function Page() {
  return (
    <main>
      <Card sx={{ maxWidth: 360 }} variant="outlined" className="mx-auto my-auto">
        <CardActionArea>
          <p>Login</p>
        </CardActionArea>
      </Card>
    </main>
  );
}